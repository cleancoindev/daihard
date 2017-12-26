import React from 'react';
import Preloader from './Preloader';

const Network = (props) => {
  if (props.id) {
    return(
      <div>
        {props.id === "1" ? 'Mainnet' : 'Unknown'}
      </div>
    )
  } else {
    return(
      <Preloader />
    )
  }
}

export default Network;
