import { ORDERS_FETCH, ORDER_CREATE } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case ORDERS_FETCH:
      return action.payload;
    case ORDER_CREATE:
      return { saved: true, msg: "บันทึกข้อมูลเรียบร้อยแล้ว" };
    default:
      return state;
  }
}
