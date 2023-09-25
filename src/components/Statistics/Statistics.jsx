import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { getDataFromLS } from '../../utils/localstorage';
const Statistics = () => {

    const allData = useLoaderData();
  const [donateData, setDonateData] = useState([]);
  const [totalDonate, setTotalDonate] = useState(0);
  const [myDonate, setMyDonate] = useState(0);
  useEffect(() => {
    const lsData = getDataFromLS();
    const filteredData = allData.filter((data) =>
      lsData.includes(data.id.toString())
    );
    setDonateData(filteredData);
    let total=0;

    allData.map(data=>total+=parseFloat(data.price))
    setTotalDonate(total)

    let myDonatedTotal=0;
    donateData.map(data=>myDonatedTotal+=data.price)
    setMyDonate(myDonatedTotal)


  }, [allData,donateData]);
  console.log(totalDonate,myDonate);

// reachart sshart

    const data = [
        
        { name: 'Total Donation', value:totalDonate },
        { name: 'Your Donation', value: myDonate },
      ];
      
    const color = ['#00C49F', '#FF444A'];
   

  return (
    <div className="w-4/5 m-auto flex justify-center items-center" >
      <PieChart width={400} height={350}>
      <Pie
        dataKey="value"
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
      
        
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
