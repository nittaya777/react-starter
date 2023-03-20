import axios from "axios";
import { ORDERS_FETCH, ORDER_CREATE } from "./types";

export const ordersFetch = () => {
  return (dispatch) => {
    axios.get(`${process.env.REACT_APP_URL}/orders`).then((res) => {
      dispatch({ type: ORDERS_FETCH, payload: res.data });
    });
  };
};

export const orderCreate = ({ totalPrice, orders }) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_URL}/orders`, {
        orderDate: new Date(),
        totalPrice,
        orders,
      })
      .then((res) => {
        dispatch({ type: ORDER_CREATE });
      });
  };
};

export const orderDelete = (id) => {
  return (dispatch) => {
    axios.delete(`${process.env.REACT_APP_URL}/orders/${id}`).then((res) => {
      axios.get(`${process.env.REACT_APP_URL}/orders`).then((res) => {
        dispatch({ type: ORDERS_FETCH, payload: res.data });
      });
    });
  };
};
