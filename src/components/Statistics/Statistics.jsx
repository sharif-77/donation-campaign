/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'; 
import { getDataFromLS } from '../../utils/localstorage';
const color = ['#00C49F', '#FF444A'];
const RADIAN = Math.PI / 180;
const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.7; 
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Statistics = () => {
  const [totalDonate, setTotalDonate] = useState(12);
  const [myDonate, setMyDonate] = useState(0);

  useEffect(() => {
    const lsData = getDataFromLS();
    setMyDonate(lsData.length); 
  }, []);

  const totalPercentage = totalDonate > 0 ? (totalDonate / totalDonate) * 100 : 0;
  const myPercentage = totalDonate > 0 ? (myDonate / totalDonate) * 100 : 0;

  const differencePercentage = totalPercentage - myPercentage;

  const data = [
    { name: 'Total Donation', value: differencePercentage },
    { name: 'My Donation', value: myPercentage },
  ];

  return (
    <div className="w-4/5 m-auto flex justify-center items-center">
      <PieChart width={400} height={380}>
        <Pie
          dataKey="value"
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={120}
          fill="#8884d8"
          label={CustomLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={color[index % color.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Statistics;
