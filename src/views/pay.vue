 <template>
  <div>
    <!-- v-html解析标签 -->
    <div v-html="apply">{{apply}}</div>
  </div>
</template>
 
 <script>
export default {
  name: "test",
  data() {
    return {
      apply: ""
    };
  },
  mounted() {
    let form = this.$route.query.htmls;
    this.apply = form;
    //当数据发生变化时执行 this.nextTick
    //当dom发生变化时执行
    this.$nextTick(() => {
      document.forms[0].submit();
    });
  }
};
</script>
 
 <style lang="scss" scoped>
</style>