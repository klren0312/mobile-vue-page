<template>
  <div v-if="isShow">
    <div class="confirm" @touchmove.prevent></div>
    <div class="con_box">
      <div class="context">
        <h6>{{text.title}}</h6>
        <p>{{text.message}}</p>
        <div class="btn">
          <span @click.stop="close()">{{text.btn.no}}</span>
          <span @click.stop="ok()">{{text.btn.ok}}</span>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        isShow: true,
        text: {
          title: '提示',
          message: '确定删除此条信息？',
          btn: {
            ok: '确定',
            no: '取消'
          },
        }
      }
    },
    methods: {
      close() {
        console.log('关闭');
      },
      ok() {
        console.log('确定')
      }
    }
  }
</script>
<style scoped>
  .confirm {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    max-width: 750px;
    position: fixed;
    top: 0;
    font-size: 0;
    z-index: 9999;
  }

  .con_box {
    width: 75%;
    height: 3rem;
    background-color: white;
    position: fixed;
    z-index: 10000;
    top: 50%;
    margin-top: -1.5rem;
    left: 50%;
    margin-left: -37.5%;
    border-radius: 0.1rem;
  }

  .context {
    padding: 0.1rem;
  }

  .context h6 {
    font-size: 0.32rem;
    padding: 0.2rem;
    color: #a9a9a9;
    text-align: center;
  }

  .context p {
    font-size: 0.3rem;
    color: #666;
    padding: 0.4rem 0.15rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .btn {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 0.8rem;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .btn span {
    height: 0.6rem;
    line-height: 0.6rem;
    width: 50%;
    font-size: 0.3rem;
    color: #444;
    text-align: center;
  }

  .btn span:nth-child(1) {
    border-right: 1px solid #999;
  }
</style>