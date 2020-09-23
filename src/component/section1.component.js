import React, { Component } from 'react'
import './styles.css'
import frappebookshero from '../assets/frappebookshero.png'
import bookscomichomepage from '../assets/bookscomichomepage.jpeg'

export default class Sec1 extends Component {
    render() {
        return (
            <div>
                <div className='d-lg-flex justify-content-between container'>
                    <div>
                        <h1 className='h1 sec1'>
				            Free, Modern Desktop Accounting
                        </h1>
                        <p className='sec1'>
				            Simple, well designed, desktop accounting software for freelancers and small businesses. Free and Open Source.
                        </p>
                        <div>
                            <a className="btn btn-lg btn-primary mr-3 font-weight-bold"  href="#">
                                Download
                            </a>
                            <a className="btn btn-lg btn-light mr-3 font-weight-bold" href="#">
                                GitHub
                            </a>
                        </div>
                    </div>
                    <img className='hero-image' src={frappebookshero}></img>
                </div>
                <div className='container' >
                    <img src={bookscomichomepage} style={{width:'100%'}} className='mt-5 pt-lg-5 bookcomic'/>
                </div>
            </div>
        )
    }
}