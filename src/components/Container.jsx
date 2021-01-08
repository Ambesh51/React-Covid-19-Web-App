import React, { useEffect, useState } from "react";
import "./Container.css";
import Result from "./Result";
import Test from "./chart";

function App() {

    const [Place, SetPlace] = useState("");
  
    const [Country, SetCountry] = useState([]);

    async function worldDetails() {
        const url = "https://coronavirus-19-api.herokuapp.com/countries/World";
        fetch(url)
            .then(response => {
                console.log('res', response);

                return response.json();

            })
            .then(data => {
                console.log('data', data);
                SetCountry([data]);
               
               
            })
            .catch(err => {
                console.log('err', err);

            })
    }

    function handleChange(e) {
        // e.preventDefault();

        //console.log('country',Country);

        e.preventDefault();
        // SetPlace({[e.target.name]:[e.targets.value]})

        SetPlace(e.target.value); //india -> string
    }

    function fetchAPI(e) {
        e.preventDefault();
        const Country = Place;
        //console.log('country',Country);
        const url = "https://coronavirus-19-api.herokuapp.com/countries/" + Country;
        fetch(url)
            .then(response => {
                console.log('res', response);

                return response.json();

            })
            .then(data => {
                SetCountry([data]);
                SetPlace("") ;
            })
            .catch(err => {
                console.log('err', err);
            })
    }

    console.log('result', Place);
    console.log('place', Place)

   

    const chartJsx=Country.map(item=>
        (<Test data={Country[0]} place={item.country} totalcases={item.cases}
                deaths={item.deaths}
    />))
    // console.log('place', Place);

    useEffect(() => {
        worldDetails();
    }, []);

    return (
        <div className="SearchBar">
            <input type="text" name="Country" id="uniqueID"
                value={Place} placeholder="Enter Country Name"
                onChange={handleChange}
            />
            <button onClick={fetchAPI}>
                Search
                </button>

            {
                Country.map(item =>
                    (<Result place={item.country} totalcases={item.cases}
                        deaths={item.deaths}
                    />))
            }
            {chartJsx}
            {/*   <Test/> */}
            {/* <Result/> */}

            <canvas id="myChart" arial-label="chart" role="img"></canvas>
        </div>
    );



}

export default App;





// function Container(){
//     return(
//         <div className="SearchBar">
//             <input type="tect" name="country" id="uniqueID"/>
//             <button >Search</button>
//             <Result/>
//         </div>
// );
// }