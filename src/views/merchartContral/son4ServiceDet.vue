<template>
  <div id="serviceDet">
    <div class="body">
      <div class="title">
        <h3>源分回收服务</h3>
      </div>
      <div class="content">
        <div class="con1">
          <h4>1. 基础服务费</h4>
          <el-table :data="base" size="small" border>
            <el-table-column prop="type" label="店铺类型"></el-table-column>
            <el-table-column prop="money" label="基础费用"></el-table-column>
          </el-table>
        </div>
        <div class="con2">
          <h4>2. 垃圾量清算</h4>
          <el-table :data="garbage" size="small" border>
            <el-table-column prop="type" label="店铺类型"></el-table-column>
            <el-table-column prop="weight" label="基础垃圾回收量(Kg)"></el-table-column>
            <el-table-column prop="over" label="超出垃圾回收价格"></el-table-column>
          </el-table>
        </div>
        <div class="con3">
          <h4>3. 包月优惠</h4>
          <el-table :data="susMonth" size="small" border>
            <el-table-column prop="month" label="包月时长"></el-table-column>
            <el-table-column prop="money" label="所需费用"></el-table-column>
          </el-table>
        </div>
        <div class="con4">
          <el-button type="primary" size="small" plain>返回</el-button>
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
          over: ""
        },
        {
          type: "  理发店、药店、宾馆、超市",
          weight: "250",
          over: ""
        },
        {
          type: "其他类型",
          weight: "200",
          over: ""
        }
      ],
      susMonth: [
        {
          month: "1",
          money: "120"
        },
        {
          month: "1+",
          money: "100"
        },
        {
          month: "12",
          money: "100"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../../assets/css/son4ServiceDet.scss";
</style>