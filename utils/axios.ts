import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
// 初始化超时时间
const axiosInstance = axios.create({
  timeout: 30000,
  baseURL: '/'
});

// 请求拦截，补充 accessToken
axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/**
 * 处理响应的错误信息
 * @param error
 * @returns {Promise<never>}
 */
const handleResponseError = (error: AxiosError) => {
  if (error.response) {
    return Promise.reject(error.response?.data);
  } else {
    const message = error.message;
    return Promise.reject(message?.includes('timeout') ? '请求超时' : '服务异常');
  }
};

/**
 * 处理响应
 * @param response
 * @returns {Promise<never>}
 */
const handleResponseSuccess = (response: AxiosResponse) => {
  const res = response.data;
  if (res?.status && res.status !== 200) {
    res.message = '服务异常';
    return Promise.reject(res);
  } else {
    return Promise.resolve(res);
  }
};

// 响应拦截, 处理错误码和跳转拦截
axiosInstance.interceptors.response.use(
  handleResponseSuccess,
  handleResponseError
);

const request = <ResponseType = unknown>(url: string, options?: AxiosRequestConfig<unknown>): Promise<ResponseType> => {
  return new Promise((resolve, reject) => {
    axiosInstance({
      url,
      ...options
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => reject(err));
  });
};

export {
  axiosInstance,
  request
};