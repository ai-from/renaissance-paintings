<template>
  <div class="filters">
    <router-link
      v-for="(item, index) in filters"
      :key="index"
      class="filters__tab"
      :class="{active: item.active}"
      :to="item.url"
    >
      <span @click="tabClick(index)">
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
    }
  }
}
</script>

<style lang="sass" scoped>
.filters
  &__tab
    @include font-filters-1
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
</style>