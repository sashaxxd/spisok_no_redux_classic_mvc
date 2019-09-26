//Корневой редюсер - редюсеры это функции которые изменяют state - состояния
import {combineReducers} from 'redux'
import OurServicesReducer from './OurServicesReducer'

export default combineReducers({
    Services: OurServicesReducer
})