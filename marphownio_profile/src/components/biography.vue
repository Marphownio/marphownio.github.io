<script setup>
import list_item from './list_item.vue'

</script>
<template>
    <div id="Biography">
        <div class="one_col">
            <div class="title1">Biography</div>
            <div class="content">
                I am a first-year master's student majoring in Cyberspace Security at <a href="https://security.fudan.edu.cn/">System Software and Security Group</a> of Fudan University in Shanghai, China. 
            </div>
        </div>
        <div class="two_col">
            <div class="one_col">
                <div class="title2">Education</div>
                <list_item class="list_item" msg="Cyberspace Security" icon_type="2"/>
                <list_item class="list_item" msg="2024/09 ~ Present, Fudan University" icon_type="0"/>
                <list_item class="list_item" msg="Software Engineering" icon_type="2"/>
                <list_item class="list_item" msg="2023/09 ~ 2024/06, Fudan University" icon_type="0"/>
                <!-- <list_item class="list_item" msg="Aeronautics and Astronautics" icon_type="2"/>
                <list_item class="list_item" msg="2323.09.01 ~ 2321.06.30, Fudan University" icon_type="0"/> -->
            </div>
            <div class="one_col">
                <div class="title2">Interests</div>
                <list_item class="list_item" msg="Cybercrime" icon_type="1"/>
                <list_item class="list_item" msg="Network Attack and Defense" icon_type="1"/>
                <list_item class="list_item" msg="LLM Applications" icon_type="1"/>
            </div>
        </div>
        <div class="one_col">
            <div class="title2">Awards</div>
            <div class="content">
                <list_item class="list_item" msg="第十八届“挑战杯”全国大学生课外学术科技作品竞赛 特等奖" icon_type="3"/>
                <list_item class="list_item" msg="2023/11, Guiyang, Guizhou Province" icon_type="0"/>
            </div>
        </div>

        <div class="one_col">
            <div class="title1">Publications</div>
            <div class="content">
                Coming soon!    
            </div>
        </div>
    </div>
    
</template>



<style scoped>
#Biography{
    /* margin-top: -130px; */
    width: 100%;
    color: #c3cbd3;
    padding: 5px;
    font-family: Times New Roman;
}
.title1{
    font-weight: 600;
    font-size: 45px;
    margin-bottom: 25px;
}
.title2{
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 15px;
}
.content{
    width: 90%;
    font-size: 23px;
    line-height:30px;
    margin-bottom: 10px;
}
.two_col{
    /* margin-top: 23px; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:flex-start;
}
.one_col{
    /* margin-top: 23px; */
    width: 100%;
    margin-bottom: 23px;
}
.list_item{
    font-family: Times New Roman;
    font-size: 23px;
    line-height: 30px;
    height: 30px;
}

a{
    text-decoration:none;
    /* color: #37474f; */
    color: #c3cbd3;;
}
</style>