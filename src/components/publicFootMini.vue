<template>
  <div id="publicFootMini">
    <div class="foot">
      <p>Copyright © 2020 CHZU（滁州）资源回收有限公司 ｜ ICP证皖B2-20160559</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "publicFootMini"
};
</script>

<style lang="scss" scoped>
.foot {
  width: 100%;
  height: 50px;
  background-color: #f0f3f7;
  display: flex;
  justify-content: center;
  // align-items: center;
  // position: absolute;
  // top: 100%;
  p {
    display: inline;
    color: gray;
    font-size: 0.7em;
  }
}
</style>