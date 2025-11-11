<template>
  <NuxtLink
    :to="link.to"
    class="header-link"
    active-class="active"
    exact-active-class="active"
    exact
  >
    {{ link.title }}
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  link: {
    title: string;
    to: string;
  };
}>();
</script>

<style lang="scss" scoped>
.header-link {
  color: #1b1b1b;
  transition: color 0.3s ease;

  &:hover {
    color: $accent;
  }

  &.active {
    color: $accent;
  }
}
</style>
