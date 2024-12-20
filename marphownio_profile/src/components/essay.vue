<template>
    <div class="essay_item">
        <div class="title">
            {{ props.title }} <p class="year">({{ props.year }})</p>
        </div>
        <div class="authors">
            <p v-html="props.authors"></p>
        </div>
        <div class="conference">
            {{ props.conference }}
        </div>
        <div class="items">
            <button class="subitems">
                <router-link class="subitemsa" :to="{ path: props.pdf_url  }" target="_blank">
                PDF
                </router-link>
            </button>
            <button class="subitems">
                <a :href="props.code_url">Code</a>
            </button>
            <button class="subitems">
                BibTex
            </button>
            <!-- <el-button class="subitems">Default</el-button>
            <el-button class="subitems">Default</el-button>
            <el-button class="subitems">Default</el-button> -->
        </div>
        <!-- <div>
            {{ props.authors }}
        </div>
        <div>
            {{ props.authors }}
        </div> -->
        <!-- <img v-if="props.icon_type=='1'" class="list_head" src="../assets/list1.png">
        <img v-else-if="props.icon_type=='3'" class="list_head" src="../assets/3.png">
        <img v-else-if="props.icon_type=='2'" class="list_head" src="../assets/list2.png">
        <img v-else-if="props.icon_type=='4'" class="list_head" src="../assets/4.png">
        <p v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>


        <div v-if="props.icon_type=='0'" class="date">&nbsp;&nbsp;{{ props.msg }}</div>
        <div v-else>&nbsp;&nbsp;{{ props.msg }}</div> -->
        
        
    </div>
</template>

<script setup>
const props = defineProps({
    title:String,
    year:String,
    authors:String,
    conference:String,
    pdf_url:String,
    code_url:String,
    BibTex:String,
})

import { ref, unref } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'

const buttonRef = ref()
const popoverRef = ref()
const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.()
}
</script>
<style>
.year {
    display: inline; /* 将 <p> 标签变为行内元素 */
    /* opacity: 0.7; */
    font-weight: 500;
    font-size: 80%;
}
.essay_item{
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
}
/* .essay_item div{
    margin-bottom: -0.1rem;
} */

.title{
    /* padding-left: 1%;
    border-left: 0.02rem  solid #F5EFE7; */
    font-weight: 600;
}
.subitemsa {
  text-decoration: none; /* 去掉默认的下划线 */
  color: inherit;        /* 继承父元素的颜色 */
}

/* 去掉 router-link 激活状态的样式 */
.subitemsa.router-link-exact-active,
.subitemsa.router-link-active {
  color: inherit;        /* 禁止激活链接的颜色变化 */
  text-decoration: none; /* 禁止激活链接的下划线 */
}
a{
    text-decoration:none;
    color: inherit; 
}
.authors{
    /* opacity: 0.8; */
    font-size: 80%;
    margin-top: -0.07rem;
}
.conference{
    opacity: 0.7;
    font-size: 80%;
    font-style: italic;
    margin-top: -0.07rem;
}
.list_head{
    filter: invert(50%);
    height: 80%;
}
.items{
    margin-top: 0.05rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 100%;
    margin-bottom: 0.05rem;
}
.subitems{
    width: 0.4rem;
    padding: 0;
    margin-right: 0.05rem;
}

.subitems {
    text-align:center;
    opacity: 0.7;
    background-color: transparent;
    font-size: 80%;     /* 字体大小 */
    /* font-weight: 600; */
    color: #D8C4B6;;
    border: 0.01rem solid #F5EFE7;;  /* 设置四周边框，边框宽度为2px，颜色为蓝色 */
    cursor: pointer;     /* 鼠标指针变为点击样式 */
    border-radius: 0.02rem;   /* 圆角，5px为圆角半径 */
}


.tuchu{
    color: #F5EFE7;
}
.no-style-button {
  all: unset; /* 重置所有样式 */
  display: inline-block; /* 保证按钮显示为块级元素 */
  cursor: pointer; /* 添加点击样式 */
}
</style>