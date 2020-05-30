import interceptor from "../util/interceptor.js";
import qs from "querystring";

const headersAll = "application/x-www-form-urlencoded";
const headersJson = "application/json";
const methodsAll = "post";

var postString = (urlSelf, methodSelf, dataSelf, headerSelf) => {
  return {
    url: urlSelf,
    method: methodSelf,
    data: qs.stringify(dataSelf),
    headers: {
      "Content-Type": headerSelf
    }
  };
};

var postStringJson = (urlSelf, methodSelf, dataSelf, headerSelf) => {
  return {
    url: urlSelf,
    method: methodSelf,
    data: dataSelf,
    headers: {
      "Content-Type": headerSelf
    }
  };
};

export default {
  //用户注册
  insertUser(data) {
    return interceptor(postString("/insertUser", methodsAll, data, headersAll));
  },
  //用户登录
  checkLogin(data) {
    return interceptor(postString("/checkLogin", methodsAll, data, headersAll));
  },
  //提交session保存姓名，获取个人资料
  getUserByUsername(name) {
    return interceptor(
      postString("/getUserByUsername", methodsAll, name, headersAll)
    );
  },
  //修改个人资料
  updateUserByName(name) {
    return interceptor(
      postString("/updateUserByName", methodsAll, name, headersAll)
    );
  },
  //管理员

  //根据用户 id 发生通知
  addPersonalNotice(data) {
    return interceptor(
      postString("/addPersonalNotice", methodsAll, data, headersAll)
    );
  },
  //注册驾驶员
  addDriver(data) {
    return interceptor(postString("/addDriver", methodsAll, data, headersAll));
  },
  //获取位置
  getLatandlogByDriver(data) {
    return interceptor(
      postString("/getLatandlogByDriver", methodsAll, data, headersAll)
    );
  },
  //根据工号发送通知
  sendDriverNoticeToDriver(data) {
    return interceptor(
      postString("/sendDriverNoticeToDriver", methodsAll, data, headersAll)
    );
  },
  //根据工号获取一天内驾驶员收到通知
  getDriverNoticeByReceiveToday(data) {
    return interceptor(
      postString("/getDriverNoticeByReceiveToday", methodsAll, data, headersAll)
    );
  },
  //根据工号获取一天内驾驶员发送通知
  getDriverNoticeBySendToday(data) {
    return interceptor(
      postString("/getDriverNoticeBySendToday", methodsAll, data, headersAll)
    );
  },
  //根据店铺名搜索店铺
  getCustomByName(data) {
    return interceptor(
      postString("/getCustomByName", methodsAll, data, headersAll)
    );
  },
  //垃圾量录入
  insertGarbageBatch(data) {
    return interceptor(
      postStringJson("/production/add/batch", methodsAll, data, headersJson)
    );
  },
  insertGarbage(data) {
    return interceptor(
      postStringJson("/production/add", methodsAll, data, headersJson)
    );
  },
  //发布公告
  insertNotice(data) {
    return interceptor(
      postString("/insertNotice", methodsAll, data, headersAll)
    );
  },
  //回复用户反馈
  replayFeedback(data) {
    return interceptor(
      postString("/replayFeedback", methodsAll, data, headersAll)
    );
  },
  //逻辑删除已回复反馈
  delFeedbackById(id) {
    return interceptor(
      postString("/delFeedbackById", methodsAll, id, headersAll)
    );
  },
  //商家
  //根据用户名获取通知
  getByPNoticeUsername(data) {
    return interceptor(
      postString("/getByPNoticeUsername", methodsAll, data, headersAll)
    );
  },
  //根据通知 id 设为已读
  changToRead(data) {
    return interceptor(
      postString("/changToRead", methodsAll, data, headersAll)
    );
  },
  //录入店铺
  addCustom(data) {
    return interceptor(postString("/addCustom", methodsAll, data, headersAll));
  },
  //删除店铺
  delCustomBySocialCode(data) {
    return interceptor(
      postStringJson("/delCustomBySocialCode", methodsAll, data, headersJson)
    );
  },
  //支付宝付款店铺
  payAli(data) {
    return interceptor(postString("/payAli", methodsAll, data, headersAll));
  },
  //支付宝付款超出
  payForExcess(data) {
    return interceptor(
      postString("/payForExcess", methodsAll, data, headersAll)
    );
  },
  //修改定制
  updateCustomById(id) {
    return interceptor(
      postString("/updateCustomById", methodsAll, id, headersAll)
    );
  },
  //商户反馈
  addFeedback(data) {
    return interceptor(
      postString("/addFeedback", methodsAll, data, headersAll)
    );
  },
};
