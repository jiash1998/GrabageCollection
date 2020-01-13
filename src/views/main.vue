<template>
  <div id="main">
    <div class="main_all">
      <div class="main_head">
        <div class="head_intro">
          <span>让垃圾的回收分类更轻松</span>
          <p>CHZU是全新一代的，为客户需求量身定制的垃圾回收方案，致力于提供一套合适的、便利的回收系统。</p>
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
      <div class="main_body">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "main"
};
</script>

<style lang="scss" scoped>
@import "../assets/css/main.scss";
</style>