import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Bargraph (){
    const data = {
        labels: ['JB Hi-Fi', 'Noel Leeming', 'Harvey Norman', 'Officeworks'], // X-axis labels
        datasets: [
          {
            label: '( account number )',
            data: [100, 50, 100, 250], // Corresponding Y-axis values
            backgroundColor: '#577FBD',
            barThickness: 40,
          },
        ],
      };

      const options = {
        responsive: true,
       
        scales: {
            x: {
                grid: {
                  display: false, // Hide vertical grid lines
                },
              },
          y: {
            beginAtZero: true, // Ensure Y-axis starts at 0
            title: {
                display: true,
                text: '(Numbers based on retailers account)', // Y-axis label
              },
            ticks: {
              stepSize: 50, // Set intervals for Y-axis values
            },
            min: 0,
            max: 300, // Set the maximum value on Y-axis
          },
        },
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Retailer Account Breakdown',
          },
        },
      };

    return(
        <>
        <Bar data={data} options={options} style={{ width: '600px', height: '400px' }}/>
        </>
    )
}