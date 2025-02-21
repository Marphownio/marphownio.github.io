<template>
    <div class="post-container">
      <div class="post-content">
        <!-- <img
          class="avatar"
          :src="post.avatar"
          alt="User Avatar"
        /> -->
        <div class="post-header">
        <span>@{{ post.time }}, {{ post.city }}, {{ post.country }}</span>
        </div>
        <p class="post-text">{{ post.content }}</p>
        
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
  const post = reactive({
    avatar: 'https://i.pravatar.cc/150?img=3',
    city: 'Xichang',
    country: 'China',
    time: '2025/02/01',
    content: 'Had a wonderful Spring Festival.',
    likes: 10,
    comments: 5,
    retweets: 2
  });
  
  const likePost = () => {
    post.likes++;
  };
  </script>
  
  <style scoped>
  .post-container {
    max-width: 95%;
    margin: 0 auto;
    padding: 0.05rem;
    /* border: 0.01rem solid #F5EFE7; */
    border-radius: 0.05rem;
    background-color: #213555;
    box-shadow: 0.01rem 0.01rem 0.08rem rgba(0, 0, 0, 0.6);
  }
  .post-content {
    /* background-color: #000000; */
    padding:0.1rem;
  }
  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 12px;
  }
  .post-details {
    /* flex: 1; */
    background-color:#555555;
    
  }
  .post-header {
    font-size: 0.1rem;
    font-weight: 500;
    font-style:italic;
  }
  .post-text{
    color: #F5EFE7;
  }
  </style>
  