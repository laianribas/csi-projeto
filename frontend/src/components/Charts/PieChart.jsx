import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { pieChartDataCharts1, pieChartOptionsCharts1 } from 'variables/charts'

class PieChart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      chartData: [],
      chartOptions: {}
    }
  }

  componentDidMount() {
    this.setState({
      chartData: pieChartDataCharts1,
      chartOptions: pieChartOptionsCharts1
    })
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="pie"
        width="100%"
        height="100%"
      />
    )
  }
}

export default PieChart
