import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Battery Status",
    },
  },
};

const StatusChart = ({ chartData }) => {
  const labels = chartData.map((item) => new Date(item.timestamp).toLocaleDateString());
  const percentage = chartData.map((item) =>
    item.stateOfCharge !== null ? item.stateOfCharge : 0
  );

  const data = {
    labels,
    datasets: [
      {
        fill: false,
        label: 'Battery Charge Percentage',
        data: percentage,
        borderColor: "rgb(53,163,235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line data={data} options={options} />;
};

export default StatusChart;
