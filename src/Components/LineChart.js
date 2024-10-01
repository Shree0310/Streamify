import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto"

const LineChart = () =>{
    const userGrowthData ={
        labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: 'Total Users',
        data: [500, 600, 700, 900, 1200, 1500, 1700, 1900, 2100, 2300, 2600, 2900],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
      {
        label: 'Active Users',
        data: [400, 450, 500, 600, 800, 1000, 1100, 1300, 1400, 1500, 1700, 2000],
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.1,
      }
    ]
    };

    const options = {
        responsive: true,
        scales: {
          x: {
            grid: { display: false },
          },
          y: {
            beginAtZero: true,
          }
        }
      };

    return <Line data= {userGrowthData} options={options} />
} 

export default LineChart;