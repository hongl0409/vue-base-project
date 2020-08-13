let url 

if (RUNTIME_ENV === 'prod') {
  url = 'http://bk.cheapp.com/qipin/qkc/backend'
} else if(RUNTIME_ENV === 'test'){
  url = 'http://39.102.73.172:8081/qipin/qkc/backend';
} else {
  // url = 'http://192.168.31.85:8081/qipin/qkc/backend'
  url = 'http://39.102.73.172:8081/qipin/qkc/backend';
}
export default url