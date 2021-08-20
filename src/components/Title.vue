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
  @include font-roboto-3
  display: grid
  justify-content: center
  align-content: center
  text-align: center
</style>