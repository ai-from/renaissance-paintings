<template>
  <div id="app">
    <Header />
    <Title />
    <div class="app__filter-search">
      <Filters />
      <Search />
    </div>
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
  max-width: 1920px
  margin: 0 auto
  .title
    margin: 80px 0
  .app__filter-search
    display: grid
    grid-template-columns: 1fr 1fr
    margin: 0 0 90px
    .search
      justify-self: right
  .footer
    margin: 150px 0 0

  .title, .app__filter-search, .paintings, .footer
    display: none
</style>
