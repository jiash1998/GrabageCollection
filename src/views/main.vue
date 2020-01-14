<template>
  <div id="main">
    <div class="main_all">
      <div class="main_head">
        <div class="head_intro">
          <span>让垃圾的回收分类更轻松</span>
          <p>CHZU是全新一代的，为客户生活环境需求量身定制的垃圾回收方案，致力于提供一套合适的、便利的回收系统。</p>
          <p></p>
          <el-button type="success" round plain>了解更多</el-button>
        </div>
        <div class="head_vedio">
          <video
            src="../assets/img/garbageRecycle.mp4"
            controls="controls"
            poster="../assets/img/black2.jpg"
          ></video>
        </div>
      </div>
      <div class="main_body1">
        <div class="body_intro">
          <span>我们的定位</span>
        </div>
        <div class="body_main">
          <div class="body_main_fill"></div>
          <div class="body_main_intro">
            <span>沿街商铺</span>
            <p>沿街各种商铺,餐饮店、理发店、五金店等均可定制。</p>
            <a href="#">前往定制</a>
          </div>
          <div class="body_main_intro">
            <span>大型商场</span>
            <p>CHZU有处理大型商场产生垃圾的丰富经验。</p>
            <a href="#">前往定制</a>
          </div>
          <div class="body_main_fill"></div>
          <div class="body_main_fill"></div>
          <div class="body_main_intro">
            <span>居民住宅</span>
            <p>对于各种类型的小区、别墅或者居民楼，有着多种处理方案。</p>
            <a href="#">前往定制</a>
          </div>
          <div class="body_main_intro">
            <span>写字楼</span>
            <p>写字楼垃圾相对固定，有利于垃圾的便捷回收。</p>
            <a href="#">前往定制</a>
          </div>
          <div class="body_main_fill"></div>
          <div class="body_main_fill3"></div>
          <div class="body_main_fill2"></div>
          <div class="body_main_fill3"></div>
        </div>
      </div>
      <div class="main_body2">
        <div class="body2_con">
          <p id="p1">垃圾分类</p>
          <span id="sp2">可回收垃圾</span>
          <span id="sp2">干垃圾</span>
          <span id="sp2">湿垃圾</span>
          <span id="sp2">有害垃圾</span>
          <div class="body2_con_son2">
            <p>可回收物就是可以再生循环的垃圾。本身或材质可再利用的纸类、硬纸板、玻璃、塑料、金属、塑料包装，与这些材质有关的如：报纸、杂志、广告单及其它干净的纸类等皆可回收。可回收物就是可以再生循环的垃圾。本身或材质可再利用的纸类、硬纸板、玻璃、塑料、金属、塑料包装，与这些材质有关的如：报纸、杂志、广告单及其它干净的纸类等皆可回收。可回收物就是可以再生循环的垃圾。本身或材质可再利用的纸类、硬纸板、玻璃、塑料、金属、塑料包装，与这些材质有关的如：报纸、杂志、广告单及其它干净的纸类等皆可回收。</p>
          </div>
          <div class="body2_con_son1"></div>
        </div>
      </div>
      <div class="main_insert">
        <span id="insert_sp1">CHZU</span>
        <span id="insert_sp2">新一代垃圾回收方案💚</span>
        <p>CHZU 全新方案，家门口的可定制垃圾回收方案。得益于丰富的业务场景和用户需求挑战，CHZU 经历多年积累与不断打磨，已支撑全国2000+ 业务系统，通过了大量用户的严苛考验后方敢与君见。</p>
      </div>
      <div class="main_body3">
        <span id="body3_span">选择我们</span>
        <div class="body3_conall">
          <div class="body3_con1">
            <div id="imgCon">
              <img src="../assets/img/test1.png" />
            </div>
            <div id="fontCon">
              <p id="p1">定制服务</p>
              <p id="p2">用户可以随时查看垃圾回收车辆的位置</p>
            </div>
          </div>
          <div class="body3_con1">
            <div id="imgCon">
              <img src="../assets/img/test2-2.png" />
            </div>
            <div id="fontCon">
              <p id="p1">经济实惠</p>
              <p id="p2">用户可以随时查看垃圾回收车辆的位置</p>
            </div>
          </div>
          <div class="body3_con1">
            <div id="imgCon">
              <img src="../assets/img/test3.png" />
            </div>
            <div id="fontCon">
              <p id="p1">随时监控</p>
              <p id="p2">用户可以随时查看垃圾回收车辆的位置</p>
            </div>
          </div>
        </div>
      </div>
      <div class="main_body4"></div>
      <div class="main_body5">
        <div class="body5_con">
          <p id="body5_p1">
            你来选择，剩下的交给
            <span id="body5_sp1">CHZU</span>
          </p>
          <p id="body5_p2">
            这是为客户环境量身定做的垃圾回收方案
            <el-button type="success" style="margin-left:10px" plain>前往定制</el-button>
          </p>
        </div>
      </div>
      <public-food></public-food>
    </div>
  </div>
</template>

<script>
import PublicFood from "../components/publicFood.vue";
export default {
  name: "main",
  components: {
    PublicFood
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/main.scss";
</style>