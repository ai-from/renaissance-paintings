<template>
  <div class="button" :class="{inBasket: inBasket}">
    <div class="button__text">{{ title }}</div>
    <img
      class="button__icon"
      :src="require(`/src/assets/button/ok.svg`)"
      alt="">
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: {
      type: String,
      default: 'Button'
    },
    inBasket: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>
.button
  padding: 12px 32px
  border: 1px solid $light
  @include robotoBold-14-24-light
  display: grid
  grid-template-columns: repeat(2, min-content)
  grid-column-gap: 10px
  align-items: center
  cursor: pointer
  &:hover
    background: $btnHover
    border: 1px solid $btnHover
  &.inBasket
    background: $light
    color: $dark
    border: 1px solid $light
  &__text
    white-space: nowrap
  &__icon
    display: none
  &.inBasket
    .button__icon
      display: grid
</style>