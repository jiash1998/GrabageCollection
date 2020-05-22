let endPrice = 0;
let typeArr = [
  "中小型饭店",
  "快餐汉堡店",
  "烧烤店",
  "奶茶店",
  "办公楼",
  "火锅店",
  "理发店",
  "药店",
  "宾馆",
  "超市",
  "其他类型",
];
let typeBase = {
  中小型饭店: 150,
  快餐汉堡店: 150,
  烧烤店: 150,
  奶茶店: 150,
  办公楼: 150,
  火锅店: 150,
  理发店: 100,
  药店: 100,
  宾馆: 100,
  超市: 100,
  其他类型: 80,
};
// let date = ["6:00-7:30", "11:00-13:30", "17:00-18:30", "22:00-12:30"];
// let times = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];

function getStoreType(type) {
  let typeIn = type;
  return typeBase[
    typeArr.find((i) => {
      return i === typeIn;
    })
  ];
}

export function setStorePrice(type, store) {
  let typeIn = type;
  let storeIn = store;
  let dateLen = storeIn.cycleDate.length;
  let timesLen = storeIn.cycleTimes.length;
  let month = storeIn.sustainMonth;
  return (endPrice =
    getStoreType(typeIn) + dateLen * 10 + timesLen * 15 + month * 100);
}
