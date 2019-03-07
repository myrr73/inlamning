<template>

  <div id="app">
    <!-- <div id="bg"></div> -->
    <div id="banner"> <img alt="" src="./assets/sprallig.svg"></div>

    <div id="nav">
      <div id="inner">
      <router-link tag="li" to="/">Hem</router-link> 
      <router-link tag="li" to="/butik">Butik</router-link> 
      <router-link tag="li" to="/omoss">Om Oss</router-link>
      <router-link tag="li" to="/Kundvagn">Kundvagn ({{ artInCart }})</router-link>
      </div>
    </div>
    
    <router-view/>
    <section></section>
    <div id="foot">
      <p>tobMyr projekt 2018</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
        load:true,
    }
},
computed: {
   artInCart() {return this.$store.getters.inCart.length; },
}
}
</script>

<style lang="scss">

@import "./css/variables.scss";


html, body, #app {
  max-width: 100%;
  overflow-x: hidden;
  border: 0;
  padding: 0;
  margin: 0;
}

#bg {
  
  position:absolute;
  width: 80%;
  height: 80%;
  z-index: -1;

}

#app{
  
  
    
  // background-color:rgba(141, 141, 141, 0.76);
   
  
    
    #banner {
      
      min-height: 5vh;
      max-height: 10vh;
      width: 100%;
      color: color(background);
      
      
      img{
          max-height: 50px;
          width: 100%;
      }
    }

  #nav {
   
    
    padding: 5px 0;
    border-radius: 5px;
    width: 100%;
    margin:auto;
    box-shadow: 0 5px 5px rgba(0,0,0,.15);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    font-style:italic;
    position: relative;
    text-shadow: 1px 2px rgba(0,0,0,.2);
    
    #inner{
      margin: 0 auto;
      max-width: 1200px;
      text-align: center;
      
    }
    

    #cart {
      

    }
    

      
  li{
    list-style-type: none;
    display: inline-block;
    margin: 10px 10px 10px 10px;
    &.router-link-exact-active{
        text-decoration: underline;
      }
    
    
  }
}
      section{

        flex:1;
      }
      #foot {
        display: flex;
        justify-content: center;
        
        

      }

}

</style>
