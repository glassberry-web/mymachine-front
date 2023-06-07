import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimatedProgreessProvider";
import { easeQuadInOut } from "d3-ease";
import ChangingProgressProvider from "./ChangingProgressProvider";
import CountUp from 'react-countup';

const styles = {
  // dial: {
  //   display: "inline-block",
  //   width: `300px`,
  //   height: `auto`,
  //   color: "white",
  //   padding: "2px"
  // },
  title: {
    fontSize: "1.5rem",
    color: "#fff",   
    textAlign: "center",
    marginBottom : "1rem"
    
  }
};

const SpeedoMeter = ({ id, value, title }) => {
  return (
    <div className="speed" style={{width:"200px", marginLeft:"3rem"}}>
     {/* <CircularProgressbar
            value={value}
            minValue={1}
            text={`${value}%`}
            strokeWidth={8}
            maxValue={1000}
            circleRatio={0.75} */}
            {/* // styles={buildStyles({ */}
            {/* //   rotation: 1 / 2 + 1 / 8,
            //   transition: "stroke-dashoffset 0.5s ease",
            //   transitionDuration: '0.5s',
            //   pathTransition: 'none',
            //   pathColor: `rgba(252, 192, 0, ${value / 100})`,
            //   strokeLinecap: "round",
            //   trailColor: "rgb(204, 204, 204)",
            //   textColor:"#ccc",
            //   backgroundColor: '#3e98c7',
            //   transform: "translate(-50%, -50%)",
            //   willChange: "transform" */}
            {/* // })} */}
         
          {/* // /> */}
          <ChangingProgressProvider values={[0, value, value + 1]}       
      >
        {value => {      
          return (
            <CircularProgressbar
              value={value}
              text={`${value}`}
              strokeWidth={8}
             maxValue={1000}
             circleRatio={0.75}
              /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
              styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              // transition: "stroke-dashoffset 0.5s ease",
              // transitionDuration: '0.5s',
              pathColor: `rgba(252, 192, 0, ${value / 100})`,
                 strokeLinecap: "round",
                 trailColor: "rgb(204, 204, 204)",
                 textColor:"#ccc",
                 backgroundColor: '#3e98c7',
            
            })}
            />
          );
        }}
      </ChangingProgressProvider>
      <div className="speedtitle" style={styles.title}>{title}</div>
    </div>
  );
};

export default SpeedoMeter;