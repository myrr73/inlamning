<template id="frame2">
    <!-- <div class="asd">
        <header> <h1>hej</h1></header>
        <table class="table">
            <tbody>
                <tr>
                    <img v-bind:src="item.imgImage" class="rounded float-left" :alt="item.imgName">
                </tr>
            </tbody>

        </table>
    
    </div> -->
</template>

<script>

export default {
  name: 'Bilder',
  props: ['id', 'imgName','imgImage',],

  computed:{
      getImages () {
          return this.$store.getters.getImages;
      }
  },

   methods: {
    addToCart(id) {
      this.$store.dispatch('addToCart', id);
    },
  },
  
  
}
</script>

<style lang="scss" scoped>

</style>
