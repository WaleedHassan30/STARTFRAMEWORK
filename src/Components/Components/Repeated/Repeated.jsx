// Repeated Components

import React, { Component } from 'react'
import './Repeated.css';
export default class RepeatedTitle extends Component {

  render() {
    const color = this.props.color;
    return (
        <>
        <div>
          <div style={{color: `${color}`}} className={`title fs-1 fw-bolder`}>{this.props.title}</div>
          <div style={{color: `${color}`}} className={`title-separator`}>
            <i _ngcontent-vgx-c6="" className="fa-solid fa-star"></i>
            <span className='right' style={{backgroundColor: `${color}`}}></span>
            <span className='left' style={{backgroundColor: `${color}`}}></span>
          </div>
        </div>

        </>
    )
  }
}
