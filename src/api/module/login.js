import request from '@/utils/request.js'

export function login() {
  return request({
    method: 'post',
    data: {a:1},
    url:'/manage/login'
  })
}