<template>
  <header class="header">

    <div class="header__left">
      <img
        :src="require(`/src/assets/header/logo.svg`)"
        class="header__logo"
        alt="Renaissance Paintings"
        title="Renaissance Paintings" />
      <div class="header__left-text">Прекрасная работа,<br>достойная каждого</div>
    </div> <!-- header__left -->

    <div class="header__right">
      <img
        :src="require(`/src/assets/header/basket.svg`)"
        alt="Basket"
        class="header__basket" />
      <div class="header__right-text">Корзина</div>
      <div class="header__basket-cnt">{{ inBasketSum }}</div>
    </div> <!-- header__right -->

  </header>
</template>

<script>
export default{
  name: 'Header',
  computed: {
    inBasketSum() {
      return this.$store.getters.getInBasket
    }
  }
}
</script>

<style lang="sass" scoped>
.header
  display: grid
  grid-template-columns: 1fr 1fr
  padding: 50px 90px 0
  &__logo
    cursor: pointer
  &__left
    display: grid
    grid-template-columns: repeat(2, min-content)
    grid-column-gap: 24px
    align-items: center
    &-logo
      cursor: pointer
    &-text
      white-space: nowrap
      @include roboto-14-20-096-light-uppercase
  &__right
    display: grid
    grid-template-columns: repeat(3, min-content)
    align-items: center
    justify-self: end
    &-text
      margin: 0 4px 0 12px
      @include roboto-14-20-096-light-uppercase
  &__basket
    position: relative
    top: -3px
  &__basket-cnt
    @include roboto-12-16-096-dark
    background: $light
    width: 20px
    height: 20px
    border-radius: 100%
    display: grid
    justify-content: center
    align-content: center

@media screen and (max-width: 1500px)
  .header
    padding: 25px 45px 0

@media screen and (max-width: 768px)
  .header
    padding: 25px 14px 0
    &__left
      grid-column-gap: 12px
      &-text
        font-size: 12px
        line-height: 18px
    &__right
      grid-template-columns: repeat(2, min-content)
      grid-column-gap: 6px
      &-text
        display: none
</style>