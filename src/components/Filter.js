import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} Products</div>
        <div className="filter-sort">
          Price{" "}
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option>Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-model">
          Filter{" "}
          <select value={this.props.model} onChange={this.props.filterProducts}>
            <option value="">ALL</option>
            <option value="A">A</option>
            <option value="C">C</option>
            <option value="E">E</option>
            <option value="G">G</option>
            <option value="S">S</option>
          </select>
        </div>
      </div>
    );
  }
}
