import { fetchData } from "@/service/get";
import GlamById from "../../../../views/glam-id";

async function getSingleProduct(id: string) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/qr-base/i-market/${id}`);
}
async function getProduct({ search, productId }: { search: string, productId: string }) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/qr-base/i-market`, {
    page: 1,
    limit: 20,
    status: "published",
    search,
    productId
  });
}

export default async function GilamById({ params, searchParams }: { params: Promise<{ id: string }>, searchParams: Promise<any> }) {
  const { id } = await params;
  const sp = await searchParams;
  const oneProduct = await getSingleProduct(id);
  const product = await getProduct({ search: sp?.modelId + " " + sp?.color + " " + sp?.collectionId, productId: id });
  return (
    <>
      <GlamById
        id={id}
        product={oneProduct}
        productArr={product?.items}
      />
    </>
  );
}
