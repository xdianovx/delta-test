<script setup lang="ts">
const props = defineProps<{
  today: number;
  yesterday: number;
}>();

const percent = computed(() => {
  if (!props.yesterday) return 0;
  return Math.round(((props.today - props.yesterday) / props.yesterday) * 100);
});

const color = computed(() => {
  if (percent.value > 0) return "green";
  if (percent.value < 0) return "red";
  return "gray";
});
</script>

<template>
  <span :class="`tag --${color}`">
    {{ percent > 0 ? "+" : "" }}{{ percent }}%
  </span>
</template>

<style scoped lang="scss">
.tag {
  border-radius: 4px;
  color: white;
  line-height: 100%;
  padding: 2px 6px;
  position: absolute;
  right: 16px;
  &.--red {
    background: red;
  }

  &.--green {
    background: green;
  }

  &.--gray {
    color: gray;
  }
}
</style>
