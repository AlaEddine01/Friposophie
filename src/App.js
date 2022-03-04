import React, { useEffect } from "react";
import HomePage from "./Pages/HomePage";
import { Route } from "react-router-dom";
import Description from "./Pages/Description";
import AboutUs from "./Pages/AboutUs";
import { connect } from "react-redux";
import { fetchProducts, setLoading } from "./Redux/action";
import Spinner from "./Components/Spinner";
import NavSearch from "./Components/NavSearch";

function App(props) {
  useEffect(() => {
    const fetch2Products = async () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => props.fetchProducts(json))
        .then((json) => props.setLoading())
        .catch((err) => console.log(err));
    };
    fetch2Products();
    // props.fetchProducts(products);
  }, []);

  return (
    <div className="App">
      <NavSearch />
      <Route exact path="/">
        {props.loading ? <Spinner /> : <HomePage />}
      </Route>
      <Route exact path="/description/:id" component={Description} />
      <Route exact path="/aboutus" component={AboutUs} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  ListItems: state.ListItems,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (payload) => dispatch(fetchProducts(payload)),
    setLoading: (payload) => dispatch(setLoading()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
