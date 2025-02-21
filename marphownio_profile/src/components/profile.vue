<template>
    <div id="profile">
        <div>
            <img id="my_avatar" src="../assets/1.jpg" />
        </div>
        <div id="name">Wuyuao Mai</div>
        <div class="lab">Master Student<br></div>
        <div id="school"><a href="https://www.fudan.edu.cn/">Fudan University</a></div>
        <div id="email">maiwuyuao20 [at] fudan.edu.cn</div>
        <div id="email2">wuyuaom [at] acm.org</div>
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
    width: 70%;
    color: #D8C4B6;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    font-family: Georgia;
}
#name{
    font-size: 0.18rem;
    font-weight: 800;
    margin-top: 0.2rem;
    margin-bottom: 0.15rem;
    color: #F5EFE7;
}
#email{
    font-size: 0.095rem;
    /* font-weight: 800; */
    opacity: 0.75;
    /* margin-bottom: 0.1rem; */
}
#email2{
    font-size: 0.095rem;
    /* font-weight: 800; */
    opacity: 0.75;
    margin-bottom: 0.1rem;
}
#school{
    font-size: 0.12rem;
    margin-bottom: 0.1rem;
}
a{
    text-decoration:none;
    /* color: #37474f; */
    color: #D8C4B6;
}
.ref{
    width: 100%;
    text-align: center;
    /* margin-left: 11%; */
}
#refs{
    width: 0.7rem;
    display: flex;
    flex-direction: row;
    filter: invert(50%);
    justify-content: space-between;
    align-items: center; 
}
.lab{
    font-size: 0.12rem;
    margin-bottom: 0.05rem;
}
#my_avatar{
    width:1.1rem;
	height:1.1rem;
    position: relative;
    border-radius:50%;
}
</style>