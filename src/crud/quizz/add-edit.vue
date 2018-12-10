<template>
    <page :padding="true">
        <div class="holder">
            <div class="menu">
                <left-menu :items="menu" />
            </div>
            <div class="content">
                <div class="form bordered rounded">
                    <text-input label="First name:" />
                    <text-input label="Last name:" />
                    <text-input label="Email address:" type="email" />
                    <m-button :outline="true" state="info" label="Create" style="float:right;" />
                </div>
            </div>
        </div>
    </page>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          icon: "fas fa-user",
          title: "Users",
          to: "user"
        },
        {
          icon: "fas fa-briefcase",
          title: "Business",
          to: ""
        },
        {
          icon: "fas fa-money-bill-alt",
          title: "Jobs",
          to: ""
        },
        {
          icon: "fas fa-question-circle",
          title: "Quizz",
          to: ""
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.holder {
  display: flex;
  flex-direction: row;
  .menu {
    width: 260px;
    flex-grow: 0;
    flex-shrink: 0;
    //border: 1px solid grey;
    height: calc(100vh - 64px);
    display: flex;
    align-items: center;
  }
  .content {
    flex-basis: 100%;
    margin: 4rem;
    //background-color: white;
    padding: 2rem;
    height: auto;
    .form {
      background-color: white;
      padding: 2rem;
      height: 17rem;
    }
  }
}
</style>
