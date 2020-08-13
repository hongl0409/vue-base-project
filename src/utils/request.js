import axios from 'axios'
import { setToken, getToken } from './auth'
import router from '@/router/index'
import { Toast } from 'vant'
import { resolve } from 'core-js/fn/promise'

const service = axios.create({
  baseURL: baseUrl,
  timeout: 20000
})

const CancelToken = axios.CancelToken

service.interceptors.request.use(
  config => {
    config.cancelToken = new CancelToken(function excutor(c) {
      config.cancle = c
    })

    if (getToken()) {
      config.header['token'] = getToken()
    } else {
      router.replace({ path: '/login' })
    }

    return config
  },
  error => {
    console.log("request error:", error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    const code = Number(res.code)
    if (code == 0) {
      return res
    } else if (code == 111) {
      router.replace({ path: '/login' })
    } else {
      Toast(res.message)
    }

    return res
  },
  error => {
    console.log("response error:",error)
    return Promise.reject(error)
  }
)

export default service