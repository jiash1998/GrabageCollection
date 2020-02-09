<template>
  <div id="son2_2Manager">
    <div class="body">
      <div class="left">
        <router-link to="/merchartContral/Son2Manager/Son2Test" tag="div">
          <div class="left_head">
            <p>
              <i class="el-icon-arrow-left"></i>返回店铺列表
            </p>
          </div>
        </router-link>
        <div class="left_body">
          <div class="store">
            <div class="imgDiv">
              <img src="../../assets/img/black.jpg" />
            </div>
            <div class="storeName">
              <p>测试店铺</p>
              <p>定制中</p>
            </div>
          </div>
          <div class="info">
            <div class="infoId">storeId</div>
            <div class="infoNum">asdas1231231233</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right_head">
          <div class="head_p">
            <span>概览</span>
          </div>
        </div>
        <div class="right_del">
          <div class="del">
            <i class="el-icon-warning-outline"></i>
          </div>
        </div>
      </div>
    </div>
    <public-foot></public-foot>
  </div>
</template>

<script>
import PublicFoot from "../../components/publicFood.vue";
export default {
  name: "son2_2anager",
  components: {
    PublicFoot
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son2_2Manager.scss";
</style>