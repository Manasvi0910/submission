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
