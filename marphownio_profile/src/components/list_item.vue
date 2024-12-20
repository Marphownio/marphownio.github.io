<template>
    <div class="list_detail">
        <img v-if="props.icon_type=='1'" class="list_head" src="../assets/list1.png">
        <img v-else-if="props.icon_type=='3'" class="list_head" src="../assets/3.png">
        <img v-else-if="props.icon_type=='2'" class="list_head" src="../assets/list2.png">
        <img v-else-if="props.icon_type=='4'" class="list_head" src="../assets/4.png">
        <p v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>


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
.list_detail{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: 100%;
}

.date{
    opacity: 0.7;
    font-size: 80%;
    margin-top: -0.08rem;
    line-height: 0.17rem;
    height: 0.17rem;
}
.list_head{
    filter: invert(50%);
    height: 80%;
}
</style>