import React, { Component } from "react";
import data from "./data.json";
import Products from "./components/Products";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.vehicles,
      model: "",
      sort: "",
    };
  }
  render() {
    return (
      <div class="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>Footer content</footer>
      </div>
    );
  }
}

export default App;
