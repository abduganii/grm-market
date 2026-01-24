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
  const { search,
    // style, shape, color, width, length 
  } = await searchParams;
  const product = await fetchData(`${process.env.NEXT_PUBLIC_URL}/qr-base/i-market`, {
    page: 1,
    limit: 10,
    status: "published",
    search: search || undefined,
    // style: style || undefined,
    // shape: shape || undefined,
    // color: color || undefined,
    // width: width || undefined,
    // length: length || undefined,
  });

  return (
    <>
      <HomePage product={product?.items} search={search} />
    </>
  );
}
