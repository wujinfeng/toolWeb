<template>
    <div class="main">
        <el-row :gutter="10">
            <el-col :span="12">
                <el-input placeholder="请输入内容" v-model="inputStr" clearable></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <el-button type="primary" @click="base64Encode">编码</el-button>
                <el-button type="primary" @click="base64Decode">解码</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-input type="textarea" rows="5" v-model="result"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <p>
                Base64是网络上最常见的用于传输8Bit字节代码的编码方式之一，
                在了解Base64编码之前，先了解几个基本概念：位、字节。
            </p>
            <p>
                位："位(bit)"是计算机中最小的数据单位。每一位的状态只能是0或1；
            </p>
            <p>
                字节：8个二进制位构成1个"字节(Byte)"，字节是存储空间的基本计量单位。
                1个字节可以储存1个英文字母，2个字节可以存储1个汉字；
            </p>

            <p>Base64编码的作用</p>
            <p>
                因为有些网络传送渠道并不支持所有的字节，例如传统的邮件只支持可见字符的传送，
                像ASCII码的控制字符就不能通过邮件传送。这样就受到了很大的限制，
                比如图片二进制流的每个字节不可能全部是可见字符，所以就传送不了。
                最好的方法就是在不改变传统协议的情况下，开辟一种新的方案来支持二进制文件的传送。
                把不可见字符用可见字符来表示。而Base64就是一种基于64个可见字符来表示二进制数据的表示方法。
            </p>
        </el-row>
    </div>
</template>

<script>
    import {Base64} from 'js-base64';

    export default {
        name: 'Base64str',
        data() {
            return {
                inputStr: '',
                result: ''
            }
        },
        methods: {
            base64Encode() {
                this.result = Base64.encode(this.inputStr);
            },
            base64Decode() {
                this.result = Base64.decode(this.inputStr);
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-input,
    .el-button {
        margin: 10px;
    }
</style>
