import React from 'react'
import {link} from 'react-router'
import './Dash.css'
import {BrowserHistory,BrowserRouter,Link,Switch,Route} from 'react-router-dom'
import SignUp from './SignUp'
import welcome from './component/welcome.jpg'
const Portal = () =>{
    return (
        <body>
       <img className='logo' src="//sidmach.com/wp-content/uploads/2020/06/Sidlogo-white-1.png" style={{backgroundColor:'black',width:"100px"}} alt=""/>
      <div className = 'container main'>
              <div className = 'row main-row'>
                  <div className='main-row-child col-xs-12 col-md-6 col-lg-6'>

                      <h1>Join Our Team At</h1>
                      <h1><span class='text-success'>Sidmach</span></h1>
                      <img className='welcome-image image' src={welcome} />
                      
                      <p className='vacancy'>Discover available vacancies <Link to = '/Vacancy' className='text-info'>Click Here For More</Link></p>
                  </div>
                  <div className='col-xs-12 col-md-6 col-lg-6'>
                      <form>
                          <p className ='welcome'>WELCOME BACK ! LOGIN HERE</p>
                          <div className="form_group">

                          <input type="text" id="name" name="username" placeholder="Username (minimum 7 characters)" className="form_input"
                          required minlength=" 7"/><span id='nameverify'></span>
                          </div>

                              <div className="form_group">
                              <input type="password" name="confirm_password" placeholder="Password" required minlength="8"
                                      id="confirm_password" class="form_input"/>
                                  <div className='middle-footer row'>
                                      <p className='col-xs-12'>Don't have an account? <Link to='/SignUp' className='text-info'>Sign up</Link></p>
                                      <button className ='col-xs-12 form_submit'>LOGIN</button>
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