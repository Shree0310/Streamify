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
    return (
      <div className="w-full h-auto p-4">
        <div className="flex justify-center h-[200px]  md:h-[500px] lg:h-[804px] lg:w-[800px] w-[300px] overflow-hidden">
          <Pie data={revenueDistributionData} options={options}/>
          </div>
      </div>
    )
}

export default PieChart;