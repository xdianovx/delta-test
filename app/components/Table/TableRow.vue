<script lang="ts" setup>
import { formatNumber } from "~/utils/formatNumber";
import DiffPercent from "./DiffPercent.vue";

defineProps<{
  item: {
    metric: string;
    today: number;
    yesterday: number;
    weekday: number;
  };
}>();

const isOpen = ref(false);
const showChart = ref(false);
const toggle = () => (isOpen.value = !isOpen.value);

watch(isOpen, (open) => {
  if (open) {
    setTimeout(() => (showChart.value = true), 0);
  } else {
    showChart.value = false;
  }
});

const options = {
  xAxis: {
    type: "category",
    data: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [100, 20000, 310000, 400, 500000, 450000, 500521],
      type: "line",
      smooth: true,
    },
  ],
};
</script>

<template>
  <div class="table__row" @click="toggle">
    <div class="table__cell">{{ item.metric }}</div>
    <div class="table__cell">{{ formatNumber(item.today) }}</div>
    <div class="table__cell">
      {{ formatNumber(item.yesterday) }}
      <DiffPercent :today="item.today" :yesterday="item.yesterday" />
    </div>
    <div class="table__cell">{{ formatNumber(item.weekday) }}</div>
  </div>

  <ClientOnly>
    <Motion
      tag="div"
      class="row__content"
      :initial="{ height: 0, opacity: 0 }"
      :enter="{ height: 'auto', opacity: 1 }"
      :leave="{ height: 0, opacity: 0 }"
      v-show="isOpen"
    >
      <v-chart
        v-if="showChart"
        :option="options"
        style="height: 300px; width: 100%"
      />
    </Motion>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.row__content {
  padding: 24px;
  border-bottom: 1px solid $bg-border;
  transition: all 0.2s ease;

  &:last-of-type {
    border: none;
  }
}
</style>
