<template>
    <div class="main">
        <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#409EFF"
                text-color="#dddddd"
                router
                active-text-color="#ffffff">
            <el-menu-item index="/md5"  >md5加密</el-menu-item>
            <el-submenu index="">
                <template slot="title">base64</template>
                <el-menu-item index="/base64str" >加密解密</el-menu-item>
                <el-menu-item index="/base64img" >图片转换</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                activeIndex: '/md5'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                /* eslint-disable */
                console.log(key, keyPath);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main {
        font-weight: bold;
    }
</style>
