<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view/>
    <footer-item></footer-item>
  </div>
</template>

<script>
import TopNav from './components/ui/TopNav'
import FooterItem from './components/ui/Footer'
export default {
  name: 'App',
  components: {
    TopNav,
    FooterItem
  }
}
</script>

<style lang="scss">
  @import '../assets/css/main.css';
</style>
