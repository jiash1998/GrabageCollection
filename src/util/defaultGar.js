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

export default {
  backGar(item) {
    // console.log(item);
    return typeBase[item].kg;
  },
};
