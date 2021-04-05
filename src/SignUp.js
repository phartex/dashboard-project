import React from 'react'
import Link, { BrowserRouter } from 'react-router-dom'
// import graph from './graph.png'
import './SignUp.css'


const SignUp = () =>{
    return (
        <body>
            <div>
            <div className="container">
        <div className="row main">
            <div className="left col-xs-12 col-md-12 col-lg-4">
                <div className="para">
                    <p>logo</p>
                <p>Gain access into our world of opportunities</p>
                </div>
                
                {/* <img src={graph} alt=""/> */}
                    </div>
            <div className="right col-xs-12 col-md-12 col-lg-8">
                <p className="info">Already a member? <span className="info-link text-info">Sign in</span></p>
                        <div className="sign_portal">
                            <h2>Sign Up To Our Careers Portal</h2>
                
                            <div className="row main_right">
                                <div className="col input_field">
                                    <p>Email Address</p>
                                    <input type="text"/>
                                </div>
                                <div className="col input_field">
                                    <p>Username</p>
                                    <input type="text"/>
                                </div>	
                            </div>
        
                            <div className="row main_password">
                                <div className="col input_field">
                                    <p>Password</p>
                                    <input type="password"/>
                                </div>
                                <div className="col input_field">
                                    <p>Confirm Password</p>
                                    <input type="password"/>
                                </div>	
                                </div>
                                
                                <div className="terms">
                                    <i className="far fa-square"></i>
                                    <p>By creating an account, You agree to our <span className="text-info"> Terms 
                                    </span><br/>& <span className="text-info">Private Policy</span></p>
                                </div>
                                <button>
                                    Create Account
                                </button>
                        </div>
            </div>
        </div>
    </div>
    
        </div>
        </body>
        
    )
}


























// class SignUp extends React.Component{

//     render(){
//         return(
//             <BrowserRouter>
//             <nav>
                
//             </nav>
//             </BrowserRouter>
            
            
//         ) 
//     }

// }

export default SignUp