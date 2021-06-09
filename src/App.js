
import React ,{ useEffect, useRef, useState } from 'react';
import { Line,defaults} from 'react-chartjs-2';
import './App.css';
import Results from './components/Results';
import Timer from './components/Timer';
import Preview from './components/Preview'
import wordcloud from './components/wordcloud';
import Speed from './components/Speed'
import Gamelevels from './components/Gamelevels';
 import {data,options} from'./components/Linegraph';
defaults.color = 'orange'
function App() {
  
   const cloud  = useRef(wordcloud)
  const [words,setwords] = useState(0)
  const [chars,setchars] = useState(0)
  const [mistakes,setmistakes]  = useState(0)
  const [seconds,setseconds] = useState(0);
  const [timeron,settimeron] = useState(false)
  const [input,setinput] = useState('')
  const [finishedtyping,setfinishedtyping] = useState(false)
  const [gamelevels,setgameLevels] = useState(true)
  const [darkmode,setdarkmode] = useState(true)
  const [easy,seteasy] = useState(false)
   const [original,setoriginal] = useState(cloud.current)
   //darkmode
   useEffect(() => {
    const json = localStorage.getItem('darkmode')
    const currentmode = JSON.parse(json)
    if(currentmode){
      setdarkmode(true)
    }
    else{
      setdarkmode(false)
    }
  },[])
  useEffect(() => {
    if(darkmode){
      document.body.classList.add('dark')
      document.body.classList.remove('light')
    }else{
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
    const json = JSON.stringify(darkmode)
    localStorage.setItem('darkmode',json)
  },[darkmode])
  //useeffect timer
  useEffect(() => {
    let interval = null;
    if(timeron){
      interval  = setInterval(() => {
        setseconds(pre => pre + 1)
      },10)
    }else{
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  },[timeron])
  

  //handle input
  const handleinput = (val) => {
    settimeron(true)
     setinput(val)
     setwords(val.split(' ').length)
     setchars(val.length)
     setmistakes(() => {
     const text = original.join(' ').trim().split('')
     const vals = val.trim().split('')
     return vals.filter((s,i) => s !== text[i]).length;
   })
   const textlength = original.join(' ').trim().split('').length
   const vallength = val.trim().split('').length
   if(textlength === vallength){
     setfinishedtyping(true)
     settimeron(false)
   }
 }
 //handle restart
 const handlerestart = () => {
  setinput('')
  setwords(0)
  setmistakes(0)
  setchars(0)
  settimeron(false)
  setseconds(0)
  setfinishedtyping(false)
}
//handle level
const handlelevel = () => {
  setgameLevels(true)
  setfinishedtyping(false)
  setoriginal(cloud.current)
}

return (
  <div>
{gamelevels ? 
<Gamelevels
 gamelevels={gamelevels} 
  setgameLevels={setgameLevels}
  setoriginal={setoriginal}
  original={original}
  setinput={setinput}
 settimeron={settimeron}
 setseconds={setseconds}
 setwords={setwords}
 setchars={setchars}
 setmistakes={setmistakes} />
 :(
  <>
  {!finishedtyping && (
    <>
  <h1> speed typing</h1>
  <Results
      words={words}
      chars={chars}
      mistakes={mistakes} />
   <Timer
      seconds={seconds}
      setseconds={setseconds}
      timeron={timeron}
      settimeron={settimeron}
/>
<div className='grid'>
  <div className='text-container'>
  <Preview
      input={input}
      original = {original} />
  </div>
  <textarea 
      value={input}
      onChange={(e) => handleinput(e.target.value)}
      readOnly={finishedtyping} />
   
</div> 
</>
)}
<div className='result-container'>
  {finishedtyping && (
    <>
    <Speed
      words={words}
      original={original}
      seconds={seconds}
      input={input}
      finishedtyping={finishedtyping}/>
 <div className='linegraph'>
    <Line data={data} options={options}/>
    </div>
    <div className='btn-group'>
    <button 
    onClick={handlerestart}
    >restart</button>
    <button onClick={handlelevel}>choose a level</button>
    </div>
    </>
  )}
</div>
</>)}
<button className='btn' onClick={() => setdarkmode(!darkmode)}>
  {darkmode ? 'lightmode' : 'darkmode'}
  </button>
</div>
);
}
export default App;











  

  



   
 


 
 
 

 









  
  
  
  
  


  
  

  
 
  
  
  
  

  
 
 
 
 
  
  
  
  
 

 
  
  
  
    
  
  
 
  