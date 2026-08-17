import { api } from '@/app/config';
import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://chhayvann.com.kh';
const siteName = 'CHHAYVANN CO., LTD.';

export const pageMetadata: Record<string, { title: string; description: string; keywords: string[] }> = {
  home: {
    title: 'HOME | CHHAYVANN CO., LTD.',
    description: 'Discover CHHAYVANN CO., LTD. - Your trusted partner for currency exchange and gold trading in Cambodia. Competitive rates, transparent pricing, and reliable financial services.',
    keywords: [
      'CHHAYVANN',
      'currency exchange Cambodia',
      'gold trading Cambodia',
      'financial services',
      'money exchange',
      'forex Cambodia',
      'trusted broker'
    ]
  },
  about: {
    title: 'About Us | CHHAYVANN CO., LTD.',
    description: 'Learn about CHHAYVANN CO., LTD. - Our mission, values, and expertise in providing reliable currency exchange and gold trading services in Cambodia.',
    keywords: [
      'about CHHAYVANN',
      'company history',
      'financial services Cambodia',
      'trusted exchange company',
      'gold trading company'
    ]
  },
  products: {
    title: 'Products & Services | CHHAYVANN CO., LTD.',
    description: 'Explore CHHAYVANN products and services including currency exchange, gold buying and selling, and other financial solutions.',
    keywords: [
      'CHHAYVANN products',
      'exchange services',
      'gold trading',
      'financial products',
      'currency services'
    ]
  },
  service: {
    title: 'Our Services | CHHAYVANN CO., LTD.',
    description: 'Discover our comprehensive financial services including currency exchange, gold trading, and professional financial consultancy.',
    keywords: [
      'CHHAYVANN services',
      'currency exchange',
      'gold services',
      'financial consultancy',
      'professional services'
    ]
  },
  trading: {
    title: 'Trading Platform | CHHAYVANN CO., LTD.',
    description: 'Access CHHAYVANN trading platform for real-time currency exchange rates and gold trading opportunities.',
    keywords: [
      'trading platform',
      'live rates',
      'currency trading',
      'gold trading platform',
      'forex trading'
    ]
  },
  blog: {
    title: 'Blog & News | CHHAYVANN CO., LTD.',
    description: 'Read the latest news, insights, and articles about currency exchange, gold trading, and financial market trends.',
    keywords: [
      'CHHAYVANN blog',
      'market news',
      'trading insights',
      'financial articles',
      'market analysis'
    ]
  },
  contact: {
    title: 'Contact Us | CHHAYVANN CO., LTD.',
    description: 'Get in touch with CHHAYVANN CO., LTD. Our team is ready to assist you with your currency exchange and gold trading needs.',
    keywords: [
      'contact CHHAYVANN',
      'customer support',
      'contact information',
      'reach us',
      'customer service'
    ]
  },
  team: {
    title: 'Our Team | CHHAYVANN CO., LTD.',
    description: 'Meet the dedicated professionals behind CHHAYVANN CO., LTD. Our team brings expertise in financial services and trading.',
    keywords: [
      'CHHAYVANN team',
      'professionals',
      'experts',
      'team members',
      'staff'
    ]
  },
  career: {
    title: 'Career Opportunities | CHHAYVANN CO., LTD.',
    description: 'Join CHHAYVANN CO., LTD. Explore exciting career opportunities in financial services and trading.',
    keywords: [
      'CHHAYVANN careers',
      'job opportunities',
      'employment',
      'hiring',
      'financial jobs'
    ]
  },
  faq: {
    title: 'FAQ | CHHAYVANN CO., LTD.',
    description: 'Find answers to frequently asked questions about CHHAYVANN services, currency exchange, and gold trading.',
    keywords: [
      'CHHAYVANN FAQ',
      'frequently asked questions',
      'help',
      'support',
      'information'
    ]
  },
  privacy: {
    title: 'Privacy Policy | CHHAYVANN CO., LTD.',
    description: 'Read CHHAYVANN CO., LTD. privacy policy and learn how we protect your personal information and data.',
    keywords: [
      'privacy policy',
      'data protection',
      'terms',
      'legal'
    ]
  },
  history: {
    title: 'History | CHHAYVANN CO., LTD.',
    description: 'Explore the rich history and heritage of CHHAYVANN CO., LTD. in providing financial services in Cambodia.',
    keywords: [
      'CHHAYVANN history',
      'company background',
      'heritage',
      'timeline'
    ]
  },
  platform: {
    title: 'Trading Platform | CHHAYVANN CO., LTD.',
    description: 'Explore CHHAYVANN trading platform features and tools for currency exchange and gold trading.',
    keywords: [
      'trading platform',
      'platform features',
      'tools',
      'trading tools'
    ]
  },
  testimonials: {
    title: 'Testimonials & Reviews | CHHAYVANN CO., LTD.',
    description: 'Read testimonials and success stories from satisfied CHHAYVANN customers.',
    keywords: [
      'testimonials',
      'customer reviews',
      'success stories',
      'ratings'
    ]
  },
  openAccount: {
    title: 'Open Account | CHHAYVANN CO., LTD.',
    description: 'Open your account with CHHAYVANN CO., LTD. and start trading currency and gold today.',
    keywords: [
      'open account',
      'account registration',
      'sign up',
      'create account'
    ]
  },
  individual: {
    title: 'Individual Services | CHHAYVANN CO., LTD.',
    description: 'Discover CHHAYVANN services tailored for individual clients - currency exchange and gold trading.',
    keywords: [
      'individual services',
      'personal trading',
      'individual accounts'
    ]
  },
  corporate: {
    title: 'Corporate Services | CHHAYVANN CO., LTD.',
    description: 'Explore CHHAYVANN corporate solutions for businesses - wholesale currency exchange and gold trading.',
    keywords: [
      'corporate services',
      'business solutions',
      'wholesale trading'
    ]
  },
  organization: {
    title: 'Organization Services | CHHAYVANN CO., LTD.',
    description: 'CHHAYVANN provides specialized financial services for organizations and institutions.',
    keywords: [
      'organization services',
      'institutional services',
      'business accounts'
    ]
  },
  exchangeRate: {
    title: 'Exchange Rates | CHHAYVANN CO., LTD.',
    description: 'Check live exchange rates and gold prices on CHHAYVANN platform.',
    keywords: [
      'exchange rates',
      'live rates',
      'currency rates',
      'gold prices',
      'market prices'
    ]
  }
};

