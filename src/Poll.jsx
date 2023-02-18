import React from 'react';
import ShareIcon from '@mui/icons-material/Share';

const Poll = (props) => {
  return  (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-4 mx-auto my-5'>
                <div className='card'>
                <div className='row'>
                  <div className='col-10'>
                  <p className="badge bg-light text-dark">{props.points} points</p>
                  </div>
                  <div className='col-1'>
                  <button className='' ><ShareIcon/></button>
                  </div>
                  <p>{props.qus}</p>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    {props.option1}
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {props.option2}
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {props.option3}
                </label>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Poll;