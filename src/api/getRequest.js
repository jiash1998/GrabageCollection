import interceptor from "../util/interceptor.js";

const methodAll = "get";
var getString = (urlSelf, methodSelf) => {
  return {
    url: urlSelf,
    method: methodSelf
  };
};
export default {
  //获取所有通告
  getNotice() {
    return interceptor(getString("/getAllNotice", methodAll));
  },
  //管理员接口
  //获取所有用户
  getAllUser() {
    return interceptor(getString("/getAllUser", methodAll));
  },
  //获取跟踪操作
  getAllOperate() {
    return interceptor(getString("/getAllOperate", methodAll));
  },
  //获取店铺所有信息
  getAllCustom() {
    return interceptor(getString("/getAllCustom", methodAll));
  },
  //获取于驾驶员通信
  // getAllDriverNotice(){
  //   return interceptor(getString("/getAllDriverNotice", methodAll));
  // },
  //获取用户反馈
  getAllFeedBack() {
    return interceptor(getString("/getAllFeedBack", methodAll));
  },
  //获取处理过反馈
  getAllReply() {
    return interceptor(getString("/getAllReply", methodAll));
  },
  //商铺接口
  //获取名下店铺信息
  getAllCustom() {
    return interceptor(getString("/getAllCustom", methodAll));
  }
};
