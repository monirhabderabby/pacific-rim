export interface AddressInfo {
    name: string;
    address: string;
    email: string;
    phone: string;
  }
  
  export interface OrderSummaryItem {
    label: string;
    value: string;
  }
  
  export interface OrderDetails {
    orderId: string;
    paymentMethod: string;
    summaryItems: OrderSummaryItem[];
    total: string;
  }