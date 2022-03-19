import React, { useState } from 'react'

const Header = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
      <button onClick={handleClick}>{text}</button>
  )
}

const StatisticsLine = ( {text, value, ending = null} ) => {
  return (
      <tr>
        <td>{text}</td><td>{value}{ending}</td>
      </tr>
  )
}

const Statistics = ( {good, bad, neutral} ) => {

  const getAverage = () => {
    return (good + bad * (-1)) / (good + neutral + bad) 
  }

  const getPositivePercentage = () => {
    return (good / (good + neutral + bad)) * 100
  }

  if (good !== 0 || neutral !== 0 || bad !== 0)
    return (
      <div>
        <table>
          <tbody>
            <StatisticsLine text='good' value={good} />
            <StatisticsLine text='neutral' value={neutral} />
            <StatisticsLine text='bad' value={bad} />
            <StatisticsLine text='average' value={getAverage()} />
            <StatisticsLine text='positive' value={getPositivePercentage()} ending='%' />
          </tbody>
        </table>
      </div>
    )
  return (
    <div>
      No feedback given
    </div>
  ) 
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleSetGood = () => {
    setGood(good + 1);
  }

  const handleSetNeutral = () => {
    setNeutral(neutral + 1);
  }

  const handleSetBad = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={handleSetGood} text='good' />
      <Button handleClick={handleSetNeutral} text='neutral' />
      <Button handleClick={handleSetBad} text='bad' />
      <Header text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App