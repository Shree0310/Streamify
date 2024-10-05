import { Bar } from "react-chartjs-2";

const BarChart = () =>{
    const topFiveData = {
        labels: ['Song A', 'Song B', 'Song C', 'Song D', 'Song E'],
    datasets: [
      {
        label: 'Streams (in thousands)',
        data: [85, 78, 67, 50, 45],
        backgroundColor: [
            "#f87171", // Red
            "#60a5fa", // Blue
            "#fbbf24", // Yellow
            "#34d399", // Green
            "#a78bfa"  // Purple
        ],
        borderColor: [
            "#b91c1c", // Dark Red
            "#2563eb", // Dark Blue
            "#d97706", // Dark Yellow
            "#059669", // Dark Green
            "#7c3aed"  // Dark Purple
        ],
        borderWidth: 2,
      }
    ]
    };

    const barOptions = {
            responsive: true,
            plugins: {
            legend: {
                display: true,
                labels: {
                color: "#4b5563", // Tailwind gray-600
                },
            },
        },   

        scales: {
          x: {
            ticks: {
              color: "#1f2937", // Tailwind gray-800
            },
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              color: "#1f2937", // Tailwind gray-800
            },
            grid: {
              color: "#e5e7eb", // Tailwind gray-200
            },
          },
        },
      };

    return (
        <div className="w-full h-auto p-4">
            <div className="h-[200px]  md:h-[500px] lg:h-[404px] lg:w-[800px] overflow-hidden">
                <Bar data={topFiveData} options={barOptions} />
            </div>
        </div>
    ) 
}

export default BarChart;