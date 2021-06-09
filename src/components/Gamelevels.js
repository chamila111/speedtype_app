import React from 'react'

function Gamelevels({setgameLevels,original,settimeron,
  setseconds,setinput
  ,setchars,setwords,setmistakes,setoriginal }) {
    
    const handleeasy = () => {
      setgameLevels(false)
      setseconds(0)
      settimeron(false)
      setinput('')
      setwords(0)
      setchars(0)
      setmistakes(0)
      const arr = [...original]
     const random = Math.floor(Math.random() * 3)
     setoriginal(arr.slice(0,random + 1))
  }
  const handlemedium = () => {
    setgameLevels(false)
    setseconds(0)
      settimeron(false)
      setinput('')
      setwords(0)
      setchars(0)
      setmistakes(0)
     const arr = [...original]
     const random = Math.floor(Math.random() * 12)
     setoriginal(arr.slice(0,random + 3))
  }
  const handlehard = () => {
    setgameLevels(false)
    setseconds(0)
    settimeron(false)
    setinput('')
  }
  
  return (
    <div className='flex-center'>
    <h1>Welcome to speed typing</h1>
         
    <h2>choose your level</h2> 
    <div className='btn-group'>
    <button  onClick={handleeasy}>easy</button> 
    <button  onClick={handlemedium}>medium</button> 
    <button onClick={handlehard}>hard</button> 
    </div>
    </div>
)
}
export default Gamelevels
  




         
      
     
  
  
  
 
    

   


  

 
    



    
    
    

  
  
  
  