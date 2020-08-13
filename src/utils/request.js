import axios from 'axios'
import { setToken, getToken } from './auth'
import router from '@/router/index'
import Toast from 'vant/lib/toast'
import 'vant/lib/toast/style'
import baseURL from './url'

const service = axios.create({
  baseURL: baseURL,
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
      // router.replace({ path: '/login' })
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
      // router.replace({ path: '/login' })
    } else {
      console.log(res)
      Toast(res.message)
    }

    return res
  },
  error => {
    console.log("response error:",error)
    return Promise.reject(error)
  }
)

function request(options) { 
  if (options.method.toLocaleLowerCase() == 'get') {
    return service({
      url: options.url,
      method: options.method,
      params: options.data
    })
  } else if (options.method.toLocaleLowerCase() == 'post') {
    return service({
      url: options.url,
      method: options.method,
      data: options.data
    })
  }
  
}

export default request