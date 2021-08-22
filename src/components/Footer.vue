<template>
  <footer class="footer">

    <div class="footer__inner">
      <div class="footer__left">
        <div class="footer__left-phone">+7 (495) 555-55-55</div>
        <div class="footer__left-address">г. Екатеринбург ул. Генеральская, 3</div>
      </div>

      <div class="footer__right">
        © Эпоха возрождения, 2021
      </div>
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
  background: url("../assets/footer/footer-bg.png") no-repeat center center
  &__inner
    height: 218px
    max-width: 1216px
    display: grid
    grid-template-columns: 1fr 1fr
    align-content: center
    align-items: center
    margin: 0 auto
  @include roboto-18-27-light
  &__right
    justify-self: end

@media screen and (max-width: 1500px)
  .footer
    &__inner
      width: 80%

@media screen and (max-width: 768px)
  .footer
    &__inner
      grid-template-columns: 1fr
      grid-template-rows: repeat(2, min-content)
      grid-row-gap: 20px
      font-size: 1rem
      line-height: 1.5rem
    &__right
      justify-self: start

@media screen and (max-width: 350px)
  .footer
    &__inner
      font-size: .95rem
</style>