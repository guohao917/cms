import axios  from "axios"
import type { AxiosInstance } from 'axios'
import type { InterceptorsHooks, RequestConfig } from './type'

class Request {
  instance: AxiosInstance
  interceptors?: InterceptorsHooks
  constructor (config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.requestInterceptorsCatch      
    )
  }
  api (config: RequestConfig): void {
    this.instance.request(config).then(res => {
      console.log('res-----', res.data)
    }).catch(err => {
      console.log(err)
      
    })
  }
}

export default Request