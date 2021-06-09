import  React from 'react'

function Timer({seconds,setseconds,timeron,settimeron}) {
    const handlereset = () => {
        settimeron(false)
        setseconds(0)
    }
    
   const textcolor = document.body.classList.contains('dark') 
  return (
      <>
      <div className='timer-container'>
          <h4>stop watch</h4>
    <div className='timer'>
        <p className='timer-span-one'>
          <span>min</span>
          <span>sec</span>
          <span>dsec</span>
        </p>   
              
         
        <p  className={textcolor ?'timer-span-two':'timer-span-two-light'}>
      <span>{('0' + Math.floor((seconds/60000)%60)).slice(-2)}: </span> 
      
      <span>{('0' + Math.floor((seconds/1000)%60)).slice(-2)}: </span>
       <span>{('0' + Math.floor((seconds/10)%100)).slice(-2)}</span> 
       </p>
    </div>
    <div >
        {!timeron && seconds === 0 && (
            <button className='btn' onClick={() => settimeron(true)}>start</button>
        )

        }
        {timeron && (
        <button className='btn' onClick={() => settimeron(false)}>stop</button>
        )}
         {!timeron && seconds > 0 && (
        <button className='btn' onClick={() => settimeron(true)}>resume</button>
        )}
         {timeron && seconds > 0 && (
        <button className='btn' onClick={handlereset}>reset</button>
        )}
        
    </div>
    </div>
    </>
  )
}

export default Timer
