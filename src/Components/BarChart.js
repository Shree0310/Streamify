import { Bar } from "react-chartjs-2";

const BarChart = () =>{
    const topFiveData = {
        labels: ['Song A', 'Song B', 'Song C', 'Song D', 'Song E'],
    datasets: [
      {
        label: 'Streams (in thousands)',
        data: [85, 78, 67, 50, 45],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
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

    return <Bar data={topFiveData} options={options} />
}

export default BarChart;