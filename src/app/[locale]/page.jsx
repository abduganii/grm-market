import { fetchData } from "../../service/get";
import HomePage from "../../views/home";

async function getProduct() {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/product`, {
    page: 1,
    limit: 12,
  })
}

export default async function Home() {
  const product = await getProduct();
  console.log(product)
  return (
    <>
      <HomePage product={product?.items} />
    </>
  );
}
