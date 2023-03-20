import React, { Component, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import { productsFetch, productDelete } from "../../actions";

const Product = (props) => {
  let navigate = useNavigate();

  useEffect(() => {
    props.productsFetch();
  }, []);

  const addProduct = () => {
    navigate(`/products/add`);
  };
  const editProduct = (product) => {
    navigate(`/products/edit/${product.id}`);
  };
  const delProduct = (product) => {
    props.productDelete(product.id);
  };
  const showProducts = () => {
    if (props.products && Array.isArray(props.products) && props.products.length > 0) {
      return props.products.map((product) => {
        return (
          <div className="col-md-3 mb-3" key={uuid()}>
            <div className="card text-title">
              <img
                src={product.thumbnail}
                className="image-thumbnail"
                alt="product"
              />
              <div className="card-body">
                <p>
                  ID : <span className="fw-semibold">{product.id}</span>
                </p>
                <p>
                  Name :{" "}
                  <span className="fw-semibold">{product.productName}</span>
                </p>
                <p>
                  Unit Price :{" "}
                  <span className="fw-semibold">{product.unitPrice}</span>
                </p>
              </div>

              <div className="card-footer col-md-12 d-grid gap-2 d-md-flex justify-content-md-center mt-2 px-5">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    editProduct(product);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    delProduct(product);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return <div className="col-md-12 text-center">No products</div>;
    }
  };
  return (
    <div className="container">
      <h1>
        Products{" "}
        <button
          className="btn btn-success float-end"
          onClick={() => {
            addProduct();
          }}
        >
          Add Product
        </button>
      </h1>

      <div className="row my-4">{showProducts()}</div>
    </div>
  );
};
function mapStateToProps({products}) {
  return { products};
}
export default connect(mapStateToProps, { productsFetch, productDelete })(
  Product
);
