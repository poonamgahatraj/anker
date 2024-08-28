import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Bargraph1() {
    const data = {
        labels: ['JB Hi-Fi', 'Noel Leeming', 'Harvey Norman', 'Officeworks'], // X-axis labels
        datasets: [
            {
                label: '2022',
                data: [100, 40, 40, 250], // Corresponding Y-axis values for the first bar
                backgroundColor: '#577FBD', // Color for the first bar
                barThickness: 30,
            },
            {
                label: '2023',
                data: [150, 120, 98, 100], // Corresponding Y-axis values for the second bar
                backgroundColor: '#6E6E6E', // Color for the second bar
                barThickness: 30,
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
                max: 250, // Set the maximum value on Y-axis
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Retailer Account Breakdown (2022 vs 2023)',
            },
        },
    };

    return (
        <>
            <Bar data={data} options={options}  style={{ width: '600px', height: '450px' }} />
        </>
    );
}
