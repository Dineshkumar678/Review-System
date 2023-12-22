import React from 'react';
import Steps from './Steps';
import Amount from './Amount';

function Stats({amount,steps}){
    return <div className='data'> 
        <Steps steps={steps}/>
        <Amount amount={amount} />
    </div>
}

export default Stats

