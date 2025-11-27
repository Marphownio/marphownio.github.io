<script setup>
import my_header from '../components/header.vue'
import my_profile from '../components/profile.vue'
import my_biography from '../components/biography.vue'
</script>

<template>
  <div id="most_out">
    <!-- <my_header></my_header> -->
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

<script>

</script>

<style scoped>
#most_out{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  overflow-x:auto;
  overflow-y:auto;
  background-color: #213555;
  /* min-width: 120px!important; */
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
  padding-top: 5%;
  /* justify-content: center; */
  align-items: end;
  /* background-color: #d0d3d6; */
}

.right{
  width:62%;
  display: flex;
  flex-direction: column;
  overflow-y:scroll;
  overflow-x:auto;
  padding-top: 1%;
  /* background-color: #d0d3d6; */
  /* justify-content: center; */
  align-items: start;

}


@media (max-width: 850px) {
.flex_box{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.left{
  width:100%;
  display: flex;
  justify-content: center; 
  align-items: center;
  height : 35%;
  padding-bottom : 3%;
  padding-top: 3%;

  /* background-color: #d0d3d6; */
}

.right{
  width:100%;
  display: flex;
  flex-direction: column;
  overflow-y:auto;
  overflow-x:auto;
  padding-top: 1%;
  /* background-color: #d0d3d6; */
  /* justify-content: center; */
  align-items: center;

}

}
</style>
