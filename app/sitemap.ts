import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL || 'https://chhayvann.com.kh'

    const pages = [
        { url: '/', changeFrequency: 'weekly', priority: 1 },
        { url: '/about', changeFrequency: 'monthly', priority: 0.8 },
        { url: '/products', changeFrequency: 'monthly', priority: 0.8 },
        { url: '/service', changeFrequency: 'monthly', priority: 0.8 },
        { url: '/trading', changeFrequency: 'weekly', priority: 0.8 },
        { url: '/blog-1', changeFrequency: 'weekly', priority: 0.8 },
        { url: '/team', changeFrequency: 'monthly', priority: 0.7 },
        { url: '/career', changeFrequency: 'monthly', priority: 0.7 },
        { url: '/faq', changeFrequency: 'monthly', priority: 0.7 },
        { url: '/privacy', changeFrequency: 'yearly', priority: 0.5 },
        { url: '/history', changeFrequency: 'yearly', priority: 0.6 },
        { url: '/platform', changeFrequency: 'monthly', priority: 0.8 },
        { url: '/testimonials', changeFrequency: 'monthly', priority: 0.7 },
        { url: '/open-account', changeFrequency: 'monthly', priority: 0.8 },
        { url: '/individual', changeFrequency: 'monthly', priority: 0.7 },
        { url: '/corporate', changeFrequency: 'monthly', priority: 0.7 },
        { url: '/organization', changeFrequency: 'monthly', priority: 0.7 },
        { url: '/exchange-rate', changeFrequency: 'daily', priority: 0.8 },
        { url: '/contact', changeFrequency: 'yearly', priority: 0.7 },
    ] as const

    return pages.map((page) => ({
        url: `${baseUrl}${page.url}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }))
}