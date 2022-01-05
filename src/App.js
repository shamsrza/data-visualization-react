import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

import { Line } from "react-chartjs-2";

const data = {
  labels: ["Today", "2022", "2024", "2026", "2028", "2030"],
  datasets: [
    {
      label: "First dataset",
      data: [
        { x: "Today", y: 70, status: "A" },
        { x: "2022", y: 65, status: "B" },
        { x: "2024", y: 60, status: "C" },
        { x: "2026", y: 50, status: "D" },
        { x: "2028", y: 35, status: "E" },
        { x: "2030", y: 15, status: "F" }
      ],
      fill: false,
      pointRadius: 5,
      pointBackgroundColor: "white",
      pointBorderColor: "black",
      tension: 0.4,
      backgroundColor: "transparent",
      borderColor: "#17357a"
    },
    {
      label: "Second dataset",
      data: [
        { x: "Today", y: 60, status: "G" },
        { x: "2022", y: 50, status: "H" },
        { x: "2024", y: 40, status: "I" },
        { x: "2026", y: 30, status: "J" },
        { x: "2028", y: 20, status: "K" },
        { x: "2030", y: 10, status: "     L" }
      ],
      fill: true,
      pointRadius: 5,
      pointBackgroundColor: "white",
      pointBorderColor: "black",
      tension: 0.4,
      backgroundColor: "#dcdee0",
      borderColor: "#dcdee0"
    }
  ]
};

