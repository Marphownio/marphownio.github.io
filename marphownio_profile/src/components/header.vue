<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">About Me</el-menu-item>
      <el-menu-item index="2">Publications</el-menu-item>
      <el-menu-item index="3">Porjects</el-menu-item>
    </el-menu>
</template>
  
<script lang="ts" setup>
  import { ref } from 'vue'
  
  const activeIndex = ref('1')
  const activeIndex2 = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>
<style>
.el-menu-demo{
  background-color: #000000;
  border:0!important;
}
.el-menu-demo .el-menu-item.is-active{
  border-bottom-color: #c3cbd3 !important;
  font-weight: 800 !important;
  font-size: 120%;
  color: #c3cbd3 !important;
}
.el-menu-demo .el-menu-item {
  background-color: #000000 !important;
  font-size: 16px;
  color: #c3cbd3 !important;
}
.el-menu-demo .el-menu-item:hover{
    color: #d6e4f1 !important;
    text-decoration: none;
    background-color: #494444 !important;
}
.el-menu-demo el-menu--horizontal > .el-menu-item {
  border-bottom: none!important;
  text-decoration: none!important;
}

</style>
  