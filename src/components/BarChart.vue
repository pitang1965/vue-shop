<template>
  <Bar id="bar-chart" :options="chartOptions" :data="chartData" />
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
  labels: ['January', 'February', 'March'],
  datasets: [{ label: 'Data1', data: [40, 20, 12] }]
}

const chartOptions = {
  responsive: true
}
</script>
