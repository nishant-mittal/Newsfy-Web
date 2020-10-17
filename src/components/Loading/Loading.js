import React from 'react';
import gif from '../../assets/loading.gif';

const Loading = (width,height) => {
    return (<div style={{width: '95vw',height: '25vh',display: 'flex',justifyContent: 'center',alignItems:'center'}}>
    <img src={gif} alt="Loading" style={{height:'50px',width: '50px',opacity:'0.5'}}/>
  </div>);
}

export default Loading;