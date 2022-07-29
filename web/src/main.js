import { createApp } from 'vue'
import { createStore } from 'vuex'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import App from './App.vue'
import axios from "axios";
import router from './router'

const url = 'http://localhost:3000';


const store = createStore({

   



 state: {
    productItems: [],
    cartItems:[]

},

 mutations:{
    update_productItems(state, payload){
        state.productItems = payload;
    }
},

 actions:{
    async getProductItem({commit}){
       /* const response = await axios.get(`${url}/products`).then((response) =>{
            commit('update_productItems', response.data)
            console.log(state.productItems)
        })*/
        //.catch(error => console.log(error))
       let response = await axios.get(`${url}/products`);
       commit('update_productItems', response.data);
    }
},

getters : {
    productItems: state => state.productItems,
    productItemId: (state) => (id) => {
        return state.productItems.find(productItem => productItem.id === id)
    },
    
}

})

/**


const store = createStore({

    state(){
        return{
            counter: 1,

            number: 1

        
        }
    },
    mutations: {
        increment(state,payload){
            state.counter = state.counter + payload;
        },
        decrement(state,payload){
            state.counter = state.counter - payload;
        },

        changenum(state,payload){

            state.number = payload;

        }
    },

    /**actions:{
        setnum({commit}, number)
        commit( 'changeNum' ,number)

    }*/


library.add(fas),
createApp(App).use(router).use(store)
.component('fa',FontAwesomeIcon)
.mount('#app')
