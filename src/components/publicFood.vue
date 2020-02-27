<template>
  <div id="publicFood">
    <div id="food">
      <div id="food_con1">
        <div id="title1">
          <h3>链接</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div id="title2">
          <h3>其他社区</h3>
        </div>
      </div>
      <div id="food_con2">
        <h3>客服热线</h3>
        <h2>400-659-0232</h2>
      </div>
      <div id="food_con1">
        <h3>Easy Garbage Sorting</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "publicFood"
};
</script>

<style lang="scss" scoped>
#food {
  width: 100%;
  height: 400px;
  // background:black;
  // background: #F7FBFD;
  background: #c8d6e8;
  display: flex;
  justify-content: space-around;
  #food_con1 {
    width: 30%;
    height: 300px;
    display: flex;
    margin: 0;
    h3 {
      padding-top: 40px;
    }
    // #title1 {

    // }
  }

  #food_con2 {
    width: 30%;
    height: 300px;
    display: flex;
    flex-direction: column;
    margin: 0;

    h3 {
      padding-top: 40px;
    }
  }
}
</style>