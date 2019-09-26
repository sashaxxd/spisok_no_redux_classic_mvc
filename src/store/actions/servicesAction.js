import axios from '../../axios/axios-main'
import {FETCH_SERVICES_START, FETCH_SERVICES_SUCCESS, FETCH_SERVICES_ERROR} from "./actionTypes";


export function fetchServices() {
    return async dispatch => {
        dispatch(fetchServicesStart())



           try {
               const response = await axios.get('ourServices.json')




               const ourServices = []
               response.data.forEach((key, index) =>{

                   ourServices.push({
                       id: key,
                       title: key.title,
                       content: key.content
                   })
               })


               // this.setState({
               //     quizes,  loading: false
               // })

               dispatch(fetchServicesSuccess(ourServices))

               }catch (e) {
               dispatch(fetchServicesError(e))

           }
    }
}

export function fetchServicesStart() {
   return{
       type: FETCH_SERVICES_START
   }
}

export function fetchServicesSuccess(ourServices) {
    return{
        type: FETCH_SERVICES_SUCCESS,
        ourServices: ourServices
    }
}

export function fetchServicesError(e) {
    return{
        type: FETCH_SERVICES_ERROR,
        error: e
    }
}