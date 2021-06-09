import React  from 'react';

function Preview({input,original}) {
    const text = input.split('')
    const org =  original.join(' ').trim().split('') 
    return (
      <div className='preview'>
        {org.map((char,index) => {
            let color;
            if(index < text.length){
                color = char === text[index] ? 'green' :'red'
            }
            return <span  key={index} style={{backgroundColor:color}}>{char}</span>
        })}
      </div>
    )
  }
  export default  Preview;
  
 
  
    

    
  