<template>
  <nav>
    <div class="menu">
      <div
        class="icon bars"
        @click="$store.dispatch('toggleMenu')"
      >
        <i class=" fa fa-bars"></i>
      </div>
      <router-link
        tag="div"
        class="icon"
        :to=" {name:'home'}"
      >
        <i class=" fa fa-home"></i>
      </router-link>
    </div>
    <div class="search"></div>
    <div class="me">
      <div
        tag="div"
        class=""
      >
        <div class="name center-vertical">Mohammed</div>
        <div class="center-vertical"> <i
            style="font-size:1.6rem;"
            class="fa fa-user"
          ></i></div>
      </div>
    </div>
    <!--router-link tag="div" class="item center-vertical fwb" :to="{name:'about'}">About</router-link-->
    <!--router-link tag="div" class="item center-vertical fwb" :to="{name:'guest'}">Login</router-link-->
  </nav>

</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../../style/helpers";
@import "../../style/variables";
nav {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  color: rgba(0, 0, 0, 0.54);
  .menu {
    width: 250px;
    flex: none;
    display: flex;
    .icon {
      height: 100%;
      width: 44px;
      font-size: 30px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      &.bars {
        font-size: 20px;
        &:hover {
          background-color: rgba(0, 0, 0, 0.071);
          outline: 0;
          border-radius: 50%;
        }
      }
    }
  }

  .search {
    flex-basis: 100%;
  }
  .me {
    height: 100%;
    flex: none;
    float: right;
    div {
      height: 100%;
      cursor: pointer;
      display: flex;
      justify-content: right;
      .name {
        //background-color: green;
        font-weight: bold;
        padding-right: 1rem;
      }
      &:before {
        display: none;
      }
    }
    .dropdown-menu {
      font-size: 1.6rem;
      //top: 4.5rem !important;
      //left: 3rem !important;
      border-radius: 0px;
    }
  }
}
</style>
