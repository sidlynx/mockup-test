<template>
  <page>
    <div slot="header">About us</div>
    <div class="acontainer">
      <carousel :perPage="1">
        <slide
          v-for="(item,indexItem) in items"
          :key="'indexItem' + indexItem"
        >
          <div class="wrapper">
            <div class="items-holder">
              <div
                class="item"
                v-for="(subitem,indexsubitem) in item.subitems"
                :key="'indexsubitem' + indexsubitem"
              >
                <div
                  class="img"
                  :style="{order:indexsubitem%2 !== 0 ? '1':'2',paddingLeft:indexsubitem%2 !== 0 ? '0px':'50px',paddingRight:indexsubitem%2 === 0 ? '0px':'50px'}"
                >
                  <div
                    class="content"
                    :class="['img' + (indexsubitem + 1)]"
                  ></div>
                </div>
                <div
                  class="text"
                  :style="{order:indexsubitem%2 == 0 ? '1':'2',paddingLeft:indexsubitem%2 === 0 ? '0px':'50px',paddingRight:indexsubitem%2 !== 0 ? '0px':'50px'}"
                >
                  {{subitem.text}}
                </div>
              </div>
            </div>
            <div class="citation">
              <div class="holder">
                <div
                  class="text"
                  sstyle="font-family:Robotolight"
                >
                  {{items[0].citation.text}}
                </div>
                <div class="from">- {{items[0].citation.from}}</div>
              </div>

            </div>
          </div>
        </slide>
      </carousel>
      <!--div class="paginate">
        <div class="holder">
          <div @click="selectedIndex = 0"></div>
        </div>
        <div class="holder">
          <div @click="selectedIndex = 1"></div>
        </div>
        <div class="holder">
          <div @click="selectedIndex = 2"></div>
        </div>
      </div-->
    </div>
  </page>
