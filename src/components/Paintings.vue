<template>
  <div class="paintings" :class="{noItems: paintings.length === 0}">
    <div
      class="painting"
      :class="{sold: item.isSold, basket: item.inBasket}"
      v-for="(item, index) in paintings"
      :key="index"
      >

      <img
        class="painting__img"
        :src="require(`/src/assets/paintings/${item.src}`)"
        alt="">

      <div class="painting__info">

        <div class="painting__top">
          <div class="painting__title">{{ item.title }}</div>
          <div class="painting__data">{{ item.data }}</div>
        </div>

        <div class="painting__bottom-price" v-if="!item.isSold">
          <div class="painting__price" v-if="!item.inBasket">
            <div class="painting__oldPrice">{{ item.oldPrice }} $</div>
            <div class="painting__newPrice">{{ item.newPrice }} $</div>
          </div>
          <Button
            @click.native="buyClick(item.id)"
            :title="item.inBasket ? 'В корзине' : 'Купить'"
            :in-basket="item.inBasket"/>
        </div>

        <div class="painting__bottom-hammer" v-else>
          <img
            class="painting__hammer"
            :src="require(`/src/assets/paintings/hammer.svg`)"
            alt="">
          <div class="painting__hammer-text">Продана на аукционе</div>
        </div>

      </div> <!-- painting__info -->

    </div> <!-- painting -->
    <div class="paintings__no-items" v-if="paintings.length === 0">
      Поиск не дал результатов
    </div>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: 'Paintings',
  data() {
    return {
      paintings: []
    }
  },
  components: {
    Button
  },
  methods: {
    buyClick(id) {
      const curr = this.paintings.filter(item => item.id === id)
      if(curr[0].inBasket) return false
      else {
        this.$store.commit("toBasket", id)
      }
    }
  },
  created() {
    this.paintings = this.$store.state.paintings
  },
  mounted() {
    this.$root.$on('search', searchValue => {
      this.paintings = this.$store.state.paintings.filter(item => item.title === searchValue)
    })
    this.$root.$on('refreshAll', () => {
      this.paintings = this.$store.state.paintings
    })
    this.$root.$on('refreshSold', () => {
      this.paintings = this.$store.state.paintings.filter(item => item.isSold)
    })
  },
  watch: {
    '$route'(to, from) {
      if(to.path === '/') {
        this.paintings = this.$store.state.paintings
      } else if(to.path === '/sold') {
        this.paintings = this.$store.state.paintings.filter(item => item.isSold)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.paintings
  display: grid
  grid-template-columns: repeat(4, 280px)
  grid-gap: 32px
  margin: 0 auto
  &.noItems
    grid-template-columns: 1fr
  .painting
    width: 280px
    height: 210px
    position: relative
    cursor: pointer
    overflow: hidden
    &:nth-child(3)
      grid-column: 3/5
      grid-row: 1/3
      width: 100%
      height: 100%
    &:after
      content: ''
      background: $black
      position: absolute
      top: 0
      right: 0
      bottom: 0
      left: 0
      opacity: .8
      display: none

    &__img
      display: block
      min-width: 100%
      min-height: 100%
    &__info
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      padding: 20px 24px
      z-index: 2
      display: none
      grid-template-rows: 1fr min-content
    &__top
    &__title
      @include roboto-18-27-light
    &__data
      @include roboto-14-20-096-light-uppercase
      text-transform: unset

    &:hover:not(.sold)
      outline: 1px solid $black
      &:after
        display: block

    &:hover
      .painting__info
        display: grid

    &__bottom-price
      display: grid
      grid-template-columns: repeat(2, min-content)
      grid-column-gap: 20px
      align-items: center
      white-space: nowrap
    &__price
    &__oldPrice
      @include roboto-14-21-light
      text-decoration: line-through
      opacity: .66
    &__newPrice
      @include robotoBold-16-24-light-700

    &__bottom-hammer
      display: grid
      grid-template-columns: repeat(2, min-content)
      grid-column-gap: 6px
      white-space: nowrap
      align-items: center
    &__hammer
    &__hammer-text
      @include roboto-14-24-light

    &.sold
      &:after
        display: block

    &.basket
      &:after
        display: block

  &__no-items
    @include roboto-18-27-light
    text-align: center

@media screen and (max-width: 1500px)
  .paintings
    width: 80%
    grid-template-columns: repeat(3, 280px)
    justify-content: space-between
    .painting
      &:nth-child(3)
        grid-column: 2/4
        grid-row: 1/3
        width: 100%
        height: 100%

@media screen and (max-width: 1200px)
  .paintings
    grid-template-columns: repeat(auto-fill, 280px)
    .painting
      &:nth-child(3)
        grid-column: unset
        grid-row: unset
        .painting__img
          width: 280px
          height: auto

@media screen and (max-width: 740px)
  .paintings
    justify-content: center
</style>