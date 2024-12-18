// app/utils/analytics.ts

// Function for page views
export const trackPageView = (pageName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: pageName,
        page_location: window.location.href
      });
    }
  };
  
  // Function for product views
  export const trackProductView = (product: any) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_item', {
        currency: 'USD',
        value: product.price,
        items: [{
          item_id: product.id,
          item_name: product.name,
          price: product.price,
          category: product.category
        }]
      });
    }
  };
  
  // Function for add to cart
  export const trackAddToCart = (product: any) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'add_to_cart', {
        currency: 'USD',
        value: product.price,
        items: [{
          item_id: product.id,
          item_name: product.name,
          price: product.price,
          quantity: 1
        }]
      });
    }
  };
  
  // Function for checkout
  export const trackCheckout = (items: any[], total: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'begin_checkout', {
        currency: 'USD',
        value: total,
        items: items.map(item => ({
          item_id: item.id,
          item_name: item.name,
          price: item.price,
          quantity: item.quantity
        }))
      });
    }
  };
  
  // Function for purchase completion
  export const trackPurchase = (orderDetails: any, items: any[], total: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: `ORDER_${Date.now()}`,
        value: total,
        currency: 'USD',
        items: items.map(item => ({
          item_id: item.id,
          item_name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        customer_info: {
          email: orderDetails.email,
          phone: orderDetails.phone
        }
      });
    }
  };
  
  // Function for category views
  export const trackCategoryView = (category: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_item_list', {
        item_list_id: category,
        item_list_name: category
      });
    }
  };
  
  // Function for search
  export const trackSearch = (searchTerm: string, resultsCount: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'search', {
        search_term: searchTerm,
        results_count: resultsCount
      });
    }
  };