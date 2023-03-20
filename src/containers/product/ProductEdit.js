import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { productFetch, productCreate, productUpdate } from "../../actions";
import ProductForm from "../../components/product/ProductForm";

const ProductEdit = (props) => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { formValues, products, productFetch, productCreate, productUpdate } =
    props;
  useEffect(() => {
    if(id){
        productFetch(id);
    }
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-6 col-12">
          {pathname.indexOf("add") > 0 && (
            <div>
              <h1 className="mb-5">New Product</h1>
              {products.saved &&(
                <div className="alert alert-secondary">{products.msg}</div>
              )
              }
              <ProductForm onProductSubmit={()=>productCreate(formValues)}/>
            </div>
          )}
          {pathname.indexOf("edit") > 0 && (
            <div>
              <h1 className="mb-5">
                Edit Product <span className="text-primary">#{id}</span>
              </h1>
              {products.saved &&(
                <div className="alert alert-secondary">{products.msg}</div>
              )}
              <ProductForm onProductSubmit={()=>productUpdate(products.id,formValues)}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ form, products }) => {
  return {
    formValues: form.productForm ? form.productForm.values : null,
    products,
  };
};
export default connect(mapStateToProps, {
  productFetch,
  productCreate,
  productUpdate,
})(ProductEdit);
