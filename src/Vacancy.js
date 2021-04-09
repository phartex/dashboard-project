import React from 'react'
import Link, { BrowserRouter } from 'react-router-dom'
import robot from './component/robot.jpg'
import './Vacancy.css'
import profile1 from './component/profile-1.jpg'
import profile2 from './component/profile-2.jpg'

const Vacancy = () =>{
    return (
        <body>
			
		<nav className="navbar navbar-expand-md navbar-light sticky-top">
			<div className="container-fluid nav-main">
				<a href="#" className="navbar-brand"><img className='logo bg-success' src="//sidmach.com/wp-content/uploads/2020/06/Sidlogo-white-1.png" style={{width:"150px"}} alt=""/></a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
					<span className="navbar-toggler-icon"></span>
				</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ">
							<li className="nav-item">
								<a className="nav-link text-success" href="#">About us</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-success" href="#">Find jobs</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-success" href="#">Applications</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">logo</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">CM</a>
							</li>
							
						</ul>
					
					</div>
			</div>
		</nav>

<section className="row bg-info container section-main">
	<div className="col-xs-12 col-md-4 col-lg-4 section-left">
		<img className='image-fluid' src={robot} style={{width:'100%'}} alt=""/>
	</div>
	<div className="col-xs-12 col-md-8 col-lg-8 section-right">
		<div className = 'row personal'>
			<div className='personal-info col-xs-12 col-md-9 col-lg-6  '>
				<h3>Hello Chetachi</h3>
				<p>Welcome to your dashboard</p>
			</div>
			<div className='application' col-lg-6>
			<i className="envelope far fa-envelope"></i>
			<p className="mx-4 text-center">New Application</p>
			
			</div>

		</div>
		<div className="row details">
			<div className="details-file col-xs-12 col-md-5 col-md-5">
				<img src={profile1} alt=""/>
				<h5 className="fs-1 " style={{marginTop:'10px'}}>Frontend Web Developer</h5>
				<p className = 'text-muted'>The Web developer translates brands objectives into code and is in chrage of delivering
					a compelling experience for all web  visitors.
				</p>
				<div className="button first">
					<button type="button" className="btn btn-primary">Mid-Level</button>
					<button type="button" className="inner btn btn-primary">1-year</button>
				</div>

				<button type="button" className="last btn btn-primary last">APPLY NOW</button>

			</div>
			<div className="details-file2 col-xs-12 col-md-5 col-md-5">
				<img src={profile2} alt="another"/>
				<h5 className="" style={{marginTop:'10px'}}>Frontend Web Developer</h5>
				<p className = 'text-muted'>The Web developer translates brands objectives into code and is in chrage of delivering
					a compelling experience for all web  visitors.
				</p>
				<div className="button first">
					<button type="button" className="btn btn-primary">Mid-Level</button>
					<button type="button" className="inner btn btn-primary">1-year</button>
				</div>

				<button type="button" className="last btn btn-primary last">APPLY NOW</button>

			</div>
		</div>
	</div>

	
</section>



</body>
    
    )
}

export default Vacancy;