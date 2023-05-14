import React from 'react';
import Histogram from './Histogram';
import './App.css';

function App() {
  const [histogramData, setHistogramData] = React.useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://www.terriblytinytales.com/test.txt');
    const text = await response.text();
    const words = text.toLowerCase().replace(/[^\w\s]/gi, '').split(/\s+/);
    const wordMap = {};
    words.forEach((word) => {
      if (!wordMap[word]) {
        wordMap[word] = 0;
      }
      wordMap[word]++;
    });
    const sortedData = Object.entries(wordMap).sort((a, b) => b[1] - a[1]).slice(0, 20);
    setHistogramData(sortedData);
  };

  const handleExport = () => {
    const csv = 'Word,Count\n' + histogramData.map((d) => d.join(',')).join('\n');
    const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const csvURL = window.URL.createObjectURL(csvData);
    const tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', 'histogram_data.csv');
    tempLink.click();
  };

  return (
    <div className="App">
      <header className="App-header">
        {histogramData.length > 0 ? (
          <>
            <Histogram data={histogramData} />
            <button onClick={handleExport}>Export</button>
          </>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </header>
      <div className="animated-bg"></div>
    </div>
  );
}

export default App;
