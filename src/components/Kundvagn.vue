<template>
<div>
    
</div>
<!-- <div>
    
    <div id="Kundvagn" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Kundvagn</h5>
                    <button class="close" data-dismiss="modal">
                    &times;
                    </button>
                </div>
            <div class="modal-body">
                <table class="table">
                    <tbody>
                        <tr v-for="(products, index) in cart">
                            <td>{{ products.name }}</td>
                            <td>SEK: {{ products.price }}:-</td>
                            <td>
                             <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button>
                            </td>
                            </tr>
                        <tr>
                            <th></th>
                            <th>SEK: {{ summa }}:-</th>
                        </tr>   
                    </tbody>
                </table>
            </div>
            <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">Fortsätt shoppa</button>
            
           
            </div>
            </div>
        </div>
    </div>
</div>  -->
</template>



<script>




export default {
  name: 'Kundvagn',
  
data(){
    return{
        load:true,
    }
},
  methods: {
    removeFromCart(index) {
      this.$store.dispatch('removeFromCart', index);
    },
  },

  
  computed: {

      inCart() {return this.$store.getters.inCart;},

      artInCart() {return this.$store.getters.inCart.length; },

      summa() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    },

    
    //            <-- cart() -->  
    // #1 .map gör så den loopar igenom min inCart array som innehåller arrayId för alla produkter där
    // #2 varje loop använder den .find som kollar igenom min getProducts array(lokalJson).
    // #3 .find plockar ut de produkter ur getProducts vars id matchar inCart id
   cart() {
      return this.$store.getters.inCart.map((cartArt) => {
        return this.$store.getters.getProducts.find((getProductsArt) => {
          return cartArt === getProductsArt.id;
        });
      });
    },
  },
    
  
  
};
</script>

<style lang="scss" scoped>
#cart{
    
    color:white;
    background-color: black;
    border-color:black;
}




</style>
