import React from 'react'
import Link, { BrowserRouter } from 'react-router-dom'

import './Vacancy.css'

const Vacancy = () =>{
    return (
        <body>
		<nav className="navbar navbar-expand-md navbar-light sticky-top">
			<div className="container-fluid nav-main">
				<a href="#" className="navbar-brand"><img src='' alt=""/>logo</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
					<span className="navbar-toggler-icon"></span>
				</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ">
							<li className="nav-item">
								<a className="nav-link" href="#">About us</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Find jobs</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Applications</a>
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

<section className="row section-main">
	<div className="col-md-4 col-lg-4 section-left">
		<img src="" alt=""/>
		<p>James Roy</p>

	</div>
	<div className="col-md-8 col-lg-8 section-right">
		<div className="row">
			<div className="section-personal col-md-6 col-lg-6">
				<h1>Hello James,</h1>
				<p>Welcome to your dashboard</p>
			</div>
			<div className="section-app col-md-6 col-lg-6">
				<div className="app">
				 <img src="" alt="ddd"/>
				 <div><p>New</p><p>Application</p></div>
				</div>
			</div>
		</div>
		<p>latest jobs</p>
		<div className="row details">
			<div className="details-file col-xs-12 col-md-5 col-md-5">
				<img src="" alt="another"/>
				<p className="">Frontend Web Developer</p>
				<p>The Web developer translates brands objectives into code and is in chrage of delivering
					a compelling experience for all web  visitors.
				</p>
				<div classn
                ="button first">
					<button type="button" className="btn btn-primary">Mid-Level</button>
					<button type="button" className="inner btn btn-primary">1-year</button>
				</div>

				<button type="button" className="last btn btn-primary last">APPLY NOW</button>

			</div>
			<div className="details-file2 col-xs-12 col-md-5 col-md-5">
				<img src="" alt="another"/>
				<p className="">Frontend Web Developer</p>
				<p>The Web developer translates brands objectives into code and is in chrage of delivering
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