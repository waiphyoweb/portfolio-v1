<template>
  <Navbar :pages="pages" :active-page="activePage" :nav-link-click="(index) => activePage = index" />
  <router-view />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  data() {
    return {
      activePage: 0,
      pages: [
        { link: {text: "Home", url: "/"}, content: "" },
        { link: {text: "Projects", url: "/projects"} },
        { link: {text: "Contact", url: "/contact"} },
        { link: {text: "Joke", url: "/joke"} },
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Courier New', Courier, monospace;
  color: #2c3e50;
}
</style>
