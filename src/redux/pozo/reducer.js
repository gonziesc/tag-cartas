import {type as getCartasPozoType} from "../pozo/actions/getCartasPozo";

const initialState = { 
    cartasPozo : [] 
}

const reducer = (state = initialState, action) => {
    debugger;
    switch(action.type){
        
        case(getCartasPozoType):{
            return{
                ...state,
                cartasPozo : state.cartasPozo.concat(action.cartasPozo)
            }
        }
        default:
            return state;
    }
}

export default reducer;