<template>
    <div id="profile">
        <div>
            <img id="my_avatar" src="../assets/1.jpg" />
        </div>
        <div id="name">Wuyuao Mai</div>
        <div class="lab">Undergraduate Student of<br></div>
        <div class="lab"><a href="https://security.fudan.edu.cn/">System Software and Security Group</a></div>
        <div id="school"><a href="https://cs.fudan.edu.cn/">School of Computer Science, </a><a href="https://www.fudan.edu.cn/">Fudan University</a></div>
        <div id="refs">
            <a href="mailto:maiwuyuao20@fudan.edu.cn"><img class="ref" src="../assets/mail.png"></a>
            <a href="https://scholar.google.com/"><img class="ref" src="../assets/google.png"></a>
            <a href="https://github.com/Marphownio"><img class="ref" src="../assets/github.png"></a>
            <a href="https://music.163.com/#/artist?id=12554858"><img class="ref" src="../assets/wyy.png"></a>
        </div>
    </div>
    
</template>

<script>

</script>

<style scoped>
#profile{
    margin-bottom: 80px;
    /* background-color: yellowgreen; */
    color: #c3cbd3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    font-family: Times New Roman;
    
}
#email{
    font-size: 15px;
    margin-bottom: 5px;
}
#name{
    font-size: 45px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 20px;
}
#school{
    font-size: 20px;
    margin-bottom: 10px;
}
a{
    text-decoration:none;
    /* color: #37474f; */
    color: #c3cbd3;;
}
.ref{
    width: 100%;
}
#refs{
    width: 28%;
    /* margin-top: 10px; */
    display: flex;
    flex-direction: row;
    filter: invert(50%);
    justify-content: space-between;
    align-items: center; 
}
.lab{
    font-size: 20px;
    margin-bottom: 5px;
}
#my_avatar{
    width:260px;
	height:260px;
    /* margin: 5px 5px 5px 0; */
    position: relative;
    border-radius:50%;
}
</style>