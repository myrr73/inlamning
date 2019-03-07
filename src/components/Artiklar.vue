<template id="frame">
  
    <div class="col-xs-4">
      
        <div class="card">
          <!-- <img class="card-img-top" v-bind:src="productImage" width="125"> -->
            <div class="card-body">
              <h5 class="card-title">{{ productName }}</h5>
              <img id="artpic" :src="productImage" width="125">
              <!-- <div class="card-info">{{ productInfo }}</div> -->
              <div class="card-info">{{ size }}</div> 
              <div class="card-info">{{ color }}</div>
              <div class="row justify-content-end">
              <div class="card-text">SEK: {{ productPrice }}:-</div>
              <button id="bluebutt" class="btn btn-outline-dark" @click="addToCart(id)">Lägg till</button>
              </div>
        </div>
      </div>
    </div>
</template>
              



<script>



export default {
  name: 'Artiklar',
  props: ['id', 'productName','productImage', 'size','productInfo', 'color','productPrice'],
  

  methods: {
    addToCart(id) {
      this.$store.dispatch('addToCart', id);
    },
  },
  
};
</script>

<style lang="scss">

@import "../css/variables.scss";


#bluebutt {
  box-shadow: 0 10px 30px rgba(0,0,0, .3);
  margin: $standard;
  width: 20vw;
  font-size: 13px;
  font-weight: 500;
  position: relative;
}
#bluebutt:active{
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

#artpic{
  width: 100px;
  height: auto;
  margin:0 50px;
  padding: 10px 0;
  display: flex;
  align-content:center;
  position: relative;
}

.card-body{
  box-shadow: 0 10px 30px rgba(0,0,0, .3);
  margin-bottom: 10px;
  box-sizing:content-box;
  position: relative;
}
.col-xs-4{
  margin: 0 auto;
  padding: $standard;
  position: relative;
 
}

.card-title{
padding: $standard;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-size: 16px;
font-weight:bold;
position: relative;
}

.card-info{
  padding: $standard;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 12px;
  font-weight: 600;
  position: relative;
}

.card-text{
  padding: 10px 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 14px;
  font-weight: 800;
  font-style: oblique;
  position: relative;
}

</style>
