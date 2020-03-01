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
          <span id="sp2" v-for="(item,index) in type" :key="index" @click="select(index)">{{item}}</span>
          <div
            class="body2_con_son2"
            v-for="(item,index) in info"
            :key="'info' + index"
            v-show="item.state"
          >
            <p>{{item.p1}}</p>
            <p>{{item.p2}}</p>
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
          <div class="body3_con1" v-for="(item,index) in advantage" :key="index">
            <div id="imgCon">
              <img :src="item.url"/>
            </div>
            <div id="fontCon">
              <p id="p1">{{item.title}}</p>
              <p id="p2">{{item.content}}</p>
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
            <router-link to="/merchartContral/Son1Custom" tag="div">
              <el-button type="success" style="margin-left:10px" plain>前往定制</el-button>
            </router-link>
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
  },
  data() {
    return {
      view: 0,
      type: ["可回收垃圾", "干垃圾", "湿垃圾", "有害垃圾"],
      advantage: [
        {
          url: require("../assets/img/test1.png"),
          // url:"../assets/img/test1.png",
          title: "定制服务",
          content: "基于客户最大的自主权"
        },
        {
          url: require("../assets/img/test2-2.png"),
          title: "经济实惠",
          content: "价格实惠的同时保证服务质量"
        },
        {
          url: require("../assets/img/test3.png"),
          title: "随时监控",
          content: "用户可以随时查看垃圾回收车辆的位置"
        }
      ],
      info: [
        {
          id: 0,
          state: true,
          p1:
            "可回收物就是可以再生循环的垃圾。本身或材质可再利用的纸类、硬纸板、玻璃、塑料、金属、塑料包装，与这些材质有关的如：报纸、杂志、广告单及其它干净的纸类等皆可回收。",
          p2:
            "包括：1、纸类：未严重玷污的文字用纸、包装用纸和其他纸制品等。如报纸、各种包装纸、办公用纸、广告纸片、纸盒、复印纸等；2、塑料：废容器塑料、包装塑料等塑料制品。比如各种塑料袋、塑料瓶、泡沫塑料、一次性塑料餐盒餐具、硬塑料等；3、金属：各种类别的废金属物品。如易拉罐、铁皮罐头盒、铅皮牙膏皮等；4、玻璃：有色和无色废玻璃制品；5、织物：旧纺织衣物和纺织制品。"
        },
        {
          id: 1,
          state: false,
          p1:
            "干垃圾即其它垃圾，指除可回收物、有害垃圾、厨余垃圾（湿垃圾）以外的其它生活废弃物。干垃圾是对垃圾按照可回收垃圾、厨余垃圾、有害垃圾分类后剩余下来的一种垃圾。生活垃圾的具体分类标准可根据经济社会发展水平、生活垃圾特性和处置利用需要予以调整。",
          p2:
            "其他垃圾包括砖瓦陶瓷、渣土、卫生间废纸、瓷器碎片等难以回收的废弃物，采取卫生填埋可有效减少对地下水、地表水、土壤及空气的污染，在当今社会，还无有效化解其他垃圾的好方法，所以需尽量少产生。"
        },
        {
          id: 2,
          state: false,
          p1:
            "湿垃圾又称为厨余垃圾、有机垃圾，即易腐垃圾，指食材废料、剩菜剩饭、过期食品、瓜皮果核、花卉绿植、中药药渣等易腐的生物质生活废弃物。",
          p2:
            "湿垃圾是居民日常生活及食品加工、饮食服务、单位供餐等活动中产生的垃圾，包括丢弃不用的菜叶、剩菜、剩饭、果皮、蛋壳、茶渣、骨头、动物内脏、鱼鳞、树叶、杂草等，其主要来源为家庭厨房、餐厅、饭店、食堂、市场及其他与食品加工有关的行业。"
        },
        {
          id: 3,
          state: false,
          p1:
            "有害垃圾指废电池、废灯管、废药品、废油漆及其容器等对人体健康或者自然环境造成直接或者潜在危害的生活废弃物。常见包括废电池、废荧光灯管、废灯泡、废水银温度计、废油漆桶、过期药品等。",
          p2:
            "有害有毒垃圾需特殊正确的方法安全处理。分类投放有害垃圾时，应注意轻放。其中：废灯管等易破损的有害垃圾应连带包装或包裹后投放；废弃药品宜连带包装一并投放；杀虫剂等压力罐装容器，应排空内容物后投放；在公共场所产生有害垃圾且未发现对应收集容器时，应携带至有害垃圾投放点妥善投放。"
        }
      ]
    };
  },
  methods: {
    //v-for循环的div展示
    select(type) {
      this.info[type].state = true;
      for (const i of this.info) {
        if (i.id != type) {
          i.state = false;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/main.scss";
</style>