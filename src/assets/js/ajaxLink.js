// 统一的接口处理
var link = {
  identity: 'identity'
}

if (process.env.NODE_ENV !== 'production') {
  for(let k in link) {
    link[k] = 'api' + '/' + link[k];
  }
}
export default link;