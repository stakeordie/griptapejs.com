<template>
  

  <div class="button-column">
    <div class="content-wrapper">
      <div class="block">
        <button class="button-main">
          <a
            href="https://griptape-docs.netlify.app/introduction/what-is-griptape.html"
            >Start Now</a
          >
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button-column {
  background: var(--background-white);
  text-align: center;
  display: grid;
  justify-items: center;
  width: 100%;
  .content-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
