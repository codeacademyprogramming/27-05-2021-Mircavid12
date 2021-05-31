import {COFFEE_ACTIONS} from './const';
import axios from 'axios';

export const getCoffees=()=>dispatch=>{
    axios
      .get("https://isko88.github.io/coffee.json")
      .then(response => dispatch({type:`${COFFEE_ACTIONS.GET_COFFEE}_SUCCESS`, payload: response.data}))
      .catch(error => dispatch({type:`${COFFEE_ACTIONS.GET_COFFEE}_ERROR`, payload: error}));  
} 

export const orderCoffees=(payload)=>{
  return{
    type:COFFEE_ACTIONS.ORDER_COFFEE,
    payload
  } 
} 

