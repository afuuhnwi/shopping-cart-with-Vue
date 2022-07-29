<template>
    <div v-for="productItem in productItems" :key="productItem.id">
        <ListItem :productItem="productItem"/>


    </div>
    <div v-for="items in product" :key="items.id">
    {{items}}

    </div>
</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
import ProductList from './ProductList.vue'
    export default {
        name: "Products",
        data(){
            return{
                product: null
            }
        },
        
        components: {

            ListItem: ProductList

        },
    computed:{
    ...mapGetters(['productItems'])
    },
    created() {

    this.$store.dispatch('getProductItem');
    },
    
        mounted() {
            axios.get('http://localhost:3000/products').then(response => this.product = response )
        },

        
    }
   

   
</script>

<style >

</style>