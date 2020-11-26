<template>
  <div id="app">
    <Navbar/>
    <Main/>
    <PDF/>
    <Avator/>
    <Product/>
  </div>

  
</template>

<script>
import Navbar from './components/navbar.vue'
import Main from './components/main.vue'
import PDF from './components/pdf.vue'
import Avator from './components/avator.vue'
import Product from './components/product.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
    Navbar,
    Main,
    PDF,
    Avator,
    Product,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
