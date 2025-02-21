<template>
  <div id="time_list">
    <router-link to="/" class="title0" ><< Back</router-link>
    <div class="title1">News</div>
    <news_detail></news_detail>
  </div>
  </template>


<script setup>
import news_detail from '../components/news_details.vue'
</script>

<style scoped>
#time_list{
  /* margin:0;
  width:100%; */
  /* background-color: #d0d3d6; */
  /* font-size: 0.11rem; */
  width: 85%;
  color: #D8C4B6;
  font-family: Georgia;
}

.title1{
    font-weight: 600;
    font-size: 0.2rem;
    margin-bottom: 0.2rem;
    margin-top: 0.2rem;
    color: #F5EFE7;
}
.title0{
  font-weight:500;
  font-size: 0.12rem;
  opacity:0.8;
}
</style>