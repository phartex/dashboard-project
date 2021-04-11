import React from 'react'
import Link, { BrowserRouter } from 'react-router-dom'
// import graph from './graph.png'
import './SignUp.css'
import image from './component/signup-image.png'


const SignUp = () =>{
    return (
        <body>
            <div>
            <div className="container">
        <div className="row main">
            <div className="left container col-xs-12 col-md-12 col-lg-4">
                <div className="para">
                <img className='logo' src="//sidmach.com/wp-content/uploads/2020/06/Sidlogo-white-1.png" style={{backgroundColor:'green',width:"150px"}} alt=""/>
                </div>
                <img className='image' src ={image}/>
                <p>Gain access into our world of opportunities</p>
                
            </div>
            <div className="right col-xs-12 col-md-12 col-lg-8">
                <p className="info">Return to <span className="info-link text-info"> main</span> website</p>
                        <div className="sign_portal">
                            <h2>Sign Up To Our Careers Portal</h2>
                
                            <div className="row main_right">
                                <div className="col-xs-12  input_field" id='field2'>
                                    <p>Email Address</p>
                                    <input type="text"/>
                                </div>
                                <div className="col-xs-12  input_field" id='field3'>
                                    <p>Username</p>
                                    <input type="text"/>
                                </div>	
                            </div>
        
                            <div className="row main_password">
                                 <div className="col-xs-12 input_field" id='field2'>
                                    <p>Password</p>
                                    <input type="password"placeholder='    6+characters'/>
                                </div>
                                <div className="col-xs-12  input_field" id='field3'>
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