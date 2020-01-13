<template>
    <div id="publicFood">
        <div id="food">
            <div id="food_con1">
                <p>联系我们</p>
            </div>
            <div id="food_con1">
                <p>意见建议</p>
            </div>
            <div id="food_con1">
                <p>Others</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'publicFood'
    }
</script>

<style lang="scss" scoped>
#food{
    width: 100%;
    height: 400px;
    background-color:black;
    display: flex;
    justify-content: space-evenly;
    #food_con1{
        width: 30%;
        height: 300px;
        // background-color: #fff;
        display: flex;
        justify-content: center;
        p{
            color: #fff;
            font-size: 1.1em;
            margin: 60px 0 20px 0;
        }
    }
}
</style>