export default function App() {
  const [lineData, setLineData] = useState([]);

  const updateChartOne = () => {
    setLineData(
      (data.datasets = [
        {
          label: "First dataset",
          data: [
            { x: "Today", y: 70, status: "A" },
            { x: "2022", y: 65, status: "B" },
            { x: "2024", y: 60, status: "C" },
            { x: "2026", y: 50, status: "D" },
            { x: "2028", y: 35, status: "E" },
            { x: "2030", y: 15, status: "F" }
          ],
          fill: false,
          pointRadius: 5,
          pointBackgroundColor: "white",
          pointBorderColor: "black",
          tension: 0.4,
          backgroundColor: "transparent",
          borderColor: "#17357a"
        },
        {
          label: "Second dataset",
          data: [
            { x: "Today", y: 60, status: "G" },
            { x: "2022", y: 50, status: "H" },
            { x: "2024", y: 40, status: "I" },
            { x: "2026", y: 30, status: "J" },
            { x: "2028", y: 20, status: "K" },
            { x: "2030", y: 10, status: "L" }
          ],
          fill: true,
          pointRadius: 5,
          pointBackgroundColor: "white",
          pointBorderColor: "black",
          tension: 0.4,
          backgroundColor: "#dcdee0",
          borderColor: "#dcdee0"
        }
      ])
    );
  };

  const updateChartTwo = () => {
    setLineData(
      (data.datasets = [
        {
          label: "First dataset",
          data: [
            { x: "Today", y: 60, status: "A" },
            { x: "2022", y: 55, status: "B" },
            { x: "2024", y: 50, status: "C" },
            { x: "2026", y: 40, status: "D" },
            { x: "2028", y: 25, status: "E" },
            { x: "2030", y: 5, status: "F" }
          ],
          fill: false,
          pointRadius: 5,
          pointBackgroundColor: "white",
          pointBorderColor: "black",
          tension: 0.4,
          backgroundColor: "transparent",
          borderColor: "#17357a"
        },
        {
          label: "Second dataset",
          data: [
            { x: "Today", y: 50, status: "G" },
            { x: "2022", y: 40, status: "H" },
            { x: "2024", y: 30, status: "I" },
            { x: "2026", y: 20, status: "J" },
            { x: "2028", y: 10, status: "K" },
            { x: "2030", y: 0, status: "L" }
          ],
          fill: true,
          pointRadius: 5,
          pointBackgroundColor: "white",
          pointBorderColor: "black",
          tension: 0.4,
          backgroundColor: "#dcdee0",
          borderColor: "#dcdee0"
        }
      ])
    );
    //console.log(data.datasets);
  };

  const updateChartThree = () => {
    setLineData(
      (data.datasets = [
        {
          label: "First dataset",
          data: [
            { x: "Today", y: 60, status: "A" },
            { x: "2022", y: 45, status: "B" },
            { x: "2024", y: 10, status: "C" },
            { x: "2026", y: 20, status: "D" },
            { x: "2028", y: 40, status: "E" },
            { x: "2030", y: 50, status: "F" }
          ],
          fill: false,
          pointRadius: 5,
          pointBackgroundColor: "white",
          pointBorderColor: "black",
          tension: 0.4,
          backgroundColor: "transparent",
          borderColor: "#17357a"
        },
        {
          label: "Second dataset",
          data: [
            { x: "Today", y: 10, status: "G" },
            { x: "2022", y: 30, status: "H" },
            { x: "2024", y: 45, status: "I" },
            { x: "2026", y: 55, status: "J" },
            { x: "2028", y: 15, status: "K" },
            { x: "2030", y: 25, status: "L" }
          ],
          fill: true,
          pointRadius: 5,
          pointBackgroundColor: "white",
          pointBorderColor: "black",
          tension: 0.4,
          backgroundColor: "#dcdee0",
          borderColor: "#dcdee0"
        }
      ])
    );
    //console.log(data.datasets);
  };

  return (
    <div className="container">
      <div className="data-graph">
        <h1 className="title1">Visualization</h1>
        <div className="content">
          <div className="buttons">
            <button className="buttons__btn" onClick={updateChartOne}>
              1
            </button>
            <button className="buttons__btn" onClick={updateChartTwo}>
              2
            </button>
            <button className="buttons__btn" onClick={updateChartThree}>
              3
            </button>
          </div>
          <div className="chart">
            <Line
              id="myChart"
              data={data}
              width={"100%"}
              height={"100%"}
              options={{
                layout: {
                  padding: {
                    top: 50
                  }
                },
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                  yAxes: [
                    {
                      gridLines: {
                        display: false
                      },
                      ticks: {
                        beginAtZero: true,
                        drawOnChartArea: false,
                        fontColor: "black"
                      }
                    }
                  ],
                  xAxes: [
                    {
                      gridLines: {
                        display: false
                      },
                      ticks: {
                        beginAtZero: true,
                        drawOnChartArea: false
                      }
                    }
                  ]
                },
                legend: {
                  display: false
                }
              }}
              plugins={[
                //     {
                //       id: "legendMargin",
                //       beforeInit(chart, legend, options) {
                //         console.log(chart.legend.fit);
                //         const fitValue = chart.legend.fit;
                //         chart.legend.fit = function fit() {
                //           fitValue.bind(chart.legend)();
                //           return (this.height += 30);
                //         };
                //       }
                //     },

                {
                  id: "lineDataLabels",
                  afterDatasetsDraw(chart, args, options) {
                    const { ctx } = chart;
                    ctx.save();
                    ctx.font = "18px Arial sans-serif";
                    ctx.fillStyle = "black";

                    for (let x = 0; x < chart.data.datasets.length; x++) {
                      for (
                        let i = 0;
                        i < chart.data.datasets[x].data.length;
                        i++
                      ) {
                        //text lenth/width
                        const textWidth = ctx.measureText(
                          chart.data.datasets[x].data[i].status
                        ).width;

                        ctx.fillText(
                          chart.data.datasets[x].data[i].status,
                          chart.getDatasetMeta(x).data[i]._model.x -
                            textWidth / 2,
                          chart.getDatasetMeta(x).data[i]._model.y - 10
                        );
                      }
                    }

                    ctx.restore();
                  }
                }
              ]}
            />
          </div>
        </div>
      </div>
      <div className="data-table">
        <h1 className="title2">Data</h1>
        <table className="table noborder" id="table">
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
