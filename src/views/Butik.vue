<template>
  <div class="butik">
    <h1></h1>
    <Katalog/>
    
  </div>
</template>

<script>

import Katalog from '@/components/Katalog.vue'           //Hämta components och döp dom


export default {
  name: 'butik',

  data(){



    return{
        load:true,
    }
    
    
},
    // created: function () {

    //     console.log('asd')
    //      this.$store.actions.loadSprallApi();
         

    //     },

  
  components: {
   
          Katalog                                 //Definera components till tag
    
  }
}
</script>

<style lang="scss" scoped>

#butik{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 
 

</style>
