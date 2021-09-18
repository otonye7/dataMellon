import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import Charts from '../charts/charts.component';
import { Line, Bar, Pie } from 'react-chartjs-2';


const Home = () => {
     const [result, setResults] = useState([]);

       useEffect(() => {
           getData()
       }, [])

       const getData = async () => {
            const res = await axios.post(`https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub`, {
                "angular_test": "angular-developer"
               }) 
            if (res.status === 200)  {
                setResults(res.data)
              }
            }
      console.log(result)
      const city = result.filter((l) => l.City === 'Columbia')
      // var filtered = Object.values(profit).slice(0,100)
      console.log(city.map((g) => g.City))
  
    return (
      <div>
        <input />
      <Line
        data={{
          labels:  city.map((g) => g.City),
          datasets: [
            {
              label: 'Profit made between each states',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: result.map((l) => l.Profit),
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ` },
        }}
      />
        </div>
    )
}

export default Home;