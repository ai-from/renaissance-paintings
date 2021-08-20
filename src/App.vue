<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/sold">Sold</router-link>-->
<!--    </div>-->
<!--    <router-view/>-->
    <Header />
    <Title />
    <Filters />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Title from "./components/Title";
import Filters from "./components/Filters";
import Footer from "./components/Footer";

export default{
  name: 'App',
  components: {
    Header,
    Title,
    Filters,
    Footer
  }
}
</script>

<style lang="sass">
#app
</style>
