import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addToCart, deletefromCart, fetchProducts } from "../Redux/action";
import "./Item.css";
import { Link } from "react-router-dom";

function Item(props) {
  const filterdItems = props.ListItems?.filter((item) =>
    item.title.toUpperCase().includes(props.input.toUpperCase())
  );
  return (
    <div className="items-container">
      {filterdItems?.map((element) => (
        <Card
          key={element.id}
          style={{
            width: "20rem",
            height: "42,125rem",
            margin: "0px 20px 20px 0",
            textAlign: "center",
            position: "relative",
            border: "1px solid gray",
            padding: "10px",
          }}
        >
          <Link to={`/description/${element.title}`}>
            <Card.Img
              height="300px"
              width="285px"
              variant="top"
              src={element.image}
            />
            <Card.Text className="cardPriceText">
              {Number.parseFloat(element.price).toFixed(3)}
            </Card.Text>
          </Link>
          <Card.Body>
            <Card.Title>{element.title.slice(0, 20)}...</Card.Title>
            <Card.Text>{element.description.slice(0, 30)}...</Card.Text>
            <Card.Text></Card.Text>
            <Button
              variant={!element.isInCart ? "success" : "danger"}
              // onClick={() => props.addToCart(element.id)}
              onClick={() =>
                !element.isInCart
                  ? props.addToCart(element.id)
                  : props.deletefromCart(element.id)
              }
            >
              {!element.isInCart ? "Add To Cart" : "Remove"}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
const mapStateToProps = (state) => ({
  ListItems: state.ListItems,
  input: state.input,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (payload) => dispatch(addToCart(payload)),
    deletefromCart: (payload) => dispatch(deletefromCart(payload)),
    fetchProducts: (payload) => dispatch(fetchProducts(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
