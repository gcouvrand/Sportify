import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

export default class Performance extends React.Component {
  render() {
    const {kind, data} = this.props.performance;
    let globalData = [];

    for (let i = 0; i < data.length; i++) {
      globalData.splice(0,0, {
        category: kind[i+1],
        newData: data[i].value
      })
    }

    return (
      <div className="performance-block"> 
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="60%" data={globalData}>
            <PolarGrid radialLines={false}/>
            <PolarAngleAxis dataKey="category" stroke="white" tickLine={false}/>
            <Radar name="" dataKey="newData" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}