<template>
    <div class="mini_list_detail">
        <p class="date">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>


        <div v-if="props.icon_type=='0'" class="date">&nbsp;&nbsp;{{ props.msg }}</div>
        <div v-else class="text">&nbsp;&nbsp;{{ props.msg }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    msg:String,
    icon_type:String,
})
</script>
<style>
.mini_list_detail{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: 100%;
}
.date{
    opacity: 0.7;
    font-size: 80%;
    margin-top: -0.04rem;
}
</style>