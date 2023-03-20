import { Field, reduxForm, reset } from "redux-form";
import FormField from "../common/FormField";
import { productFormFields } from "./FormFields";
import { connect } from "react-redux";

let ProductForm = (props) => {
  const { handleSubmit, onProductSubmit } = props;

  const renderFields = (formFields) => {
    return formFields.map(({ label, name, type, required }, i) => {
      return (
        <Field
          key={name}
          label={label}
          name={name}
          type={type}
          required={required}
          component={FormField}
        />
      );
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onProductSubmit)}>
        {renderFields(productFormFields)}
        <div className="d-grid">
          <button type="submit" className="btn btn-block btn-primary title">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  productFormFields.forEach(({ name, required }) => {
    if (!values[name] && required) {
      errors[name] = "กรุณากรอกข้อมูลด้วย";
    }
  });
  return errors;
};
const mapStateToProps = ({ products }) => {
  if (products && products.id) {
    return { initialValues: products, products };
  } else {
    return { products };
  }
};
const afterSubmit = (result, dispatch, props) => {
  if (!props.values.id) {
    dispatch(reset("productForm"));
  }
};

ProductForm = reduxForm({
  validate,
  form: "productForm",
  onSubmitSuccess: afterSubmit,
})(ProductForm);

export default connect(mapStateToProps)(ProductForm);
