import  React from "react";
import {Line} from "react-chartjs-2";

 function ChartLine(props) {
    console.log('Props 1: ', props) ;
    console.log('props cases', props.data2.country)
      const data={
        labels:['Today-Cases','Today-Death','Active'],
        datasets:[
            {
                label:props.data2.country+" Positive Recovery",
                data: [props.data2.todayCases,props.data2.todayDeaths,props.data2.active],
                backgroundColor:["green", "red","yellow"],
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
        
        <Line data = {data}/>
    )
}

export default ChartLine;