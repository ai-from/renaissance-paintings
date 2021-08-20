<template>
  <div id="app">
    <Header />
    <Title />
    <Filters />
    <Search />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Title from "./components/Title";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Search from "./components/Search";

export default{
  name: 'App',
  components: {
    Header,
    Title,
    Filters,
    Search,
    Footer
  }
}
</script>

<style lang="sass">
#app
</style>
