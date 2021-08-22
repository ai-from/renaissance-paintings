<template>
  <div class="filters">
    <router-link
      v-for="(item, index) in filters"
      :key="index"
      class="filters__tab"
      :class="{active: item.active}"
      :to="item.url"
      @click.native="tabClick(index)"
    >
      <span>
        {{ item.title }}
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  data() {
    return {
      filters: [
        {title: 'Все', active: true, url: '/'},
        {title: 'Проданные на аукционе', active: false, url: '/sold'}
      ]
    }
  },
  methods: {
    tabClick(index) {
      this.filters.forEach(item => item.active = false)
      this.filters[index].active = true
      if(index === 0) {
        this.$root.$emit('refreshAll')
      } else if(index === 1) {
        this.$root.$emit('refreshSold')
      }
    }
  },
  watch: {
    '$route'(to, from) {
      if(to.path === '/') {
        this.filters[0].active = true
        this.filters[1].active = false
      }
      else if(to.path === '/sold') {
        this.filters[0].active = false
        this.filters[1].active = true
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.filters
  &__tab
    @include roboto-16-36-light
    padding: 8px 17px
    border: 1px solid transparent
    margin: 0 20px 0 0
    opacity: .5
    &:last-child
      margin: 0
    &:hover
      opacity: 1
    &.active
      border: 1px solid $tab-active
      opacity: 1

@media screen and (max-width: 576px)
  .filters
    &__tab
      display: block
      margin: 0 0 10px 0
      text-align: center
</style>