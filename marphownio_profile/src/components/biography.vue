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
            <div class="title2">News<router-link to="/news" class="title_ref" >&nbsp;&nbsp; >> More</router-link></div>
            <div class="content">
                <!-- <list_item class="list_item" msg="Start master's studies." icon_type="4"/>
                <list_item class="list_item" msg="2024/09, Shanghai, China" icon_type="0"/>-->
                
                <list_item class="list_item" msg="Honored to find our paper has been accepted as an oral presentation at WWW'25!" icon_type="4"/>
                <list_item class="list_item" msg="2025/01, Shanghai, China" icon_type="0"/>
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
                    title="You Can't Eat Your Cake and Have It Too: The Performance Degradation of LLMs with Jailbreak Defense" 
                    year="2025"
                    authors="<b class='tuchu'>Wuyuao Mai*</b>, Geng Hong*, Pei Chen, Xudong Pan, Baojun Liu, Yuan Zhang, Haixin Duan, Min Yang"
                    conference="The Web Conference 2025 (WWW'25, CCF-A)"
                    pdf_url="www25_usebench.pdf"
                    code_url="https://github.com/Marphownio/USEBench"
                    BibTex="@inproceedings{mai2025usebench,</br>&nbsp;&nbsp;&nbsp;&nbsp;
                    author    = {Wuyuao Mai and Geng Hong and Pei Chen and Xudong Pan and Baojun Liu and Yuan Zhang and Haixin Duan and Min Yang},</br>&nbsp;&nbsp;&nbsp;&nbsp;
                    title     = {You Can’t Eat Your Cake and Have It Too: The Performance Degradation of LLMs with Jailbreak Defense},</br>&nbsp;&nbsp;&nbsp;&nbsp;
                    booktitle = {Proceedings of the ACM Web Conference 2025 (WWW '25)},</br>&nbsp;&nbsp;&nbsp;&nbsp;
                    year      = {2025},</br>&nbsp;&nbsp;&nbsp;&nbsp;
                    month     = {April 28--May 2},</br>&nbsp;&nbsp;&nbsp;&nbsp;
                    location  = {Sydney, NSW, Australia},</br>&nbsp;&nbsp;&nbsp;&nbsp;
                    publisher = {ACM},</br>&nbsp;&nbsp;&nbsp;&nbsp;
                    address   = {New York, NY, USA},</br>&nbsp;&nbsp;&nbsp;&nbsp;
                    pages     = {12},</br>&nbsp;&nbsp;&nbsp;&nbsp;
                    doi       = {10.1145/3696410.3714632}</br>
                    }"/>
                <essay
                    title="Exposing the Hidden Layer: Software Repositories in the Service of SEO Manipulation" 
                    year="2024"
                    authors="Mengying Wu*, Geng Hong*, <b class='tuchu'>Wuyuao Mai</b>, Xinyi Wu, Lei Zhang, Yingyuan Pu, Huajun Chai, Lingyun Ying, Haixin Duan, and Min Yang"
                    conference="The 47th International Conference on Software Engineering (IEEE/ACM ICSE'25, CCF-A)"
                    pdf_url="icse25_repseo.pdf"
                    code_url="https://github.com/Marphownio/RepSEO_Classifier"
                    BibTex="@inproceedings{wu2025seo,</br>&nbsp;&nbsp;&nbsp;&nbsp;
                    author    = {Mengying Wu and Geng Hong and Wuyuao Mai and Xinyi Wu and Lei Zhang and Yingyuan Pu and Huajun Chai and Lingyun Ying and Haixin Duan and Min Yang},</br>&nbsp;&nbsp;&nbsp;&nbsp;
                    title     = {Exposing the Hidden Layer: Software Repositories in the Service of SEO Manipulation},</br>&nbsp;&nbsp;&nbsp;&nbsp;
                    year      = {2025}, </br>&nbsp;&nbsp;&nbsp;&nbsp;
                    booktitle = {Proceedings of the IEEE/ACM 47th International Conference on Software Engineering},</br>
                }"/>
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
.title_ref{
    font-weight:500;
    font-size: 0.1rem;
    opacity:0.8;
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