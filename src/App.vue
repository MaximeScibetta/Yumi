<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view/>
  </div>
</template>

<script>
import TopNav from './components/ui/TopNav'
export default {
  name: 'App',
  components: {
    TopNav,
  }
}
</script>

<style lang="scss">
  @import '../assets/css/main.css';
</style>
