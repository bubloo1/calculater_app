import './App.css'
import { useState } from 'react'

function App() {
  
  let numbersAndOperaters: Array<string> = ["7","8","9","del", "4","5","6","+", "1","2","3","-",".","0","/","*"]
  const [completeString, setCompleteString] = useState<string>('')

  function calculations(char:string){
    
    if(char == "reset"){
      setCompleteString('')
      return
    }

    if(char == "del"){
      setCompleteString(completeString.slice(0,-1))
      return
    }

    setCompleteString(completeString.concat(char))

    if(char == "="){
      let numbers: string[] = completeString.split(/\s*([+\-%/*])\s*/)
      console.log(numbers,"numbers")

      switch (numbers[1]){
          case "+":
            setCompleteString(String( parseFloat(numbers[0]) + parseFloat(numbers[2])))
            break
          case "-":
            setCompleteString(String( parseFloat(numbers[0]) - parseFloat(numbers[2])))
            break
          case "*":
            setCompleteString(String( parseFloat(numbers[0]) * parseFloat(numbers[2])))
            break
          case "/":
            setCompleteString(String( parseFloat(numbers[0]) / parseFloat(numbers[2])))
            break
      }
    }
    
  }

  return (
    <>
      <div className='container'>
        <div className="input_container">
          <input className='user_input' type="text" value={completeString}/>
        </div>
        {
          numbersAndOperaters.map((char) => (
            <button key={char} onClick= {() => calculations(char)} className='my_button'>{char}</button>
          ))
        }
        <button onClick={() => calculations("reset")} className='reset'>Reset</button>
        <button onClick={() => calculations("=")} className='equals_to'>=</button>
      </div>
    </>
  )
}

export default App
