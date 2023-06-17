import React from 'react';
import Header from './Header';
import Center from './Center';
const Homepage = (props) => {
    return(
        <> 
   <div className="flex justify-between">
        <Header />
        <Center />
      </div>
      </>
    )
};
export default Homepage;