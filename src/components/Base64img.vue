<template>
    <div class="main">
        <el-row :gutter="10">
            <el-upload
                    class="upload-demo"
                    ref="upload"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-change="change"
                    :file-list="fileList"
                    :auto-upload="false">
                <el-button slot="trigger" size="small"  type="primary" icon="el-icon-upload">
                    选取文件
                </el-button>
                <span slot="tip" class="el-upload__tip">只能上传jpg/png文件</span>
            </el-upload>
        </el-row>
        <el-row>
            <el-input type="textarea" rows="10" placeholder="请先上传图片" v-model="base64Result"></el-input>
        </el-row>
        <el-row>
            <el-button type="primary" size="small" icon="el-icon-picture-outline"  @click="toImg">base64字符转为图片</el-button>
        </el-row>
        <el-row>
            <img :src="imgSrc">
        </el-row>
        <el-row class="tip">
            <ul>
                <li>将图片转换为Base64编码，可以不用上传图片，即可保存到网页中。</li>
                <li>生成的代码为"data:image/jpeg;base64, ....."，你只需要全部复制插入到相应位置。</li>
                <li>CSS中使用：background-image: url("data:image/png;base64,BeRo0KLta=...");</li>
                <li>HTML中使用：&lt;img src="data:image/png;base64,BeRo0KLta=..." /&gt;</li>
            </ul>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'Base64img',
        data() {
            return {
                base64Result: '',
                fileList: [],
                imgSrc: ''
            }
        },
        mounted() {
            if (typeof(FileReader) === 'undefined') {
                alert("抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！");
            }
        },
        methods: {
            toImg() {
                this.imgSrc = this.base64Result;
            },
            change(file) {
                let self = this;
                self.fileList = [];
                /* eslint-disable */
                console.log(file);
                self.imgSrc = '';
                let type = file.raw.type;
                if (!(type === 'image/png' || type === 'image/jpg')) {
                    self.$message.error('请上传支持的图片');
                    return;
                }
                let r = new FileReader();  //本地预览
                r.onload = function () {
                    self.base64Result = r.result; //Base64
                };
                r.readAsDataURL(file.raw);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-input,
    .el-button {
        margin: 10px;
    }
    .main{
        margin-top: 25px;
    }
</style>
