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
      <div class="header__basket-cnt">5</div>
    </div> <!-- header__right -->

  </header>
</template>

<script>
export default{
  name: 'Header'
}
</script>

<style lang="sass" scoped>
.header
  display: grid
  grid-template-columns: 1fr 1fr
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
</style>