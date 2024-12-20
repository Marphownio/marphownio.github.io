<script setup>
import list_item from './list_item.vue'
import essay from './essay.vue'

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
                <essay
                    title="Exposing the Hidden Layer: Software Repositories in the Service of SEO Manipulation" 
                    year="2024"
                    authors="Mengying Wu*, Geng Hong*, <b class='tuchu'>Wuyuao Mai</b>, Xinyi Wu, Lei Zhang, Yingyuan Pu, Huajun Chai, Lingyun Ying, Haixin Duan, and Min Yang"
                    conference="the 47th International Conference on Software Engineering (IEEE/ACM ICSE'25, CCF-A)"
                    pdf_url="/pdfs/icse25_repseo.pdf"
                    code_url="https://github.com/Marphownio/RepSEO_Classifier"
                    BibTex="coming soon"/>
            </div>
        </div>
    </div>
    
</template>



<style scoped>
#Biography{
    width: 85%;
    color: #D8C4B6;
    font-family: Georgia;
}
.title1{
    font-weight: 600;
    font-size: 0.2rem;
    margin-bottom: 0.1rem;
    margin-top: 0.2rem;
    color: #F5EFE7;
}
.title2{
    font-weight: 600;
    font-size: 0.15rem;
    margin-bottom: 0.1rem;
    margin-top: 0.1rem;
    color: #F5EFE7;
}
.content{
    width: 90%;
    font-size: 0.11rem;
    line-height:0.18rem;
}
.two_col{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:flex-start;
}
.one_col{
    width: 100%;
}
.list_item{
    font-family: Georgia;
    font-size: 0.11rem;
    line-height: 0.17rem;
    height: 0.17rem;
}

a{
    text-decoration:none;
    color: #D8C4B6;
}
</style>