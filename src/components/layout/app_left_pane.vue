<template>
  <aside>
    <ul class="">
      <router-link
        :to="'about'"
        tag="li"
      >
        sdsc
      </router-link>

      <template v-for="(item,index) of items">
        <router-link
          :to="item.route"
          tag="li"
          :key="index"
          v-if="opened && item.route"
        >
          <div class="icon center-vertical center-horizontal">
            <span :class="'fa fa-' + [item.icon]"></span>
          </div>
          <template v-if="true || expanded">
            <div class="title center-vertical">
              {{item.title}}
            </div>
            <div class="arrow center-vertical center-horizontal">
              <span class="fa fa-chevron-right"></span>
            </div>
          </template>
        </router-link>
      </template>
    </ul>
  </aside>
</template>
<script>
export default {
  data() {
    return {
      opened: true,
      items: [
        {
          icon: "user",
          title: "Home",
          route: { name: "home" }
        },
        {
          icon: "user",
          title: "about",
          route: { name: "about" }
        },
        {
          icon: "user",
          title: "Contact",
          route: { name: "contact" }
        },
        {
          icon: "pricing",
          title: "pricing",
          route: { name: "pricing" }
        }
      ]
    };
  },
  computed: {
    expanded() {
      return this.$store.state.layout.menu.expanded;
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0px;
  margin-top: 6rem;
  margin-right: 1rem;
  padding: 0px;
  list-style: none;
  background-color: white;
  width: 100%;
  font-family: RobotoRegular;
  font-weight: bold;
  overflow-x: hidden;
  li {
    display: flex;
    height: 2rem;
    cursor: pointer;
    color: #777;
    // border-bottom: 1px solid green;
    flex: none;
    border-radius: 0px 32px 32px 0px;

    .icon {
      flex: none;
      width: 50px;
      font-size: 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title {
      flex-basis: 100%;
      padding-left: 0rem;
      font-size: 1rem;
    }
    .arrow {
      flex: none;
      flex-basis: 2rem;
      font-size: 0.8rem;
    }
    &:hover {
      background-color: #f1f3f4;
      color: grey;
    }
    &:last-of-type {
      border-width: 0px;
    }
    &.router-link-active {
      background-color: #f8f9fa;
      color: grey;
    }
  }
}
</style>
