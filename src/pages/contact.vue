<template>
  <page>
    <div slot="header">Contact</div>
    <div class="wrapper">
      <div class="holder">
        <div class="img"></div>
        <div class="form">
          <div class="form-content">
            <div
              style="display:flex;"
              class="full-name"
            >
              <div style="flex-basis:50%;padding:0px 10px;">
                <input
                  Placeholder="First name"
                  style="width:100%;"
                />
              </div>
              <div style="flex-basis:50%;padding:0px 10px;">
                <input Placeholder="Last name" />
              </div>
            </div>
            <div
              class="email"
              style="padding:0px 10px;"
            >
              <input
                placeholder="Mail"
                style="width:100%;"
              />
            </div>
            <div class="message">
              <fieldset>
                <legend>Message</legend>
                <textarea></textarea>
              </fieldset>
            </div>
            <div class="button">
              <div>OK</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </page>
</template>
<script>
import Page from "@/components/layout/page.vue";
export default {
  components: {
    Page
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  height: 100%;
  padding: 0px 50px;
  .holder {
    height: 100%;
    border: 4px solid #fff;
    display: flex;
    border-radius: 60px;
    .img {
      flex-basis: 30%;
      background-image: url("../assets/imgs/img2.jpg");
      background-size: cover;
      border-radius: 60px 0px 0px 60px;
    }
    .form {
      flex-basis: calc(70% + 60px);
      background-color: white;
      border-radius: 54px;
      margin-left: -60px;
      padding: 100px;
      .form-content {
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
        height: 100%;
        border: 1px solid grey;
        .full-name {
          flex-basis: 60px;
          flex: none;
        }
        .email {
          flex-basis: 60px;
          flex: none;
        }
        .message {
          margin: 10px;
          height: calc(100% - 200px);
          flex: none;
          fieldset {
            margin-top: 10px;
            border: 4px solid #9d0000;
            height: 100%;
            legend {
              font-size: 40px;
              color: grey;
              width: auto;
              padding: 0px 10px;
            }
            textarea {
              width: 100%;
              height: calc(100% - 64px);
              border: none;
              outline: none;
            }
          }
        }
        .button {
          height: 80px;
          flex: none;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 10px;
          div {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 140px;
            background-color: #9d0000;
            color: #fff;
            text-align: center;
            border-radius: 50px;

            height: 50px;
            font-weight: bold;
            font-size: 40px;
          }
        }
      }
    }
  }
}

input {
  height: 60px;
  width: 100%;
  font-size: 40px;
  font-weight: bold;
  border: 0px solid transparent;
  border-bottom: 4px solid #9d0000;
  outline: none;
  &::placeholder {
    color: grey;
  }
}
</style>
