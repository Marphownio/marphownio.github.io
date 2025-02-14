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
            <button class="subitems" @click="showModal = !showModal">
                BibTex
            </button>
        </div>
        
        <div v-if="showModal" class="modal">
            <div class="modal-content">
                <div class="bibtitle">Citation Code</div>
                <p v-html="props.BibTex" class="bibcode"></p>
            </div>
        </div>
    
        
        
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
const showModal = ref(false);

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
    margin-bottom: 0.13rem;
}
.modal{
    padding-left: 3%;
    padding-right: 3%;
    width: 90%;
}
.modal-content{
    padding: 0.5%;
    border: 0.01rem solid #F5EFE7;
    background-color: #25314785;;
}
.bibtitle{
    font-weight: 800;
    line-height: 0.12rem;
}
.bibcode{
    font-family: 'Times New Roman', Times, serif;
    font-size: 0.09rem;
    line-height: 0.12rem;
}

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