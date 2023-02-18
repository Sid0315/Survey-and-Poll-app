import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = ({setAuth}) => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        name : "admin",
        password : "12345",
    });

    const [logdata, setLogData] = useState({
        username : "",
        userpassword : "",
    });
    const [counter, setCounter] = useState(3);


    const inputValue = (event) => {
        const {name , value} =event.target;
        setLogData((preValue) => {
            return {
                ...preValue,
                [name] : value,
            }
        });
    }
    const closeTab = () => {
        window.opener = null;
        window.open("", "_self");
        window.close();
      };

    const onSub = (e) => {
        e.preventDefault();
        const found = data.name === logdata.username && data.password === logdata.userpassword;
        if (found) {
            setAuth(found);
          navigate("/", {replace: true});
        }
        else{
            if(counter > 1){
            setCounter(counter-1);
            }
            else{
                closeTab();
            }
        }
    }

  return  (
    <>
    <div className='log_main_div'>
        <div className='log_box'>
        <div className='atmp_rem'>Attempt Remaining {counter}</div>
        <form action='' onSubmit={onSub} >
            <div className="mb-3 ">
                <input type="text" className="form-control inp_one" id="exampleInputEmail1" aria-describedby="emailHelp"
                    name='username' autoComplete='off' value={logdata.username} placeholder='Username' onChange={inputValue}
                />
            </div>
            <div className="mb-3 ">
                <input type="password" className="form-control inp_two" id="exampleInputPassword1"
                    name='userpassword'  value={logdata.userpassword} placeholder='Password' onChange={inputValue} 
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    </>
  );
}

export default Login;