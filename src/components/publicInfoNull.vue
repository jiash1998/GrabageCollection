<template>
  <div id="infoNull">
    <div class="conNull">
      <div class="contain">
        <img class="nullImg" src="../assets/img/info.png" />
        <p class="nullP">暂无消息</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "infoNull"
};
</script>

<style lang="scss" scoped>
#infoNull {
    .conNull {
        width: 100%;
        height: 400px;
        // background-color: pink;
        border-radius: 3px;
        position: relative;

        .contain {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            .nullImg {
            width: 100px;
            }

            .nullP {
            color: gray;
            font-size: 1.2em;
            text-align: center;
            }
        }
    }
}
</style>