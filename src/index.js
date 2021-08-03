import React from "react";
import ReactDOM from "react-dom";
import Chart from "./components/Chart";

import "./styles.css";

class App extends React.Component {
  state = {
    chartData: {}
  };

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: ["Absence of OB", "Closeness", "Credibility"],
        datasets: [
          {
            label: "American Express",
            backgroundColor: "lightyellow",
            borderColor: "yellow",
            borderWidth: 1,
            data: [3, 5, 6, 7, 3, 5, 6, 7]
          },
          {
            label: "Mastercard",
            backgroundColor: "lightgreen",
            borderColor: "green",
            borderWidth: 1,
            data: [4, 7, 3, 6, 10, 7, 4, 6]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React &amp; Chart.js</h1>
        <Chart chartData={this.state.chartData} displayLegend={false} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
