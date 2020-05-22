import axios from "axios";
import { Message } from "element-ui";

const service = axios.create({
  baseURL: "/",
  timeout: 5000, // 默认请求超时时间
});

/**
 * request 请求拦截器
 * 可以在请求发送前对请求进行一些处理
 * 如：统一在请求头上加上token
 * 对请求参数进行统一加密
 */
service.interceptors.request.use(
  (config) => {
    //在发送请求之前做点什么
    // console.log(config);

    return config;
  },
  (error) => {
    //请求异常
    // 请求报错的情况下, http请求异常，不是数据异常，是系统异常
    Message({
      type: "error",
      message: "系统异常，请及时联系管理员",
    });
    return Promise.reject(error);
  }
);

/**
 * response 响应拦截器
 * 可以在接口响应之后，页面响应结果之前
 * 对响应结果统一进行处理
 * 如：对返回结果进行解密
 */
service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      //status是两百的情况下，表示接口正常通信，直接返回res
      return response;
    } else {
      //status不是两百的情况下，表示接口异常
      Message({
        type: "error",
        message: response.status + "error",
      });
    }
  },
  (error) => {
    // 请求报错的情况下, http请求异常，不是数据异常，是系统异常
    Message({
      type: "error",
      message: "响应出错1",
    });
    return Promise.reject(error);
  }
);

export default service;
