import './App.css'
import MainCont from './componants/mainCont'
import Navbar from './componants/Navbar'
import { useRef } from 'react'
function App() {
  let ref = useRef();
  function handleChange(){
    ref.current.style.backgroundColor = "red";
    alert(`Your count is ${ref.current}`)
  }
  return (
    <>
    <div className='w-full relative  bg-linear-to-r from-blue-950 to to-blue-500 h-screen'>
      <div className='gap-4 h-screen flex-col p-3 bg-[rgba(255,255,255,0.2)] flex items-center justify-start'>
        <Navbar/>
        <MainCont/>
        <div ref = {ref} className='h-25 flex items-center justify-around w-25 border border-amber-400 bg-amber-500 rounded-2xl shadow-[10px_10px_10px_rgba(0,0,0)] '>Hello</div>
        <button className='bg-white p-2 cursor-pointer rounded-2xl ' onClick={handleChange}>Click Me please</button>
      </div>
    </div>
      
    </>
  )
}

export default App
