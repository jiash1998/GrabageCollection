import interceptor from "../util/interceptor.js";
import qs from "querystring";

const headersAll = "application/x-www-form-urlencoded";
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
export default {
  //提交session保存姓名，获取个人资料
  getUserByUsername(name) {
    return interceptor(
      postString("/getUserByUsername", methodsAll, name, headersAll)
    );
  }
};
