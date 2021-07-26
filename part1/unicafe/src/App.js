import React, { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

function App() {
  // Save clicks of each button
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const allReviews = [good, neutral, bad]
  

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const getTotalReviews = () => allReviews.reduce((a, b) =>  a += b, 0)

  const getAvreageReviews = () => {
    return (good * 1 + neutral * 0 + bad * -1) / getTotalReviews()
  }

  const getPercentagePositive = () => {
    return good / getTotalReviews() * 100 
  }

  const reviewStatistics = [
    {
      text: 'good',
      value: good
    },
    {
      text: 'neutral',
      value: neutral
    },
    {
      text: 'bad',
      value: bad
    },
    {
      text: 'all',
      value: getTotalReviews()
    },
    {
      text: 'average',
      value: getAvreageReviews()
    },
    {
      text: 'positive',
      value: `${getPercentagePositive()} %`
    }
  ]

  return (
    <div className="App">
      <h3>Give feedback</h3>
      < Button handleClick={handleGood} text="good" />
      < Button handleClick={handleNeutral} text="neutral" />
      < Button handleClick={handleBad} text="bad" />
      < Statistics reviewStatistics={reviewStatistics}/>
    </div>
  );
}

export default App;
