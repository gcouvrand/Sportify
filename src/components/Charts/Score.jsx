import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import PropTypes from "prop-types";

/**
 *  Create a graph of the user's score
 *
 * @class
 * @param {number} todayScore - the data we need to calculate the user's score
 * @returns user's score graph
 */

export default class Score extends React.Component {
  render() {
    const { todayScore } = this.props;
    const data = [
      { value: todayScore, fillColor: "#FF0101" },
      { value: 1 - todayScore, fillColor: "transparent" },
    ];

    return (
      <div className="score-block">
        <h3 className="score-title">Score</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={730} height={250}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={80}
              startAngle={90}
              endAngle={450}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fillColor}
                  cornerRadius="50%"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <span className="score-text">
          <p className="score-value">{`${todayScore * 100}%`}</p> <br />{" "}
          <p>de votre</p> <br /> <p>objectif</p>
        </span>
      </div>
    );
  }
}

Score.propTypes = {
  todayScore: PropTypes.number,
};
