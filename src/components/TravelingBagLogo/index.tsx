import React from 'react';
import TravelingBag64 from '../../assets/images/travel-bag-64.svg';
import TravelingBag128 from '../../assets/images/travel-bag-128.svg';

function TravelingBagLogo() {
  return (
    <img
      src={TravelingBag64}
      srcSet={`${TravelingBag64} 64w, ${TravelingBag128} 128w`}
      sizes='(min-width: 480px) 128px, 64px'
      alt='traveling bag'
    />
  )
}

export default TravelingBagLogo