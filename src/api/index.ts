import Request  from "./request"

console.log(process.env);
console.log(process.env.VUE_APP_BASE_URL);


const request  = new Request({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: process.env.VUE_APP_TIME_OUT,
  // 拦截器
  interceptors: {
    requestInterceptors: (config) => {
      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorsCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptors: (res) => {
      console.log('响应成功的拦截');
      return res
    },
    responseInterceptorsCatch: (err) => {
      console.log('响应失败的拦截');
      return err
    }
  }
})

export default request;