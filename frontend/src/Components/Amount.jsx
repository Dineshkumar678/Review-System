import React from 'react';

function Amount({amount}){
    return <div className='amount'>
    
    <div className='heading'>Amount</div>
    <div className='info'>{amount}</div>
     </div>
}

export default Amount;