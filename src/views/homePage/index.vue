<template>
  <div>
    <div class="header"></div>
    <div class="feature-container">
      <f-card v-for="(v, i) in category" :key="i" :category="v"></f-card>
    </div>
  </div>
</template>
<script>
import FCard from '@/components/FCard.vue'
export default {
  name: 'HomePage',
  components: {
    FCard
  },
  data () {
    return {
      category: [{
        "category_id": 9,
        "category_name": "拒贷天眼",
        "logo": "http:\/\/www.sukaquan.net\/uploads\/images\/20190507\/9003d62018ef377d082487f78b837b78.png",
        "description": "",
        "tips": "风控必查、优化风险项",
        "tags": ["组合查询，更全，更准，更优惠", "多维度网黑查询，多头借贷检测，"],
        "price": "39.90",
        "code": "risk_5",
        "top": 1,
        "hot": 1,
        "discounts": "2.00",
        "detail_bg": "http:\/\/www.sukaquan.net\/uploads\/images\/20190511\/d19ad025cae4133706717aa5afeefee2.jpg"
      }, {
        "category_id": 1,
        "category_name": "贷前综合风险核查",
        "logo": "http:\/\/www.sukaquan.net\/uploads\/images\/20190507\/7c5976beed7de392b354fde1e38dc4a7.png",
        "description": "",
        "tips": "风控必查、优化风险项",
        "tags": ["核心风控项", "贷前必查"],
        "price": "29.90",
        "code": "risk_1",
        "top": 1,
        "hot": 1,
        "discounts": "2.00",
        "detail_bg": "http:\/\/www.sukaquan.net\/uploads\/images\/20190511\/32138721d7953d23317cce0f31415402.jpg"
      }, {
        "category_id": 7,
        "category_name": "黑名单检测",
        "logo": "http:\/\/www.sukaquan.net\/uploads\/images\/20190507\/80c768ab13bd31ab17015eabcc8187a3.png",
        "description": "",
        "tips": "风控必查、优化风险项",
        "tags": ["网贷被拒？", "一定是上黑名单"],
        "price": "26.60",
        "code": "risk_3",
        "top": 1,
        "hot": 1,
        "discounts": "2.00",
        "detail_bg": "http:\/\/www.sukaquan.net\/uploads\/images\/20190511\/6ad4375e379828c8e2ff993f6a62f0c0.jpg"
      }]
    }
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
