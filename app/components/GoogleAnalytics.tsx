// app/components/GoogleAnalytics.tsx
'use client'
import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { GA_MEASUREMENT_ID } from '../utils/analytics'

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname,
      })
    }
  }, [pathname, searchParams])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  )
}

// Add this to track cart events
export const trackAddToCart = (item: any) => {
  window.gtag('event', 'add_to_cart', {
    currency: 'USD',
    value: item.price,
    items: [{
      item_id: item.id,
      item_name: item.name,
      price: item.price,
      quantity: 1
    }]
  })
}

export const trackRemoveFromCart = (item: any) => {
  window.gtag('event', 'remove_from_cart', {
    currency: 'USD',
    value: item.price,
    items: [{
      item_id: item.id,
      item_name: item.name,
      price: item.price,
      quantity: 1
    }]
  })
}