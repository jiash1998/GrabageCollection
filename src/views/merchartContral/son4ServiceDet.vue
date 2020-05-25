<template>
  <div id="serviceDet">
    <div class="body">
      <div class="title">
        <h3>源分回收服务收费细则</h3>
      </div>
      <div class="content_S">
        <div class="con1">
          <h4>1. 基础服务费</h4>
          <p>店铺类型对应的基础服务费用如下表。</p>
          <el-table :data="base" size="small" border>
            <el-table-column prop="type" label="店铺类型"></el-table-column>
            <el-table-column prop="money" label="基础费用（元）"></el-table-column>
          </el-table>
        </div>
        <div class="con2">
          <h4>2. 垃圾量清算</h4>
          <p>回收服务内根据店铺类型的不同，每月的免费垃圾回收量也不同。超出服务内包含的垃圾量后，将按照不同的价格标准收费。细则如下表。</p>
          <el-table :data="garbage" size="small" border>
            <el-table-column prop="type" label="店铺类型"></el-table-column>
            <el-table-column prop="weight" label="基础垃圾回收量（Kg）"></el-table-column>
            <el-table-column prop="over" label="超出垃圾回收价格（元/Kg）"></el-table-column>
          </el-table>
        </div>
        <div class="con3">
          <h4>3. 包月优惠</h4>
          <p>
            单月服务费 150 元，选择包年服务，每月服务费直降
            <span>30%</span>哦！
          </p>
          <el-table :data="susMonth" size="small" border>
            <el-table-column prop="month" label="包月时长"></el-table-column>
            <el-table-column prop="money" label="所需费用（元）"></el-table-column>
          </el-table>
        </div>
        <div class="con4">
          <router-link to="/merchartContral/Son2Manager/Son2_2ManageInner">
            <el-button type="primary" size="small" plain>返回</el-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "serviceDet",
  data() {
    return {
      base: [
        {
          type: " 中小型饭店、快餐汉堡店、烧烤店、奶茶店、办公楼、火锅店",
          money: "150"
        },
        {
          type: "  理发店、药店、宾馆、超市",
          money: "100"
        },
        {
          type: "其他类型",
          money: "80"
        }
      ],
      garbage: [
        {
          type: " 中小型饭店、快餐汉堡店、烧烤店、奶茶店、办公楼、火锅店",
          weight: "300",
          over: "1"
        },
        {
          type: "  理发店、药店、宾馆、超市",
          weight: "250",
          over: "0.8"
        },
        {
          type: "其他类型",
          weight: "200",
          over: "0.6"
        }
      ],
      susMonth: [
        {
          month: "1个月",
          money: "150"
        },
        {
          month: "全年",
          money: "105"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son4ServiceDet.scss";
</style>