import React from "react";
import { Bar } from "react-chartjs-2";

function Chart(props) {
  return (
    <div className="chart">
      <Bar
        data={props.chartData}
        options={{
          responsive: true,
          legend: {
            position: "top"
          },
          title: {
            display: true,
            text: "Chart.js Bar Chart"
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }}
      />
    </div>
  );
}

console.log(<Bar />);
Chart.defaultProps = {
  displayTitle: true,
  displayLegend: false,
  legendPosition: "bottom"
};

export default Chart;
