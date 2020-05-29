<template>
  <div id="son2_2Manager">
    <div class="body">
      <div class="left">
        <router-link to="/merchartContral/Son2Manager/Son2_1ManageOuter" tag="div">
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
              <p v-if="storeInfo.isCus == '已付款'">已定制</p>
              <p v-else>定制中</p>
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
              <i class="el-icon-warning-outline"></i>
              &nbsp;{{developStatus}}
            </p>
            <p style="color:gray;" v-if="customCha">请及时完成店铺定制计划，提交后次日即可实行 🚨</p>
            <p style="color:gray;" v-else>已定制完成，即日起可享受源分的优质服务 💕</p>
            <div id="btnDiv">
              <div id="priDiv" :class="{priStatus:isPri}">
                <el-button
                  type="primary"
                  :class="{displayChange:!isNone}"
                  @click="submit('garbageCycle')"
                >提交审核</el-button>
              </div>
              <div id="detailDiv" :class="{priStatus:!isPri}">
                <el-button type="success" @click="toDetail" plain>回收详情</el-button>
              </div>
              <el-button @click="deleteStore">删除</el-button>
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
          <div class="customInfo" :class="{DivChange:customCha}">
            <p>
              回收时间：
              <span>{{storeInfo.cycleDate}}</span>
            </p>
            <p>
              回收频率：
              <span>{{storeInfo.cycleTimes}}</span>
            </p>
            <p>
              包月时长：
              <span>{{storeInfo.sustainMonth}}</span>
            </p>
            <p>
              支付方式：
              <span>{{storeInfo.payType}}</span>
            </p>
            <p>
              服务开始时间：
              <span>{{ReturnData}}</span>
            </p>
          </div>
          <div class="next" :class="{DivChange:!customCha}">
            <el-form :model="garbageCycle" :rules="rules" ref="garbageCycle">
              <el-form-item label="回收时间" prop="cycleDate">
                <el-checkbox-group v-model="garbageCycle.cycleDate">
                  <el-checkbox
                    v-for="(item,index) in date"
                    :checked="index == 0?true:false"
                    :key="index"
                    :label="item"
                  >{{item}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="回收频率" prop="cycleTimes">
                <el-checkbox-group v-model="garbageCycle.cycleTimes">
                  <el-checkbox
                    v-for="(item,index) in times"
                    :checked="index == 0?true:false"
                    :key="index"
                    :label="item"
                  >{{item}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="服务包月">
                <el-input-number v-model="garbageCycle.sustainMonth" size="mini" :min="1" :max="12"></el-input-number>
              </el-form-item>
              <el-form-item label="支付方式" prop="payType">
                <el-radio-group v-model="garbageCycle.payType">
                  <el-radio label="支付宝">
                    <img style="width:65px;height:35px;" src="../../assets/img/zfb.jpg" />
                  </el-radio>
                  <el-radio label="微信">
                    <img style="width:65px;height:35px;" src="../../assets/img/wx.jpg" />
                  </el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form>
          </div>
          <!-- 价格 -->
          <p class="priceP" v-if="this.storeInfo.isCus === '已付款'?false:true">
            价格：
            <span>￥</span>
            <span>{{price}}</span>
          </p>
          <!-- 付款解释 -->
          <div class="tips">
            <p>提示</p>
            <ul>
              <li>1.考虑到店铺类型的不同及产生的垃圾量，源分会收取不同的基础服务费用。</li>
              <li>
                2.包年更加优惠呦 ! 服务费直降
                <span>30%</span> !
              </li>
              <li>
                3.每月免费回收的垃圾量由店铺类型和包月时长决定，最多免费回收垃圾高达
                <span>300 Kg</span>。
              </li>
              <li>
                <router-link tag="a" to="/Son4ServiceDet">了解详情↩</router-link>
              </li>
            </ul>
          </div>
        </div>
        <public-foot-mini></public-foot-mini>
      </div>
    </div>
  </div>
</template>

<script>
import publicFootMini from "../../components/publicFootMini.vue";
import payAliApi from "../../api/postRequest.js";
import updateCustomByIdApi from "../../api/postRequest.js";
import delCustomBySocialCodeApi from "../../api/postRequest.js";
import * as calcu from "../../util/priceCalcu.js";

export default {
  name: "son2_2anager",
  components: {
    publicFootMini
  },
  computed: {
    //服务开始时间设定
    ReturnData() {
      return this.storeInfo.tradeTimeEnd;
    }
  },
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
        money: 150,
        username: "",
        isCus: "待付款"
      },
      //开发状态
      developStatus: "开发中",
      //DIV状态修改
      change: false,
      //定制div状态
      customCha: false,
      //付款或者删除按钮状态
      isNone: true,
      //付款和删除状态
      isPri: false,
      //价钱
      price: 0,
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
  watch: {
    price: {
      handler() {
        // console.log("change");
      }
    },
    garbageCycle: {
      handler(val) {
        // console.log(val);
        if (val.cycleDate.length != 0 && val.cycleTimes.length != 0) {
          this.price = calcu.setStorePrice(
            this.storeInfo.type,
            val.cycleDate,
            val.cycleTimes,
            val.sustainMonth
          );
        } else {
          this.price = "正在计算中,请选择完整！";
        }
      },
      deep: true
    }
  },
  methods: {
    //去详情页面
    toDetail() {
      let data = JSON.parse(sessionStorage.customObj);
      this.$router.push({
        path: "/Son5GarDetail",
        query: { id: data.id, type: data.type }
      });
    },
    //获取对应商铺信息
    getInfo() {
      console.log(JSON.parse(sessionStorage.customObj));
      this.storeInfo = JSON.parse(sessionStorage.customObj);

      this.editorCus = this.storeInfo;
      for (const i in this.editorCus) {
        switch (this.editorCus[i]) {
          case "已付款":
            this.developStatus = "已完成";
            // console.log("已付款");
            this.isPri = !this.isPri;
            break;
          case "未定制":
            // console.log("未定制");;
            this.customCha = true;
            break;
          default:
            break;
        }
      }
    },
    //店铺删除
    deleteStore() {
      this.$confirm("此操作将永久删除注册店铺, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          var data = { code: this.storeInfo.socialCreditCode };
          console.log(data);

          delCustomBySocialCodeApi
            .delCustomBySocialCode(data)
            .then(res => {
              console.log(res);
              if (res.data.code == 200 && res.data.msg == "删除成功") {
                this.$router.push(
                  "/merchartContral/Son2Manager/Son2_1ManageOuter"
                );
                this.$router.go(0);
                // setTimeout(() => {
                //   this.$message({
                //     type: "success",
                //     message: "删除成功!"
                //   });
                // }, 500);
              }
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(() => {
          this.$message({
            type: "warning",
            message: "已取消删除"
          });
        });
    },
    //店铺div改变状态
    changeDiv() {
      this.change = !this.change;
    },
    //修改定制
    submitForm(formName) {
      this.$refs[formName].validate(val => {
        if (val) {
          this.editorCus.id = this.storeInfo.id;
          var data = this.editorCus;
          console.log(data);
          // var id = { id: this.editorCus.id };
          updateCustomByIdApi
            .updateCustomById(data)
            .then(res => {
              console.log(res);
              this.$message({
                message: "保存成功",
                type: "success",
                duration: 1500
              });
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.$message({
            message: "啥都没改别捣乱!",
            type: "warning",
            duration: 1500
          });
        }
      });
    },
    //提交回收方案
    submit(formname) {
      this.$refs[formname].validate(val => {
        if (val) {
          //将附属信息加进去
          this.garbageCycle.id = JSON.parse(sessionStorage.customObj).id;
          let data = this.garbageCycle;
          data.money = calcu.setStorePrice(
            this.storeInfo.type,
            data.cycleDate,
            data.cycleTimes,
            data.sustainMonth
          );
          console.log(data);

          payAliApi
            .payAli(data)
            .then(res => {
              console.log(res.data);
              this.steps += 1;
              this.$message({
                message: "提交成功",
                type: "success",
                duration: 1500
              });
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
          this.$message({
            message: "请完整填写定制方案",
            type: "error",
            duration: 1500
          });
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son2_2ManageInner.scss";
</style>