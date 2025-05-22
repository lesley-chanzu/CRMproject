import React from 'react'
import { useState } from 'react'

export const AlertSystem = ({alerts}) => {
    const [visibleAlerts, setVisibleAlerts] = useState(alerts);

    const removeAlert = (id) => {
        setVisibleAlerts(visibleAlerts.filter(alert => alert.id !== id))
    };

    // Function to get the color based on severity
    // This function can be customized to return different colors based on severity of the losses being made
    const getSeverityColor = (severity) => {
        switch (severity) {
            case 'low' :
                return 'bg-green-100 text-green-800';
                case 'medium' :
                    return 'bg-yellow-100 text-yellow-800';
                    case 'high' :
                        return 'bg-red-100 text-red-800';
                        default:
                            return 'bg-purple-100 text-purple-800';
        }
    };

    return (
        <div>
            <h2 className='text-lg font-semibold mb-4'>Alerts</h2>
            <div className='space-y-4'>
                {visibleAlerts.map((alert) => (
                    <div key={alert.id} className={`p-4 rounded-md shadow-md ${getSeverityColor(alert.severity)}`}>
                        <div className='flex justify-between items-center'>
                            <div>
                                <h3 className='font-semibold'>{alert.title}</h3>
                                <p>{alert.message}</p>
                            </div>
                            <button onClick={() => removeAlert(alert.id)} className='text-red-500 hover:text-red-700'>Dismiss</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

