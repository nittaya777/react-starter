import React, { Component } from "react";

class ProductItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { productName, unitPrice, thumbnail } = this.props.product;
    return (
      <div className="col-md-4 col-sm-6 mb-3">
        <div className="card">
          <img src={thumbnail} alt="product" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{productName}</h5>
            <p className="card-text text-end title">{unitPrice} THB</p>
            <div className="d-grid">
              <button
                className="btn btn-custom"
                onClick={(e) => this.props.onAddOrder(this.props.product)}
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
