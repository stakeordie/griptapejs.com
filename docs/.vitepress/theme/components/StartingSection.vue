<template>
  <div class="features-container">
    <div class="content-wrapper">
      <div class="block">
        <img src="/bulb.svg" alt="Feature" />
        <div class="message">
          <h3>Intuitive</h3>
          <p>With our Contract-State model, interacting with Secret Contracts just make sense</p>
        </div>
      </div>
      <div class="block">
        <img src="/icon-rocket.svg" alt="Feature" />
        <div class="message">
          <h3>Easy to configure</h3>
          <p>Convention over configuration so development is lightning fast.</p>
        </div>
      </div>
      <div class="block">
        <img src="/icon-stack.svg" alt="Feature" />
        <div class="message">
          <h3>Multi-flavored</h3>
          <p>
            VueJS and ReactJS implementations built on a framework-agnostic javascript core.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="starting-container">
    <div class="content-wrapper">
      <div class="block one">
        <div class="intro">
          <h2>Get Started</h2>
          <p>
            Choose your Flavor
          </p>
        </div>
        <div class="icons">
          <div class="framework-select selected">
            <img src="/logo-vue.png" alt="Logo Vue" />
          </div>
          <div class="framework-select coming-soon">
            <img src="/logo-react.png" alt="Logo R" />
            <span>Coming Soon</span>
          </div>
        </div>

        <button class="button-main">
          <a href="https://docs.vue.griptapejs.com" target="__blank">Explore Vue docs</a>
        </button>
      </div>

      <div class="block two">
        <div class="option">
          <h2 class="scalfold">Add it to your project</h2>
          <div class="method">
            <p>Using Yarn:</p>
            <code><span>yarn add</span> @stakeordie/griptape-vue.js</code>
          </div>
          <div class="method">
            <p>Using npm:</p>
            <code><span>npm install</span> @stakeordie/griptape-vue.js</code>
          </div>

          <div class="option">
            <div class="method">
              <p>Or, use our starter:</p>
              <code><span>degit </span>https://github.com/stakeordie/griptape-vue-starter#main</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../responsive.scss";
.features-container {
  background: var(--color-primary);
  display: grid;
  justify-items: center;
  width: 100%;
  color: var(--neutral-01);
  @include media-max($xxs) {
    padding-left: 0;
    padding-right: 0;
  }
  .content-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @include media-max(700px) {
      grid-template-columns: 1fr;
      grid-auto-flow: row;
    }
    @include media-max($xxs) {
      padding-left: 0;
      padding-right: 0;
    }
    .block {
      display: grid;
      justify-items: center;
      grid-gap: calc(var(--base-space) * 8);
      padding: calc(var(--base-space) * 8) calc(var(--base-space) * 6);
      justify-content: space-between;
      @include media-max($xxs) {
        padding: calc(var(--base-space) * 8) 0;
      }
      &:first-child {
        border-right: 4px dotted;
        // border-style: dotted;
        @include media-max(700px) {
          border-right: 0;
          border-bottom: 4px dotted;
        }
      }
      &:last-child {
        border-left: 4px dotted;
        @include media-max(700px) {
          border-left: 0;
          border-top: 4px dotted;
        }
      }
      img {
        @include media-max($s) {
          width: calc(var(--base-space) * 8);
          height: calc(var(--base-space) * 8);
        }
      }
      .message {
        display: grid;
        justify-items: center;
        text-align: center;
        gap: var(--base-space);
        h3,
        p {
          margin: 0;
        }
        p {
          max-width: 90%;
        }
      }
    }
  }
}
.starting-container {
  background: var(--neutral-06);
  display: grid;
  justify-items: center;
  width: 100%;

  .content-wrapper {
    @include media-max($l) {
      grid-template-columns: 1fr;
      grid-auto-flow: row;
    }
    p {
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      max-width: 90%;
    }

    h1,
    h2 {
      @include media-max($xxs) {
        width: 95%;
      }
    }

    .one {
      display: grid;
      gap: calc(var(--base-space) * 8);
      align-content: start;
      .intro {
        display: grid;
        gap: calc(var(--base-space) * 6);
        h2,
        p {
          margin: 0;
        }
      }
      button {
        width: fit-content;
      }
    }

    .two {
      display: grid;
      gap: calc(var(--base-space) * 16);
      .option {
        display: grid;
        gap: calc(var(--base-space) * 6);
        .method {
          display: grid;
          gap: calc(var(--base-space) * 2);
          p {
            margin: 0;
          }
          code {
            font-family: Courier;
            background: var(--neutral-01);
            padding: calc(var(--base-space) * 4);
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 30px;
            letter-spacing: 0em;
            color: var(--neutral-07);
            width: 100%;
            display: block;
            border-radius: 0;
            white-space: nowrap;

            @include media-max($s) {
              overflow: hidden;
              white-space: nowrap;
              overflow-x: scroll;
            }

            @include media-max($xxs) {
              width: 95%;
            }

            span {
              color: var(--color-tertiary);
            }
          }
        }
      }

      margin-top: 20px;

      @media only screen and (min-width: 768px) {
        margin-top: 0px;
      }
    }
  }

  .icons {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-column-gap: 32px;
    margin: 18px 0px;
    width: 100%;

    div {
      position: relative;
      padding: 8px;
      cursor: pointer;
      border: 2px solid transparent;

      &:hover {
        background-color: #dedede;
        border-radius: 4px;
      }

      &:first-child {
        border: 2px solid var(--color-primary-dark);
        border-radius: 4px;
      }

      &:last-child {
        span {
          font-family: Courier;
          font-size: 12px;
          position: absolute;
          left: 0;
          bottom: 0;
          background-color: black;
          color: white;
          padding: 2px;
          width: 100%;
          text-align: center;
          opacity: .5;
        }
      }
    }
  }
}
</style>
