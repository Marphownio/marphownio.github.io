<template>
  <div id="time_list">
    <router-link to="/" class="title0" ><< Back to Homepage</router-link>
    <div class="title1">Posts</div>
    <div v-for="item in post_details">
      <news_detail 
        class="news_detail"
        :city=item.city
        :country=item.country
        :time=item.time
        :content=item.content
        :image_urls=item.image_urls
      />
    </div>
    
  </div>
  </template>


<script setup>
import news_detail from '../components/news_details.vue'
import { reactive } from 'vue';

const post_details = reactive([
  {
    city: 'Xichang',
    country: 'China',
    time: '2025/01/20',
    content: 'We are thrilled that our paper, <i>You Can\'t Eat Your Cake and Have It Too: The Performance Degradation of LLMs with Jailbreak Defense</i>, has been accepted as an oral presentation at the CCF-A conference <i>WWW\'25</i> ! This is my first time writing as the first author, and I sincerely appreciate the guidance of Professor Geng Hong and PhD student Pei Chen, as well as the support from all the teachers throughout the finalization process. Looking forward to meeting you in Sydney, Australia, this May.',
    image_urls: ["/images/13.jpg"],
  },
  {
    city: 'Xichang',
    country: 'China',
    time: '2025/01/19',
    content: 'Had a wonderful Spring Festival in Xichang, China. I saw a little girl running through the fields and couldn’t resist capturing the moment in a photograph.',
    image_urls: ["/images/2.jpg"],
  },
  {
    city: 'Beijing',
    country: 'China',
    time: '2024/12/22',
    content: 'Captured the beautiful palace architecture, along with the deep blue sky, in winter Beijing.',
    image_urls: [
      "/images/3.jpg",
      "/images/4.jpg",

      ],
  },
  {
    city: 'Shanghai',
    country: 'China',
    time: '2024/06/13',
    content: 'Graduated from the School of Software at Fudan University with a Bachelor\'s degree in Software Engineering. On my journey ahead, I will continue trying to be an excellent and interesting FDUer.',
    image_urls: [
      // "https://wx1.sinaimg.cn/mw2000/006uUfRagy1hysovz8768j30u00u0goc.jpg",
      "/images/5.jpg",
      // "https://wx2.sinaimg.cn/mw2000/006uUfRagy1hysow01xq1j30u00u0wgy.jpg",
      "/images/6.jpg",

      ],
  },
  {
    city: 'Huangshan',
    country: 'China',
    time: '2024/06/09',
    content: 'Immersed in the gentle charm of the Canal Towns in South of the Yangtze.',
    image_urls: [
      "/images/7.jpg",

      ],
  },
  {
    city: 'Nanjing',
    country: 'China',
    time: '2024/03/29',
    content: 'Admire the cherry blossoms at Xuanwu Lake and feel the arrival of spring.',
    image_urls: [
      "/images/8.jpg",
      "/images/9.jpg",
      "/images/10.jpg",
      "/images/11.jpg",

      ]
  },
  {
    city: 'Guiyang',
    country: 'China',
    time: '2023/10/31',
    content: 'Our team <i>Candlot - Cybercrimial Asset Radar (烛远-互联网犯罪资产侦查雷达)</i>, won the Grand Prize in the 18th "Challenge Cup" National Competition. Happy to welcome this exciting news in early winter at Guizhou University. Besides, <a href="https://mp.weixin.qq.com/s/FjcBkTuTLA9ltKMWOrsiDA">Fudan\'s official WeChat account</a> also reported our award.',
    image_urls: [
      "/images/12.jpg",
      ],
  },

]);


</script>

<style scoped>
#time_list{
  /* margin:0;
  width:100%; */
  /* background-color: #d0d3d6; */
  /* font-size: 0.11rem; */
  width: 85%;
  color: #D8C4B6;
  font-family: Georgia;
}

.title1{
    font-weight: 600;
    font-size: 0.2rem;
    margin-bottom: 0.2rem;
    margin-top: 0.2rem;
    color: #F5EFE7;
}
.title0{
  font-weight:500;
  font-size: 0.12rem;
  opacity:0.8;
}
.news_detail{
  margin-bottom: 0.1rem;
}
</style>