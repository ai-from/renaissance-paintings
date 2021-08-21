<template>
  <div class="title">
    Картины эпохи<br>возрождения
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
</style>