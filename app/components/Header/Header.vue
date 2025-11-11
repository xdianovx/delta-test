<script lang="ts" setup>
import HeaderLink from "./HeaderLink.vue";
import HeaderLogo from "./HeaderLogo.vue";

const links = [
  {
    title: "Главная",
    to: "/",
  },
  {
    title: "Что я сделал в этом ТЗ",
    to: "/about",
  },
];
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <HeaderLogo />
        <nav class="header__nav">
          <HeaderLink v-for="link in links" :key="link.title" :link="link" />
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  margin-top: 8px;
}

.header__wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid $bg-border;
  border-radius: $rounded;
  padding: 16px 24px;
}

.header__nav {
  display: flex;
  gap: 16px;
}
</style>
