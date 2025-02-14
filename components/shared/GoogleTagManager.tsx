'use client'

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const GoogleTagManager = () => {
  const location = usePathname();

  useEffect(() => {
    // Push the new route to dataLayer
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: location + location.search
      });
    }
  }, [location]);

  return null;
}; 