import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const ProfitLossChart = ({data}) => {
    // Function to generate the profit and loss chart data
    const chartData = {
        labels: data.months,
        datasets: [
            {
                label: 'Revenue',
                data: data.revenue,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.3,
                fill: true 
            },
            {
                label: 'Expenses',
                data: data.expenses,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                tension: 0.3,
                fill: true
            },
            {
                label: 'Net Profit',
                data: data.netProfit,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                tension: 0.3,
                fill: true
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            tooltip: {
                callbacks: {
                    footer: (tooltipItems) => {
                        let rev = null;
                        let exp = null;
                        tooltipItems.forEach(item => {
                            if(item.dataset.label === 'Revenue') rev = item.raw;
                            if(item.dataset.label === 'Expenses') exp = item.raw
                        });
                        if(rev !== null && exp !== null) {
                            const profit = rev -exp;
                            return `Profit: ${profit.toLocaleString()}`
                        }
                        return '';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => `${value.toLocaleString()}`,
                }
            }
        }
    };

    return (
        <div className='mt-4'>
            <Line data={chartData} options={options} />
        </div>
    )
}

