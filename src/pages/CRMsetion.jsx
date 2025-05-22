import { useState, useEffect } from 'react'
import {
    AlertSystem
} from '../components/charts/AlertSystem'


const CRMsetion = () => {
    const [financialData, setFinancialData] = useState(null);
    const [employeeData, setEmployeeData] = useState([]);
    const [alerts, setAlerts] = useState([]);

    // Simulate API cals
    useEffect(() => {
        // Fetch financial data
        fetchFinancialData();
        fetchEmployeeData();
        const interval = setInterval(checkForAlerts, 30000);
        return () => clearInterval(interval);
    }, []);

    const fetchFinancialData = async () => {
        // Simulate fetching financial data/ Replace with actual API call
        const mockData = {
            revenue: [12000, 19000, 15000, 18000, 21000, 19000],
      expenses: [8000, 12000, 14000, 11000, 9000, 13000],
      netProfit: [4000, 7000, 1000, 7000, 12000, 6000],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        };
        setFinancialData(mockData);
        checkForAlerts();
    };

    const fetchEmployeeData = async () => {
        // Simulate fetching employee data/ Replace with actual API call
        const mockEmployeeData = [
           {id:1, name:'Mo Salah', efficiency: 0.8, dailyEfficiency: [0.7, 0.9, 0.6, 0.85, 0.75]},
              {id:2, name:'Sadio Mane', efficiency: 0.75, dailyEfficiency: [0.6, 0.8, 0.7, 0.9, 0.85]},
                {id:3, name:'Virgil Van Dijk', efficiency: 0.9, dailyEfficiency: [0.8, 0.85, 0.95, 0.9, 0.8]},
                {id:4, name:'Alisson Becker', efficiency: 0.85, dailyEfficiency: [0.75, 0.8, 0.9, 0.85, 0.8]},
                {id:5, name:'Trent Alexander-Arnold', efficiency: 0.8, dailyEfficiency: [0.7, 0.75, 0.85, 0.8, 0.9]},
                {id:6, name:'Andrew Robertson', efficiency: 0.78, dailyEfficiency: [0.68, 0.72, 0.75, 0.8, 0.78]},
        ];
        setEmployeeData(mockEmployeeData);
        checkForAlerts();
    };

    const checkForAlerts = () => {
        const newAlerts = [];
        //Simulate checking for alerts(financial losses)
        if (financialData) {
            const lastMonthIndex = financialData.revenue.length - 1;
            if (financialData.revenue[lastMonthIndex] < financialData.expenses[lastMonthIndex]) {
                newAlerts.push({
                    id: Date.now(),
                    title: 'Financial Loss Alert',
                    message: `The company has incurred a financial loss in ${financialData.months[lastMonthIndex]}.`,
                    severity: 'high'
                });
            }
        }

        // Check for Low Productivity
        employeeData.forEach(employee => {
            const averageEfficiency = employee.dailyEfficiency.reduce((a, b) => a + b, 0) / employee.dailyEfficiency.length;
            if (averageEfficiency < 0.7) {
                newAlerts.push({
                    id: Date.now() + Math.random(),
                    title: `Low Productivity Alert for ${employee.name}`,
                    message: `${employee.name} has low productivity.`,
                    severity: 'medium'
                });
            }
        });
         if (newAlerts.length) setAlerts([...alerts, ...newAlerts]);
    }
   

  return (
    <div className='min-h-screen bg-gray-100 p-4 md:p-8'>
        <h1 className='text-2xl font-bold text-gray-900 mb-6 mt-16'>Company Performance Dashboard</h1>

        <AlertSystem alerts={alerts} />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
                <h2>Financial Overview</h2>
                {financialData ? (
                    <div>
                        <p>Total Revenue: ${financialData.revenue.reduce((a, b) => a + b, 0)}</p>
                        <p>Net Profit: ${financialData.netProfit.reduce((a, b) => a + b, 0)}</p>
                        <p>Expenses: ${financialData.expenses.reduce((a, b) => a + b, 0)}</p>
                    </div>
                ) : (
                    <p>Loading financial data...</p>
                )}
            </div>
        </div>
    </div>
  )
}

export default CRMsetion