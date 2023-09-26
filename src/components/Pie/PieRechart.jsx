import React, { useEffect, useState } from 'react';
import { Cell, Pie, PieChart } from 'recharts';

const PieRechart = () => {
    const [donated, setDonated] = useState([])
    const [chartData, setChartData] = useState( )
    
    
    useEffect(() => {
        const donationList = JSON.parse(localStorage.getItem('donates'))
        setDonated(donationList)

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
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
          >
            
          <Cell fill='#FF444A'/>
          <Cell fill='#00C49F'/>
           
          </Pie>
        </PieChart>
        </div>
    );
};

export default PieRechart;