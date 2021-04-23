import React from 'react'
import Link, { BrowserRouter } from 'react-router-dom'
// import robot from './component/robot.jpg'
import './Vacancy.css'
// import profile1 from './component/profile-1.jpg'
// import profile2 from './component/profile-2.jpg'
import vector1 from './component/Sidmach/Vector1.png'
import vector from './component/Sidmach/Vector.png'
import Ellipse from './component/Sidmach/Ellipse.png'
import chart from './component/Sidmach/chart.png'
import rectangle from './component/Sidmach/rectangle.png'
import greenrec from './component/Sidmach/greenrec.png'
import mockups from './component/Sidmach/mockups.png'
const Vacancy = () =>{
    return (
        <body>
			
		<nav className="navbar navbar-expand-md bg-success navbar-light sticky-top">
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
								<a className="nav-link image-link" href="#"><img style={{width:'25px'}} src={vector1}/></a>
							</li>
							<li className="nav-item ">
								<a className="nav-link image-link" href="#"><img style={{width:'25px'}} src={vector}/></a>
							</li>
							<li className="nav-item">
								<a className="nav-link image-link" href="#"><img style={{width:'35px'}} src={Ellipse}/></a>
							</li>
							
						</ul>
					
					</div>
			</div>
		</nav>

<section className="row container-fluid section-main">
	<div className="col-xs-12 col-md-8 col-lg-8 section-left">
			<div className="left_upper">
			<h2 className=''>Hello Chetachi</h2>
				<p>Welcome to your dashboard</p>
			</div>
			<div className = "left_middle">
				<div className="row application">
					<div className="col-lg-8 app ">
						<h3 >Applications Overview</h3>
						<div className="test">
							<img  src ={greenrec} width='25px'/>
							<p>0 Succesful applicants</p>
						</div>
						<div  className="test" >
							<img  src ={rectangle} width='25px'/>
							<p>Applications response rate</p>
						</div>
						
					</div>
					<div className="col-lg-4">
					<img className="graph" src ={chart} style={{marginLeft:"-100px",marginTop:'2em'}} width='300px'/>
					</div>
				</div>
			</div>
			<div className="left_low">
				<h3 style={{marginTop:'30px'}}>Available positions</h3>
				<hr/>
				<br/>
				<div className="grid">
				<div className='first'>
				<h5 className="fs-1 " style={{marginTop: '10px'}}>Frontend Web Developer</h5>
					<p className="text-muted">The Web developer translates brands objectives into code and is 
					in charge of delivering a compelling experience for all web  visitors.</p>
					<div className="button"><button type="button" className="mid_level btn btn-primary">Mid-Level</button>
					<button type="button" className="inner btn btn-primary">1-year</button>
					</div>
					<button type="button" className="last btn btn-primary last">APPLY NOW</button>
				</div>

				<div className='second'>
				<h5 className="fs-1 " style={{marginTop: '10px'}}>Frontend Web Developer</h5>
					<p className="text-muted">The Web developer translates brands objectives into code and is 
					in charge of delivering a compelling experience for all web  visitors.</p>
					<div className="button"><button type="button" className="mid_level btn btn-primary">Mid-Level</button>
					<button type="button" className="inner btn btn-primary">1-year</button>
					</div>
					<button type="button" className="last btn btn-primary last">APPLY NOW</button>
				</div>
				<div className='third'>
				<h5  style={{marginTop: '10px'}}>Frontend Web Developer</h5>
					<p className="text-muted">The Web developer translates brands objectives into code and is 
					in charge of delivering a compelling experience for all web  visitors.</p>
					<div className="button"><button type="button" className="mid_level btn btn-primary">Mid-Level</button>
					<button type="button" className="inner btn btn-primary">1-year</button>
					</div>
					<button type="button" className="last btn btn-primary last">APPLY NOW</button>
				</div>
				</div>
				
			</div>
						
	</div>
	<div className="col-xs-12 col-md-4 col-lg-4 section-right">
		<div className = 'row personal'>
			<img src={mockups} width='300px'/>
			<h2>Exciting Content From Sidmach</h2>
			<button type="button" style={{fontWeight:'600'}} className="last btn btn-primary last">VISIT OUR BLOG</button>
		</div>
		<div className='row youtube'>
		<img
              className="logo container youtube-img"
              src="img/luminate.png"
              alt=""
            />
		</div>
	</div>



	
</section>



</body>
    
    )
}

export default Vacancy;