<script setup>
import my_header from './components/header.vue'
import my_profile from './components/profile.vue'
import my_biography from './components/biography.vue'
</script>

<template>
  <div id="most_out">
    <my_header></my_header>
    <div class="flex_box">
      <div class="left">
        <my_profile></my_profile>
      </div>
      <div class="right">
        <my_biography></my_biography>
      </div>
      
    </div>
  </div>
  
  
  
  
</template>

<style scoped>
#most_out{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  background-color: #021c36;
}
.flex_box{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.left{
  width:38%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.right{
  width:62%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
</style>
