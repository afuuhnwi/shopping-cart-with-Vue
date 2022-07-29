<template>
  <div class="hello">
    <h1>{{  }}</h1> 
  </div>

  <div>
    <ul>
      <li>
         <el-carousel v-for="img in Products.imgUrl" :key="img">{{imgUrl}}
          <img :src="setImage(imgUrl)" >
         </el-carousel>



      </li>
      <li v-for="product in Products" :key="product.id"> {{product.price}}

      </li>
     
    </ul>
     </div>
 
</template>

<script>
//import {mapState, mapGetters} from "vuex";
import product from "../Product.json"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
     Products: product,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
	.images {
			width: 300px;
			margin-right: 20px;
			background-color: $color-background;
			box-shadow: $color-shadow 0px 0px 3px 2px;
			border-radius: 10px;

			.el-carousel {
				padding: 12px;
				border-radius: 10px;

				img {
					border-radius: 5px;
					width: 100%;
				}
			}
		}
</style>
