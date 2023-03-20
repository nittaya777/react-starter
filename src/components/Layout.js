import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header company="Coffee Shop" />
      <Outlet />
      <Footer company="Coffee Shop" email="admin@example.com" />
    </>
  );
};

export default Layout;
