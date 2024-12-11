// app/utils/discount.ts
export interface DiscountCode {
    code: string;
    percentage: number;
    validUntil: Date;
  }
  
  const discountCodes: DiscountCode[] = [
    {
      code: 'SUMMER2024',
      percentage: 15,
      validUntil: new Date('2024-08-31')
    },
    {
      code: 'NEWYEAR',
      percentage: 20,
      validUntil: new Date('2024-12-31')
    }
  ];
  
  export const validateDiscountCode = (code: string): DiscountCode | null => {
    const discount = discountCodes.find(
      d => d.code === code && d.validUntil > new Date()
    );
    return discount || null;
  };
  
  