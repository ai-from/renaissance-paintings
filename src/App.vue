<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/sold">Sold</router-link>-->
<!--    </div>-->
<!--    <router-view/>-->
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header";

export default{
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="sass">

</style>
