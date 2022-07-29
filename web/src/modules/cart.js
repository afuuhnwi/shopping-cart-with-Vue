import axios from "axios";

const url = 'http://localhost:3000'

const state = {
    cartItems: []
}

const mutations ={
    update_cartItems(state, payload){
        state.cartItems = payload;
    }
}

const actions={
    getCartItem({commit}){
        const response = axios.get(`${url}/cart`).then((response) =>{
            console.log(response);
            commit('update_cartItems', response.data)
        })
        .catch(error => console.log(error))
    },
    addToCart({commit}, cartItem){
        axios.post(`${url}/cart`,cartItem).then((response) =>{
            commit('update_cartItems',response.data)
        });
    },
    cartItemCount(){
        state =>{
            return state.cartItems.length;
        }
    }
}

const getters = {
    
}

const cartMod = {
    state,
    mutations,
    actions,
    getters
}

export default cartMod;