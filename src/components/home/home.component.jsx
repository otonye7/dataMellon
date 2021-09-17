import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Home = () => {
    const [result, setResults] = useState([]);

       useEffect(() => {
           getData()
       }, [])

       const getData = async () => {
           try {
            const res = await axios.post(`https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub`, {
                "angular_test": "angular-developer"
               }) 
            if (res.status === 200)  {
                setResults(res.data)
            }
           }
           catch(err) {
               console.log(err)
           }
       }

       console.log(result)
        


    return (
        <div className=''>r</div>
    )
}

export default Home;