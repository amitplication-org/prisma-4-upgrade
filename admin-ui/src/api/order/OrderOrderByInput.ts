import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  discount?: SortOrder;
  id?: SortOrder;
  identifier?: SortOrder;
  quantity?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
