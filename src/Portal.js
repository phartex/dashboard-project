import React from 'react'
import {link} from 'react-router'
import './Dash.css'
import {BrowserHistory,BrowserRouter,Link,Switch,Route} from 'react-router-dom'
import SignUp from './SignUp'

const Portal = () =>{
    return (
        <body>
        <nav className="navbar navbar-expand-md navbar-light  sticky-top">
      <div className="container-fluid">
          <a href="#" className="navbar-brand"><img alt=""/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
              <span className="navbar-toggler-icon"></span>
          </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <a className="nav-link"  href="#">HOME</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">ABOUT US</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">BUSINESS AREAS</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">BLOG</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">CONTACT</a>
              </li>
          </ul>
      </div>
      </div>
      </nav> 
      
      <div className = 'container main'>
              <div className = 'row main-row'>
                  <div className='col-xs-12 col-md-6 col-lg-6'>
                      <h3>Join Our Team At</h3>
                      <h3><span>Sidmach</span></h3>
                      {/* <img className='image-fluid' src={image} style={{width:'15em'}}/> */}
                      <p className='vacancy'>Discover avalaible vacancies <Link to = '/Vacancy' className='text-danger'>Click Here For More</Link></p>
                  </div>
                  <div className='col-xs-12 col-md-6'>
                      <form>
                          <p className ='welcome'>WELCOME BACK ! LOGIN HERE</p>
                          <div className="form_group">

                          <input type="text" id="name" name="username" placeholder="Username (minimum 7 characters)" className="form_input"
                          required minlength=" 7"/><span id='nameverify'></span>
                          </div>

                              <div className="form_group">
                              <input type="password" name="confirm_password" placeholder="Password" required minlength="8"
                                      id="confirm_password" class="form_input"/>
                                  <div className='middle-footer'>
                                      <p>Don't have an account? <Link to='/SignUp' className='text-info'>Sign up</Link></p>
                                      <button className ='form_submit'>LOGIN</button>
                                  </div>
                                     
                              </div>
                      </form>
                  </div>
              </div>
      </div>
      
         
          
      </body>
    )
}

export default Portal