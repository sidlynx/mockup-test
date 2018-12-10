<template>
  <div
    class="page"
    :class="{'padding':padding}"
  >
    <div class="content">
      <div class="header">
        <slot name="header" />
      </div>
      <div class="inner">
        <slot />
      </div>
    </div>
    <!--div class="spinner" v-if="true">

    </div-->
  </div>
</template>
<script>
import Hexagon from "./spinner/Hexagon.vue";
export default {
  props: {
    padding: {
      type: Boolean
    },
    menuItems: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      globalMenuItems: [
        {
          icon: "fas fa-cog",
          title: "Crud",
          route: { name: "crud" }
        },
        {
          icon: "fas fa-desktop",
          title: "Samples",
          route: { name: "samples" }
        },
        {
          icon: "fas fa-question-circle",
          title: "Tests",
          route: { name: "tests" }
        },
        {
          icon: "fas fa-briefcase",
          title: "Jobs",
          route: { name: "jobs" }
        },
        {
          icon: "fas fa-user-tie",
          title: "Profile",
          route: { name: "me" }
        },
        {
          icon: "fas fa-info-circle",
          title: "About",
          route: { name: "about" }
        },
        {
          icon: "fas fa-sign-out-alt",
          title: "Logout",
          action: () => {
            localStorage.clear();
            this.$store.commit("logout");
            this.$router.push({ name: "guest" });
          }
        }
      ]
    };
  },
  components: {
    Hexagon
  }
};
</script>
<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: row;
  .menu {
    width: 260px;
    flex-grow: 0;
    flex-shrink: 0;
    padding-top: 13rem;
  }
  .content {
    flex-basis: 100%;
    height: auto;
  }
  .spinners {
    width: 100%;
    background-color: red;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;

    z-index: 1;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("../../assets/spinner.gif");
    background-repeat: no-repeat;
    background-position: center;
    //opacity: 0.5;
  }

  &.padding {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  }
}
</style>
