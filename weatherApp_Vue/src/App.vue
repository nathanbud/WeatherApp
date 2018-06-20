<template>
  <div>
    <div class="wrapper">
      <div class="container">
       
    <weather></weather>
   
  </div>
  </div>
  </div>
</template>

<script>

export default {

  data(){
    return{
title: 'Your first Vue file'
    }
  },
 
}
</script>

<style>
.wrapper {
  background: linear-gradient(to right, #89f6fa4d, #1b1b1b23), url('./img/we.jpg');
  height:calc(100vh + 280px);
  background-size: cover; 
}
</style>
