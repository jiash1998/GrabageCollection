<template>
  <div id="custom">
    <div id="custom_body">
      <div class="custom_introduce">
        <div class="intro_div">
          <span id="intro_span1">CHZU</span>
          <span id="intro_span2">始终强调</span>
        </div>
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
              <span>经济实惠</span>
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
      <div class="custom_main">
        <!-- <div id="custom_btn" v-if="$store.state.custom">
          <el-button type="success" plain round @click="customClick">开始定制</el-button>
        </div>-->
        <div id="custom_main_con">
          <h3>商家定制</h3>
          <el-form :model="custom" ref="custom">
            <el-form-item label="店铺名称">
                <el-input v-model="custom.name" placeholder="请输入店铺名称"></el-input>
            </el-form-item>
            <el-form-item label="经营范围">
                <el-radio-group v-model="custom.type">
                  <el-radio label="快餐店"></el-radio>
                  <el-radio label="火锅店"></el-radio>
                  <el-radio label="大排档"></el-radio>
                  <el-radio label="快餐店"></el-radio>
                  <el-radio label="烧烤店"></el-radio>
                  <el-radio label="奶茶店"></el-radio>
                  <el-radio label="理发店"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="店铺地址">
                <el-input v-model="custom.address" placeholder="请输入店铺名称"></el-input>
            </el-form-item>
            <el-form-item label="店铺负责人">
                <el-input v-model="custom.header" placeholder="请输入负责人姓名"></el-input>
            </el-form-item>
             <el-form-item label="性别">
              <el-radio-group v-model="custom.sex">
                <el-radio-button label="男"></el-radio-button>
                <el-radio-button label="女"></el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="联系方式（手机）">
                <el-input v-model="custom.phone" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="社会信用代码">
                <el-input v-model="custom.socialCreditCode" placeholder="请输入店铺名称"></el-input>
            </el-form-item>
            <el-form-item label="上传营业执照"></el-form-item>
          </el-form>
        </div>
      </div>
      <div class="custom_custom"></div>
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
  },
  data() {
    return {
      custom: {
          name:'',
          type:'',
          address:'',
          header:'',
          sex:'',
          phone:'',
          socialCreditCode:''
      }
    };
  },
  methods: {
    customClick() {
      this.$store.commit("customModify");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/custom.scss";
</style>