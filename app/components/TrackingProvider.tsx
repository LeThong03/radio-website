// app/components/TrackingProvider.tsx
'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageView, trackUserEngagement } from '../utils/analytics'

export function TrackingProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname) {
      trackPageView(pathname)
      trackUserEngagement('page_visit', pathname)
    }

    const handleScroll = () => {
      trackUserEngagement('scroll', pathname)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  return <>{children}</>
}
