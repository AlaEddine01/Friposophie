import React from "react";
import "./NavSearch.css";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { handleChange, openCartModal } from "../Redux/action";
import { connect } from "react-redux";
import Cart from "./Cart";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavSearch(props) {
  return (
    <div className="navserachbar">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">
            <img
              src="https://scontent.ftun15-1.fna.fbcdn.net/v/t1.6435-9/215541770_105743305126524_8524907952426378963_n.png?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=tnUV3HaF2AYAX-GpQRL&tn=d364xymUXbaKJ-Ij&_nc_ht=scontent.ftun15-1.fna&oh=3b450f0c8feafa08c21cbf862bdc1a6d&oe=60F99C0D"
              style={{ width: "2.750rem", height: "2.750rem",borderRadius:"50%" }}
              alt="brandIcon"
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
            width: "1.750rem",
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={() => props.openCartModal(props.isOpenModal)}
        >
          <span
            style={{
              color: "#343a40",
              position: "absolute",
              height: "1.750rem",
              width: "1.750rem",
              zIndex: 1,
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
