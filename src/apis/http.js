import axios from 'axios'
import router from '../router'
import store from '../store'

// create an axios instance
const service = axios.create({
  baseURL: '',
  timeout: 5000
})

// http request 拦截器
service.interceptors.request.use(
  config => {
    // if (store.state.user) { // 判断是否存在token，如果存在的话，则每个http header都加上token
    //   config.headers.Authorization = `${store.state.user.token}`
    // }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          store.commit('LOG_OUT')
          router.replace({
            path: 'login'
          })
      }
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  }
)

export default service
