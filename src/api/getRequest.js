import interceptor from "../util/interceptor.js";

const methodAll = "get";
var getString = (urlSelf, methodSelf) => {
  return {
    url: urlSelf,
    method: methodSelf,
  };
};

//get携带参数
var getString_P = (urlSelf, data, methodSelf) => {
  return {
    url: urlSelf,
    params: { customId: data },
    method: methodSelf,
  };
};

//excel 请求头
var getStringExcel = (urlSelf, methodSelf) => {
  return {
    url: urlSelf,
    headers: {
      "Content-Type": "application/json; application/octet-stream",
    },
    responseType: "arraybuffer",
    method: methodSelf,
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
  },
  //获取店铺垃圾
  getAllStoreGarbage() {
    return interceptor(getString("/production/getAll", methodAll));
  },
  //根据id，获取店铺垃
  getByCustomId(id) {
    return interceptor(getString_P("/production/getByCustomId", id, methodAll));
  },
  //excel 导出接口
  //垃圾表
  exPortAll() {
    return interceptor(getStringExcel("/production/excel", methodAll));
  },
  //custom表
  exPortCustAll() {
    return interceptor(getStringExcel("/custom/excel", methodAll));
  },
};
