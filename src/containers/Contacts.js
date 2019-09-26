import React, {Component} from 'react'


export default class Contacts extends Component {


    render() {
        return (
            <>

                <section id="contact">
                    <div className="section-heading contact-heading text-center text-uppercase">
                        <h2>OUR <span>Contact</span></h2>
                    </div>

                    <div id="map">


                    </div>
                    <div id="map-overlay" className="text-left text-uppercase">
                        <div className="container">
                            <h2>+29 20 466 4241</h2>

                            <h2>info@robotx.com</h2>
                        </div>
                    </div>

                    <div className="contact-form">
                        <div className="container">
                            <div className="row">
                                <form action="#">

                                    <div className="col-sm-4">
                                        <label htmlFor="usr">Your Name</label>
                                        <input type="text" className="form-control" id="usr"/>
                                    </div>
                                    <div className="col-sm-4">
                                        <label htmlFor="email">Your Email</label>
                                        <input type="email" className="form-control" id="email"/>
                                    </div>
                                    <div className="col-sm-4">
                                        <label htmlFor="number">Your Number</label>
                                        <input type="number" className="form-control" id="number"/>
                                    </div>
                                    <div className="col-sm-12">
                                        <label htmlFor="massage">Your Massage</label>
                                        <textarea className="form-control" rows="10" id="massage"/>

                                        <button type="submit" className="btn red-btn"> SEND YOUR MESSAGE</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}