// app/utils/analytics.ts
export const GA_MEASUREMENT_ID = 'G-1CP4J53429' // Replace with your GA4 ID
export const trackPageView = (url: string) => {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: url,
      page_path: url
    })
  }
  
  export const trackUserEngagement = (action: string, category: string) => {
    window.gtag('event', 'user_engagement', {
      event_category: category,
      event_action: action,
      timestamp: new Date().toISOString()
    })
  }
  
  
