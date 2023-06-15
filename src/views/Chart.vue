<template>
  <div class="container mx-auto px-2">
    <h1 class="font-bold">チャート</h1>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio">
        <el-radio-button label="週" @click="changeChartType('週')" />
        <el-radio-button label="月" @click="changeChartType('月')" />
        <el-radio-button label="年" @click="changeChartType('年')" />
      </el-radio-group>
    </div>
    <LineChart />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import LineChart from '@/components/LineChart.vue'
import { ref } from 'vue'

const store = useStore()
const radio = ref('週')

const changeChartType = chartType => store.dispatch('chart/changeChartType', chartType)
</script>

<style></style>
