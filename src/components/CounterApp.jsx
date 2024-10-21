import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterApp = () => {

    const {counter, increment, reset, decrement} = useCounter(10)

  return (
    <>
        <h1>Counter</h1>
        <p>Hook para un contador</p>
        <h4>{counter}</h4>
        <button className="btn btn-primary" onClick={() =>decrement()}>-1</button>
        <button className="btn btn-danger" onClick={() => reset()}>Reset</button>
        <button className="btn btn-primary" onClick={() => increment()}>+1</button>
    </>
  )
}
