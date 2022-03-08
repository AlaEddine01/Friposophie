import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Description(props) {
  return (
    <div
      style={{
        height: "90vh",
        marginTop: "8vh",
        padding: "0",
      }}
    >
      {props.ListItems.map(
        (element) =>
          element.title === props.match.params.id && (
            <Card
              className="text-center"
              style={{ padding: "0 10vh", backgroundColor: "antiqueWhite" }}
            >
              <Card.Header as="h2">{element.title}</Card.Header>
              <Card.Body style={{ height: "84vh" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    width="400px"
                    height="400px"
                    src={element.image}
                    alt={element.title}
                    style={{ borderRadius: "10%", border: "1px solid gray" }}
                  />

                  <Card.Text
                    style={{
                      marginTop: "50px",
                      fontSize: "30px",
                      fontWeight: "bold",
                      marginLeft: "25px",
                      backgroundColor: "#11e95b",
                      padding: "10px",
                      color: "white",
                      borderRadius: "20px",
                      border: "1px solid",
                      height: "fit-content",
                    }}
                  >
                    {element.price} USD
                  </Card.Text>
                </div>
                <br />
                <br />
                <Card.Text style={{ marginTop: "50px", fontSize: "20px" }}>
                  {element.description}
                </Card.Text>
                <Link to="/">
                  <Button variant="primary">Go Back</Button>
                </Link>
              </Card.Body>
              {/* <Card.Footer className="text-muted"></Card.Footer> */}
            </Card>
          )
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  ListItems: state.ListItems,
});

export default connect(mapStateToProps)(Description);
