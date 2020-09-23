import React, { Component } from 'react'
import './styles.css'
import booksgeneralledger from '../assets/booksgeneralledger.png'
import invoicing from '../assets/invoicing.png'
import payments from '../assets/payments.png'
import reportpnl from '../assets/reportpnl.png'
import booksdashboarda2ada9 from '../assets/booksdashboarda2ada9.png'

export default class Sec2 extends Component {
    render() {
        return (
            <div>
                <div className="bg-light" >
                    <div className="container">
                        <div className="comments">
                            <div className="row mt-n4">
                                <div className="mt-4 col-12 col-md-6">
                                    <div className="card card-lg h-100">
                                        <div className="card-body">
                                            <h3 className="h4 card-title font-weight-bold">Small Business Accounting</h3>
                                            <p className="card-text">Everything you need from a small, simple small
                                                business accounting tool. Billing, Payments, Ledgers, Invoices,
                                                Reporting. A fully featured replacement for tools like GNU Cash and
                                                Tally.</p>
                                        </div>
                                        <a className="stretched-link" href="https://frappebooks.com/docs"></a>
                                    </div>
                                </div>
                                <div className="mt-4 col-12 col-md-6">
                                    <div className="card card-lg h-100">
                                        <div className="card-body">
                                            <h3 className="h4 card-title font-weight-bold">No Cloud</h3>
                                            <p className="card-text">Cloud apps make you dependent on service provider.
                                                A service like that is never truly free, and it does not have to be like
                                                that. With desktop apps, you have much more control over your data.</p>
                                        </div>
                                        <a className="stretched-link" href="https://frappebooks.com/download"></a>
                                    </div>
                                </div>
                                <div className="mt-4 col-12 col-md-6">
                                    <div className="card card-lg h-100">
                                        <div className="card-body">
                                            <h3 className="h4 card-title font-weight-bold">Free and Open Source</h3>
                                            <p className="card-text">Frappe Books is free software. This means it comes
                                                with the four essential freedoms. You are allowed to run it as you wish,
                                                you can look at its source code and modify it. </p>
                                        </div>
                                        <a className="stretched-link" href="https://github.com/frappe/books"></a>
                                    </div>
                                </div>
                                <div className="mt-4 col-12 col-md-6">
                                    <div className="card card-lg h-100">
                                        <div className="card-body">
                                            <h3 className="h4 card-title font-weight-bold">Modern Web Friendly UI</h3>
                                            <p className="card-text">Frappe Books is built with our homegrown framework
                                                FrappeJS which is based on NodeJS and bundled with Electron. But it is
                                                still designed in a way how a desktop software functions.</p>
                                        </div>
                                        <a className="stretched-link" href="https://github.com/frappe/frappejs"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-5 mt-5">
                    <div className="container">
                        <h2 className="font-weight-bolder">Everything You Need</h2>
                        <p className="font-weight-normal card-text">
                            Create professional invoices, generate beautiful PDFs and send them to your customers.
                        </p>
                        <div className="mt-5">
                            <ul aria-label="Everything You Need" className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a aria-controls="id-8700116e7ed7" aria-selected="true" className="nav-link active"
                                       data-toggle="tab" href="#id-8700116e7ed7" id="id-73dfdcae234b" role="tab">
                                        Dashboard
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a aria-controls="id-8d53809dfc2b" aria-selected="false" className="nav-link"
                                       data-toggle="tab" href="#id-8d53809dfc2b" id="id-705600e70c98" role="tab">
                                        Invoicing
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a aria-controls="id-3e6e36166837" aria-selected="false" className="nav-link"
                                       data-toggle="tab" href="#id-3e6e36166837" id="id-da70e5acbb26" role="tab">
                                        Payments
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a aria-controls="id-2868ccd0de25" aria-selected="false" className="nav-link"
                                       data-toggle="tab" href="#id-2868ccd0de25" id="id-a96c154e90c7" role="tab">
                                        Financial Reports
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a aria-controls="id-877c9d11192b" aria-selected="false" className="nav-link"
                                       data-toggle="tab" href="#id-877c9d11192b" id="id-3c86ff76f77d" role="tab">
                                        Ledger
                                    </a>
                                </li>
                            </ul>
                            <div className="mt-4 tab-content">
                                <div aria-labelledby="id-73dfdcae234b" className="tab-pane fade show active" id="id-8700116e7ed7" role="tabpanel">
                                    <div className="from-markdown">
                                        <p>
                                            <img alt="Dashbaord" className="screenshot" src={booksdashboarda2ada9}></img>
                                        </p>
                                    </div>
                                </div>
                                <div aria-labelledby="id-705600e70c98" className="tab-pane fade" id="id-8d53809dfc2b" role="tabpanel">
                                    <div className="from-markdown">
                                        <p><img alt="Invoicing" className="screenshot" src={invoicing}></img></p>
                                    </div>
                                </div>
                                <div aria-labelledby="id-da70e5acbb26" className="tab-pane fade" id="id-3e6e36166837"
                                     role="tabpanel">
                                    <div className="from-markdown">
                                        <p><img alt="Payments" className="screenshot" src={payments}></img></p>
                                    </div>
                                </div>
                                <div aria-labelledby="id-a96c154e90c7" className="tab-pane fade" id="id-2868ccd0de25" role="tabpanel">
                                    <div className="from-markdown">
                                        <p><img alt="Financial Reports" className="screenshot" src={reportpnl}></img></p>
                                    </div>
                                </div>
                                <div aria-labelledby="id-3c86ff76f77d" className="tab-pane fade" id="id-877c9d11192b"
                                     role="tabpanel">
                                    <div className="from-markdown">
                                        <p><img alt="General Ledger" className="screenshot" src={booksgeneralledger}></img></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}