import ReactSpeedometer from "react-d3-speedometer";
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
    color: "#000",   
    textAlign: "center",
    marginBottom : "1rem"
    
  }
};

const SpeedoMeter = ({ id, value, title }) => {
  return (
    <div style={styles.dial}>
      <ReactSpeedometer
        maxValue={120}
        minValue={0}
        height={190}
        width={290}
        value={value}
        needleTransition="easeQuadIn"
        needleTransitionDuration={1000}
        needleColor="red"
        startColor="green"
        segments={10}
        endColor="blue"
      />
      <div style={styles.title}>{title}</div>
    </div>
  );
};

export default SpeedoMeter;