const getdata = () => {
  
  let records = localStorage.getItem('wpm')
  if(records &&  JSON.parse(records).length >= 40){
 
    localStorage.clear()
  }
  if( records !== null){
    return JSON.parse(records);
  } else{
    return [];
      }
 
}
export const data = {
  labels:['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th'],
  datasets:[
    {
      label:'your speed in first ten trys',
      data:getdata().slice(0,10),
      backgroundColor:'green',
      borderColor:'violet',
      pointBorderColor:'yellow',
      pointBackgroundColor:'green',
      
    },
    {
      label:'your speed in second ten trys',
      data:getdata().slice(10,20),
      backgroundColor:'red',
      borderColor:'orange',
      pointBorderColor:'yellow',
      pointBackgroundColor:'red',
      
    },
    {
      label:'your speed in third ten trys',
      data:getdata().slice(20,30),
      backgroundColor:'pink',
      borderColor:'turquoise',
      pointBorderColor:'yellow',
      pointBackgroundColor:'pink',
      
    },
    {
      label:'your speed in fourth ten trys',
      data:getdata().slice(30,40),
      backgroundColor:'yellow',
      borderColor:'red',
      pointBorderColor:'yellow',
      pointBackgroundColor:'yellow',
      
    }
  ]
};
export const options = {
  maintainAspectRatio:false,
  responsive:true,
  elements:{
    line:{
      tension:0.5
    }
  },
 

  scales:{
    yAxes:[{
      ticks:{
        min:0,
        max:200,
        steps:10,
        color:'orange',
        font:{
          size:18
        }
      },
      
      
      
    }],
    xAxes:[{
      ticks:{
        color:'orange',
        font:{
          size:18
        }
      },
      
    }],
    

  },
  plugins: {
    decimation:{
      enabled:false
    },
    legend: {
      position: 'bottom',
      labels:{
        font:{
          size:15,
          
        },
        padding:20,
      
        
  
      }
      
  
    },
    title: {
      display: true,
      text: 'your typing speed progress report',
      padding:{
        top:10,
        bottom:13
      },
      font:{
        size:25,
        
      }
    }
  }

};
      



    

    

    





  