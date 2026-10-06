import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { productQuery } from "@/app/lib/queries/products";
// import Button from "@/app/components/ui/Button";
import ProductGallery from "./_components/ProductGallery";
import ProductHeader from "./_components/ProductHeader";
import PriceBlock from "./_components/PriceBlock";
import VariantSelector from "./_components/VariantSelector";
import PurchaseActions from "./_components/PurchaseActions";
import Perks from "./_components/Perks";
import AccordianInfo from "./_components/AccordianInfo";
import BreadCrumbs from "./_components/BreadCrumbs";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const queryClient = new QueryClient();
  const data = await queryClient.query(productQuery(id));

  // data needed to fill these components - variance, color, multiple prices depending on variants. sub info like bullet points
  // on product info in the accordian dropdown section. There are different sections like the perks that have similar info but less text, somehow differentiate this
  // Multiple images to prove slideshow. Maybe make more use of stock amount
  // Reviews and its averages which also includes a rating and text input.

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="mx-auto w-full max-w-350 px-6">
        <BreadCrumbs />
        <div className="grid gap-10 pb-24 lg:grid-cols-[4fr_3fr] lg:gap-x-16 xl:gap-x-24">
          {/* <div className="border border-2">product gallery placeholder</div> */}

          <ProductGallery />
          <div className="flex flex-col  pt-3 w-full">
            <ProductHeader product={data} />
            <PriceBlock product={data} />
            <VariantSelector product={data} />
            <PurchaseActions product={data} />
            <Perks product={data} />
            <AccordianInfo product={data} />
          </div>
        </div>
        {/* <Button /> */}
      </main>
    </HydrationBoundary>
  );
};

export default page;
