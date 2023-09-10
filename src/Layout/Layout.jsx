// Website Layout

import React, { Component } from 'react'
import Navbar from '../Components/Components/Navbar/Navbar'
import Footer from '../Components/Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Start from "../Components/Pages/Start/Start"

import "./Layout.css"



export default class Layout extends Component {
  render() {

    return (
      
        <>
        
        
        <section className='layOut'>
          <div className="navBar">
              <Navbar/>
          </div>

            <div className="body">
              <Outlet/>
            </div>


          <div className="footer">
              <Footer/>
          </div>
        </section>
        
        </>
    )
  }
}
