<template>
     <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
         
        </a>
      </div>
      
      <div class="navbar-menu">

        <div>
       <strong>Mech Pro</strong> 
      </div>

        <div class="navbar-end">
           <router-link to="/inventory" class="button is-primary">
               <strong> Inventory <fa icon="house" /> </strong>
              </router-link> 
            </div>

        <div class="navbar-start">
           
            <router-link to="/cart" > <strong> Cart  
                <v-badge
                 color="green"
                content="0">
                    <fa icon="cart-shopping" />  
                </v-badge>
                </strong>
                
                <span> {{cartQuantity}}</span> 
              </router-link>
         </div>
         
          
        
            
          </div>
       
     
    </nav>
</template>

<script>

    export default {
        name: 'Nav-bar',
        
    }
</script>

<style >

.navbar-menu div{

  float: left;
  text-align: center;
  padding: 50px 200px;
  font-size: xx-large;
}
.navbar-end{
   
    float: left;
    padding-top: 100px;
   
}


</style>