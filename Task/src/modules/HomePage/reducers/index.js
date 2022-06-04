import { COFFEE_ACTIONS } from "../actions/const";

const InitialState={
    isLoading:false,
    coffees:[],
    message:'',
    status:'CREATED',
    numberCart:0
};

export const coffeeReducer = (state=InitialState,action)=>{
    switch (action.type) {
        case `${COFFEE_ACTIONS.GET_COFFEE}_SUCCESS`:
            return{
                ...state,
                coffees: action.payload,
                isLoading:false,
            }
        case `${COFFEE_ACTIONS.GET_COFFEE}_ERROR`:
            return{
                ...state,
                message: action.payload,
                coffees:[],
                isLoading:false,
            }
        case `${COFFEE_ACTIONS.ORDER_COFFEE}`:
            if(state.numberCart===0){
                let cart = {
                    id:action.payload.id,
                    quantity:1,
                    name:action.payload.name,
                    price:action.payload.price
                } 
                state.coffees.push(cart); 
            }
            else{
                let check = false;
                state.coffees.map((item,key)=>{
                    if(item.id===action.payload.id){
                        state.coffees[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.payload.id,
                        quantity:1,
                        name:action.payload.name,
                        price:action.payload.price
                    }
                    state.coffees.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1
            }
        default:
            return state;
    }
}