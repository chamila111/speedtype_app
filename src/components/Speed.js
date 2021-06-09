import React from 'react'
const Speed = ({words,original,seconds,input,finishedtyping}) => {
    if(input.length !== 0 && seconds !== 0 && finishedtyping){
        const originalchars = original.join(' ').trim().split('')
        const inputchars = input.trim().split('')
        const correctchars = inputchars.filter((char,index) => char === originalchars[index]).length;
        const correctwords = Math.ceil(correctchars/4)
        console.log(correctwords)
       const wpm = Math.round(correctwords /(seconds/100) * 60)
       const store = localStorage.getItem('wpm')
       let speeds;
       if(store === null){
        speeds = []
        
       }else{
           speeds = JSON.parse(store)
       }
       if(!speeds.includes(wpm)){
       speeds.push(wpm)
       }
       localStorage.setItem('wpm',JSON.stringify(speeds))
       return (
        <>
        <h3 className='speed'>your current speed is : {wpm} wpm</h3>
        <h3 className='speed'>your best speed so far is :{Math.max(...speeds)} wpm</h3>
        <h3 className='speed'>you got {correctwords} correct words</h3>
        </>
    )
    } else{
        return null;
    }
}
export default React.memo(Speed);

    

    
 