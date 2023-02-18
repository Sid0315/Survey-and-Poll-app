import React, { useState } from 'react';
import Qus1 from './Qus1';
import Qus2 from './Qus2';
import Qus3 from './Qus3';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';




const Home = () => {
  const navigate = useNavigate();
  const [count , setCount] = useState(0);

  const onSubmit =() => {
    setCount(count+1);
  }

  const Qus = () =>{
    if(count === 0){
      return(<Qus1/>) 
    }
    else if (count === 1) {
      return(<Qus2/>)
    }
    else if (count === 2){
      return(<Qus3/>)
    } 
    else{
      alert('All Done');
      navigate("/login");
    } 
    }
  
  return  (
    <> 
     
      <Qus/>
        
    <button className='btn btn-primary btnx' onClick={onSubmit}>Next<ArrowForwardIcon/></button>
    </>
  );
  }
export default Home;