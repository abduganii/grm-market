import { fetchData } from "@/service/get";
import GlamById from "../../../../views/glam-id";
import { Metadata, ResolvingMetadata } from 'next';
import { SITE_URL } from "@/utils/seo";
import { minio_img_url } from "@/utils/divice";

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

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const product = await getSingleProduct(id);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${product[0]?.model?.title || ''} ${product[0]?.collection?.title || ''}`,
    description: product[0]?.internetInfo || 'Product details',
    openGraph: {
      images: product[0]?.imgUrl?.path ? [`${minio_img_url}${product[0].imgUrl.path}`, ...previousImages] : previousImages,
    },
  };
}

export default async function GilamById({ params, searchParams }: { params: Promise<{ id: string }>, searchParams: Promise<any> }) {
  const { id } = await params;
  const sp = await searchParams;
  const oneProduct = await getSingleProduct(id);
  const product = await getProduct({ search: sp?.modelId + " " + sp?.color + " " + sp?.collectionId, productId: id });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: oneProduct?.[0]?.model?.title,
    image: oneProduct?.[0]?.imgUrl?.path ? [`${minio_img_url}${oneProduct?.[0].imgUrl.path}`] : [],
    description: oneProduct?.[0]?.internetInfo,
    brand: {
      '@type': 'Brand',
      name: oneProduct?.[0]?.collection?.title
    },
    offers: {
      '@type': 'Offer',
      price: oneProduct?.[0]?.i_price,
      priceCurrency: 'UZS',
      availability: 'https://schema.org/InStock',
    }
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: oneProduct?.[0]?.collection?.title || 'Collection',
        item: `${SITE_URL}/?collection=${oneProduct?.[0]?.collection?.id}`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: oneProduct?.[0]?.model?.title,
        item: `${SITE_URL}/glam/${id}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <GlamById
        id={id}
        product={oneProduct}
        productArr={product?.items}
      />
    </>
  );
}
