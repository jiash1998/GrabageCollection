<template>
    <div id="custom">
        <div id="custom_body"></div>
        <public-food></public-food>
    </div>
</template>

<script>
import PublicFood from '../components/publicFood.vue';
    export default {
        name:'custom',
        components:{
            PublicFood
        }
    }
</script>

<style lang="scss" scoped>
@import "../assets/css/custom.scss";
</style>