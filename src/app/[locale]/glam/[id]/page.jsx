import { fetchData } from "@/service/get";
import GlamById from "../../../../views/glam-id";

async function getSingleProduct(id) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/qr-base/i-market/${id}`);
}
async function getProduct({search}) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/qr-base/i-market`, {
    page: 1,
    limit: 20,
    status: "published",
    search
  });
}

export default async function GilamById({ params, searchParams }) {
  const { id } = await params;
  const oneProduct = await getSingleProduct(id);
  const product = await getProduct({search:searchParams?.modelId + " " + searchParams?.color + " " + searchParams?.collectionId});

  console.log(product);
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
