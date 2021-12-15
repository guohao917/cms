import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 定义拦截器接口
export interface InterceptorsHooks {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (config: any) => any
  responseInterceptors?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch?: (config: any) => any
}

// 接口扩展，让requestConfig即接受AxiosRequestConfigd的约束也接受InterceptorsHooks约束
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: InterceptorsHooks
}