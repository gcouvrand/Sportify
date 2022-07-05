import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

/**
 *  Create a graph of the user's average sessions
 *
 * @class
 * @param {Object[]} averageSessions - Array with details about average sessions
 * @returns user's average sessions graph
 */

export default class AverageSession extends React.Component {
  render() {
    const { averageSessions } = this.props;
    const data = averageSessions;

    return (
      <div className="average-session-block">
        <h3 className="average-session-title">Durée moyenne des sessions</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width="{730}"
            height={200}
            data={data}
            margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 15, fill: "rgba(255, 255, 255, 0.5)" }}
            />
            <YAxis hide={true} />
            <Tooltip cursor={{ opacity: "0.5" }} content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="rgba(255, 255, 255, 0.7)"
              dot={false}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

/**
 * Customizes the tooltip
 *
 * @param {payload} the data we want to display
 * @returns a customized tooltip
 */

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className="background-average-tooltip">
        <p className="text-average-tooltip">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

AverageSession.propTypes = {
  averageSessions: PropTypes.array,
};
