<template>
  <main id="home" class="view">
    <md-button @click="handleClick">click</md-button>
  </main>
</template>

<script>
import { Button, Toast } from 'mand-mobile'

export default {
  name: 'App',
  components: {
    [Button.name]: Button
  },
  methods: {
    handleClick () {
      Toast.info('不错哟~')
    }
  }
}
</script>

<style lang="stylus" scoped>
.view
  padding 0 20px
  .heading
    text-align center
    margin-bottom 48px
    .md-icon
      width 100px
      height 80px
    h1
      color #333
      line-height 1.15
      font-size 64px
      margin-bottom 32px
      span
        position relative
        &::after
          content ""
          position absolute
          z-index -1
          left 0
          bottom 8px
          width 100%
          height 20px
          background #ecf6ff
    p
      font-size 32px
      color #666
      line-height 56px
</style>
