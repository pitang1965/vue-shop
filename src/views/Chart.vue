<template>
  <div class="container mx-auto px-2">
    <h1 class="font-bold">チャート</h1>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio">
        <el-radio-button label="週" />
        <el-radio-button label="月" />
        <el-radio-button label="年" />
      </el-radio-group>
    </div>
    <BarChart />
    <LineChart />
  </div>
</template>

<script setup>
import BarChart from '@/components/BarChart.vue'
import LineChart from '@/components/LineChart.vue'
import { ref } from 'vue'
const radio = ref('週')
</script>

<style></style>
