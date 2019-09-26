import React, {Component} from 'react'
import Loader from "../components/UI/Loader/Loader";
import {connect} from 'react-redux'
import {fetchServices} from '../store/actions/servicesAction'



class OurServices  extends Component {


    state ={
        //Результаты
        ourServices:[

        ],
        loading: true

    }


    async componentDidMount() {
       // try {
       //     const response = await axios.get('ourServices.json')
       //
       //
       //
       //
       //     const ourServices = []
       //     response.data.forEach((key, index) =>{
       //
       //         ourServices.push({
       //             id: key,
       //             title: key.title,
       //             content: key.content
       //         })
       //     })
       //
       //     this.setState({
       //         ourServices,  loading: false
       //     })
       //
       //
       //
       //     }catch (e) {
       //      console.log(e)
       // }
        this.props.fetchServices()
       }

    //Цикл по услугам

    renderService(){
        return this.props.ourServices.map((service, index) => {
            return(

               <div key={index}>
                   <div className="col-sm-6 col-md-3  wow bounceIn">
                       <div className="single-item text-center">
                           <i className="fa fa-laptop"></i>
                           <h4 className="text-uppercase">{service.title}</h4>

                           <p>{service.content}</p>
                           <a href="/" className="btn btn-red text-uppercase">more</a>
                       </div>
                   </div>
               </div>
            )
        })
    }


    render() {
        return (
   <>
       <section id="service">
           <div className="container">
               <div className="row">
                   <div className="col-md-12  wow bounce">
                       <div className="section-heading text-center text-uppercase  wow bounceInUp">
                           <h2>НАШИ <span>УСЛУГИ</span></h2>
                       </div>
                   </div>
               </div>
           </div>

           <div className="container">
               <div className="row">

                   {/*<div className="col-sm-6 col-md-3  wow bounceIn">*/}
                       {/*<div className="single-item text-center">*/}
                           {/*<i className="fa fa-laptop"></i>*/}
                           {/*<h4 className="text-uppercase">{this.state.ourServices[0].title}</h4>*/}

                           {/*<p>{this.state.ourServices[0].content}</p>*/}
                           {/*<a href="/" className="btn btn-red text-uppercase">more</a>*/}
                       {/*</div>*/}
                   {/*</div>*/}

                   {
                       this.props.loading
                           ? <Loader/>
                           :
                           this.renderService()
                   }


               </div>
           </div>
       </section>
   </>
        )
    }
}


function mapSateToProps(state) {
    return {
        ourServices: state.Services.ourServices,
        loading: state.Services.loading
    }
}

function mapDispathToProps(dispath) {
    return {
        fetchServices: () => dispath(fetchServices())
    }
}

export default connect(mapSateToProps, mapDispathToProps)(OurServices)