import React from "react";

// Element is also an object


  // Sum of n natural numbrer

const Math = React.memo(({number}) => {
    function sumNatural() {
      let sum = 0;
      for (let i = 1; i <=number; i++) {
        sum = sum + i;
      }
      console.log("Math function Call");
      return sum;
    }
    const total = sumNatural();
    return (
      <div>
        <h1>This is our Math Library</h1>
        <h2>Sum of Natural Number : {total}</h2>
      </div>
    );
  });

export default Math;
