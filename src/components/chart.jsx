import  React from "react";
import Chart from "./ChartData";
import  "./chart.css";
import ChartLine from "./chartline";


// Test({data, place, totalCases})
function Test(props) {
    console.log('data : ', props.data) ;
   
          return(
       <div className="Charts">
            <h1>{props.place}</h1>
            <div className="chart">
            <Chart  data2={props.data} />
            <ChartLine   data2={props.data}/>
            </div>
        
       </div>
    )
}

export default Test;