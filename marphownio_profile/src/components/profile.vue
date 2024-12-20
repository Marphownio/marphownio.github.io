<template>
    <div id="profile">
        <div>
            <img id="my_avatar" src="../assets/1.jpg" />
        </div>
        <div id="name">Wuyuao Mai</div>
        <div class="lab">Master Student<br></div>
        <div id="school"><a href="https://www.fudan.edu.cn/">Fudan University</a></div>
        <div id="email">maiwuyuao20 [at] fudan.edu.cn</div>
        <div id="refs">
            <a href="mailto:maiwuyuao20@fudan.edu.cn"><img class="ref" src="../assets/mail.png"></a>
            <a href="https://scholar.google.com/"><img class="ref" src="../assets/google.png"></a>
            <a href="https://github.com/Marphownio"><img class="ref" src="../assets/github.png"></a>
            <a href="https://music.163.com/#/artist?id=12554858"><img class="ref" src="../assets/wyy.png"></a>
        </div>
        <!-- <div id="buttons">
            <span>Academy</span>
            <el-divider direction="vertical" />
            <span>Music</span>
            <el-divider direction="vertical" border-style="dashed" />
            <span>photography</span>
        </div> -->
    </div>
    
</template>

<script>

</script>

<style scoped>
#profile{
    width: 100%;
    margin-bottom: 80px;
    /* background-color: yellowgreen; */
    color: #D8C4B6;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    font-family: Georgia;
    
}
#email{
    font-size: 15px;
    margin-bottom: 5px;
}
#name{
    font-size: 35px;
    font-weight: 800;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #F5EFE7;
}
#email{
    font-size: 15px;
    /* font-weight: 800; */
    margin-top: 5px;
    opacity: 0.75;
    margin-bottom: 20px;
}
#school{
    font-size: 20px;
    margin-bottom: 10px;
}
a{
    text-decoration:none;
    /* color: #37474f; */
    color: #D8C4B6;
}
.ref{
    width: 70%;
    margin-left: 11%;
}
#refs{
    width: 155px;
    /* margin-top: 10px; */
    display: flex;
    flex-direction: row;
    filter: invert(50%);
    justify-content: space-between;
    align-items: center; 
}
.lab{
    font-size: 20px;
    margin-bottom: 10px;
}
#my_avatar{
    width:230px;
	height:230px;
    /* margin: 5px 5px 5px 0; */
    position: relative;
    border-radius:50%;
}
</style>