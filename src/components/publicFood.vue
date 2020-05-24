<template>
  <div id="publicFood">
    <div id="food">
      <div id="food_con1">
        <div id="title1">
          <h3>链接</h3>
          <ul>
            <li>
              <a
                href="https://map.baidu.com/search/%E5%AE%89%E5%BE%BD%E7%9C%81%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6/@12810914.032690724,3715583.3900000015,7.88z?querytype=s&da_src=shareurl&wd=%E5%AE%89%E5%BE%BD%E7%9C%81%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6&c=23&src=0&pn=0&sug=0&l=10&b=(12895842.276668709,3832750.233420213;13162666.014909431,3954697.0200380436)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&device_ratio=2"
              >省内回收城市地图</a>
            </li>
            <li>
              <a href="http://fbh.anhuinews.com/system/2019/10/25/008261264.shtml">垃圾回收实施通知</a>
            </li>
            <li>
              <a href="https://www.sohu.com/a/330316395_100200303">垃圾回收意义</a>
            </li>
            <li></li>
          </ul>
        </div>
        <div id="title2">
          <h3>其他社区</h3>
          <ul>
            <li>
              <a
                href="https://baike.baidu.com/item/%E5%9E%83%E5%9C%BE%E5%88%86%E7%B1%BB/2904193?fr=aladdin"
              >垃圾分类(详)</a>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div id="food_con2">
        <h3>客服热线</h3>
        <h2>400-659-0232</h2>
      </div>
      <div id="food_con3">
        <h3>Easy Garbage Sorting</h3>
        <img src="../assets/img/easyGS2.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "publicFood"
};
</script>

<style lang="scss">
#food {
  width: 100%;
  height: 300px;
  background: #c8d6e8;
  display: flex;
  justify-content: space-around;

  ul {
    list-style-type: none;
    li {
      line-height: 30px;
      font-size: 0.9em;
      color: #666;
    }
  }

  a {
    text-decoration: none;
    color: #666;

    &:hover {
      color: rgba($color: #666, $alpha: 0.5);
    }
  }
  h3 {
    padding-top: 40px;
  }

  h2 {
    margin: 0;
    // color: #666;
  }
  #food_con1 {
    width: 30%;
    height: 300px;
    display: flex;

    #title1 {
      ul {
        margin: 0;
        // margin-left: -26%;
      }
    }
    #title2 {
      margin-left: 20%;
      ul {
        margin: 0;
        // margin-left: -32%;
      }
    }
  }

  #food_con2 {
    width: 30%;
    height: 300px;
    display: flex;
    flex-direction: column;
  }

  #food_con3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #666;
    img {
      height: 120px;
      width: 120px;
    }
  }
}
</style>