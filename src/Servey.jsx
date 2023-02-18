import React from 'react';

const Servey = (props) => {
  return  (
    <>      
      <div className='main_div'>
        <div className='box'>
          <h1 className='servey_heading'>{props.heading}</h1>
          <p className='servey_qus'>{props.qus}</p>
          <div className='r_btn'>
          <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                    {props.option1}
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                    {props.option2}
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                    {props.option3}
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                    {props.option4}
                    </label>
                  </div>
                  <div className='uline'>
                    
                  </div>
          </div>  
        </div>
      </div>
    </>
  );
}

export default Servey;