</template>
<script>
import Page from "./page.vue";
import { Carousel, Slide } from "vue-carousel";
export default {
  data() {
    return {
      selectedIndex: 0,
      items: [
        {
          subitems: [
            {
              text: `The snow glows white on the mountain tonight.Not a
footprint to be seen.A kingdom of isolation.And it looks like
I’m the queen.The wind is howling like this swirling storm
inside.Couldn’t keep it in, heaven knows I’ve tried.Don’t let
them in, don’t let them see.Be the good girl you always have
to be.Conceal, don’t feel, don’t let them know.Well, now they
know.Let it go, let it go.Can’t hold it back anymore.Let it go,
let it go.Turn away and slam the door.I don’t care what
they’re going to say.Let the storm rage on.The cold never
bothered me anyway.Let it go, let it go.Can’t hold it back
anymore.Let it go, let it go.`,
              image: "image2.jpg"
            },
            {
              text: `Let it go.Let it go.Let it go.It’s funny how some distance makes
everything seem small.And the fears that once controlled me
can’t get to me at all.It’s time to see what I can do.To test the
limits and break through.No right, no wrong, no rules for me.I’m
free.Let it go, let it go.I am one with the wind and sky.Let it go, let
it go.You’ll never see me cry.Here I stand and here I stay.Let the
storm rage on.My power flurries through the air into the
ground.My soul is spiraling in frozen fractals all around.And one
thought crystallizes like an icy blast.I’m never going back, the
past is in the past.Let it go.The cold never bothered me
anyway.Let it go, let it go.And I’ll rise like the break of dawn.Let it
go, let it go.That perfect girl is gone.Here I stand in the light of
day.Let the storm rage on`,
              image: "image1.jpg"
            }
          ],
          citation: {
            text: `Oh, the weather outside is frightful
But the fire is so delightful`,
            from: "Father Christmas"
          }
        },

        {
          subitems: [
            {
              text: `The snow glows white on the mountain tonight.Not a
footprint to be seen.A kingdom of isolation.And it looks like
I’m the queen.The wind is howling like this swirling storm
inside.Couldn’t keep it in, heaven knows I’ve tried.Don’t let
them in, don’t let them see.Be the good girl you always have
to be.Conceal, don’t feel, don’t let them know.Well, now they
know.Let it go, let it go.Can’t hold it back anymore.Let it go,
let it go.Turn away and slam the door.I don’t care what
they’re going to say.Let the storm rage on.The cold never
bothered me anyway.Let it go, let it go.Can’t hold it back
anymore.Let it go, let it go.`,
              image: "image2.jpg"
            },
            {
              text: `Let it go.Let it go.Let it go.It’s funny how some distance makes
everything seem small.And the fears that once controlled me
can’t get to me at all.It’s time to see what I can do.To test the
limits and break through.No right, no wrong, no rules for me.I’m
free.Let it go, let it go.I am one with the wind and sky.Let it go, let
it go.You’ll never see me cry.Here I stand and here I stay.Let the
storm rage on.My power flurries through the air into the
ground.My soul is spiraling in frozen fractals all around.And one
thought crystallizes like an icy blast.I’m never going back, the
past is in the past.Let it go.The cold never bothered me
anyway.Let it go, let it go.And I’ll rise like the break of dawn.Let it
go, let it go.That perfect girl is gone.Here I stand in the light of
day.Let the storm rage on`,
              image: "image1.jpg"
            }
          ],
          citation: {
            text: `Oh, the weather outside is frightful
But the fire is so delightful`,
            from: "Father Christmas"
          }
        },

        {
          subitems: [
            {
              text: `The snow glows white on the mountain tonight.Not a
footprint to be seen.A kingdom of isolation.And it looks like
I’m the queen.The wind is howling like this swirling storm
inside.Couldn’t keep it in, heaven knows I’ve tried.Don’t let
them in, don’t let them see.Be the good girl you always have
to be.Conceal, don’t feel, don’t let them know.Well, now they
know.Let it go, let it go.Can’t hold it back anymore.Let it go,
let it go.Turn away and slam the door.I don’t care what
they’re going to say.Let the storm rage on.The cold never
bothered me anyway.Let it go, let it go.Can’t hold it back
anymore.Let it go, let it go.`,
              image: "image2.jpg"
            },
            {
              text: `Let it go.Let it go.Let it go.It’s funny how some distance makes
everything seem small.And the fears that once controlled me
can’t get to me at all.It’s time to see what I can do.To test the
limits and break through.No right, no wrong, no rules for me.I’m
free.Let it go, let it go.I am one with the wind and sky.Let it go, let
it go.You’ll never see me cry.Here I stand and here I stay.Let the
storm rage on.My power flurries through the air into the
ground.My soul is spiraling in frozen fractals all around.And one
thought crystallizes like an icy blast.I’m never going back, the
past is in the past.Let it go.The cold never bothered me
anyway.Let it go, let it go.And I’ll rise like the break of dawn.Let it
go, let it go.That perfect girl is gone.Here I stand in the light of
day.Let the storm rage on`,
              image: "image1.jpg"
            }
          ],
          citation: {
            text: `Oh, the weather outside is frightful
But the fire is so delightful`,
            from: "Father Christmas"
          }
        }
      ]
    };
  },
  components: {
    Page,
    Carousel,
    Slide
  }
};
</script>
<style lang="scss" scoped>
.acontainer {
  height: 100%;
  margin: 0px 50px;
  background-color: #fff;
  border-radius: 60px;
  padding: 60px;
  .wrapper {
    width: 100%;
    .items-holder {
      flex: none;
      display: flex;
      flex-direction: column;
      .item {
        padding-top: 50px;
        padding-bottom: 50px;
        height: 50%;
        display: flex;
        flex-direction: row;
        .img {
          width: 50%;

          .content {
            border: 1px solid black;
            height: 100%;
            background-size: cover;
            background-position: center;

            &.img1 {
              background-image: url("../assets/imgs/img1.jpg");
            }
            &.img2 {
              background-image: url("../assets/imgs/img2.jpg");
            }
            &.img3 {
              background-image: url("../assets/imgs/img3.jpg");
            }
          }
        }
        .text {
          width: 50%;
          font-size: 26px;
        }
      }
    }
    .citation {
      text-align: center;
      .holder {
        padding: 0px 200px;
        .text {
          font-size: 70px;
        }
        .from {
          text-align: right;
          font-size: 40px;
          font-weight: bold;
        }
      }
    }
  }
  .paginate {
    display: flex;
    justify-content: center;
    .holder {
      width: 30px;
      height: 20px;
      display: flex;
      justify-content: center;
      div {
        width: 20px;
        border: 2px solid grey;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
}
</style>
<style lang="scss">
.VueCarousel-dot-container {
  .VueCarousel-dot {
    button {
      width: 20px !important;
      height: 20px !important;
      //background-color: #fff !important;
      border: 1px solid grey !important;
      outline: none;
    }
    &.VueCarousel-dot--active {
      button {
        background-color: #707070 !important;
      }
    }
  }
}
</style>