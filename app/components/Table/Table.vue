<script lang="ts" setup>
import { rawMetrics } from "~/mocks/db";
</script>

<template>
  <section class="section table-section">
    <div class="container">
      <div class="table__row table__row--head">
        <div class="table__cell">Показатель</div>
        <div class="table__cell">Текущий день</div>
        <div class="table__cell">Вчера</div>
        <div class="table__cell">Этот день недели</div>
      </div>

      <div class="table__data">
        <TableRow v-for="item in rawMetrics" :key="item.metric" :item="item" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.table-section {
  margin-top: 40px;
}
.table {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.table__data {
  margin-top: 16px;
  border-radius: $rounded;
  overflow: hidden;
  border: 1px solid $bg-border;
}

.table__row {
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid $bg-border;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #f5f5f5;
    // color: #fff;
  }
  &:last-of-type {
    border: none;
  }
}

.table__row--head {
  border-radius: $rounded;
  background: #f5f5f5;
  border: 1px solid $bg-border;
  cursor: auto;
  &:hover {
    background: #f5f5f5;
  }
  .table__cell {
    font-weight: 500;
    padding: 20px 24px;
    line-height: 100%;

    &:last-of-type {
      border: none;
    }
  }
}

.table__cell {
  padding: 20px 24px;
  line-height: 100%;
  border-right: 1px solid $bg-border;
  word-break: break-word;
  position: relative;
}

.table__cell:first-child {
  flex: 0 0 40%;
}

.table__cell:nth-child(2),
.table__cell:nth-child(3),
.table__cell:nth-child(4) {
  flex: 0 0 20%;
}

.table__cell:last-of-type {
  border: none;
}
</style>
