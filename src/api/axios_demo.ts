import axios from "axios";
// http://123.207.32.32:8000/home/multidata
// 创建axios实例
axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
  console.log(res.data);
})
axios.post('', {})

// fn1 : 请求发送成功会执行的函数。 fn2: 请求失败执行的函数
// config: 请求的配置，methods,url...
axios.interceptors.request.use(config => {
  // loading动画 添加token
  return config
}, err => {
  // 打印错误
})

// 服务器成功返回数据
axios.interceptors.response.use(res => {
  // 处理返回数据... 响应成功的拦截
  return res.data
}, err => {
  // 返回错误信息
  return err
})