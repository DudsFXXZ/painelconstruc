import React from 'react';
import ReactECharts from 'echarts-for-react';
import { chartData } from '../lib/mock-data';

const ConstructionProgressChart: React.FC = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: chartData.labels,
      axisTick: { alignWithLabel: true },
      axisLabel: {
        color: '#9ca3af' // text-gray-400
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}%',
        color: '#9ca3af' // text-gray-400
      },
      splitLine: {
        lineStyle: {
          color: '#374151' // dark:border-gray-700
        }
      }
    },
    series: [
      {
        name: 'Progresso',
        type: 'bar',
        barWidth: '60%',
        data: chartData.data,
        itemStyle: {
          color: '#4f46e5' // indigo-600
        }
      }
    ]
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="font-bold text-lg mb-4">Andamento das Obras</h3>
      <ReactECharts option={option} style={{ height: '300px' }} />
    </div>
  );
};

export default ConstructionProgressChart;
