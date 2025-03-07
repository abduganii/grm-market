import { fetchData } from "@/service/get";
import GlamById from "../../../../views/glam-id";

async function getProductSize(modelId) {
  return fetchData(
    `${process.env.NEXT_PUBLIC_URL}/product/internet-shop?modelId=["${modelId}"]`
  );
}
async function getProduct({ collectionId, color }) {
  return fetchData(
    `${process.env.NEXT_PUBLIC_URL}/product/internet-shop?collectionId=["${collectionId}"]&color=["${color}"]&limit=12`
  );
}

export default async function GilamById({ params, searchParams }) {
  const { id } = await params;
  const { modelId, collectionId, color } = await searchParams;
  const ProductSize = await getProductSize(modelId);
  const product = await getProduct({
    collectionId: collectionId,
    color: color,
  });
  return (
    <>
      <GlamById
        id={id}
        product={ProductSize?.items}
        productArr={product?.items}
      />
    </>
  );
}
