<script setup>
import list_item from './list_item.vue'

</script>
<template>
    <div id="Biography">
        <div class="one_col">
            <div class="title1">Biography</div>
            <div class="content">
                I am a full-time master student majoring in Cyberspace Security at <a href="https://security.fudan.edu.cn/">System Software and Security Group</a>, advised by Prof. Geng Hong. 
            </div>
        </div>
        <div class="two_col">
            <div class="one_col">
                <div class="title2">Education</div>
                <list_item class="list_item" msg="M.E. Cyberspace Security" icon_type="2"/>
                <list_item class="list_item" msg="2024/09 ~ Present, Fudan University" icon_type="0"/>
                <list_item class="list_item" msg="B.E. Software Engineering" icon_type="2"/>
                <list_item class="list_item" msg="2020/09 ~ 2024/06, Fudan University" icon_type="0"/>
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
            <div class="title2">News</div>
            <div class="content">
                <list_item class="list_item" msg="Start master's studies." icon_type="4"/>
                <list_item class="list_item" msg="2024/09, Shanghai, China" icon_type="0"/>
                <list_item class="list_item" msg="Graduated and obtained Bachelor Degree of Engineering." icon_type="4"/>
                <list_item class="list_item" msg="2024/06, Shanghai, China" icon_type="0"/>
                <list_item class="list_item" msg="Won the Grand Prize in the 18th 'Challenge Cup' National Competition." icon_type="4"/>
                <list_item class="list_item" msg="2023/11, Guiyang, China" icon_type="0"/>
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
    color: #D8C4B6;
    padding: 5px;
    font-family: Georgia;
}
.title1{
    font-weight: 600;
    font-size: 45px;
    margin-bottom: 25px;
    margin-top: 75px;
    color: #F5EFE7;
}
.title2{
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 15px;
    color: #F5EFE7;
}
.content{
    width: 90%;
    font-size: 20px;
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
    font-family: Georgia;
    font-size: 20px;
    line-height: 30px;
    height: 30px;
}

a{
    text-decoration:none;
    /* color: #37474f; */
    color: #D8C4B6;
}
</style>