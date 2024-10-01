import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto"


const PieChart = () =>{
    const revenueDistributionData = {
        labels: ['Subscriptions', 'Ads', 'Merchandise', 'Sponsorships'],
    datasets: [
      {
        data: [50000, 30000, 15000, 5000],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }
    ]
    };
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        }
      };
    return <Pie data={revenueDistributionData} options={options}/>
}

export default PieChart;