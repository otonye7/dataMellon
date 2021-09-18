import React, {useState, useEffect} from 'react';
import axios from 'axios';
import LoadingSign from '../loading/loading.component';
import NativeSelects from '../segment-form/segment-form.component';
import { HomeContainer } from './segment.styles';
import { Bar} from 'react-chartjs-2';
import {Link} from 'react-router-dom';


const Segment = () => {
     const [result, setResults] = useState([]);
     const [segment, setSegment] = useState('');
     const [isLoading, setIsLoading] = useState(false);

       useEffect(() => {
           getData()
       }, [segment])

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

      const handleSegmentChange = (e) => {
          setResults([])
          setIsLoading(false)
          setSegment(e.target.value)
      }
            
      const city = result.filter((l) => l.Segment === segment)
      let arraySales = city.map((g) => parseInt(g.Sales))
      let arraySum = city.map((g) => parseInt(g.Profit))
      let summedArray = arraySales.reduce((total, amount) => total + amount, 0);
      let summedProfit = arraySum.reduce((total, amount) => total + amount, 0)  

    return (
      <HomeContainer>
      <div className='next'>
          <NativeSelects handleSegmentChange={handleSegmentChange} segment={segment}/>
          <Link to='/order' className='link'>Next</Link> 
      </div>
      {/* <Link to='/' */}
      <div className='container'>
      <br />
      {!isLoading ? null : <LoadingSign />}
      <Bar
        data={{
          labels:  [segment],
          datasets: [
            {
              label: `Total Sales made in ${segment} is ${summedArray}`,
              backgroundColor: ['rgb(192,57,49)', 'rgb(192,57,49)', 'rgb(192,57,49)'],
              data: [summedArray],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Sales state in ${segment}` },
          
        }}
      />
      <br />
      <Bar
        data={{
          labels:  [segment],
          datasets: [
            {
              label: `Total Profit made in ${segment} is ${summedProfit}`,
              backgroundColor: ['rgb(192,57,49)',  'rgb(192,57,49)', 'rgb(192,57,49)'],
              data: [summedProfit],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Sales state in ${segment}` },
        }}
      />
        </div>
        </HomeContainer>
    )
}

export default Segment;
