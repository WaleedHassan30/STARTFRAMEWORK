// Navbar Component

import React, { Component } from "react";
import  './Navbar';
import { Link } from "react-router-dom";
import $ from 'jquery';


export default class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeSection : ""
    }
  }


  componentDidMount() {
    $(window).on('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    $(window).off('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollPosition = $(window).scrollTop();
    const navbar = $('.navbar');
    const targetHeight = scrollPosition > 50 ? "60px" : "100px";
  
    navbar.css("transition", "height 0.3s");
  
    requestAnimationFrame(() => {
      navbar.css("height", targetHeight);
    });
  }



  handleSetActiveSection = (section) => {
    if (section === 'START') {
      this.setState({ activeSection: '' });
    } else {
      this.setState({ activeSection: section });
    }
  };


  render() {
    const { activeSection } = this.state;

    return (
      <>
        <nav id="nav" className="navbar navbar-default navbar-expand-lg bg-body-tertiary">
                    <div className="container">
                    <Link
                        className={`navbar-brand fw-bold ${activeSection === '' ? '' : ''}`}
                        to="/Start"
                        onClick={() => this.handleSetActiveSection('START')}
                      >
                        START FRAMEWORK
                    </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                        <li className="nav-item fw-bold">
                            <Link
                              className={`nav-link ${activeSection === 'ABOUT' ? 'active' : ''}`}
                              aria-current="page"
                              to="ABOUT"
                              onClick={() => this.handleSetActiveSection('ABOUT')}
                            >
                              ABOUT
                            </Link>
                          </li>
                            <li className="nav-item">
                            <Link 

                            className={`nav-link ${activeSection === 'PORTFOLIO' ? 'active' : ''}`}
                            
                            to="PORTFOLIO"
                            onClick={() => this.handleSetActiveSection('PORTFOLIO')}
                            >
                              PORTFOLIO
                              </Link>
                            
                            </li>
                            <li className="nav-item">
                            <Link 

                            className={`nav-link ${activeSection === 'Contact' ? 'active' : ''}`}
                            
                            to="Contact"
                             onClick={() => this.handleSetActiveSection('Contact')}
                            >
                              CONTACT
                              </Link>
                            </li>

                        </ul>
                        </div>
                    </div>
                    </nav>
      </>
    );
  }
}
