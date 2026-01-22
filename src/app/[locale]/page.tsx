import { fetchData } from "../../service/get";
import HomePage from "../../views/home";

async function getProduct(search) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/qr-base/i-market`, {
    page: 1,
    limit: 10,
    status: "published",
    search: search || undefined
  })
}

export default async function Home({ searchParams }: { searchParams: Promise<any> }) {
  const { search } = await searchParams;
  const product = await getProduct(search);

  return (
    <>
      <HomePage product={product?.items} search={search} />
    </>
  );
}
