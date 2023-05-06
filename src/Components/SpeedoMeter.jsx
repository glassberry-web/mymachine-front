import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CountUp from 'react-countup';

const styles = {
  dial: {
    display: "inline-block",
    width: `300px`,
    height: `auto`,
    color: "white",
    padding: "2px"
  },
  title: {
    fontSize: "1.5rem",
    color: "#fff",   
    textAlign: "center",
    marginBottom : "1rem"
    
  }
};

const SpeedoMeter = ({ id, value, title }) => {
  return (
    <div style={{width:"200px", marginLeft:"3rem"}}>
     <CircularProgressbarWithChildren
            value={value}
            text={`${value}+`}
            strokeWidth={8}
            maxValue={1000}
            circleRatio={0.75}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              pathColor: `rgba(252, 192, 0, ${value / 100})`,
              strokeLinecap: "round",
              trailColor: "rgb(204, 204, 204)",
              textColor:"#ccc",
              backgroundColor: '#3e98c7',
            })}
          />
      <div style={styles.title}>{title}</div>
    </div>
  );
};

export default SpeedoMeter;