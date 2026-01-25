import { MetadataRoute } from 'next'
import { fetchData } from '@/service/get'
import { SITE_URL } from '@/utils/seo'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes = ['', '/about', '/delivery', '/payment'].map((route) => ({
        url: `${SITE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1,
    }))

    try {
        const products = await fetchData(`${process.env.NEXT_PUBLIC_URL}/qr-base/i-market`, {
            page: 1,
            limit: 1000,
            status: "published"
        });

        const productRoutes = products?.items?.map((product: any) => ({
            url: `${SITE_URL}/glam/${product.id}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        })) || []

        return [...routes, ...productRoutes]
    } catch (error) {
        return routes
    }
}
