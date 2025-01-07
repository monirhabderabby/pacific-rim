export interface OrderStatus {
    ordered: {
      date: string;
      isComplete: boolean;
    };
    shipping: {
      isComplete: boolean;
    };
    delivery: {
      date: string;
      isComplete: boolean;
    };
  }
  
  export interface OrderConfirmationProps {
    orderStatus: OrderStatus;
  }
  
  