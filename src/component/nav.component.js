import React, { Component } from 'react'
import logo from "../assets/logo.svg";
import './styles.css'
export default class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light nav  container mt-2 mb-0">
					<img src={logo} className='logo'></img>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse d-lg-flex justify-spaced-between" id="navbarSupportedContent">
						<div className='w-100'></div>
						<ul className="navbar-nav mr-auto">
							<li className="nav-item px-3">
								<a className="nav-link font-weight-bold" href="#">Docs</a>
							</li>
							<li className="nav-item px-3">
								<a className="nav-link font-weight-bold" href="#">GitHub</a>
							</li>
							<li className="nav-item px-3">
								<a className="nav-link font-weight-bold" href="#">About</a>
							</li>
						</ul>
					</div>
				</nav>
				<hr></hr>
			</div>
		)
	}
}
