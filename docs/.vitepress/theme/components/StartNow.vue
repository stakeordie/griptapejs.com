<template>
  

  <div class="button-column">
    <div class="content-wrapper">
      <div class="block">
        <button class="button-main">
          <a
            href="https://docs.griptapejs.com/introduction/getting-started.html"
            target="__blank"
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
