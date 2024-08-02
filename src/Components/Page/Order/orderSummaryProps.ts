import { shoppingCartModel } from "../../../Interfaces";
export interface orderSummaryProps {
  data: {
    id: number;
    cartItems: shoppingCartModel[];
    cartItem: shoppingCartModel[];
    cartTotal: number;
  };
  userInput: {
    name: string;
    email: string;
    phoneNumber: string;
  };
}