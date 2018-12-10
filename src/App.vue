<template>
  <div id="app">
    <div id="menu">
      <div class="icon-holder">
        <img src="/public/icons/menu.svg" />
      </div>
      <router-link
        tag="div"
        :to="{name:'home'}"
        class="icon-holder"
      >
        <img src="/public/icons/snow-globe.svg" />
      </router-link>
      <router-link
        tag="div"
        :to="{name:'about'}"
        class="icon-holder"
      >
        <img src="/public/icons/icon.svg" />
      </router-link>
      <router-link
        tag="div"
        :to="{name:'contact'}"
        class="icon-holder"
      >
        <img src="/public/icons/auricular-phone-symbol-in-a-circle.svg" />
      </router-link>
      <router-link
        tag="div"
        :to="{name:'pricing'}"
        class="icon-holder"
      >
        <img src="/public/icons/coin.svg" />
      </router-link>
    </div>
    <div id="content">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>

<style lang="scss">
@import "style/variables";
#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-image: url("assets/background/blurred-bokeh-christmas-241820.jpg");
  background-size: cover;
  #menu {
    width: 120px;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: #7d0d0b;
    opacity: 0.7;
    .icon-holder {
      display: flex;
      width: 100%;
      height: 50px;
      justify-content: center;
      cursor: pointer;
    }
  }
  #content {
    width: 100%;
    padding-left: 120px;
  }
}
</style>
