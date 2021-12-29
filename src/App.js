import React from "react";
import "./style.scss";

import { Line } from "react-chartjs-2";

const data = {
  labels: ["Today", "2022", "2024", "2026", "2028", "2030"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

export default function App() {
  return (
    <div className="container">
      <div className="data-graph">
        <h1 class="title1">Visualization</h1>
        <div className="content">
          <div className="buttons">
            <button className="buttons__btn">1</button>
            <button className="buttons__btn">2</button>
            <button className="buttons__btn">3</button>
          </div>
          <div className="chart">
            <Line
              data={data}
              width={"100%"}
              options={{ maintainAspectRatio: false, responsive: true }}
            />
          </div>
        </div>
      </div>
      <div class="data-table">
        <h1 class="title2">Data</h1>
        <table class="table noborder" id="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">A</th>
              <th scope="col">B</th>
              <th scope="col">C</th>
              <th scope="col">D</th>
              <th scope="col">E</th>
              <th scope="col">F</th>
              <th scope="col">G</th>
              <th scope="col">H</th>
              <th scope="col">I</th>
              <th scope="col">J</th>
              <th scope="col">K</th>
              <th scope="col">L</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Button 1</th>
              <td>70</td>
              <td>65</td>
              <td>60</td>
              <td>50</td>
              <td>35</td>
              <td>15</td>
              <td>60</td>
              <td>50</td>
              <td>40</td>
              <td>30</td>
              <td>20</td>
              <td>10</td>
            </tr>
            <tr>
              <th scope="row">Button 2</th>
              <td>60</td>
              <td>55</td>
              <td>50</td>
              <td>40</td>
              <td>25</td>
              <td>5</td>
              <td>50</td>
              <td>40</td>
              <td>30</td>
              <td>20</td>
              <td>10</td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row">Button 3</th>
              <td>60</td>
              <td>45</td>
              <td>10</td>
              <td>20</td>
              <td>40</td>
              <td>50</td>
              <td>10</td>
              <td>30</td>
              <td>45</td>
              <td>55</td>
              <td>15</td>
              <td>25</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
