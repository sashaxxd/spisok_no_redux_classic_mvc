import React, {Component} from 'react'
import WOW from "wow.js/dist/wow.js";

export default class HomeSection  extends Component {


    componentDidMount() {
        new WOW().init();
    }

    render() {
        return (
            <>
                <section id="home">
                    <div className="overlay"></div>
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">

                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 wow bounceInUp">
                                            <div className="home-text text-center">
                                                <h1>РАЗРАБОТКА<span>САЙТОВ</span></h1>

                                                <h3>WEB DEVELOPMENT GRODNO</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 wow bounceInUp">
                                            <div className="home-text text-center">
                                                <h1>РАЗРАБОТКА<span>САЙТОВ</span></h1>

                                                <h3>WEB DEVELOPMENT GRODNO</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 wow bounceInUp">
                                            <div className="home-text text-center">
                                                <h1>РАЗРАБОТКА<span>САЙТОВ</span></h1>

                                                <h3>WEB DEVELOPMENT GRODNO</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 wow bounceInUp">
                                            <div className="home-text text-center">
                                                <h1>РАЗРАБОТКА<span>САЙТОВ</span></h1>

                                                <h3>WEB DEVELOPMENT GRODNO</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
            </>
        )
    }
}