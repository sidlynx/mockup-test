<template>
  <div class="pricing">
    <div class="header">Pricing</div>
    <div class="items-holder">
      <div
        class="item"
        v-for="(item,index) in items"
        :key="index"
      >
        <div class="box">
          <div
            class="img"
            :class="['img' + (index + 1)]"
          />
          <div class="info">
            <div class="price">
              {{item.price}}€<sub>TTC</sub>
            </div>
            <div
              class="description"
              v-html="item.description"
            >
              {{item.description}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          image: "img1.jpg",
          description: `Oh, the weather outside is frightful
But the fire is so delightful
And since we’ve no place to go
Let it snow, let it snow, let it snow`.replace(/(?:\r\n|\r|\n)/g, "<br>"),
          price: 29
        },
        {
          image: "img2.jpg",
          description: `Man it doesn’t show signs of stoppin’
And I brought some corn for poppin’
The lights are turned way down low
Let it snow, let it snow, let it snow`.replace(/(?:\r\n|\r|\n)/g, "<br>"),
          price: 49
        },
        {
          image: "img3.jpg",
          description: `When we finally kiss good-night
How I’ll hate going out in the storm
But if you really hold me tight
All the way home I’ll be warm`.replace(/(?:\r\n|\r|\n)/g, "<br>"),
          price: 49
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.pricing {
  display: flex;
  flex-direction: column;
  height: 100%;
  .header {
    flex-basis: 150px;
    text-align: center;
    color: #fff;
    font-size: 100px;
    font-weight: bold;
  }
  .items-holder {
    padding-top: 20px;
    flex-basis: 100%;
    display: flex;
    flex-direction: row;
    padding-bottom: 50px;
    .item {
      flex-basis: 33.333333%;
      padding: 0px 50px;

      .box {
        height: 100%;
        background: white;
        display: flex;
        flex-direction: column;
        border-radius: 60px;
        .img {
          flex-basis: 50%;
          background-size: cover;
          border-radius: 60px 60px 0px 0px;
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
        .info {
          flex-basis: calc(50% + 50px);
          margin-top: -50px;
          background-color: white;
          border-radius: 60px;
          display: flex;
          flex-direction: column;
          .price {
            flex-basis: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #9d0000;
            font-size: 80px;
            font-weight: bold;
            sub {
              font-size: 20px;
            }
          }
          .description {
            flex-basis: 50%;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
