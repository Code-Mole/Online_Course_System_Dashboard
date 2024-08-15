import BarChartIcon from "@mui/icons-material/BarChart";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// compactCard

function ConpactCard({ param, setExpanded }) {
    return (
      <div
        className="conpactCard"
        style={{
          backgroundColor: param.color.backGroundColor,
          boxShadow: param.color.boxShadow,
        }}
        onClick={setExpanded}
      >
        <div className="radialBar">
          <CircularProgressbar
            value={param.barValue}
            text={`${param.barValue}%`}
          />
          <span>{param.title}</span>
        </div>
        <div className="conpactCard__content">
          <div>
            <BarChartIcon />
          </div>
          <span>${param.value}</span>
          <span>Last 24 Hours</span>
        </div>
      </div>
    );
  }

  export default ConpactCard;