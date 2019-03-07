<template>
  <div>
    <Betala/>
  </div>
</template>





<script>

import Betala from '@/components/Betala.vue'


export default {
  data(){
    return{
        load:true,
    }
},
    name: 'Kundvagn',
    
    components: {
      Betala
      
    },
    
}
</script>
