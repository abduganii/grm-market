import { fetchData } from "@/service/get";
import GlamById from "../../../../views/glam-id";

async function getSingleProduct(id) {
  return fetchData(
    `${process.env.NEXT_PUBLIC_URL}/qr-base/i-market/${id}`
  );
}
async function getProduct({ collectionId, color }) {
  return fetchData(
    `${process.env.NEXT_PUBLIC_URL}/product/internet-shop?collectionId=["${collectionId}"]&color=["${color}"]&limit=12`
  );
}

export default async function GilamById({ params, searchParams }) {
  const { id } = await params;
  // const { modelId, collectionId, color } = await searchParams;
  const Product = await getSingleProduct(id);
  // const product = await getProduct({
  //   collectionId: collectionId,
  //   color: color,
  // });
  console.log(Product)
  return (
    <>
      {/* <GlamById
        id={id}
        // product={ProductSize?.items}
        productArr={[]}
      /> */}
    </>
  );
}
