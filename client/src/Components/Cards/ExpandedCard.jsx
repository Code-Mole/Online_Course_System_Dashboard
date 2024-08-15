import React from 'react'
import ApexCharts from "apexcharts";
import CloseIcon from "@mui/icons-material/Close";

function ExpandedCard({ param, setExpanded }) {
 // expandedCard

    const data = {
      options: {
        chart: {
          type: "area",
          height: "auto",
        },
        dropShadow: {
          enable: false,
          enableOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: "#000",
          opacity: 0.35,
        },
        fill: {
          colors: ["#fff"],
          type: "gradient",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          colors: ["#fff"],
          width: 2,
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        grid: {
          show: true,
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2022-01-01T00:00:00:000Z",
            "2022-01-01T01:30:00:000Z",
            "2022-01-01T02:30:00:000Z",
            "2022-01-01T03:30:00:000Z",
            "2022-01-01T04:30:00:000Z",
            "2022-01-01T05:30:00:000Z",
            "2022-01-01T06:30:00:000Z",
          ],
        },
      },
    };
  
    return (
      <div
        className="expandedCard"
        style={{
          backgroundColor: param.color.backGroundColor,
          boxShadow: param.color.boxShadow,
        }}
      >
        <div>
          <CloseIcon onClick={setExpanded} />
        </div>
        <span>{param.title}</span>
        <div className="chart__container">
          <ApexCharts series={param.series} options={data.options} type="area" />
        </div>
        <span>Last 24 Hours</span>
      </div>
    );
  }

export default ExpandedCard