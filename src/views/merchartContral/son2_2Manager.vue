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
              <img :src="storeInfo.url" />
            </div>
            <div class="storeName">
              {{storeInfo.name}}
              <p>定制中</p>
            </div>
          </div>
          <div class="info">
            <div class="infoId">storeId</div>
            <div class="infoNum">{{storeInfo.socialCreditCode}}</div>
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
            <p>
              <i class="el-icon-warning-outline"></i>&nbsp;开发中
            </p>
            <p style="color:gray;">请及时完成店铺定制计划，提交后次日即可实行</p>
            <div id="btnDiv">
              <el-button type="primary">提交审核</el-button>
              <el-button type>删除</el-button>
            </div>
          </div>
        </div>
        <div class="basic">
          <p id="p1">基础信息</p>
          <div class="infoP">
            <P>
              店铺名称:
              <span>{{storeInfo.name}}</span>
            </P>
            <p>
              经营范围：
              <span>{{storeInfo.type}}</span>
            </p>
            <p id="imgSpan">
              店铺图片：
                <img :src="storeInfo.url" />
            </p>
            <p>
              店铺负责人：
              <span>{{storeInfo.header}}</span>
            </p>
            <P>
              性别：
              <span>{{storeInfo.sex}}</span>
            </P>
            <p>
              所在区域：
              <span>{{storeInfo.address}}</span>
            </p>
            <p>
              详细地址：
              <span>{{storeInfo.addressDetail}}</span>
            </p>
          </div>
        </div>
        <div class="custom">
          <p id="p1">回收定制</p>
          <div class="next">
            <el-form :model="garbageCycle" :rules="rules" ref="garbageCycle">
              <el-form-item label="回收时间" prop="cycleDate">
                <el-checkbox-group v-model="garbageCycle.cycleDate">
                  <el-checkbox v-for="(item,index) in date" :key="index" :label="item">{{item}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="回收频率" prop="cycleTimes">
                <el-checkbox-group v-model="garbageCycle.cycleTimes">
                  <el-checkbox v-for="(item,index) in times" :key="index" :label="item">{{item}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="支付方式" prop="payType">
                <el-radio-group v-model="garbageCycle.payType">
                  <el-radio label="zfb">
                    <img style="width:65px;height:35px;" src="../../assets/img/zfb.jpg" />
                  </el-radio>
                  <el-radio label="wx">
                    <img style="width:65px;height:35px;" src="../../assets/img/wx.jpg" />
                  </el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="foot">
          <p>Copyright © 2020 CHZU（滁州）资源回收有限公司 ｜ ICP证皖B2-20160559</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "son2_2anager",
  data() {
    var validatecycleDate = (rule, value, callback) => {
      if (value.length < 1) {
        return callback(new Error("请选择一个"));
      } else {
        callback();
      }
    };
    var validatecycleTimes = (rule, value, callback) => {
      if (value.length < 1) {
        return callback(new Error("请选择一个"));
      } else {
        callback();
      }
    };
    var validatepayType = (rule, value, callback) => {
      if (!value) {
        return new callback("请选择支付方式");
      } else {
        callback();
      }
    };
    return {
      isCustom: true,
      isClick: -1,
      custom: [],
      search: {
        name: ""
      },
      rules: {
        cycleDate: [{ validator: validatecycleDate, trigger: "change" }],
        cycleTimes: [{ validator: validatecycleTimes, trigger: "change" }],
        payType: [{ validator: validatepayType, trigger: "change" }]
      },
      date: ["6:00-7:30", "11:00-13:30", "17:00-18:30", "22:00-12:30"],
      times: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      garbageCycle: {
        cycleDate: [],
        cycleTimes: [],
        payType: "",
        username: ""
      },
      //存放定制信息
      storeInfo: {}
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      console.log(sessionStorage.customObj);
      this.storeInfo = JSON.parse(sessionStorage.customObj);
    },
    submit(formname) {
      this.$refs[formname].validate(val => {
        if (val && this.isClick != -1) {
          var data = this.garbageCycle;
          console.log(data);
          //   this.axios
          //     .post(
          //       "http://" + this.$store.state.path + ":8080/checkLogin",
          //       qs.stringify(data),
          //       {
          //         headers: {
          //           "Content-Type": "application/x-www-form-urlencoded"
          //         }
          //       }
          //     )
          //     .then(res => {
          //       console.log(res.data);
          //       alert("post success");
          //     })
          //     .catch(err => {
          //       console.log(err);
          //     });
        } else {
          alert("请填写完整");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son2_2Manager.scss";
</style>