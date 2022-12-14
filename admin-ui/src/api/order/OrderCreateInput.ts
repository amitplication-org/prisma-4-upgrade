import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  identifier?: string | null;
  product?: ProductCreateNestedManyWithoutOrdersInput;
  quantity?: number | null;
  totalPrice?: number | null;
};
