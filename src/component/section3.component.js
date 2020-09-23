import React, { Component } from 'react'
import './styles.css'
import frappeteammussoorie from '../assets/frappeteammussoorie.png'

export default class Sec3 extends Component {
    render() {
        return (
            <div>
                <div className="bg-light teamsec">
                    <div className="container">
                        <h2 className="font-weight-bolder">From the Team Behind ERPNext</h2>
                        <p className="card-text">We have been building business software for over a decade
                            now. Learning from our mistakes and picking the best parts of our flagship product ERPNext,
                            we came up with a simple app that does one thing well, Accounting.</p>
                        <img alt="Frappe Team" className="team-image" src={frappeteammussoorie}></img>
                    </div>
                </div>
                <div className='sec3'>
                    <div className="container">
                        <h2 className='font-weight-bolder'>More Features</h2>
                        <div className="mt-4">
                            <div className="row mt-n4">
                                <div className="mt-4 col-12 col-sm-6 col-lg-3">
                                    <div className="card card-sm h-100">
                                        <div className="card-body">
                                            <h3 className="card-title">Journal Entries</h3>
                                            <p className="card-text">Record ad-hoc accounting entries for entering
                                                expenses, opening entires, and bank payments.</p>
                                        </div>
                                        <a className="stretched-link" href="#"></a>
                                    </div>
                                </div>
                                <div className="mt-4 col-12 col-sm-6 col-lg-3">
                                    <div className="card card-sm h-100">
                                        <div className="card-body">
                                            <h3 className="card-title">Invoice Templates</h3>
                                            <p className="card-text">Beautiful Invoice templates that you can further
                                                customize with the color and logo of your brand.</p>
                                        </div>
                                        <a className="stretched-link" href="#"></a>
                                    </div>
                                </div>
                                <div className="mt-4 col-12 col-sm-6 col-lg-3">
                                    <div className="card card-sm h-100">
                                        <div className="card-body">
                                            <h3 className="card-title">Works Offline</h3>
                                            <p className="card-text">Frappe Books uses a local file from your computer
                                                and when you create invoices, it saves them on your local machine.</p>
                                        </div>
                                        <a className="stretched-link" href="#"></a>
                                    </div>
                                </div>
                                <div className="mt-4 col-12 col-sm-6 col-lg-3">
                                    <div className="card card-sm h-100">
                                        <div className="card-body">
                                            <h3 className="card-title">Privacy by Default</h3>
                                            <p className="card-text">Frappe Books data is never uploaded to a cloud,
                                                which means you never compromise your ownership and privacy.</p>
                                        </div>
                                        <a className="stretched-link" href="#"></a>
                                    </div>
                                </div>
                                <div className="mt-4 col-12 col-sm-6 col-lg-3">
                                    <div className="card card-sm h-100">
                                        <div className="card-body">
                                            <h3 className="card-title">Portable</h3>
                                            <p className="card-text">Frappe Books uses the lightweight SQLite database
                                                which uses simple files to store their data.</p>
                                        </div>
                                        <a className="stretched-link" href="#"></a>
                                    </div>
                                </div>
                                <div className="mt-4 col-12 col-sm-6 col-lg-3">
                                    <div className="card card-sm h-100">
                                        <div className="card-body">
                                            <h3 className="card-title">Financial Reports</h3>
                                            <p className="card-text">Frappe Books comes with standard financial reports
                                                like Profit and Loss Statement, Trial Balance and Balance Sheet.</p>
                                        </div>
                                        <a className="stretched-link" href="#"></a>
                                    </div>
                                </div>
                                <div className="mt-4 col-12 col-sm-6 col-lg-3">
                                    <div className="card card-sm h-100">
                                        <div className="card-body">
                                            <h3 className="card-title">Multi-currency</h3>
                                            <p className="card-text">Record your invoices in your customer’s currency
                                                and Frappe Books will convert them in your currency.</p>
                                        </div>
                                        <a className="stretched-link" href="#"></a>
                                    </div>
                                </div>
                                <div className="mt-4 col-12 col-sm-6 col-lg-3">
                                    <div className="card card-sm h-100">
                                        <div className="card-body">
                                            <h3 className="card-title">Open Source</h3>
                                            <p className="card-text">Frappe Books is free and open-source software. Help
                                                us improve it by reporting issues or fixing them on GitHub.</p>
                                        </div>
                                        <a className="stretched-link" href="#"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sec4 pb-5 mb-5'>
                        <div className="mx-lg-lg-5 px-lg-5">
                                <div className="paddtb px-5 mx-5">
                                    <h2 className="title px-lg-5 mx-lg-5">Free Desktop Accounting Software for Small Businesses</h2>
                                    <p className="subtitle px-lg-5 mx-lg-5 pt-2 card-text">Frappe Books simplifies invoicing, billing, and accounting
                                        for freelancers and small business owners. </p>
                                    <div className="mt-4">
                                        <a className="btn btn-lg btn-primary" href="#">Download for free</a>
                                    </div>
                                    <div className="pt-2 card-text">
                                        Available for macOS, Linux and Windows
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
        )
    }
}