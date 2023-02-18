import React from "react";
import Data from "./Data.json";
// import Servey from "./Servey";
import Poll from "./Poll";

const Poll1 = () => {
    return(
        <>
            {
      Data.map((currValue)=>{
        return(
          <div>
          <Poll
              points = {currValue.data[1].point}
              qus={ currValue.data[0].json_data.surveys.question1.question}
              option1 ={currValue.data[0].json_data.surveys.question1.options[0].label}
              option2 ={currValue.data[0].json_data.surveys.question1.options[1].label}
              option3 ={currValue.data[0].json_data.surveys.question1.options[2].label}
            />
          </div>
        );
      })
    }
        </>
    );
}

export default Poll1;