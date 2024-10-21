import React from 'react'
import { CounterApp } from './components/CounterApp'
import { FormsApp } from './components/FormsApp'
import { FetchApp } from './components/FetchApp'

export const HooksApp = () => {
  return (
    <>
        <h1>Hooks App</h1>
        <hr />
        <CounterApp/>
        <hr />
        <FormsApp/>
        <hr />
        <FetchApp/>
    </>
  )
}
