<template>
  <div id="app">
    <Header />
    <Title />
    <Filters />
    <Search />
    <Paintings />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Title from "./components/Title";
import Filters from "./components/Filters";
import Search from "./components/Search";
import Paintings from "./components/Paintings";
import Footer from "./components/Footer";

export default{
  name: 'App',
  components: {
    Header,
    Title,
    Filters,
    Search,
    Paintings,
    Footer
  }
}
</script>

<style lang="sass">
#app
</style>
