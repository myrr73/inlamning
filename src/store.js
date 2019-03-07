import Vue from 'vue'
import Vuex from 'vuex'
// import json from '../SPRALLCLOTH.json'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  
      
 

  
  state: {
   
    bilder: [
      {
        id:1,
        name: 'img1',
        image: require('@/assets/logo.png')
      },
      // {id:1, name:'Img1', image:"@/assets/logo.png"},
      // {id:2, name:"Img2", image:"@/assets/logo.png"},
      // {id:3, name:"Img3", image:"@/assets/logo.png"},
      // {id:4, name:"Img4", image:"@/assets/logo.png"},
      // {id:5, name:"Img5", image:"@/assets/logo.png"},
      // {id:6, name:"Img6", image:"@/assets/logo.png"},
      // {id:7, name:"Img7", image:"@/assets/logo.png"},
      // {id:8, name:"Img8", image:"@/assets/logo.png"},
      // {id:9, name:"Img9", image:"@/assets/logo.png"},
      // {id:10, name:"Img10", image:"@/assets/logo.png"},
      // {id:11, name:"Img11", image:"@/assets/logo.png"},
      // {id:12, name:"Img12", image:"@/assets/logo.png"},
      // {id:13, name:"Img13", image:"@/assets/logo.png"},
      // {id:14, name:"Img14", image:"@/assets/logo.png"},
      // {id:15, name:"Img15", image:"@/assets/logo.png"},
      // {id:16, name:"Img16", image:"@/assets/logo.png"}
      
    ],
    items: [],
    inCart: [],
    // myJson: api,

    // url: 'http://localhost/php1/sprallcloth.php',
    // api: "Loading...",
    
    // created: function(){
    //   this.actions.loadSprallApi();
    // },

    
  },
 
  getters: {

    

    getImages: state => {
      return state.bilder;
    },
    getProducts: state => {
      return state.items;
    },
    inCart: state=>{
      return state.inCart;
    },
    
  },
  
  mutations: {
    ADD_TO_CART(state, id) { state.inCart.push(id); },

    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1);},

    updateStore(state, items) { state.items = items},
    
  },
  

  actions: {
    addToCart(context, id) { context.commit('ADD_TO_CART', id); },

    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },

    initStore (context) {
      axios.get('http://localhost/php1/sprallcloth.php')
        .then(function (response) {
          context.commit('updateStore', response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },

    
  
  
})
