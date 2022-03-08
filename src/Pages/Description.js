import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";

function Description(props) {
  return (
    <div
      style={{
        height: "90vh",
        marginTop: "8vh",
        // padding: "0",
      }}
    >
      {props.ListItems.map(
        (element) =>
          element.title === props.match.params.id && (
            <Card
              className="text-center"
              style={{ padding: "0 10vh", backgroundColor: "antiqueWhite" }}
            >
              <Card.Body
                style={{
                  height: "84vh",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  padding: "25px",
                }}
              >
                <div
                  style={{ position: "relative", flex: "5", height: "80vh" }}
                >
                  <img
                    width="500px"
                    height="600px"
                    src={element.image}
                    alt={element.title}
                    style={{ borderRadius: "10%", border: "1px solid gray" }}
                  />
                  <span
                    style={{
                      marginTop: "20px",
                      fontSize: "30px",
                      fontWeight: "bold",
                      marginLeft: "25px",
                      backgroundColor: "#11e95b",
                      padding: "10px",
                      color: "black",
                      borderRadius: "20px",
                      border: "1px solid white",
                      height: "fit-content",
                      textAlign: "center",
                      position: "absolute",
                      top: 0,
                      right: 0,
                    }}
                  >
                    {Number.parseFloat(element.price).toFixed(3)} USD
                  </span>
                </div>
                <div style={{ flex: "7" }}>
                  <Card.Header as="h2">{element.title}</Card.Header>

                  <br />
                  <Card.Text style={{ fontSize: "20px", padding: "25px" }}>
                    {element.description}
                  </Card.Text>
                </div>
              </Card.Body>
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
