<template>
  <div class="search">
    <input
      @keyup.enter="search"
      v-model="searchValue"
      type="text"
      class="search__input"
      placeholder="Поиск по названию картины">
    <div class="search__btn" @click="search">
      <div class="search__btn-text">Найти</div>
      <img
        :src="require(`/src/assets/search/search.svg`)"
        class="search__btn-img"
        alt="Search">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    search() {
      if(this.searchValue) {
        this.$root.$emit('search', this.searchValue)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.search
  width: 488px
  height: 42px
  position: relative
  &__input
    width: 100%
    height: inherit
    border: none
    border-bottom: 1px solid $light
    background: transparent
    color: $light
    padding: 0 90px 0 0
    @include roboto-16-24-light
    &::placeholder
      @include roboto-16-24-light
      opacity: .5
  &__btn
    display: grid
    grid-template-columns: repeat(2, min-content)
    grid-column-gap: 12px
    align-items: center
    cursor: pointer
    width: min-content
    position: absolute
    right: 0
    top: 50%
    transform: translateY(-50%)
    &:hover
      opacity: .5
    &-text
      @include roboto-14-20-096-light-uppercase
    &-img

@media screen and (max-width: 1200px)
  .search
    width: 304px

@media screen and (max-width: 576px)
  .search
    width: 80%
    &__input
      padding: 0 40px 0 0
    &__btn-text
      display: none
</style>