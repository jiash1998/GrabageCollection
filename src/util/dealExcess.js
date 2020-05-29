let falseArr = [];

let excessGar = 0;
let excessMoney = 0;

let typeBase = {
  中小型饭店: { kg: 300, price: 1 },
  快餐汉堡店: { kg: 300, price: 1 },
  烧烤店: { kg: 300, price: 1 },
  奶茶店: { kg: 300, price: 1 },
  办公楼: { kg: 300, price: 1 },
  火锅店: { kg: 300, price: 1 },
  理发店: { kg: 250, price: 0.8 },
  药店: { kg: 250, price: 0.8 },
  宾馆: { kg: 250, price: 0.8 },
  超市: { kg: 250, price: 0.8 },
  其他类型: { kg: 200, price: 0.6 },
};

//计算超出量和价钱
function calcAll(item) {
  //基础量
  let defMoney = typeBase[item.type].price;
  let defGar = typeBase[item.type].kg;
  //參考量
  let GarPro = item.reference;

  //垃圾超出量和价格
  if (GarPro >= defGar) {
    excessGar = GarPro - defGar;
    excessMoney = (GarPro - defGar) * defMoney;
  } else {
    excessGar = 0;
  }

  console.log(excessGar, excessMoney);
}

export default {
  dealArr(arr) {
    // console.log(arr);
    for (const i of arr) {
      if (i.tag === "未录") {
        falseArr.push(i);
      }
    }
    // console.log(falseArr);
    if (falseArr.length > 0) {
      for (const i of falseArr) {
        calcAll(i);
      }
    }
  },
};
