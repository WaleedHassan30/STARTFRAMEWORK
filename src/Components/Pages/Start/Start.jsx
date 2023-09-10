import React, { Component } from 'react'
import RepeatedTitle from '../../Components/Repeated/Repeated'
import "./Start.css"
import svg from "./avatar.svg"


export default class Start extends Component {
  render() {
    return (
      <>
      <section className='start'>
            <picture>
                <img src={svg} alt="avatar" />
            </picture>

            <RepeatedTitle title="START FRAMEWORK" color="var(--white)"/>

            <p>Graphic Artist - Web Designer - Illustrator</p>

      </section>

      
      
      
      </>
    )
  }
}
