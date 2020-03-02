import interceptor from "../util/interceptor.js";

export default {
  //获取所有通告
  getNotice() {
    return interceptor({
      url: "/getAllNotice",
      method: "get"
    });
  },
  //管理员接口
  //获取所有用户
  getAllUser() {
    return interceptor({
      url: "/getAllUser",
      method: "get"
    });
  },
  //获取店铺所有信息
  getAllCustom() {
    return interceptor({
      url: "/getAllCustom",
      method: "get"
    });
  },
  //获取用户反馈
  getAllFeedBack() {
    return interceptor({
      url: "/getAllFeedBack",
      method: "get"
    });
  },
  //获取处理过反馈
  getAllReply() {
    return interceptor({
      url: "/getAllReply",
      method: "get"
    });
  }
};
