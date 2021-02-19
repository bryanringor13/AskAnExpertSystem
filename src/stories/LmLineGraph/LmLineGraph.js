import React from "react";
import LineChart from "react-svg-line-chart"
import { Typography } from '@material-ui/core';
import "./style.css";
export const LmLineGraph = ({ state, pointsOnHover }) => {

    state = {
        activePoint: null,
    }
 
  const  handlePointHover = (activePoint, e) => {
        this.setState({activePoint})
    }
    const data = []
    console.log(data);
    for (let x = 1; x <= 10; x++) {
        data.push({ x: x, y: Math.floor(Math.random() * (100)) })
    }
 

        return (
          <div className="graphCover">
            <LineChart
            data={data.map((point, i) => ({...point, active: point.x === state.activePoint ? true : false}))}
            pointsOnHover={handlePointHover}
            pointsVisible={false}
            pathColor="rgba(101,90,155,0.91)"
            labelsVisible={false}
            gridVisible={false}
            pathWidth={4}
            pathSmoothing={2}
            gridWidth={5}
   
            />
            <Typography className="textLabel" variant="h6">
                Time
                </Typography>
                </div>
            );
        };
        