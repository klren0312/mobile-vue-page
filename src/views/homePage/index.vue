<template>
  <div>
    <div class="header"></div>
    <div class="feature-container">
      <f-card></f-card>
    </div>
  </div>
</template>
<script>
import FCard from '@/components/FCard.vue'
export default {
  name: 'HomePage',
  components: {
    FCard
  }
}
</script>
<style lang="stylus" scope>
.header
  width 100%
  height 500px
  background url(../../assets/header.png) left center / 100% 100% no-repeat
.feature-container
  margin-top -90px
  padding 0 40px
</style>
