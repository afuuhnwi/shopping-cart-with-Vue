<template>
   <h2>{{productItem.title}}</h2>
   <h2>{{productItem.productItem}}</h2>
</template>

<script>
//import { response } from 'express'
import { mapActions } from 'vuex'
    export default {
        name: "ProductList",
        props: ["productItem"],
        
        methods: {
            ...mapActions(["addCartItem"])
        },

        
    }
</script>

<style >

</style>