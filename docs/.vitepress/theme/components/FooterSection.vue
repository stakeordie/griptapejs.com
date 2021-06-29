<template>
  <div class="container-footer">
    <div class="content-wrapper">
      <div class="block">
        <div class="sod">
          <p>Built with <span>🛹♥️</span> by</p>
          <img src="/sod-logo.svg" alt="SOD Logo" />
        </div>
      </div>
      <div class="block">
        <div class="logo-scrt">
          <p>Built for</p>
          <img src="/logo-secret-network.png" alt="Secret Network Logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../responsive.scss";
.container-footer {
  background: var(--background-footer);
  display: grid;
  justify-items: center;
  width: 100%;
  // height: 100px;
  .content-wrapper {
    grid-template-columns: repeat(2, 1fr);
    @include media-max($s) {
      grid-template-columns: 1fr;
      grid-auto-flow: row;
    }
    .block {
      padding-top: calc(var(--base-space) * 5);
      padding-bottom: calc(var(--base-space) * 5);
      display: grid;
      justify-items: center;
      align-items: center;
      &:first-child {
        justify-items: start;
        @include media-max($s) {
          justify-items: center;
        }
      }
      &:last-child {
        justify-items: end;
        text-align: right;
        @include media-max($s) {
          justify-items: center;
        }
      }
      a {
        color: var(--neutral-07);
      }
      p {
        color: var(--neutral-07);
        margin: 0;
      }
    }

    .sod {
      display: grid;
      grid-auto-flow: column;
      gap: calc(var(--base-space) * 4);
      justify-items: center;
      align-items: center;
      img {
        width: calc(var(--base-space) * 16);
      }
      p {
        color: var(--neutral-07);
        span {
          color: red;
        }
      }
    }
    .logo-scrt {
      p {
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 12px;
        text-align: center;
      }
      text-align: left;
    }
    .menu-footer {
      display: grid;
      grid-auto-flow: column;
      gap: calc(var(--base-space) * 6);
      align-items: center;
      a {
        display: grid;
        grid-auto-flow: column;
        gap: calc(var(--base-space) * 2);
        align-items: center;
      }
    }
  }
}
.lines {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
