<template>
  <div class="title">
    <div class="title__wrap">
      <span>К</span>артины эп<span>ох</span>и<br>в<span>о</span>зр<span>о</span>ждения
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title'
}
</script>

<style lang="sass" scoped>
.title
  height: 272px
  background: url("../assets/title/bg-f.svg") no-repeat center center
  background-size: contain
  @include roboto-86-90-032-light-uppercase
  display: grid
  justify-content: center
  align-content: center
  text-align: center
  span
    @include loraItalic-86-90-032-light-uppercase

@media screen and (max-width: 1140px)
  .title
    font-size: 4.75rem
    line-height: 5rem
    span
      font-size: 4.75rem
      line-height: 5rem

@media screen and (max-width: 992px)
  .title
    height: 200px
    font-size: 3.75rem
    line-height: 4rem
    span
      font-size: 3.75rem
      line-height: 4rem

@media screen and (max-width: 768px)
  .title
    height: 150px
    font-size: 2.75rem
    line-height: 3rem
    span
      font-size: 2.75rem
      line-height: 3rem

@media screen and (max-width: 576px)
  .title
    height: 100px
    font-size: 1.75rem
    line-height: 2rem
    span
      font-size: 1.75rem
      line-height: 2rem

</style>