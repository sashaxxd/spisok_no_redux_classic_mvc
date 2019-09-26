import React from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import {Route, Switch} from 'react-router-dom'
import HomeSection from "./containers/HomeSection";
import Contacts from "./containers/Contacts";
import OurServices from "./containers/OurServices";


function App() {
    return (
        //Шаблон сайта
        <Layout>

            <Switch>
                <Route path="/" exact component={HomeSection} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/our-services" component={OurServices} />
            </Switch>


        </Layout>

    );
}

export default App;
