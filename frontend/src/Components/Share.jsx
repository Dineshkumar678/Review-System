import React from 'react';
import {FaShareAlt} from 'react-icons/fa';
function Share({amount,steps,name}){

    const hanldeClick = () => {
        navigator.clipboard.writeText(`Name : ${name} \n amount : ${amount} \n steps : ${steps}`)
        alert(`Name : ${name} \n amount : ${amount} \n steps : ${steps} \n copied!`)
    }
    return <div >
        <div
            onClick={hanldeClick}
            className='share'
        ><span>Share</span> <FaShareAlt color="blue"/></div>
    </div>
    
}

export default Share;