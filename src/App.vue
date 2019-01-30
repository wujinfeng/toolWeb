<template>
    <div id="app">
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-aside>
                    <Aside></Aside>
                </el-aside>
            </el-container>
            <el-footer>
                <Footer></Footer>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import Header from '@/components/comm/Header'
    import Footer from '@/components/comm/Footer'
    import Aside from '@/components/comm/Aside'

    export default {
        name: 'App',
        components: {
            Header, Footer, Aside
        }
    }

</script>

<style>
    .el-main {
        padding: 0 80px;
    }

    @media screen and (max-width: 800px) {
        .el-aside {
            display: none;
        }
        .el-main {
            padding: 0 25px;
        }
    }
</style>
