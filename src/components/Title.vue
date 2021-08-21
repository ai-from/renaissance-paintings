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
  @include roboto-86-90-032-light-uppercase
  display: grid
  justify-content: center
  align-content: center
  text-align: center
  span
    @include loraItalic-86-90-032-light-uppercase
</style>