<template>
  <div id="custom">
    <div id="custom_body">
      <div class="custom_introduce">
        <div class="test_con">
          <div class="content1">
            <div id="test1"></div>
            <div id="test2"></div>
            <div id="con_span">
              <span>定制服务</span>
            </div>
          </div>
          <div class="content2">
            <div id="test3"></div>
            <div id="test4"></div>
            <div id="con_span">
              <span>价格实惠</span>
            </div>
          </div>
          <div class="content3">
            <div id="test5"></div>
            <div id="test6"></div>
            <div id="con_span">
              <span>方便快捷</span>
            </div>
          </div>
        </div>
      </div>
      <div class="custom_fill1"></div>
      <div class="custom_fill2"></div>
      <div class="custom_main"></div>
    </div>
    <public-food></public-food>
  </div>
</template>

<script>
import PublicFood from "../components/publicFood.vue";
export default {
  name: "custom",
  components: {
    PublicFood
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/custom.scss";
</style>