import React, {useState, useEffect} from 'react';
import axios from 'axios';
import LoadingSign from '../loading/loading.component';
import NativeSelects from '../filter/filter.component';
import { HomeContainer } from './home.styles';
import { Bar, Doughnut, Pie} from 'react-chartjs-2';
import {Link} from 'react-router-dom';


const Home = () => {
     const [result, setResults] = useState([]);
     const [filter, setFilter] = useState('');
     const [isLoading, setIsLoading] = useState(false);

       useEffect(() => {
           getData()
       }, [filter])

       const getData = async () => {
            setIsLoading(true)
            const res = await axios.post(`https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub`, {
                "angular_test": "angular-developer"
               }) 
            if (res.status === 200)  {
                setResults(res.data)
            }
            setIsLoading(false)
            }

      const handleChange = (e) => {
          setResults([])
          setIsLoading(false)
          setFilter(e.target.value)
      }
            
      const city = result.filter((l) => l.City === filter)

      console.log(city)
      let arraySales = city.map((g) => parseInt(g.Sales))
      let arraySum = city.map((g) => parseInt(g.Profit))
      console.log(arraySum)
      let summedArray = arraySales.reduce((total, amount) => total + amount, 0);
      let summedProfit = arraySum.reduce((total, amount) => total + amount, 0)  

    return (
      <HomeContainer>
      <div className='next'>
          <NativeSelects handleChange={handleChange} filter={filter}/>
           <Link to='/segment' className='link'>Next</Link>
      </div>
      {/* <Link to='/' */}
      <div className='container'>
      <br />
      {!isLoading ? null : <LoadingSign />}
      <Bar
        data={{
          labels:  [filter],
          datasets: [
            {
              label: `Total Sales made in ${filter} is ${summedArray}`,
              backgroundColor: ['rgb(192,57,49)', 'rgb(192,57,49)', 'rgb(192,57,49)'],
              data: [summedArray],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Sales state in ${filter}` },
          
        }}
      />
      <br />
      <Bar
        data={{
          labels:  [filter],
          datasets: [
            {
              label: `Total Profit made in ${filter} is ${summedProfit}`,
              backgroundColor: ['rgb(192,57,49)',  'rgb(192,57,49)', 'rgb(192,57,49)'],
              data: [summedProfit],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Sales state in ${filter}` },
        }}
      />
        </div>
        </HomeContainer>
    )
}

export default Home;

