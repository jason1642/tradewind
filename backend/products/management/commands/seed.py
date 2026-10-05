import random
from decimal import Decimal

from django.conf import settings
from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand, CommandError
from django.db import transaction
from django.utils.text import slugify
from faker import Faker


from products.models import Category, Product

User = get_user_model() 
fake = Faker()

CATEGORIES = ["Electronics", "Clothing", "Home & Kitchen", "Books", "Sports & Outdoors"]
DEV_PASSWORD = "password123"

class Command(BaseCommand):
    help = "Seed the database with fake users, categories, and products"

    def add_arguments(self, parser):
        parser.add_argument("--users", type=int, default=20)
        parser.add_argument("--products", type=int, default=100)
        parser.add_argument("--flush", action="store_true",
                            help="Delete existing products, categories and non-superuser users first")

    @transaction.atomic
    def handle(self, *args, **opts):
        if not settings.DEBUG:
            raise CommandError("Refusing to seed when DEBUG is false")

        Faker.seed(42)
        random.seed(42)

        if opts["flush"]:
            Category.objects.all().delete()
            User.objects.filler(is_superuser=False).delete()

        categories = []
        for name in CATEGORIES:
            cat, _ = Category.objects.get_or_create(name=name, defaults={"slug": slugify(name)})
            categories.append(cat)


          # A known account to log in with
        demo, created = User.objects.get_or_create(
            email="demo@example.com",
            defaults={"username": "demo", "first_name": "Demo", "last_name": "User"},
        )
        if created:
            demo.set_password(DEV_PASSWORD)
            demo.save()

        # Random users. create_user hashes the password; email is the login field.
        made = 0
        for i in range(opts["users"]):
            email = f"user{i}@example.com"
            if User.objects.filter(email=email).exists():
                continue
            User.objects.create_user(
                username=f"user{i}",
                email=email,
                password=DEV_PASSWORD,
                first_name=fake.first_name(),
                last_name=fake.last_name(),
                phone=fake.phone_number()[:20],   # faker numbers can exceed max_length
            )
            made += 1

        # Products
        products = [
            Product(
                category=random.choice(categories),
                name=fake.unique.catch_phrase()[:200],
                description=fake.paragraph(nb_sentences=3),
                price=Decimal(f"{random.uniform(5, 500):.2f}"),
                stock=random.choice([0, 0, random.randint(1, 200), random.randint(1, 200)]),
                is_active=random.random() > 0.1,   # about 10% inactive
            )
            for _ in range(opts["products"])
        ]
        Product.objects.bulk_create(products, batch_size=500)

        self.stdout.write(self.style.SUCCESS(
            f"Seeded {len(categories)} categories, {made} users, {len(products)} products. "
            f"Log in as demo@example.com / {DEV_PASSWORD}"
        ))