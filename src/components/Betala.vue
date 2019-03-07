<template>
    <div class="betala">
        <header>
            <h1 id="rubbe"> Din Kundvagn </h1>
        </header>
            <section id="korgen">
                <table class="table">
                    <tbody>
                        <tr>
                            <th>Produkt</th>
                            <th>Pris</th>
                        </tr>
                        <tr v-for="(products, index) in cart">
                            <td>{{ products.name }}</td>
                            <td>SEK: {{ products.price }}:-</td>
                            <td>
                            <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button>
                            </td>
                        </tr>
                        <tr>
                            <th>TOTALT</th>
                            <th>  {{ summa }} SEK:-</th>
                        </tr>   
                    </tbody>
                </table>
            </section>
    </div>
</template>
    

<script>
export default {
    name:'Betala',
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
    cart() {
      return this.$store.getters.inCart.map((cartArt) => {
        return this.$store.getters.getProducts.find((getProductsArt) => {
          return cartArt === getProductsArt.id;
        });
      });
    },
    }
}
</script>
            
<style lang="scss" scoped>

.betala {
   padding: 0 20px;
   margin: 0 10px;
   text-align: center;
   
}
#rubbe{
        text-shadow: 2px 3px rgba(0,0,0, .2);
    }

    
</style>
