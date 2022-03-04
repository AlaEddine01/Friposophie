import React from "react";
import "./NavSearch.css";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { handleChange, openCartModal } from "../Redux/action";
import { connect } from "react-redux";
import Cart from "./Cart";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import friposofie from "../Assets/friposofie.png";

function NavSearch(props) {
  return (
    <div className="navserachbar">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">
            <img
              src={friposofie}
              alt="brandIcon"
              style={{
                width: "2.750rem",
                height: "2.750rem",
                borderRadius: "50%",
              }}
            />
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/">
            <Navbar.Text className="navbar-content">Home</Navbar.Text>
          </Link>
          <Link to="/aboutus">
            <Navbar.Text className="navbar-content">About us</Navbar.Text>
          </Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={props.input}
            onChange={(event) => props.handleChange(event)}
          />
        </Form>
        <div
          style={{
            height: "1.750rem",
            width: "4rem",
            textAlign: "center",
            cursor: "pointer",
            position: "relative",
          }}
          onClick={() => props.openCartModal(props.isOpenModal)}
        >
          <span
            style={{
              // color: rgb(52, 58, 64);
              position: "absolute",
              height: "1.75rem",
              width: "1.75rem",
              zIndex: 1,
              backgroundColor: "green",
              borderRadius: "50%",
              right: "-3px",
              color: "white",
              top: "-10px",
            }}
          >
            {props.cartLength}
          </span>
          <FaShoppingCart
            size="1.750rem"
            color="white"
            style={{ position: "relative", right: "0" }}
          />
        </div>
        <Cart />
      </Navbar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  input: state.input,
  isOpenModal: state.isOpenModal,
  cartLength: state.cartLength,
});
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (payload) => dispatch(handleChange(payload)),
    openCartModal: (payload) => dispatch(openCartModal(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavSearch);
