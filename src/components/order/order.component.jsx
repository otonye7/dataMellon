import React, {useState, useEffect} from 'react';
import axios from 'axios';
import LoadingSign from '../loading/loading.component';
import { HomeContainer } from './order.styles';
import { Line} from 'react-chartjs-2';



const Order = () => {
     const [result, setResults] = useState([]);
     const [isLoading, setIsLoading] = useState(false);

       useEffect(() => {
           getData()
       }, [])

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
            
      const city = result.filter((l) => l.Quantity)


    return (
      <HomeContainer>
      <div className='container'>
      <br />
      {!isLoading ? null : <LoadingSign />}
      <Line
        data={{
          labels:  city.map((data) => data['Order Date']),
          datasets: [
            {
              label: `Order and respective dates`,
              backgroundColor: ['rgb(192,57,49)', 'rgb(192,57,49)', 'rgb(192,57,49)'],
              data: result.map((l) => l.Quantity),
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Order and respective dates` },
          
        }}
      />
        </div>
        </HomeContainer>
    )
}

export default Order;