// Contact Page
import React, { Component } from 'react'
import RepeatedTitle from '../../Components/Repeated/Repeated'
import "./Contact.css"
import $ from 'jquery';

export default class Contact extends Component {


  handleChangeInput(e){
    const input = e.target.id
    const lable = $(`#${input}`).prev("label")
    
    e.target.value.length >= 1 ? $(lable).addClass("top-0") : $(lable).removeClass("top-0")

  }
  render() {
    return (
      <>
      <div className='title'>
      <RepeatedTitle title="CONATCT SECTION" color="var(--second-color)"/>
      </div>



      <div className="form container">
        <form action="">
          <label  htmlFor="userName" className="position-relative">userName : </label>
          <input onChange={this.handleChangeInput} id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty"   />
        
          <label  htmlFor="userAge" className="position-relative">userAge : </label>
          <input onChange={this.handleChangeInput} id="userAge" type="number" placeholder="userAge" name="userAge" className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty"   />
        
          <label  htmlFor="userEmail" className="position-relative">userEmail : </label>
          <input onChange={this.handleChangeInput} id="userEmail" type="email" placeholder="userEmail" name="userEmail" className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty"   />
        
          <label  htmlFor="userPassword" className="position-relative">userPassword : </label>
          <input onChange={this.handleChangeInput} id="userPassword" type="password" placeholder="userPassword" name="userPassword" className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty"   />
        
          <button  className="btn mt-4 text-white"> send Message </button>
        
        
        </form>
      </div>

      
      
      </>
    )
  }
}
