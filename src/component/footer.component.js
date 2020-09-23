import React, { Component } from 'react'
import './styles.css'
import facebook from '../assets/facebook.svg'
import github from '../assets/github.svg'
import medium from '../assets/medium.svg'
import twitter from '../assets/twitter.svg'
import frappelogotype from '../assets/frappelogotype.png'


export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="web-footer">
                    <div className="container">
                        <div>
                            <img src={frappelogotype} alt="Footer Logo" className="footer-logo"></img>
                        </div>
                        <div className="footer-links">
                            <div className="row d-lg-flex justify-content-between">
                                <div className="pl-2">
                                    <a href="https://frappe.io" className="footer-link">Company</a>
                                    <a href="https://erpnext.com" className="footer-link">ERPNext</a>
                                    <a href="https://frappe.io/about" className="footer-link">Team</a>
                                    <a href="https://frappe.io/contact" className="footer-link">Contact</a>
                                </div>
                                <div className="row pr-2">
                                    <a href="https://www.facebook.com/ERPNext" className="footer-link">
                                        <img className='socialicon' src={facebook} alt="Facebook"></img>
                                    </a>
                                    <a href="https://twitter.com/erpnext" className="footer-link">
                                        <img className='socialicon' src={twitter} alt="Twitter"></img>
                                    </a>
                                    <a href="https://medium.com/frapp%C3%A9-thoughts" className="footer-link">
                                        <img className='socialicon' src={medium} alt="Medium"></img>
                                    </a>
                                    <a href="https://github.com/frappe" className="footer-link">
                                        <img className='socialicon' src={github} alt="GitHub"></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="footer-info">
                            <div className="row d-lg-flex justify-content-lg-between foot">
                                <div className="FOOTER ml-3">
                                    © Frappe. Content licensed under CC-BY-SA 3.0.
                                    <br></br>
                                    <div>+91 22 4897 0555 - hello@frappe.io</div>
                                </div>
                                    <div className="mr-3">
                                        <a href="https://frappeframework.com?source=website_footer" target="_blank" className="text-muted">Built on Frappe</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}