'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import StructuredData from './StructuredData';

interface BreadcrumbItem {
  name: string;
  url: string;
}

export default function Breadcrumb() {
  const pathname = usePathname();
  
  // Parse pathname to create breadcrumb items
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', url: '/' }
    ];

    segments.forEach((segment, index) => {
      const url = '/' + segments.slice(0, index + 1).join('/');
      // Remove hyphens and capitalize words for display
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({ name, url });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://chhayvann.com.kh';

  // Create structured data for breadcrumb
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`
    }))
  };

  if (breadcrumbs.length <= 1) {
    return null; // Don't show breadcrumb on home page
  }

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <nav aria-label="Breadcrumb" className="breadcrumb">
        {breadcrumbs.map((item, index) => (
          <div key={item.url} className="breadcrumb-item">
            {index < breadcrumbs.length - 1 ? (
              <>
                <Link href={item.url}>{item.name}</Link>
                <span className="separator"> / </span>
              </>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
