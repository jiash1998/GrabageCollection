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
      <div class="custom_user">
        <div id="user_con"></div>
      </div>
      <div class="custom_main">
        <div id="custom_btn" v-if="$store.state.custom">
          <el-button type="success" plain round @click="customClick">开始定制</el-button>
        </div>
        <div id="custom_main_con" v-else>
          <div id="custom_main_con_son">
            <h3>商家定制</h3>
            <el-form :model="custom" ref="custom" :rules="rules" label-position="top">
              <el-form-item label="店铺名称" prop="name">
                <el-input v-model="custom.name" placeholder="请输入店铺名称"></el-input>
              </el-form-item>
              <el-form-item label="经营类型" prop="type">
                <el-input v-model="custom.type" placeholder="输入店铺类型，如：奶茶店、网咖、烧烤店等"></el-input>
              </el-form-item>
              <el-form-item label="店铺地址" prop="address">
                <el-cascader
                  :options="options"
                  clearable
                  v-model="custom.address"
                  @change="handleChange"
                ></el-cascader>
              </el-form-item>
              <el-form-item label="店铺负责人" prop="header">
                <el-input v-model="custom.header" placeholder="请输入负责人姓名"></el-input>
              </el-form-item>
              <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="custom.sex">
                  <el-radio-button label="男"></el-radio-button>
                  <el-radio-button label="女"></el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="联系方式（手机）" prop="phone">
                <el-input v-model="custom.phone" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item label="社会信用代码" prop="socialCreditCode">
                <el-input v-model="custom.socialCreditCode" placeholder="请输入店铺名称"></el-input>
              </el-form-item>
              <el-form-item label="上传营业执照">
                <el-input v-model="custom.photo"  type="file" @change="add_img"></el-input>
              </el-form-item>
              <el-form-item label>
                <el-button type="success" v-model="custom.submit" @click="submitForm('custom')">提交</el-button>
                <el-button type="primary" plain @click="backClick">返回</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div class="custom_custom"></div>
    </div>
    <public-food></public-food>
  </div>
</template>

<script>
import PublicFood from "../components/publicFood.vue";
import options from "../country-level3-data.js";
export default {
  name: "custom",
  components: {
    PublicFood
  },
  data() {
    var validateName = (rule, value, callback) => {
      if (!value) {
        return new callback("请填写店铺名称");
      } else {
        callback();
      }
    };
    var validateType = (rule, value, callback) => {
      if (!value) {
        return new callback("请填写商铺类型");
      } else {
        callback();
      }
    };
    var validateAddress = (rule, value, callback) => {
      if (!value) {
        return new callback("请选择住址");
      } else {
        callback();
      }
    };
    var validateHeader = (rule, value, callback) => {
      if (!value) {
        return new callback("请填写真实姓名");
      } else {
        callback();
      }
    };
    var validateSex = (rule, value, callback) => {
      if (!value) {
        return new callback("请选择性别");
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if (!value) {
        return new callback("请填写手机号");
      } else {
        callback();
      }
    };
    var validateCode = (rule, value, callback) => {
      if (!value) {
        return new callback("请填写正确的信用编码");
      } else {
        callback();
      }
    };
    return {
      rules: {
        name: [{ validator: validateName, trigger: "change" }],
        type: [{ validator: validateType, trigger: "change" }],
        address: [{ validator: validateAddress, trigger: "change" }],
        header: [{ validator: validateHeader, trigger: "change" }],
        sex: [{ validator: validateSex, trigger: "change" }],
        phone: [{ validator: validatePhone, trigger: "change" }],
        socialCreditCode: [{ validator: validateCode, trigger: "change" }]
      },
      custom: {
        name: "",
        type: "",
        address: "",
        header: "",
        sex: "",
        phone: "",
        socialCreditCode: "",
        photo: "",
        submit: ""
      },
      imgs: [],
      imgData: {
        accept: "image/gif, image/jpeg, image/png, image/jpg"
      },
      options: options
    };
  },
  methods: {
    customClick() {
      this.$store.commit("customModify");
    },
    backClick() {
      this.$store.commit("customModifyToo");
    },
    handleChange(value) {
      console.log(value);
    },
    add_img(e) {
      //兼容多个浏览器
      e = event || e;
      let reader = new FileReader();
      let img1 = e.target.files[0];
      let type = img1.type; //文件的类型，判断是否是图片
      let size = img1.size; //文件的大小，判断图片的大小
      if (this.imgData.accept.indexOf(type) == -1) {
        alert("请选择我们支持的图片格式！");
        return false;
      }
      if (size > 3145728) {
        alert("请选择3M以内的图片！");
        return false;
      }
      var uri = "";
      //formdata里的命名要和后端一致
      let form = new FormData();
      form.append("photo", img1, img1.name);
      //上传图片的请求头
      this.axios
        .post("http://118.31.12.146:8080/upload", form, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(response => {
          console.log(response.data);
          uri = response.data.url;
          reader.readAsDataURL(img1);
          var that = this;
          reader.onloadend = function() {
            that.imgs.push(uri);
          };
        })
        .catch(error => {
          alert("上传图片出错！");
        });
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    submitForm(formName) {
      this.$refs[formName].validate(val => {
        if (val) {
          var data = this.custom;
          console.log(data);
          alert("success");
        } else {
          alert("error");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/custom.scss";
</style>