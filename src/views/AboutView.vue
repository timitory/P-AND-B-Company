<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
  </div>
</template>
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March','April','May','June','July','August','September','October','November','December' ],
        datasets: [ { data: [40, 20, 12,19,32,56,10,25,44,48,70,100] } ],
      },
      chartOptions: {
        responsive: true
      },
      backgroundColor:['Red']
    }
  }
}
</script>
