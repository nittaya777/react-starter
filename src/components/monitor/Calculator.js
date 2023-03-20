import React, { Component } from "react";
class Calculator extends Component {
  showOrder(orders) {
    if (!orders || orders.length === 0) {
      return <li className="text-muted text-end title">No Product Item</li>;
    } else {
      return orders.map((order) => {
        return (
          <li
            className="text-end pb-1 product-list"
            key={order.product.id}
          >
            <span>
              {order.product.productName} x {order.quantity} =
              <span className="fw-semibold mx-1">
                {order.product.unitPrice * order.quantity}
              </span>
            </span>
            <span className="text-end">
              <button
                className="btn btn-secondary btn-sm ms-2"
                onClick={() => this.props.onDelOrder(order.product)}
              >
                x
              </button>
            </span>
          </li>
        );
      });
    }
  }

  render() {
    const { totalPrice, orders } = this.props;
    return (
      <div className="bg-main p-4">
        <div className="text-end">
          <small>Total Amount</small>
          <h1 className="text-success">{totalPrice}</h1>
        </div>

        <hr />
        <ul className="list-unstyled">{this.showOrder(orders)}</ul>
        <hr />
        <div className="d-grid gap-2 mx-auto">
          <button className="btn btn-block btn-danger title" onClick={()=>{this.props.onConfirmOrder()}}>Confirm</button>
          <button
            className="btn btn-block btn-outline-warning title"
            onClick={() => this.props.onCancelOrder()}
          >
            Cancel Order
          </button>
        </div>
      </div>
    );
  }
}
export default Calculator;
