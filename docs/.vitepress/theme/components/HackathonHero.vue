<template>
  <section class="hackathon-hero">
    <h2>Inaugural Hackathon</h2>
    <img src="/logo-griptape-js.svg" alt="GriptapeJs" />
  </section>
</template>

<script>
export default {
  methods: {
    heroChecker() {
      const heroHome = document.querySelector("main");
      heroHome.classList.add("hackathon");
      // console.log(heroHome);
    },
  },
  mounted() {
    this.heroChecker();
  },
};
</script>

<style lang="scss">
@import "../responsive.scss";
.hackathon-hero {
  background: url(/background-hero.jpg);
  background-size: 500px;
  margin: 0 !important;
  height: 400px;
  width: 100%;
  display: grid;
  align-content: center;
  gap: calc(var(--base-space) * 10);
  justify-items: center;

  img {
    @include media-max($s) {
      display: block;
      margin: 0 auto;
      height: 43.23px;
    }
  }

  @include media-max($s) {
    height: 375px;
  }
  #main-title {
    color: var(--neutral-07);
    font-size: 32px;
    margin: 0;
    @include media-max($s) {
      font-size: 24px;
      line-height: 32px;
      width: 210px;
    }
  }

  .description {
    display: none;
  }

  h2 {
    font-family: IBM Plex Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 120%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;
    color: #ffffff;
    @include media-max($s) {
      font-size: 28px;
    }
  }

  p {
    color: var(--neutral-07) !important;
    font-family: "Courier" !important;
    font-size: 18px !important;
    font-weight: 700 !important;
    line-height: 20.4px !important;
    font-style: normal !important;
    letter-spacing: 0.01em;
    text-align: center;
  }

  @media only screen and (min-width: 768px) {
    p {
      font-size: 34px !important;
      line-height: 40.8px !important;
      margin: 40px 0 !important;
    }
  }

  .nav-link {
    margin-bottom: 20px;

    a {
      color: var(--neutral-02) !important;
      font-weight: 700 !important;
      font-style: bold !important;
    }
  }

  @media only screen and (min-width: 768px) {
    .nav-link {
      margin: 0px 16px !important;
    }
  }
}
</style>
