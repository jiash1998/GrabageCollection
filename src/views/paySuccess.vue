<template>
  <div id="paySuccess">
    <div class="body">
      <div class="imgCon">
        <img src="../assets/img/success2.png" />
        <p>尊敬的用户，您已经支付成功。</p>
        <p>可点击按钮返回定制页面。</p>
        <div>
          <router-link tag="div" to="/merchartContral/Son2Manager/Son2Test">
            <el-button type="primary" plain size="small">返回</el-button>
          </router-link>
        </div>
      </div>
    </div>
    <public-foot-mini></public-foot-mini>
  </div>
</template>

<script>
import publicFootMini from "../components/publicFootMini.vue";
export default {
  name: "paySuccess",
  components: {
    publicFootMini
  }
};
</script>

<style lang="scss">
@import "../assets/css/paySuccess.scss";
</style>