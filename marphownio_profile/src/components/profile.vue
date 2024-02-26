<template>
    <div id="profile">
        <div>
            <img id="my_avatar" src="../assets/1.jpg" />
        </div>
        <div id="name">Wuyuao Mai</div>
        <div class="lab">Undergraduate Student of<br></div>
        <div class="lab"><a href="https://security.fudan.edu.cn/">System Software and Security Group</a>, <a href="https://cs.fudan.edu.cn/">School of Computer Science</a></div>
        <div id="school"><a href="https://www.fudan.edu.cn/">Fudan University</a></div>
        <div id="email">maiwuyuao20[at]fudan.edu.cn</div>
    </div>
    
</template>

<script>

</script>

<style scoped>
#profile{
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
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 20px;
}
#school{
    font-size: 20px;
    margin-bottom: 20px;
}
a{
    text-decoration:none;
    /* color: #37474f; */
    color: rgb(14,65,156);
}
.lab{
    font-size: 20px;
    margin-bottom: 5px;
}
#my_avatar{
    width:283px;
	height:283px;
    /* margin: 5px 5px 5px 0; */
    position: relative;
    border-radius:50%;
}
</style>