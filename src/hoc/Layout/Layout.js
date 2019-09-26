import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'


//Обычный импорт
import './animate.css';
import './font-awesome.css';
import  './Layout.css';
import  './responsive.css';

class Layout extends Component{
    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHendler = () => {
        this.setState({
            menu: false
        })
    }

     render(){
         return(
             <div className="wrapper">
             <div className="content">
             <header>
                 <nav className="navbar navbar-inverse navbar-fixed-top">
                     <div className="container">
                         <div className="navbar-header">
                             <button type="button" className="navbar-toggle" data-toggle="collapse"
                                     data-target="#myNavbar">
                                 <span className="icon-bar"></span>
                                 <span className="icon-bar"></span>
                                 <span className="icon-bar"></span>
                             </button>
                             <a className="navbar-brand" href="/"><img src={ require('../../images/logo.png') } alt=""/></a>
                         </div>
                         <div className="collapse navbar-collapse" id="myNavbar">
                             <ul className="nav navbar-nav navbar-right">
                                 <li className="smooth-scroll"><NavLink to="/" exact>Главная</NavLink></li>
                                 <li className="smooth-scroll"><NavLink to="/our-services">Наши услуги</NavLink></li>
                                 <li className="smooth-scroll"><NavLink to="/contacts">Контакты</NavLink></li>
                             </ul>
                         </div>
                     </div>
                 </nav>
             </header>


                 <main>
                     {this.props.children}
                 </main>
             </div>

                 <div className="footer">
                 <footer>
                     <div className="container">
                         <div className="row">
                             <div className="col-sm-2 text-center">
                                 <a href="/"><img src={ require('../../images/fo-logo.png') } alt="logo"/></a>
                             </div>
                             <div className="col-sm-8">
                                 <div className="footer-p text-center">
                                     <p>© Copyright 2010 - 2019, Все права защищены</p>
                                 </div>
                             </div>
                             <div className="col-sm-2">
                                 <div className="footer-social text-center">
                                     <a href="/"><i className="fa fa-facebook"></i></a>
                                     <a href="/"><i className="fa fa-twitter"></i></a>
                                     <a href="/"><i className="fa fa-instagram"></i></a>
                                     <a href="/"><i className="fa fa-google-plus"></i></a>
                                     <a href="/"><i className="fa fa-rss"></i></a>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </footer>
                 </div>
             </div>

         )
     }
}

export default Layout;