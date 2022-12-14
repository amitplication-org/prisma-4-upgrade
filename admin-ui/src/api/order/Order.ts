import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  discount: number | null;
  id: string;
  identifier: string | null;
  product?: Array<Product>;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
