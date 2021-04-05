import React, { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>

const Button = ({handleClick, text}) => <button onClick = {handleClick}>{text}</button>

const Statistic = ({text, value}) => <div>{text} {value}</div>

const Statistics = (props) => {
  const all = props.goodStat + props.neutralStat + props.badStat
  const average = (props.goodStat - props.badStat)/all
  const positive = props.goodStat/all + " %"

  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><Statistic text = "good" value = {props.goodStat} /></td>
          </tr>
          <tr>
            <td><Statistic text = "neutral" value = {props.neutralStat} /></td>
          </tr>
          <tr>
            <td><Statistic text = "bad" value = {props.badStat} /></td>
          </tr>
          <tr>
            <td><Statistic text = "all" value = {all} /></td>
          </tr>
          <tr>
            <td><Statistic text = "average" value = {average} /></td>
          </tr>
          <tr>
            <td><Statistic text = "positive" value = {positive} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header title = "give feedback" />
      <Button handleClick = {handleGoodClick} text = "good" />
      <Button handleClick = {handleNeutralClick} text = "neutral" />
      <Button handleClick = {handleBadClick} text = "bad" />
      <Header title = "statistics" />
      <Statistics goodStat = {good} neutralStat = {neutral} badStat = {bad} />
    </div>
  )
}

export default App;
