import React, { Component } from 'react';
import RepeatedTitle from '../../Components/Repeated/Repeated';
import "./Portfolio.css";
import Card from './Card';

export default class Portfolio extends Component {
  state = {
    selectedImage: null
  };

  openModal = (image) => {
    this.setState({ selectedImage: image });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  
  };

  render() {
    const images = [];
    for (let i = 1; i <= 6; i++) {
      const imageUrl = `/Assets/images/card${i}.png`;
      images.push(imageUrl);
    }

    return (
      <>
        <div className="title">
          <RepeatedTitle title="PORTFOLIO COMPONENT" color="var(--second-color)" />
        </div>

        <div className="cards container">
          {images.map((image, index) => (
            <React.Fragment key={image}>
              <Card picture={image} openModal={() => this.openModal(image)} />
            </React.Fragment>
          ))}
        </div>

        {this.state.selectedImage && (
          <div className="modal">
            <div className="modal-content">
              <img src={this.state.selectedImage} alt="modal" />
              <span className=" icon fa-regular fa-rectangle-xmark fa-beat" onClick={this.closeModal}></span>
            </div>
          </div>
        )}
      </>
    );
  }
}