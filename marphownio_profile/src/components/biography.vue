<script setup>
import list_item from './list_item.vue'

</script>
<template>
    <div id="Biography">
        <div class="one_col">
            <div class="title1">Biography</div>
            <div class="content">
                Hi there! I am Wuyuao Mai currently majoring in Software Engineering at Fudan University in Shanghai, China. 
                And I'm going to get my Bachelor's Degree this summer. After graduation I will start my Master's study in cyberspace security at 
                System Software and Security Group, Fudan University. 
            </div>
            <div class="content">
                Besides, I'm a fan of pop & folk music. I have played the Guitar for over 10 years.
                I will also write, compose, record my original songs in my spare time and publish them in NetEase cloud music, etc.
            </div>
            <div class="content">
                Willing to communicate and make progress with you guys in the following time.
            </div>
        </div>
        <div class="two_col">
            <div class="one_col">
                <div class="title2">Interests</div>
                <list_item class="list_item" msg="Cyberspace Security" icon_type="1"/>
                <list_item class="list_item" msg="Network Attack and Defense" icon_type="1"/>
                <list_item class="list_item" msg="Pop Music" icon_type="1"/>
            </div>
            <div class="one_col">
                <div class="title2">Education</div>
                <list_item class="list_item" msg="Software Engineering" icon_type="2"/>
                <list_item class="list_item" msg="2021.09.01 ~ 2024.06.30, Fudan University" icon_type="0"/>
                <list_item class="list_item" msg="Aeronautics and Astronautics" icon_type="2"/>
                <list_item class="list_item" msg="2020.09.01 ~ 2021.06.30, Fudan University" icon_type="0"/>
            </div>
        </div>
    </div>
    
</template>



<style scoped>
#Biography{
    margin-top: -130px;
    width: 100%;
    color: #c3cbd3;
    padding: 5px;
    font-family: Times New Roman;
}
.title1{
    font-weight: 600;
    font-size: 55px;
    margin-bottom: 25px;
}
.title2{
    font-weight: 600;
    font-size: 35px;
    margin-bottom: 15px;
}
.content{
    width: 90%;
    font-size: 20px;
    line-height:30px;
    margin-bottom: 10px;
}
.two_col{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:flex-start;
}
.one_col{
    margin-top: 20px;
    width: 100%;
}
.list_item{
    font-family: Times New Roman;
    font-size: 20px;
    line-height: 30px;
    height: 30px;
}
</style>