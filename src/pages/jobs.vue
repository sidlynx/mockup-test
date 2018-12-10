<template>
  <page :padding="true">
    <div class="jobs">
      <div class="left"></div>
      <div class="right">
        <div class="search">
          <text-input />
        </div>
        <div class="search-results">
          <card class="card" v-for="(job,index) in jobs" :key="index">
            <h3 slot="header">{{job.title}}</h3>
            <div class="search-result">
              <div class="image">
                <img :src="job.imgUrl" /> </div>
              <div class="content">
                {{job.description}}
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
  </page>
</template>
<script>
export default {
  data() {
    return {
      jobs: [
        {
          id: 1,
          imgUrl:
            "https://skillvalue.com/jobs/wp-content/uploads/sites/7/2018/10/bootstrap-stack.png",
          title: "Freelance développeur PHP JavaScript | Bootstrap | Paris",
          description:
            "Présentation de l’entreprise Editeur de solutions de protection des sites e-commerce contre les fraudeurs et les hackers, basé à Issy Les Moulineaux en Région  Parisienne. Notre client est à la recherche d’un développeur Front End PHP JavaScript pour faire évoluer le front web de sa plate-forme cloud. Description de la mission Vous serez en charge […]"
        },
        {
          id: 2,
          imgUrl:
            "https://skillvalue.com/jobs/wp-content/uploads/sites/7/2018/09/ts1.png",
          title:
            "TypeScript – Développeur Freelance (ou Javascript | ES6) – Paris | Remote partiel possible",
          description:
            "Présentation de l’entreprise Editeur SaaS d’une plateforme dans l’AdTech permettant d’enrichir la connaissance d’une audience en temps réel et d’orchestrer simplement des scénarii personnalisés et multicanaux de communication et de publicité. Description de la mission Le développeur Javascript sera en charge de : Convevoir et développer les connecteurs entre la plateforme et les différents outils […]"
        },
        {
          id: 3,
          imgUrl:
            "https://skillvalue.com/jobs/wp-content/uploads/sites/7/2018/04/CDI_developpeur_javascript_paris-e1524753701280-1.png",
          title: "Freelance Chef de projet technique Javascript – Paris",
          description:
            "Présentation de l’entreprise Editeur de logiciels dans l’AdTech Description de la mission Mission de 3 mois (renouvelable) sur site à Paris dans les locaux (souplesse remote envisageable une fois la mission bien démarrée) Coordonner et suivre les projets d’intégration de composants / éditeurs third party : éditeurs AdTech tels que des trackers ou surveys Faire […]"
        },
        {
          id: 4,
          imgUrl:
            "https://skillvalue.com/jobs/wp-content/uploads/sites/7/2018/04/javascript-1.png",
          title: "Freelance Javascript Developer",
          description:
            "Présentation de l’entreprise SkillValue est une société qui propose une solution d’évaluation qui aide les développeurs à booster leurs compétences techniques ainsi que ses clients à trouver les développeurs ayant les compétences qu’ils recherchent. « Teste tes compétences, mesure toi à la communauté, démontre ton talent » SkillValue repose sur 3 offres : assessment, missions en freelance et […]"
        },
        {
          id: 5,
          imgUrl:
            "https://skillvalue.com/jobs/wp-content/uploads/sites/7/2018/02/react_freelance_mission_remote-e1524729117845-1.png",
          title: "Freelance Full Stack | React.js | Paris",
          description:
            "Présentation de l’entreprise Notre client est une start-up basée à Paris qui développe une solution permettant de gérer les contrats en un seul clic. Leur plateforme sert à fournir des signatures électroniques mais également à stocker les contrats et à réaliser des rappels d’échéance. Ils recherchent un développeur Full Stack avec une bonne connaissance de […]"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../style/variables";
.page {
  background-repeat: no-repeat;
  .jobs {
    padding-top: 4rem;
    display: flex;
    flex-direction: row;
    .left {
      flex-basis: 40rem;
      margin-right: 6px;
      //background: white;
      .title {
        background-color: $color-primary;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5rem;
        padding: 5px;
        font-family: "QuickSandBold";
        .left {
          flex-basis: 4rem;
        }
        .middle {
          flex-basis: 100%;
        }
        .right {
          flex-basis: 4rem;
        }
      }
    }
    .right {
      flex-basis: 100%;
      margin-left: 6px;
      .search {
        height: 6rem;
        box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.1),
          0 0.75rem 0.75rem rgba(0, 0, 0, 0.12);
      }
      .search-results {
      }
    }
  }
}

.search-result {
  display: flex;
  flex-direction: row;
  background: white;
  .image {
    flex-basis: 120px;
    img {
      max-width: 100%;
    }
  }
  .content {
    flex-basis: 100%;
    padding-left: 6px;
    font-family: QuickSand;
  }
}
.card {
  background-color: white;
  margin-top: 1rem;
}
</style>
