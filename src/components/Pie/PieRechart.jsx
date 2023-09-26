import React, { useEffect, useState } from 'react';
import { Cell, Pie, PieChart } from 'recharts';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN); 



  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );

}

const PieRechart = () => {
    const [chartData, setChartData] = useState( )
    
    
    useEffect(() => {
        const donationList = JSON.parse(localStorage.getItem('donates'))

        const total = 12;
    const totalDonated = donationList ? donationList.length : 0 ;
    const remainingDonated = total - totalDonated
    const data = [
        {name: 'Donation' , value: totalDonated },
        {name: 'remaining', value: remainingDonated }
    ]
    setChartData(data)

   

    },[])   
    return (
        <div>
             <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            dataKey="value"
            nameKey="name"
            label={renderCustomizedLabel}
          >
            
          <Cell fill='#FF444A'/>
          <Cell fill='#00C49F'/>
           
          </Pie>
          
        </PieChart>
        </div>
    );
};

export default PieRechart;