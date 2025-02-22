<template>
    <div class="post-container">
      <div class="post-content">
        <!-- <img
          class="avatar"
          :src="post.avatar"
          alt="User Avatar"
        /> -->
        <div class="post-header">
        <span>@{{ post.time }}, {{ post.city }}, {{ post.country }}</span>
        </div>
        <p class="post-text" v-html="post.content"></p>
        <div v-if="post.image_urls.length==1">
          <el-image class="images1" :src="post.image_urls[0]" :fit="fit" lazy/>
        </div>
        <div v-else-if="post.image_urls.length==2">
          <div>
            <el-image class="images2img" :src="post.image_urls[0]" :fit="fit" lazy/>
            <el-image class="images2img" :src="post.image_urls[1]" :fit="fit" lazy/>
          </div>
          </div>
          <div class="images4" v-else-if="post.image_urls.length==3">
          <div>
            <el-image class="images4img" :src="post.image_urls[0]" :fit="fit" lazy/>
            <el-image class="images4img" :src="post.image_urls[1]" :fit="fit" lazy/>
          </div>
          <div>
            <el-image class="images4img" :src="post.image_urls[2]" :fit="fit" lazy/>
            <!-- <el-image class="images4img" :src="post.image_urls[3]" :fit="fit" lazy/> -->
          </div>
        </div>
        <div class="images4" v-else-if="post.image_urls.length==4">
          <div>
            <el-image class="images4img" :src="post.image_urls[0]" :fit="fit" lazy/>
            <el-image class="images4img" :src="post.image_urls[1]" :fit="fit" lazy/>
          </div>
          <div>
            <el-image class="images4img" :src="post.image_urls[2]" :fit="fit" lazy/>
            <el-image class="images4img" :src="post.image_urls[3]" :fit="fit" lazy/>
          </div>
        </div>
        

      </div>
    </div>
  </template>
  
  <script setup>
import { defineProps } from 'vue';


const post = defineProps({
  avatar: String,
  city: String,
  country: String,
  time: String,
  content: String,
  image_urls: Array,
});
  
  // const post = reactive({
  //   avatar: 'https://i.pravatar.cc/150?img=3',
  //   city: 'Xichang',
  //   country: 'China',
  //   time: '2025/01/19',
  //   content: 'Had a wonderful Spring Festival in Xichang, China. I saw a little girl running through the fields and couldn’t resist capturing the moment in a photograph.',
  //   image_urls: ["https://wx2.sinaimg.cn/mw2000/006uUfRagy1hyslpz3cjoj32pn216kjn.jpg"],
  // });
  
  const likePost = () => {
    post.likes++;
  };
  </script>
  
  <style scoped>
  .images2img{
    max-width: 35%;
    margin: 0.02rem;
  }
  .images4img{
    max-width: 35%;
    margin: 0.02rem;
  }
  .post-container {
    max-width: 95%;
    margin: 0 auto;
    padding: 0.05rem;
    /* border: 0.01rem solid #F5EFE7; */
    border-radius: 0.05rem;
    background-color: #213555;
    box-shadow: 0.01rem 0.01rem 0.08rem rgba(0, 0, 0, 0.6);
  }
  .post-content {
    /* background-color: #000000; */
    padding:0.1rem;
  }
  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 12px;
  }
  .post-details {
    /* flex: 1; */
    background-color:#555555;
    
  }
  .post-header {
    font-size: 0.14rem;
    font-weight: 500;
    font-style:italic;
  }
  .post-text{
    line-height: 0.15rem;
    color: #F5EFE7;
    font-size: 0.11rem;
  }
  .images1{
    width: 70%;
  }
  </style>
  