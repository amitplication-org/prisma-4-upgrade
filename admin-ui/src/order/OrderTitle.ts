import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "identifier";

export const OrderTitle = (record: TOrder): string => {
  return record.identifier || record.id;
};
