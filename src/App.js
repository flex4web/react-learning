import React, { Component } from "react";
import { DISHES } from "./shared/dishes.js";
import MenuComponent from "./components/MenuComponent";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import { BrowserRouter } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <MenuComponent dishes={this.state.dishes} />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
