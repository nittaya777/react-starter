import React, { Component } from "react";
import Moment from "react-moment";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import { ordersFetch, orderDelete } from "../../actions";

class Order extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.ordersFetch();
  }

  delOrder(order) {
    this.props.orderDelete(order.id);
  }
  showOrders() {
    if (this.props.orders && this.props.orders.length > 0) {
      return this.props.orders.map((order) => {
        return (
          <div className="col-md-4 mb-3" key={uuid()}>
            <div className="card">
              <div className="px-3 bg-light pd-title">
                <div className="row">
                  <div className="col-md-4">
                    Order ID <span className="text-primary">#{order.id}</span>
                  </div>
                  <div className="col-md-8 text-end">
                    <span className="fw-semibold">
                      <Moment
                        date={order.orderDate}
                        format="D MMM YYYY HH:mm"
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <p className="text-muted">Product List</p>
                <ul className="list-group list-group-flush">
                  {order.orders.map((list) => {
                    return (
                      <li
                        className="list-group-item fw-semibold d-flex"
                        key={uuid()}
                      >
                        <img
                          src={list.product.thumbnail}
                          className="rounded float-start me-2"
                          width="50px"
                          alt="product"
                        />
                        <span>{list.quantity} x </span>
                        <span className="ms-2 flex-grow-1">
                          {list.product.productName}
                        </span>
                        <span className="ms-2 text-muted text-end">
                          {list.quantity * list.product.unitPrice}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="bg-light text-center fw-bold pd-title">
                <span className="">Total Amount</span>
                <span className="mx-2 text-primary">
                  {order.totalPrice} THB
                </span>
              </div>
              <div className="col-md-12 d-grid mt-2 mb-4 px-5">
                <button
                  className="btn btn-block btn-outline-danger"
                  onClick={() => {
                    this.delOrder(order);
                  }}
                >
                  Delete Order
                </button>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return <div className="col-md-12 text-center">No orders</div>;
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Orders</h1>
        <div className="row my-4">{this.showOrders()}</div>
      </div>
    );
  }
}
function mapStateToProps({ orders }) {
  return { orders };
}
export default connect(mapStateToProps, { ordersFetch, orderDelete })(Order);
