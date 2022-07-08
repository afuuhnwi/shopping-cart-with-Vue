import axios from "axios";
import cartModule from "../cart";

const state = {
    productItems:[]
}

const mutations ={
    update_product (state, payload) {
        state.productItems = payload;
    }
}

const actions = {
    getProduct({commit}){
        axios.get(`/API/product-data.json`).then((response) => {
            commit('update_product', response.data)
        });
    }
}

const getters = {
    productItems: state => state.productItems,
    productItemId: (state) => (id) =>{
        return state.productItems.find(productItem => productItem.id === id)
    }
}

const productModule ={
    state,
    mutations,
    actions,
    getters
}
export default cartModule;