import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

/**
 *  Create a graph of the user's activity
 * 
 * @class
 * @param {Object[]} sessions - array with details about sessions
 * @returns user's activity graph
 */

export default class Activity extends React.Component {
  render() {
      const divStyle = {
        top: "-45px",
      };
      const {sessions} = this.props.activity;
      const data = []
      let i = 0;

      // We push the datas contained in sessions into a new array to get what we exactly want
      for (const item of sessions) {
        i++;
        data.push({
          calories: item.calories,
          day: i,
          kilogram: item.kilogram
        })
      }
          
      return (
        <div className="activity-block">
          <h2 className="graph-title">Activité quotidienne</h2>
          <ResponsiveContainer width={"100%"} height={320}>
            <BarChart width={250} height={100} data={data} barSize={12} barGap={12}>
              <Legend verticalAlign="top" align="right" iconType={"circle"} iconSize={"10"} wrapperStyle={divStyle}/>
              <CartesianGrid strokeDasharray="3 3"  vertical={false} horizontalPoints={[100, 200]}/>
              <XAxis dataKey="day" padding={{left: -25}} tickMargin={0} tick={{ fontSize: 15, fill: "#9B9EAC"}} tickLine={false}/>
              <YAxis dataKey="kilogram" orientation="right" axisLine={false} yAxisId="kg" tickLine={false} tickMargin={0}/>
              <YAxis dataKey="calories" hide={true} yAxisId="Kcal"/>
              <Tooltip cursor={{opacity:"0.5"}} content={<CustomTooltip />}/>
              <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} yAxisId="kg" name=" Poids (kg) "/>
              <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} yAxisId="Kcal" name=" Calories brûlées (kCal)"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )
    }
}

/**
 * Customizes the tooltip
 * 
 * @param {payload} the data we want to display 
 * @returns a customized tooltip
 */

const CustomTooltip = ({active, payload}) => {
  if (active && payload) {
    return (
      <div className="background-activity-tooltip">
        <p className="text-activity-tooltip">{`${payload[1].value}kg`}</p>
        <p className="text-activity-tooltip">{`${payload[0].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};