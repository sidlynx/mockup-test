<template>
  <div id="app">
    <div id="header">
      <app-header></app-header>
    </div>
    <div id="content">
      <div
        id="left"
        :style="{width:$store.state.layout.menu.expanded ? '260px':'50px'}"
      >
        <app-left-pane />
      </div>
      <div id="middle">
        <router-view />
      </div>
      <div id="right"></div>
    </div>
    <div id="footer"></div>
    <notifications
      group="default"
      position="bottom right"
    >
      <template
        slot="body"
        slot-scope="props"
      >
        <div
          class="notification"
          :class="[props.item.type]"
          @click="props.close"
        >
          <div class="icon">
            <i
              class="fas fa-exclamation-triangle"
              style="font-size:2.5rem;"
            ></i>
          </div>
          <div class="main">
            <div class="title">
              {{props.item.title}}
            </div>
            <div
              v-html="props.item.text"
              class="body"
            >
            </div>
          </div>
        </div>
      </template>
    </notifications>
    <script
      type="text/x-template"
      id="modal-template"
    >
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header">
                  default header
                </slot>
              </div>
              <div class="modal-body">
                <slot name="body">
                  default body
                </slot>
              </div>
              <div class="modal-footer">
                <slot name="footer">
                  default footer
                  <button class="modal-default-button" @click="$emit('close')">
                    OK
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</script>
  </div>
</template>
<script>
import AppHeader from "@/components/layout/app_header";
import AppLeftPane from "@/components/layout/app_left_pane";
export default {
  components: {
    AppHeader,
    AppLeftPane
  }
};
</script>

<style lang="scss">
@import "style/variables";
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  #header {
    width: 100%;
    flex-basis: $header-height;
    background: $color-primary;
    color: $color-white;
    padding: 0px 10px;

    background-color: #fafafb;
    border-top: 3px solid #f48024;
    color: $color-primary;
    box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1);
  }
  #content {
    flex-basis: 100%;
    width: 100%;
    padding: 0px 10px;
    display: flex;
    flex-direction: row;
    #left {
      width: 250px;
      flex: none;
      border-right: 1px solid #ddd;
      transition-property: width;
      transition-duration: 0.5s;
      transition-delay: 0.01s;
    }
    #middle {
      flex-basis: 100%;
      overflow-y: scroll;
    }

    #right {
      width: 220px;
      border-left: 1px solid #ddd;
      flex: none;
      overflow-y: scroll;
    }
  }
  #footer {
    width: 100%;
    flex-basis: 16px;
    background: $color-primary;
    color: $color-white;

    background-color: #fafafb;
    color: $color-primary;
    box-shadow: 0 -1px 0 rgba(59, 64, 69, 0.1), 0 -1px 6px rgba(12, 13, 14, 0.1);
  }
}
.notification {
  font-family: RobotoRegular;
  border: 0px solid grey;
  margin-bottom: 4px;
  cursor: pointer;
  box-shadow: 0 0 12px #999;
  color: #fff;
  opacity: 0.8;
  margin-right: 10px;
  border-radius: 3px;
  display: flex !important;
  flex-direction: row;
  .icon {
    flex-basis: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 2.5rem;
    }
    border-right: 1px solid #fff;
  }
  .main {
    flex-basis: 100%;
    padding: 4px;
    .title {
      font-weight: bold;
    }
    .body {
      padding-top: 1rem;
    }
  }
  &:hover {
    -moz-box-shadow: 0 0 12px #000000;
    -webkit-box-shadow: 0 0 12px #000000;
    box-shadow: 0 0 12px #000000;
    opacity: 1;
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
    filter: alpha(opacity=100);
    cursor: pointer;
  }
  &.warn {
    background-color: #f48024;
  }
}
</style>
