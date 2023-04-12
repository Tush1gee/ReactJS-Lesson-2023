import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [Num1, setNum1] = useState(0)
  const [Num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)

  function Add() {
    let result = Num1 + Num2
    setResult(result)
  }

  function Substract() {
    let result = Num1 - Num2
    setResult(result)
  }
  
  function Multiply() {
    let result = Num1 * Num2
    setResult(result)
  }

  function Divide() {
    let result = Num1 / Num2
    setResult(result)
  } 

  return (

   <div>
      <div className='container'>
        <h3  data-testid="result" className='result'>{result}</h3> 
        <input  data-testid="Num1" type='number' value={Num1} onChange={(e: any) => {setNum1(Number(e.target.value))}} />
        <input  data-testid="Num2" type='number' value={Num2} onChange={(e: any) => {setNum2(Number(e.target.value))}}/>
        <button data-testid="Add" onClick={Add}>Add</button>
        <button data-testid="Substract" onClick={Substract}>Substract</button>
        <button data-testid="Multiply" onClick={Multiply}>Multiply</button>
        <button data-testid="Divide" onClick={Divide}>Divide</button>
      </div>
   </div>
  )
}