export function generateMetadata(
  page: keyof typeof pageMetadata,
  pathname: string,
  imageUrl: string = `${baseUrl}/assets/images/Chhayvann-png.png`
): Metadata {
  const pageData = pageMetadata[page];

  if (!pageData) {
    return {
      title: siteName,
      description: 'CHHAYVANN CO., LTD. - Your trusted financial services partner'
    };
  }

  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    robots: {
      index: true,
      follow: true
    },
    alternates: {
      canonical: `${baseUrl}${pathname}`
    },
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: `${baseUrl}${pathname}`,
      type: 'website',
      siteName,
      locale: 'en_US',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: pageData.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: pageData.title,
      description: pageData.description,
      images: [imageUrl]
    }
  };
}

export function generateDynamicMetadata(
  title: string,
  description: string,
  keywords: string[] = ["homepage", "chhayvann"],
  pathname: string,
  imageUrl: string = `${api.FILE_URL}/Chhayvann-png.png`
): Metadata {
  return {
    title,
    description,
    keywords,
    robots: {
      index: true,
      follow: true
    },
    alternates: {
      canonical: `${baseUrl}${pathname}`
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${pathname}`,
      type: 'website',
      siteName,
      locale: 'en_US',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl]
    }
  };
}

// API-based SEO metadata fetching
export async function fetchSeoFromApi(
  endpoint: string,
  language: string = 'en',
  imageUrl?: string,
  pathnames?: string
): Promise<{ seo: any; metadata: Metadata } | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || api.BASE_URL;
    
    const response = await fetch(`${apiUrl}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': language,
        'Cache-Control': 'public, max-age=3600',
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.warn(`Failed to fetch SEO data from ${endpoint}`);
      return null;
    }

    const data = await response.json();

    if (!data?.sites) {
      return null;
    }

    const seoData = data?.sites;
    const pathname = new URL(seoData.url || pathnames, baseUrl).pathname;
    const defaultImage = `${api.FILE_URL}${seoData.image}` || `${api.FILE_URL}/Chhayvann-png.png`;

    const metadata = generateDynamicMetadata(
      seoData.seo_title_eng || 'CHHAYVANN CO., LTD.',
      seoData.seo_description_eng || 'Discover CHHAYVANN CO., LTD. - Your trusted partner for currency exchange and gold trading in Cambodia. Competitive rates, transparent pricing, and reliable financial services.',
      seoData.seo_keywords || ['CHHAYVANN',
      'currency exchange Cambodia',
      'gold trading Cambodia',
      'financial services',
      'money exchange',
      'forex Cambodia',
      'trusted broker'],
      pathname,
      defaultImage
    );

    return { seo: seoData, metadata };
  } catch (error) {
    console.error(`Error fetching SEO data from ${endpoint}:`, error);
    return null;
  }
}

// Helper function to get SEO metadata from API with fallback
export async function getSeoMetadata(
  endpoint: string,
  fallbackTitle: string,
  fallbackDescription: string,
  fallbackKeywords: string[],
  pathname: string,
  language: string = 'en',
  imageUrl?: string
): Promise<Metadata> {
  const result = await fetchSeoFromApi(endpoint, language, imageUrl, pathname);
  if (result?.metadata) {
    return result.metadata;
  }

  // Fallback to provided metadata if API call fails
  return generateDynamicMetadata(
    fallbackTitle,
    fallbackDescription,
    fallbackKeywords,
    pathname,
    imageUrl || `${api.FILE_URL}/Chhayvann-png.png`
  );
}

export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: baseUrl,
    logo: `${baseUrl}/assets/images/Chhayvann-png.png`,
    description: 'CHHAYVANN CO., LTD. - Your trusted financial services partner for currency exchange and gold trading in Cambodia.',
    sameAs: [
      'https://www.facebook.com/chhayvann',
      'https://www.instagram.com/chhayvann'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KH',
      addressLocality: 'Phnom Penh'
    }
  },
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteName,
    url: baseUrl,
    image: `${api.FILE_URL}/Chhayvann-png.png`,
    description: 'Financial services company specializing in currency exchange and gold trading',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KH',
      addressLocality: 'Phnom Penh'
    }
  }
};
