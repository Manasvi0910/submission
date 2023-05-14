**https://manasvittt.netlify.app/********

# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Available Scripts
### `npm start`
### `npm test`
### `npm run build`

Other Libraries used for this Submission:
recharts: npm install recharts
file-saver: npm install file-saver

React Recharts is a charting library built for React.js. It allows you to create beautiful and interactive charts and graphs for your web applications. React Recharts is built on top of D3.js, a powerful data visualization library, and provides a simple and intuitive API for building complex charts with minimal coding. It supports various types of charts such as line, area, bar, scatter, pie, and more. Additionally, it offers a range of customization options such as colors, fonts, tooltips, animations, and responsiveness.

FileSaver.js is a JavaScript library that provides a simple way to save files from the client-side web applications. It allows you to create and save files in the user's local file system, without the need for server-side processing. This library is useful in scenarios where you want to download a file generated on the client-side, such as a PDF report or CSV file. FileSaver.js uses the HTML5 download attribute to trigger the file download process, and it works on all modern browsers. It supports various file formats such as text, CSV, JSON, PDF, and images. With FileSaver.js, you can easily create and download files with just a few lines of code.

****This Submission has been hosted on netlify!**
**https://manasvittt.netlify.app/********

**This Submission consists of main 3 files:
App.js, Histogram.js, App.css**

**Explaination of the code of App.js**
This is a React component that displays a histogram of word occurrences from a text file and provides the ability to export the data to a CSV file. Here is a breakdown of the code:

The first line imports the React library, which is used to create React components.

The second line imports a custom Histogram component from a file named Histogram.js. This component is responsible for rendering the histogram based on the data passed to it as a prop.

The third line imports a CSS file named App.css, which contains styling information for the component.

The App function is defined, which is the main React component. It returns a JSX element that represents the UI of the component.

The useState hook from the React library is used to define a state variable named histogramData and a function named setHistogramData that can update the state.

The handleSubmit function is defined, which is called when the user clicks the "Submit" button. This function fetches the text file from the specified URL and processes the contents of the file to generate a histogram of word occurrences. The histogram data is then sorted by frequency and limited to the top 20 most frequent words.

The handleExport function is defined, which is called when the user clicks the "Export" button. This function converts the histogram data to a CSV file and downloads it to the user's computer.

The return statement defines the JSX element that represents the UI of the component. The header element contains the histogram and the export button if there is histogram data available, or the submit button if there is no data available. The animated-bg div contains a CSS-animated background.

Finally, the App component is exported as the default export of the module so that it can be used by other components or modules.


**Code: **
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


**Explaination of the code of Histogram.js**
This is a React component that renders a bar chart using the recharts library based on the data passed to it as a prop. Here is a breakdown of the code:

The first line imports the React library, which is used to create React components.

The second line imports several components from the recharts library, including BarChart, Bar, XAxis, YAxis, CartesianGrid, and Tooltip. These components are used to render the bar chart.

The Histogram function is defined, which is a functional component that takes a prop named data.

The function returns a JSX element that represents the bar chart using the BarChart component from recharts. The width and height props are used to specify the dimensions of the chart. The data prop is used to specify the data for the chart.

The CartesianGrid component is used to render horizontal and vertical lines in the background of the chart.

The XAxis component is used to render the x-axis of the chart, which represents the words in the histogram data. The dataKey prop is set to "0", which corresponds to the first element of each data point in the data prop.

The YAxis component is used to render the y-axis of the chart, which represents the frequency of each word in the histogram data.

The Tooltip component is used to display a tooltip when the user hovers over a bar in the chart, showing the word and its frequency.

The Bar component is used to render the bars in the chart, with the dataKey prop set to "1", which corresponds to the second element of each data point in the data prop. The fill prop is used to set the color of the bars.

Finally, the Histogram component is exported as the default export of the module so that it can be used by other components or modules.

In summary, this component uses the recharts library to render a bar chart that displays the frequency of words in the histogram data passed to it as a prop.


**Code: **
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function Histogram({ data }) {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="0" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="1" fill="#8884d8" />
    </BarChart>
  );
}

export default Histogram;


**Explaination of the code of App.css:**
This is a CSS stylesheet defining styles for the HTML elements used in the React application.

.App is a CSS class selector that sets the text-align property of the element with this class to center.

button is a CSS element selector that sets styles for all button elements. It sets the font-size, margin, padding, background-color, border, color, cursor, and border-radius properties.

The :hover pseudo-class applies styles to the element when the mouse pointer is over it. In this case, it changes the background-color of the button element to a darker shade.

.animated-bg is a CSS class selector that sets styles for an element with this class. It positions the element in the top-left corner of the viewport, sets its width and height to 100% of the viewport, and sets its z-index to -1 so that it appears behind other elements. It also applies a linear gradient background using the background property, and sets its background-size and animation properties to create a scrolling effect using CSS animations.

@keyframes gradient is a CSS rule that defines an animation called gradient using the @keyframes at-rule. It defines three keyframes with different background-position values to create the scrolling effect of the animated-bg element. The animation property in .animated-bg applies this animation to the element.


**Code:**
.App {
  text-align: center;
}

button {
  font-size: 20px;
  margin: 20px;
  padding: 10px 20px;
  background-color: #008CBA;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #00557D;
}

.animated-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

