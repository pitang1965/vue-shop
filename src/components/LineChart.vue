<template>
  <Line id="line-chart" :options="chartOptions" :data="chartData" />
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const store = useStore()

const chartData = computed(() => store.getters['chart/chartData'])

const chartOptions = {
  responsive: true
}
</script>
