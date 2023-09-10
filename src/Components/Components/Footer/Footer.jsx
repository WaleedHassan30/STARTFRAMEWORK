// Footer Component

import React, { Component } from 'react'
import "./Footer.css"

export default class Footer extends Component {
  render() {
    return (
      <>

          <section className='footer'>

                <div className="row container">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <h3>AROUND THE WEB</h3>
                    <div className="social">

                      <ul>
                        <li><a target='_blank' href="https://www.facebook.com/"><i  className="fa-brands fa-facebook mx-1 icon  "></i></a></li>
                        <li><a target='_blank' href="https://twitter.com/"> <i className="fa-brands fa-twitter mx-1 icon"></i></a></li>
                        <li><a target='_blank' href="https://www.linkedin.com/"><i  className="fa-brands fa-linkedin-in mx-1 icon"></i></a></li>
                        <li><a target='_blank' href="https://www.linkedin.com/"> <i  className="fa-solid fa-globe mx-1 icon"></i></a></li>
                      </ul>

                    </div>
                  </div>


                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                  </div>
                </div>
          </section>
          <section className="copyRight">
            <p>Copyright © Waleed Hassan</p>
          </section>
      
      </>
    )
  }
}
