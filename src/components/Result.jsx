import React from "react";
import  "./Result.css";

function Result(props){
    return(

        <div id="result">
            <h1>{props.place}</h1>
            <div id="totalcases">
                <h1>Total-Cases</h1>
               {props.totalcases}
            </div>
            
            <div id="totaldeaths">
                <h1>Total-Deaths</h1>
                {props.deaths}
            </div>
        </div>
    );

}

export default Result;