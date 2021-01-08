import  React from "react";
import {Bar} from "react-chartjs-2";

 function Chart(props) {
    console.log('Props 1: ', props) ;
    console.log('props cases', props.data2.country)
      const data={
        labels:['Cases','Deaths','Recovered'],
        datasets:[
            {
                label:props.data2.country+" total Deaths & Recovered",
                data: [props.data2.cases,props.data2.deaths,props.data2.recovered],
                backgroundColor:["red", "blue","lightgreen"],
                borderColor:["black","red","blue"],
                borderWidth:3

            }
            
        ], 


      
        option:{
            responsive: false,
            layout:{
                padding: {
                    left:40,
                   right:0,
                    top:10,
                    bottom:0,
                }
                
            }
                    
            
        },
        
    }
   
    return(
        
        <Bar data = {data}/>
    )
}

export default Chart;