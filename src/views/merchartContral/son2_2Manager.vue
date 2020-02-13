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
          <div class="head_step">
            <el-steps :space="200" :active="steps" align-center>
              <el-step title="未定制"></el-step>
              <el-step title="待付款"></el-step>
              <el-step title="定制完成"></el-step>
            </el-steps>
          </div>
        </div>
        <div class="right_del">
          <div class="del">
            <p>
              <i class="el-icon-warning-outline"></i>
              &nbsp;{{developStatus}}
            </p>
            <p style="color:gray;">请及时完成店铺定制计划，提交后次日即可实行</p>
            <div id="btnDiv">
              <div id="priDiv" :class="{priStatus:isPri}">
                <el-button type="primary" :class="{displayChange:isNone}" plain @click="pay">前往付款</el-button>
                <el-button
                  type="primary"
                  :class="{displayChange:!isNone}"
                  @click="submit('garbageCycle')"
                >提交审核</el-button>
              </div>
              <el-button type>删除</el-button>
            </div>
          </div>
        </div>
        <div class="basic">
          <div class="title">
            <p id="p1">基础信息</p>
            <span :class="{DivChange:change}" @click="changeDiv">编辑</span>
          </div>
          <div class="infoP" :class="{DivChange:change}">
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
            <p>
              联系方式：
              <span>{{storeInfo.phone}}</span>
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
          <div class="editor" :class="{DivChange:!change}">
            <el-form
              :model="editorCus"
              ref="editorCus"
              label-position="left"
              label-width="100px"
              size="small"
            >
              <el-form-item label="店铺名称" prop="name">
                <el-input v-model="editorCus.name" placeholder="请输入店铺名称"></el-input>
              </el-form-item>
              <el-form-item label="经营类型" prop="type">
                <el-input v-model="editorCus.type" placeholder="输入店铺类型，如：奶茶店、网咖、烧烤店等"></el-input>
              </el-form-item>
              <el-form-item label="店铺地址" prop="address">
                <el-input v-model="editorCus.address" disabled></el-input>
              </el-form-item>
              <el-form-item prop="addressDetail">
                <el-input v-model="editorCus.addressDetail" disabled></el-input>
              </el-form-item>
              <el-form-item label="负责人" prop="header">
                <el-input v-model="editorCus.header" placeholder="请输入负责人姓名"></el-input>
              </el-form-item>
              <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="editorCus.sex">
                  <el-radio-button label="男"></el-radio-button>
                  <el-radio-button label="女"></el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="手机号" prop="phone">
                <el-input v-model="editorCus.phone" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item label="营业执照">
                <el-input v-model="editorCus.photo" type="file" disabled></el-input>
              </el-form-item>
              <el-form-item label="社会信用代码" prop="socialCreditCode">
                <el-input v-model="editorCus.socialCreditCode" disabled></el-input>
              </el-form-item>
              <el-form-item label>
                <el-button
                  type="success"
                  v-model="editorCus.submit"
                  @click="submitForm('editorCus')"
                >保存</el-button>
                <el-button type="primary" @click="changeDiv" plain>取消</el-button>
              </el-form-item>
            </el-form>
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
              <el-form-item label="服务包月">
                <el-input-number v-model="garbageCycle.sustainMonth" size="mini" :min="1" :max="12"></el-input-number>
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
import qs from "querystring";
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
      //资源回收表单
      garbageCycle: {
        cycleDate: [],
        cycleTimes: [],
        payType: "",
        sustainMonth: "",
        id: "",
        money: 500,
        username: "",
        isCus: "待付款"
      },
      //开发状态
      developStatus: "开发中",
      //DIV状态修改
      change: false,
      //付款或者删除按钮状态
      isNone: true,
      //付款和删除状态
      isPri: false,
      //step状态
      steps: 1,
      //修改
      editorCus: {
        name: "",
        type: "",
        //所在地区和详细地址
        address: "",
        addressDetail: "",
        header: "",
        sex: "",
        phone: "",
        url: "",
        socialCreditCode: "",
        photo: "",
        id: "",
        submit: ""
      },
      //存放定制信息
      storeInfo: {}
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    //获取对应商铺信息
    getInfo() {
      console.log(JSON.parse(sessionStorage.customObj));
      this.storeInfo = JSON.parse(sessionStorage.customObj);
      this.editorCus = this.storeInfo;
      for (const i in this.editorCus) {
        switch (this.editorCus[i]) {
          case "已付款":
            this.developStatus = "已完成";
            this.steps = 3;
            console.log("已付款");
            this.isPri = !this.isPri;
            break;
          case "待付款":
            this.isNone = !this.isNone;
            console.log("待付款");
            this.steps = 2;
            break;
          case "未定制":
            console.log("未定制");
            this.steps = 1;
            break;
          default:
            console.log("别看了");
            break;
        }
        // if (this.editorCus[i] == "已付款") {
        //   this.developStatus = "已完成";
        //   this.steps = 3;
        //   console.log("已付款");
        //   this.isPri = !this.isPri;
        //   break;
        // } else if (this.editorCus[i] == "待付款") {
        //   this.isNone = !this.isNone;
        //   console.log("待付款");
        //   this.steps = 2;
        //   break;
        // } else {
        //   this.steps = 1;
        //   console.log("未定制");
        // }
      }
    },
    //改变状态
    changeDiv() {
      this.change = !this.change;
    },
    //前往付款
    pay() {
      var data = { money: 500, id: JSON.parse(sessionStorage.customObj).id };
      this.axios
        .post(
          "http://" + this.$store.state.path + ":8080/payAli",
          qs.stringify(data),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          let routerData = this.$router.resolve({
            path: "/Pay",
            query: { htmls: res.data }
          });
          this.htmls = res.data;
          window.open(routerData.href, "_ blank");
          const div = document.createElement("div");
          div.innerHTML = this.htmls;
          document.body.appendChild(div);
          document.forms[0].submit();
        })
        .catch(err => {
          console.log(err);
        });
    },
    //修改定制
    submitForm(formName) {
      this.$refs[formName].validate(val => {
        if (val) {
          this.editorCus.id = this.storeInfo.id;
          var data = { money: 500 };
          this.axios
            .post(
              "http://" + this.$store.state.path + ":8080/updateCustomById",
              qs.stringify(data),
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              }
            )
            .then(res => {
              console.log(res.data);
              alert("保存成功");
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          alert("啥都没改，别捣乱");
        }
      });
    },
    //提交回收方案
    submit(formname) {
      this.$refs[formname].validate(val => {
        if (val) {
          //将附属信息加进去
          this.garbageCycle.id = JSON.parse(sessionStorage.customObj).id;
          var data = this.garbageCycle;
          console.log(data);
          this.axios
            .post(
              "http://" + this.$store.state.path + ":8080/payAli",
              qs.stringify(data),
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              }
            )
            .then(res => {
              console.log(res.data);
              this.steps += 1;
              // this.isNone = !this.isNone;
              // localStorage.setItem("btnState", this.isNone);
              alert("提交成功");
              //修改按钮状态
              // localStorage.setItem("payInfo", res.data);
              this.editorCus.callback = res.data;
              console.log(this.editorCus);
              // //resolve和routerLink/to 一样
              let routerData = this.$router.resolve({
                path: "/Pay",
                query: { htmls: res.data }
              });
              this.htmls = res.data;
              // // //打开新页面(地址，空白的)
              window.open(routerData.href, "_ blank");
              // // //创造一个节点，并写入返回的html代码
              const div = document.createElement("div");
              div.innerHTML = this.htmls;
              document.body.appendChild(div);
              document.forms[0].submit();
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          alert("请填写回收定制方案!");
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