<template>
  <div id="app">
    <div
      id="menu"
      :style="{width : menu.expanded ? '400px':'120px'}"
    >
      <section class="section-menu">
        <div
          class="icon-holder"
          style="margin-top:20px;"
        >
          <img
            src="/public/icons/menu.svg"
            @click="menu.expanded = !menu.expanded"
            :style="{float:menu.expanded ? 'right':false, marginRight : menu.expanded ? '30px' : false}"
          />
        </div>
      </section>
      <section class="section-home">
        <router-link
          tag="div"
          :to="{name:'home'}"
          class="icon-holder"
        >
          <img
            src="/public/icons/snow-globe.svg"
            v-if="!menu.expanded"
          />
          <div
            class="title"
            v-if="menu.expanded"
          >Holy<br /> Joly<br /> Christmas</div>
        </router-link>
      </section>
      <section class="section-items">
        <router-link
          tag="div"
          :to="{name:'about'}"
          class="icon-holder"
        >
          <img
            src="/public/icons/icon.svg"
            v-if="!menu.expanded"
          />
          <div
            class="title"
            v-if="menu.expanded"
          >About us</div>
        </router-link>
        <router-link
          tag="div"
          :to="{name:'contact'}"
          class="icon-holder"
        >
          <img
            src="/public/icons/auricular-phone-symbol-in-a-circle.svg"
            v-if="!menu.expanded"
          />
          <div
            class="title"
            v-if="menu.expanded"
          >Contact</div>
        </router-link>
        <router-link
          tag="div"
          :to="{name:'pricing'}"
          class="icon-holder"
        >
          <img
            src="/public/icons/coin.svg"
            v-if="!menu.expanded"
          />
          <div
            class="title"
            v-if="menu.expanded"
          >Pricing</div>
        </router-link>
      </section>
    </div>
    <div
      id="content"
      :style="{paddingLeft:menu.expanded && $router.currentRoute.name == 'home' ? '400px' : '120px'}"
    >
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: {
        expanded: false
      }
    };
  },
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
  background-repeat: repeat-x;
  background-attachment: fixed;
  #menu {
    width: 120px;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: #7d0d0b;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    z-index: 2;
    section {
      .icon-holder {
        width: 100%;
        height: 50px;
        padding-left: 30px;
        cursor: pointer;
        img {
          width: 50px;
          height: 50px;
        }
        div {
          height: 50px;
          color: white;
          font-size: 60px;
          font-weight: bold;
        }
        margin-bottom: 50px;
      }

      &.section-menu {
        flex-basis: 15%;
      }
      &.section-home {
        flex-basis: 35%;
        .icon-holder {
          div {
            font-size: 70px;
          }
        }
      }

      &.section-items {
        flex-basis: 50%;
      }
    }
  }
  #content {
    width: 100%;
    padding-left: 120px;
  }
}
</style>
