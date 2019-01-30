<template>
    <div class="main">
        <el-row :gutter="10">
            <el-col :span="18">
                <el-input placeholder="请输入内容" v-model="inputStr" clearable></el-input>
            </el-col>
            <el-col :span="6">
                <el-button type="primary" @click="submit" icon="el-icon-setting">加密</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-table border :data="tableData">
                <el-table-column prop="name" label="类型" width="120"></el-table-column>
                <el-table-column prop="str" label="结果"></el-table-column>
            </el-table>
        </el-row>
        <el-row class="tip">
            <p>
                MD5（中文名为消息摘要算法第五版）为计算机安全领域广泛使用的一种散列函数，用以提供消息的完整性保护。
                该算法的文件号为RFC 1321（R.Rivest,MIT Laboratory for Computer Science and RSA Data Security Inc. April 1992）。
            </p>
            <p>
                MD5即Message-Digest Algorithm
                5（信息-摘要算法5），用于确保信息传输完整一致。是计算机广泛使用的杂凑算法之一（又译摘要算法、哈希算法），
                主流编程语言普遍已有MD5实现。 将数据（如汉字）运算为另一固定长度值，是杂凑算法的基础原理，
                MD5的前身有MD2、MD3和MD4。
            </p>
            <p>MD5算法具有以下特点：</p>
            <ul>
                <li>压缩性：任意长度的数据，算出的MD5值长度都是固定的。</li>
                <li>容易计算：从原数据计算出MD5值很容易。</li>
                <li>抗修改性：对原数据进行任何改动，哪怕只修改1个字节，所得到的MD5值都有很大区别。</li>
                <li>强抗碰撞：已知原数据和其MD5值，想找到一个具有相同MD5值的数据（即伪造数据）是非常困难的</li>
            </ul>
        </el-row>
    </div>
</template>

<script>
    import md5 from 'md5'

    export default {
        name: 'Md5',
        data() {
            return {
                inputStr: '',
                tableData: [
                    {name: '字符串', str: ''},
                    {name: '32位小写', str: ''},
                    {name: '32位大写', str: ''},
                ]
            }
        },
        methods: {
            submit() {
                const md5str = md5(this.inputStr);
                this.tableData[0].str = this.inputStr;
                this.tableData[1].str = md5str.toLowerCase();
                this.tableData[2].str = md5str.toUpperCase();
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
</style>
