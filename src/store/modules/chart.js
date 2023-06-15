const chartDataWeek = {
  labels: ['月', '火', '水', '木', '金', '土', '日'],
  datasets: [
    {
      label: '週データ',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
}

const chartDataMonth = {
  labels: ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日'],
  datasets: [
    {
      label: '月データ',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40, 30, 120]
    }
  ]
}

const chartDataYear = {
  labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  datasets: [
    {
      label: '年データ',
      backgroundColor: '#f87979',
      data: [500, 100, 200, 800, 900, 1200, 2000, 500, 200, 400, 600, 1500]
    }
  ]
}

// initial state
const state = () => ({
  chartType: '週',
  chartData: chartDataWeek
})

const getters = {
  chartData: (state, getters) => {
    return state.chartData 
  }
}

// actions
const actions = {
  changeChartType({ state, commit }, chartType) {
    let newData = null
    switch (chartType) {
      case '週':
        newData = chartDataWeek;
        break
      case '月':
        newData = chartDataMonth;
        break
      case '年':
        newData = chartDataYear;
        break
    }
    if (newData === null) return

    commit('SET_CHART_TYPE', chartType)
    commit('SET_CHART_DATA', newData)
  }
}

// mutations
const mutations = {
  SET_CHART_TYPE(state, chartType) {
    state.chartType = chartType
  },
  SET_CHART_DATA(state, chartData) {
    state.chartData = chartData
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
