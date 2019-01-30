<template>
    <div class="main">
        <p>推荐优质项目：</p>
        <el-menu :default-active="activeIndex" class="el-menu-demo">
            <el-menu-item index="1">
                <a href="https://cn.vuejs.org/" target="_blank">vue.js</a>
            </el-menu-item>
            <el-menu-item index="2">
                <a href="https://webpack.js.org/" target="_blank">webpack.js</a>
            </el-menu-item>
            <el-menu-item index="3">
                <a href="https://nodejs.org/en/" target="_blank">nodejs</a>
            </el-menu-item>
            <el-menu-item index="4">
                <a href="https://koa.bootcss.com/" target="_blank">koa.js</a>
            </el-menu-item>
            <el-menu-item index="5">
                <a href="https://expressjs.com/" target="_blank">expressjs</a>
            </el-menu-item>
            <el-menu-item index="6">
                <a href="http://element-cn.eleme.io/#/zh-CN/component/menu" target="_blank">饿了吗ui库</a>
            </el-menu-item>
            <el-menu-item index="7">
                <a href="http://www.bootcss.com/" target="_blank">Bootstrap</a>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'Aside',
        data() {
            return {
                activeIndex: '1'
            }
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main {
        border-left: 1px solid #ddd;
        width: 100%;
        height: 100%;
    }
    .main a{
        color: #222222;
        text-decoration: none;
    }
</style>
