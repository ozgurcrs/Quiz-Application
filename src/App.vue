<template>
  <div>
    <div class="container">
      <div class="row">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return{
      title:"New Game",
    }
  },
 
};
</script>

<style>
body {
  background: url("./assets/Image/bg.jpg");
  background-size: cover;
  
}


</style>
