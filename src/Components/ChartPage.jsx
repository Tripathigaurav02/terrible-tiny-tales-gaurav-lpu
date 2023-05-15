import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HistogramChart from './Histogram';
import './ChartPage.css';

const ChartPage = () => {
  const location = useLocation();
  const [freq, setfreq] = useState({});
  const [histogramData, SetHisData] = useState([]);

  useEffect(() => {
    if (location.state && location.state.data) {
      wordfreq(location.state.data);
    }
  }, [location.state]);

  const wordfreq = (result) => {
    let words = result.replace(/[^a-zA-Z\s]/g, ' ').split(/\s+/);
    let freq = {};
    words.forEach(function (word) {
      if (!freq[word]) {
        freq[word] = 0;
      }
      freq[word] += 1;
    });

    setfreq(freq);
    SetHisData(createHisData(freq));
    renderfreq(freq);
  };

  const renderfreq = (freq) => {
    const entries = Object.entries(freq);
    const sort = entries.sort((a, b) => b[1] - a[1]);
    const top = sort.slice(0, 20);

    top.forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
  };

  const createHisData = (freq) => {
    const data = [];
    const sort = Object.entries(freq).sort((a, b) => b[1] - a[1]);
    const top = sort.slice(0, 20);
    top.forEach(([word, Top20_words]) => {
      data.push({ word, Top20_words });
    });
    return data;
  };

  return (
   
      <div className="glasmorphosis-box">
        <HistogramChart data={histogramData} />
      </div>
  
  );
};

export default ChartPage;
