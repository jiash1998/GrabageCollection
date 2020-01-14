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
    },
    postData(){
         this.axios
          .post(
            "http://"+self.$store.state.path+":8080/sourcecontroller/selectsourcefromsourcedrugid",
            qs.stringify(data),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            }
          )
          .then(res => {
              //数据二次转格式
            self.purchaseForm = JSON.parse(JSON.stringify(self.purchaseForm));
            console.log(
              this.$store.state.purchaseDrugInfo.data[0].sourcedrugspe
            );
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