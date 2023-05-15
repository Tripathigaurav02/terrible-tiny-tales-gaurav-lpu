import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { saveAs } from 'file-saver';
import './HistogramChart.css';

const HistogramChart = ({ data }) => {
  const exportData = () => {
    const csvData = data.map(item => `${item.word},${item.Top20_words}`).join('\n');
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'chart_data.csv');
  };

  return (
    <div className="chart-container">
      <div className="export-button-container">
        <button className="export-button" onClick={exportData}>Export</button>
      </div>
      <BarChart width={1000} height={400} data={data} barCategoryGap="0%">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="word" label={{ value: '', position: 'insideBottom', dy: 0 }} />
        <YAxis label={{ value: 'Frequency', angle: -90, position: 'insideLeft', dy: 30 }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Top20_words" fill="#3179ff" label={null} />
      </BarChart>
    </div>
  );
};

export default HistogramChart;
