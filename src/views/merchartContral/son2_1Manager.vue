<template>
  <div id="son2Manager">
    <div class="body">
      <div class="viewDiv">
        <div
          class="custom"
          :class="isClick == index ? 'click' : ''"
          @click="choose(index)"
          v-for="(item,index) in custom"
          :key="index"
        >
          <div class="customImg">
            <img :src="item.url" />
          </div>
          <div class="customCon1">
            <p>店铺名称：{{item.name}}</p>
            <p>所在区域：{{item.address}}</p>
            <p>详细地址：{{item.addressDetail}}</p>
          </div>
          <div class="customCon2">
            <p>负责人：{{item.header}}</p>
            <p>社会信用编码：{{item.socialCreditCode}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="next">
      <div class="payForm">
        <el-form :model="garbageCycle" :rules="garbageCycle" refs="garbageCycle">
          <el-form-item label="回收时间">
            <el-checkbox-group v-model="garbageCycle.cycleDate">
              <el-checkbox v-for="(item,index) in date" :key="index" :label="item">{{item}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="回收频率">
            <el-checkbox-group v-model="garbageCycle.cycleTimes">
              <el-checkbox v-for="(item,index) in times" :key="index" :label="item">{{item}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="支付方式">
            <el-radio-group v-model="garbageCycle.payChoose">
              <el-radio label="zfb">
                <img style="width:65px;height:35px;" src="../../assets/img/zfb.jpg" />
              </el-radio>
              <el-radio label="wx">
                <img style="width:65px;height:35px;" src="../../assets/img/wx.jpg" />
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label>
            <el-button type="primary" plain>提交付款</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <public-foot></public-foot>
  </div>
</template>

<script>
import PublicFoot from "../../components/publicFood.vue";
export default {
  name: "son2Manager",
  components: {
    PublicFoot
  },
  data() {
    return {
      isCustom: true,
      isClick: -1,
      custom: [],
      search: {
        name: ""
      },
      date: ["6:00-7:30", "11:00-13:30", "17:00-18:30", "22:00-12:30"],
      times: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      garbageCycle: {
        cycleDate: [],
        cycleTimes: [],
        payChoose: ""
      }
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      await this.axios
        .get("http://" + this.$store.state.path + ":8080/getAllCustom")
        .then(res => {
          for (const i of res.data) {
            if (i.user == sessionStorage.getItem("userName")) {
              this.custom.push(i);
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    choose(index) {
      console.log(index);
      sessionStorage.setItem("index", index);
      this.isClick = index;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son2_1Manager.scss";
</style>