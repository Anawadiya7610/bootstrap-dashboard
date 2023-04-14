import React from 'react'
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip,Legend} from 'recharts';
function LineCharts() {
    const Array = [
        {
        name:'January',
        Sales:25,
        Products :65,
    },
        {
        name:'Febuary',
        Sales:45,
        Products :50,
    },
        {
        name:'March',
        Sales:15,
        Products :80,
    },
        {
        name:'April',
        Sales:80,
        Products :55,
    },
        {
        name:'June',
        Sales:30,
        Products :90,
    },
        {
        name:'July',
        Sales:82,
        Products :30,
    },
]

  return (
    <div>
      <ResponsiveContainer width={"100%"} aspect={3}>
        <LineChart data={Array} width={500} height={500} margin={{top:5,right:15,bottom:5,left:2,}}>
        <XAxis dataKey={"name"} />
        <YAxis/>
        <Tooltip/>
        <Legend/>
          <Line  type="monotone" dataKey={"Sales"} stroke="pink" activeDot={{r:5}} BackgroundColor="blue"/> {/*r== radius*/}
          <Line type="monotone" dataKey={"Products"} stroke="green"  activeDot={{r:5}} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineCharts
