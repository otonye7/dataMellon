import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';


const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

const Home = () => {
    const [result, setResults] = useState([]);
    const [sales, setSales] = useState([]);
    const [city, setCity] = useState([]);

       useEffect(() => {
           getData()
       }, [])
       
       var sale = [];
       var cities = []

       const getData = async () => {
           try {
            const res = await axios.post(`https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub`, {
                "angular_test": "angular-developer"
               }) 
            if (res.status === 200)  {
                for (const dataObj of res.data) {
                  console.log(dataObj)
                  sale.push(parseInt(dataObj.Sales));
                  cities.push(dataObj.City)
                }
            }
           }
           catch(err) {
               console.log(err)
           }
       }

       console.log(sale)
       console.log(cities)
        


    return (
        <div className=''>
         
        </div>
    )
}

export default Home;