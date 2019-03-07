<template>
    <div id="Katalog" class="container">
      <div class="row">
        <Artiklar
          v-for="products in getProducts"
          :key="products.id"
          :id="products.id"
          :productName="products.name"
          :productPrice="products.price  " 
          :productInfo="products.info" 
          :color="products.color" 
          :size="products.size"
          :productImage="products.image"/>
          
      </div>
      <!-- <div class="row">
        <Bilder
          v-for="item in getImages"
          :key="item.id"
          :id="item.id"
          :imgImage="item.image"
          :imgName="item.name"/>
      </div> -->
   </div>
</template>

<script>

import Artiklar from './Artiklar.vue'
import Kundvagn from './Kundvagn.vue'
import Bilder   from './Bilder.vue'




export default {
    name: 'Katalog',
    computed: {
      
      
      

      // getImages (){
      //   return this.$store.getters.getImages;
      // },
        
        getProducts (){
          //return this.$store.state.myJson;
          return this.$store.getters.getProducts;
        },

        inCart (){
          // return this.$store.state.inCart;
          return this.$store.getters.inCart;
        }
      
    },
    
    components: {
      Artiklar,
      Bilder,
    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>


