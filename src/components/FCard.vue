<template>
  <div class="f-card" @click="goToForm(category.category_name)">
    <div class="title">{{category.category_name}}</div>
    <div class="tip" v-for="(v, i) in category.tags" :key="i">{{v}}</div>
    <div class="card-btn">
      <md-button class="start-btn" type="primary" inline>开始检测</md-button>
      <a class="example-link" href="javascript:;" @click.stop="goToExample(category.category_name)">样例</a>
      <span class="price-text">{{category.price}} 元/次</span>
    </div>
    <div class="card-right-img">
      <span class="space"></span>
      <img class="card-img" src="../assets/feature1.png" v-if="theId === 1" alt="功能">
      <img class="card-img" src="../assets/feature2.png" v-else-if="theId === 2" alt="功能">
      <img class="card-img" src="../assets/feature3.png" v-else alt="功能">
    </div>
  </div>
</template>
<script>
  import {
    Button
  } from 'mand-mobile'
  export default {
    name: 'FCard',
    components: {
      [Button.name]: Button
    },
    props: {
      category: {
        type: Object,
        default: {
          category_name: '拒贷天眼',
          tags: ['组合查询，更全，更准，更优惠', '多维度网黑查询，多头借贷检测'],
          price: '39.90'
        }
      },
      theId: {
        type: Number
      }
    },
    methods: {
      goToForm (name) {
        this.$emit('toForm', name)
      },
      goToExample (name) {
        this.$emit('toExample', name)
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .f-card
    padding 40px 40px 0
    position relative
    margin-bottom 40px
    box-sizing border-box
    border-radius 6px
    box-shadow 0 0 0.25rem 0.15rem rgba(0, 96, 255, .08)
    background #ffffff
    z-index 1
    .title
      font-size .32rem
      line-height 1em
      text-overflow ellipsis
      white-space nowrap
      color #4c546a
    .tip
      margin-top .3rem
      font-size .24rem
      line-height 1em
      color #999 
    .card-btn 
      padding .4rem 0
      line-height 0
      .start-btn 
        display inline-block 
        width 2rem 
        height .48rem 
        background #596dff 
        margin-right .3rem 
        box-shadow 0 0 0.1rem 0.08rem rgba(89, 109, 255, .15) 
        font-size .24rem 
    .card-right-img 
      position absolute 
      top 0 
      right .4rem 
      height 100% 
      line-height 1em 
      z-index -1 
    .space 
      display inline-block 
      height 100% 
      vertical-align middle 
    .card-img 
      width 2.2rem 
      vertical-align middle 
    .example-link
      margin-right 0.1rem
      text-decoration underline 
      color rgb(102, 127, 254) 
    .price-text
      color #999
</style>
