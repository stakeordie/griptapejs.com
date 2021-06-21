<template>
  <div class="hero-floating-logo">
    <p>Brought to you by</p>
    <img src="/sod-logo.svg" alt="SOD Logo" />
  </div>
</template>


<style lang="scss" scoped>
@import "../responsive.scss";
.hero-floating-logo {
  position: absolute;
  top: calc(var(--base-space) * 4);
  right: calc(var(--base-space) * 8);
  z-index: 10;
  width: 135px;
  display: grid;
  justify-items: center;
  align-items: start;
  gap: calc(var(--base-space) * 2);
  padding-top: 7px;
  @include media-max($s) {
    padding-top: 0px;
  }
  p {
    color: var(--neutral-07);
    margin: 0;
  }
  img {
    width: 114px;
    height: auto;
    @include media-max($s) {
      width: 62px;
    }
  }
}
</style>
