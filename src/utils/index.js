export function deepCopy( source ) {
  if (!isObject(source)) return source; //如果不是对象的话直接返回
    let target = Array.isArray( source ) ? [] : {} //数组兼容
    for ( var k in source ) {
      if (source.hasOwnProperty(k)) {
        if ( typeof source[ k ] === 'object' ) {
            target[ k ] = deepCopy( source[ k ] )
        } else {
            target[ k ] = source[ k ]
        }
    }
  }
  return target
}

export function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

export function isEmptyObject(obj) {
  const keys = Object.keys(obj)
  return keys.length == 0
}

export function debounce(fn, interval) { // 防抖函数
  var timer;
  var gapTime = interval || 1000;
  return function() {
    clearTimeout(timer);
    var context = this;
    var args = arguments;
    timer = setTimeout(function() {
      fn.apply(context,args);
    }, gapTime);
  };
}

export function timestampToTime(timestamp) {
  if (timestamp.length == 10) {
    timestamp = timestamp * 1000
  }
  var date = new Date(timestamp);
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  var D = (date.getDate() < 10 ? '0'+ date.getDate() : date.getDate()) + ' ';
  var h = (date.getHours() < 10 ? '0'+ date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() < 10 ? '0'+ date.getMinutes() : date.getMinutes()) + ':';
  var s = (date.getSeconds() < 10 ? '0'+ date.getSeconds() : date.getSeconds());
  return Y+M+D+h+m+s;
}


export function timestampToDay(timestamp) {
  if (timestamp.length == 10) {
    timestamp = timestamp * 1000
  }
  var date = new Date(timestamp);   
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  return Y + M + D;
}