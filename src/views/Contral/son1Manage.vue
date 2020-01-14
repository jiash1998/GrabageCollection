<template>
  <div id="son1Manage">
    <p>test</p>
  </div>
</template>

<script>
export default {
  name: "son1Manage",
  data() {
    return {
      list: []
    };
  },
  mounted() {
      this.getAllClassify();
  },
  methods: {
    getAllClassify() {
      this.axios
        .get("http://" + this.$store.state.path + ":8080/getAllClassify")
        //getGarbage获取垃圾
        .then(res => {
          console.log(res.data);
          var self = this;
          self.list = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>