'use client';

import { useEffect } from 'react';

interface StructuredDataProps {
  data: Record<string, any>;
  type?: 'application/ld+json';
}

export function StructuredData({ data, type = 'application/ld+json' }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = type;
    script.innerHTML = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data, type]);

  return null;
}

export default StructuredData;
