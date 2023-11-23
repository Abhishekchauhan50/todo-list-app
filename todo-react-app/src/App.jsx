import React, { useState } from 'react'

function App() {

  
  const [tasklist , settasklist] = useState([])
  const [task, settask] = useState('')

  let handleChange = (e)=>{
    settask(e.target.value)
  }

  let handleTask = ()=>{
    console.log(tasklist)
    settasklist([...tasklist, task])
    settask('')
  }

  let handleDelete = (index)=>{
    let newary = [...tasklist]
    let result = newary.splice(index,1)
    settasklist(newary)
  }



  return (
    <>
    <div className='flex flex-col justify-center my-10 '>
      <div className='flex justify-center'>
        <h1 className='text-4xl font-bold py-10 '>TODO LIST APP</h1>
      </div>

      <div className='flex items-center'>
        
        <input value={task} onChange={handleChange} className='lg:w-[25rem] lg:h-9 rounded text-xl px-3 my-5 outline-none text-black' type="text" placeholder='Add your task'/>
        <i onClick={handleTask} className="ri-add-box-fill text-5xl cursor-pointer"></i>
      </div>

      {
        tasklist.map((input,index)=>{
          return(
            <div className='max-w-[27.7rem] my-3 flex flex-wrap justify-between items-center rounded bg-white text-black text-2xl'>
              <h2><input  onClick={handleCheck} className='mx-2' type="checkbox" />
                {input}
              </h2>
              <div className='mx-2'>
              <i key={index} onClick={()=>handleDelete(index)} className="ri-close-line bg-red-700"></i>
              </div>
            </div>
          )
        })
      }
    </div>
 
    </>
  )
}

export default App
