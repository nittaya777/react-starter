import React, { Component } from "react";
import {Link} from 'react-router-dom'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    console.log("constructor");
  }
  tick() {
    this.setState({ date: new Date() });
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { company } = this.props;
    return (
      <div className="container-fluid sticky-top bg-white">
        <div className="container">
        <div className="row">
          <div className="col-md-8 text-start">
            <h1 className="text-logo mt-2">
              {company}
              <img
                src="/images/logo/logo.png"
                alt="logo"
                className="img-responsive img-logo"
              />
            </h1>
          </div>
          <div className="col-md-4 text-end">
            <span className="badge rounded-pill text-bg-light mt-4">
              {this.state.date.toLocaleTimeString()}
            </span>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" className="nav-link active" aria-current="page">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/orders" className="nav-link" href="#">
                        Orders
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/products" className="nav-link">
                        Products
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link">
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Header;
