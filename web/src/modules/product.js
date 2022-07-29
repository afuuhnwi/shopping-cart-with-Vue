import axios from "axios";

const url = 'http://localhost:3000'

const state = {
    productItems: []
}

const mutations ={
    update_productItems(state, payload){
        state.productItems = payload;
    }
}

const actions={
    getProductItem({commit}){
        const response = axios.get(`${url}/products`).then((response) =>{
            commit('update_productItems', response.data)
            console.log(state.productItems)
        })
        //.catch(error => console.log(error))
       
    }
}

const getters = {
    productItems: state => state.productItems,
    productItemId: (state) => (id) => {
        return state.productItems.find(productItem => productItem.id === id)
    },
    
}

const productMod = {
    state,
    mutations,
    actions,
    getters
}

export default productMod;