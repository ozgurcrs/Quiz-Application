<template>
  <div class="col-md-12 title">
    <h1>{{title}}</h1>
  </div>
</template>


<script>
export default {
  props: ["title"]
};
</script>


<style scoped>
  .title {
  background: rgba(31, 200, 104, 0.85);
  color: #fff;
  padding: 5px 0;
  text-align: center;
  font-family: "Permanent Marker", cursive;
}
</style>

