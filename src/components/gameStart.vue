<template>
  <div class="row">
    <app-header title="New Game"></app-header>
    <div class="col-md-12 d-flex justify-content-center mt-5">
      <img src="../assets/Image/logo.png" width="180px" alt />
    </div>
    <div class="col-md-12 button d-flex justify-content-center mt-5">
      <router-link 
      tag="button" 
      class="btn btn-primary btn-lg shadow-lg"
      to="/questions">Start
      </router-link>
    </div>
  </div>
</template>

<script>
import appHeader from './shared/header'
export default {
  
  components:{
    appHeader
  }
}
</script>

<style>
.button button {
  width: 250px;
  height: 55px;
  margin-top: 100px;
  background: rgba(248, 222, 65, 0.9);
  border: 0px;
  font-family: "Permanent Marker", cursive;
  font-size: 26px;
}
</style>