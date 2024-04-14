<template>
  <section class="main">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  components: {},
  data() {
    return {};
  },
  mounted() {
    console.log("this.$router.path", this.$route.path);
  },
  methods: {},
};
</script>

<style scoped>
.main {
  height: 90.5vh;
  background-color: white;
  border-radius: 7px;
  margin: 15px;
  display: block;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
  overflow: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 15px;
}
</style>
