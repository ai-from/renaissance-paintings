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
    max-width: 1216px
    display: grid
    grid-template-columns: 1fr 1fr
    margin: 0 auto 90px
    .search
      justify-self: right
  .footer
    margin: 150px 0 0

  .paintings, .footer
    display: none

@media screen and (max-width: 1500px)
  #app
    .app__filter-search
      max-width: 80%

@media screen and (max-width: 992px)
  #app
    .app__filter-search
      grid-template-columns: 1fr
      grid-template-rows: repeat(2, min-content)
      grid-gap: 30px
      .filters
        grid-column: 1/2
        grid-row: 2/3
        justify-self: center
      .search
        grid-column: 1/2
        grid-row: 1/2
        justify-self: center


@media screen and (max-width: 768px)
  #app
    .title
      margin: 50px 0

@media screen and (max-width: 576px)
  #app
    .title
      margin: 30px 0
    .app__filter-search
      max-width: unset

</style>
