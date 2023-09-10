import React, { Component } from 'react';
import "./Portfolio.css";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <picture>
          <img src={this.props.picture} alt="card1" />
        </picture>
        <div className="layer">
          <i onClick={this.props.openModal} className="text-white fa-solid fa-plus fa-6x"></i>
        </div>
      </div>
    );
  }
}