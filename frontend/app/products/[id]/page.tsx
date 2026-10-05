import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { productQuery } from "@/app/lib/queries/products";
import Button from "@/app/components/ui/Button";
// import ProductDetail from './ProductDetail'

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.query(productQuery(id));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="mx-auto w-full max-w-[1400px] px-6">
        <div className="grid gap-10 pb-24 lg:grid-cols-[4fr_3fr] lg:gap-x-16 xl:gap-x-24">
          <div className="border border-2">product gallery placeholder</div>

          <div className="flex flex-col border border-2">
            Second column wrapper. Product header, price block, buttons and
            things go here This should be a nested client component that makes a
            api query request with tanstack based on the id from params{id}
          </div>
        </div>
        <Button />
      </main>
    </HydrationBoundary>
  );
};

export default page;
