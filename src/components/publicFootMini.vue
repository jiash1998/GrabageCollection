<template>
  <div id="publicFootMini">
    <div class="foot">
      <p>Copyright © 2020 ResC（滁州源分）资源回收有限公司 ｜ 皖ICP备20000781号</p>
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
  align-items: center;
  p {
    color: gray;
    font-size: 0.7em;
  }
}
</style>