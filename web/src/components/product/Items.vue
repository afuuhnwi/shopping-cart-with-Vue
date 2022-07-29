<template>

    <div v-for="items in products" v-bind:key="items.id" class="body">
     
     <div v-for="tag in items" :key="tag.id">
     <div class="gallery">
         <div class="card">
            <p>
            <img :src="tag.img" />
            </p>
            <p>
             <h4>{{tag.title}}</h4>
           </p>
            <p>
                 {{tag.description}}
            </p>
            <p>
                ${{tag.price}}
            </p>
           
            <p>
                
                <button class="bt"  >
                    Add To Cart
                </button>
                
            </p>
         

        </div>
     </div>  

     </div>

    </div>
   
</template>

<script>
//import axios from 'axios'
import { mapActions, } from 'vuex'
 


    export default {

        name: "Items",

       /*data(){
            return{
                products: []
            }
        },*/

        computed:{
           
            products() { 
                return this.$store.state.productItems;
            }

        } ,
         mounted() {
            //axios.get('http://localhost:3000/products').
           // then(response => this.product = response )
         //this['getProductItem']();
  
          //this.products = this.$store.dispatch('getProductItem')
           // console.log(this.products);
          this.$store.dispatch('getProductItem')


         },

        methods:{
        
          
        }

    }
</script>

<style >
.card{
   width: 400px;
   height: 500px;
    margin: 10%;
    box-sizing: border-box;
    float: right;
    text-align: center;
    border-radius: 20px;
    cursor: pointer;
    padding-top: 2px;
    box-shadow: 0 14px 28px rgb(0,0,0,0.25);
    background: white;
  

}
img{
    width: 250px;
    height: 250px;
    justify-items: center;
   
}
a{
    text-decoration: none;
}
.gallery{
    display: grid;
    position: relative;
    justify-content: center;
    float: left;
    grid-gap:20px;
    padding: 20px 50px; 
}



.bt{
    background-color: green;
    color: white;
}
.body{
   
    margin: 60px;
   
   
}

</style>