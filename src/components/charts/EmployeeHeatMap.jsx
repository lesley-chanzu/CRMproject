import React from 'react'
import { HeatMapGrid } from 'react-grid-heatmap';

export const EmployeeHeatMap = ({ data }) => {
 // Function to generate the heatmap data
    const yLabels = data.map(emp => emp.name);
    const xLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const heatmapData = data.map(emp => emp.dailyEfficiency);
  return (
    <div className='mt-4'>
        <HeatMapGrid 
        data={heatmapData}
        xLabels={xLabels}
        yLabels={yLabels}
        cellRender={(x, y, value) => (
            <div className={`w-full h-full flex items-center justify-center text-xs 
                ${value > 0.8 ? 'bg-green-500' : value > 0.6 ? 'bg-green-300' : value > 0.4 ? 'bg-yellow-300' : 'bg-red-500'}
                `}>
                    {Math.round(value * 100)}%
                </div>
        )}
        xLabelsStyle={() => ({
            fontSize: '0.75rem',
            color: '#6B7280',
        })}
        yLabelsStyle={() => ({
            fontSize: '0.75rem',
            color: '#6B7280',
        })}
        cellStyle={(_x, _y, ratio) => ({
            background: `rgba(74, 222, 128, ${ratio})`,
            border: '1px solid #E5E7EB',
        })}
        cellHeight='2.5rem'
        xLabelsPos='bottom'
        onClick={(x, y) => alert(`Employee: ${xLabels[x]}, Day: ${yLabels[y]}, Efficiency: ${heatmapData[x][y]}`)}
        />
        <div className='felx justify-between mt-2 text-xs text-gray-500'>
            <span className='mr-2'>Low Efficiency /</span>
            <span>High Efficiency</span>
        </div>
    </div>
  )
}

