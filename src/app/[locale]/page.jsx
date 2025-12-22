import { fetchData } from "../../service/get";
import HomePage from "../../views/home";

async function getProduct() {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/qr-base/i-market`, {
    page: 1,
    limit: 12,
    status:"not_ready"
  })
}

export default async function Home() {
  const product = await getProduct();
  return (
    <>
      <HomePage product={product?.items} />
    </>
  );
}
