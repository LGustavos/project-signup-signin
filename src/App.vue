<template>
  <div id="app" class="bg-app">
    <div class="flex justify-center items-center h-screen">
    <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {},
};
</script>

<style>
.bg-app {
  background-image: url('assets/img/bg-app.jpg');
  background-size: 100vw 95vh;
  background-repeat: no-repeat;
}
</style>
