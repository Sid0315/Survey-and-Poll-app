import React from "react";
import Data from "./Data.json";
import Servey from "./Servey";

const Qus3 = () => {
    return(
        <>
            {
      Data.map((currValue)=>{
        return(
          <div>
          <Servey
          key= {currValue.data[2].json_data.surveys.question2}
            heading ={currValue.data[2].survey_title}
            qus={ currValue.data[2].json_data.surveys.question3.question}
              option1 ={currValue.data[2].json_data.surveys.question3.options[0].label}
              option2 ={currValue.data[2].json_data.surveys.question3.options[1].label}
              option3 ={currValue.data[2].json_data.surveys.question3.options[2].label}
              option4 ={currValue.data[2].json_data.surveys.question3.options[3].label}
          />
          </div>
        );
      })
    }
        </>
    );
}

export default Qus3;