"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from "chart.js";
import { Line } from "react-chartjs-2";
import { weeklyProgress } from "@/data/sampleData";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function ProgressChart() {
  return (
    <Line
      data={{
        labels: weeklyProgress.map((item) => item.day),
        datasets: [
          {
            label: "國文掌握率",
            data: weeklyProgress.map((item) => item.chinese),
            borderColor: "#0b6b91",
            backgroundColor: "#0b6b91",
            tension: 0.35
          },
          {
            label: "英文掌握率",
            data: weeklyProgress.map((item) => item.english),
            borderColor: "#27917f",
            backgroundColor: "#27917f",
            tension: 0.35
          }
        ]
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom" },
          title: { display: false }
        },
        scales: {
          y: { min: 30, max: 100, ticks: { callback: (value) => `${value}%` } }
        }
      }}
    />
  );
}
