import React, { Component } from "react";
import Monitor from "../components/monitor/Monitor";
import { connect } from "react-redux";
import { productsFetch } from "../actions";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.productsFetch();
  }

  render() {
    return (
      <div className="container">
        <Monitor products={this.props.products} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { products: state.products };
}
export default connect(mapStateToProps, { productsFetch })(Home);
