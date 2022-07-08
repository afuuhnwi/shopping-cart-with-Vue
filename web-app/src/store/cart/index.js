import axios from "axios";


const state = {
    cartItems:[]
}

const mutations ={
    update_cart(state, payload){
        state.cartItems = payload;
    }
}

const actions = {
    getCartItem({commit}){
        axios.get('/API/cart-data.json').then((response) =>{
            commit('update_cart', response.data)
        });
    },

    addcartItem({commit}, cartItem){
        axios.post('/API/cart-data.json', cartItem).then((response) =>{
            commit('update_cart', response.data)
        });
    },
    removeCartItem({commit}, cartItem){
        axios.delete('/API/cart-data.json', cartItem).then((response) => {
            commit('update_cart', response.data)
        });
    }
}

const getters = {
    cartItems: state => state.cartItems,
    cartTotal: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return(cartItem.quantity * cartItem.price) + acc; 
        }, 0).toFixed(2);
    },

    cartQuantity: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return cartItem.quantity + acc;
        }, 0);
    }
}

const cartModule = {
    state,
    mutations,
    actions,
    getters
}

export default cartModule;