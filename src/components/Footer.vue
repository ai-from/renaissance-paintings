<template>
  <footer class="footer">

    <div class="footer__left">
      <div class="footer__left-phone">+7 (495) 555-55-55</div>
      <div class="footer__left-address">г. Екатеринбург ул. Генеральская, 3</div>
    </div>

    <div class="footer__right">
      © Эпоха возрождения, 2021
    </div>

  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="sass" scoped>
.footer
  height: 218px
  background: url("../assets/footer/footer-bg.png") no-repeat center center
  display: grid
  grid-template-columns: 1fr 1fr
  align-content: center
  align-items: center
  @include font-footer-1
  &__right
    justify-self: end
</style>