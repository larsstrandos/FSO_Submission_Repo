import { useState } from "react";
import VoteButton from "./components/VoteButton";
import NextButton from "./components/NextButton";
import Display from "./components/Display";

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0))

  const [selected, setSelected] = useState(0)


  const setNewSelected = () => {
    setSelected(Math.floor(Math.random() * Number(anecdotes.length)))
  }

  const vote = () => {
    let copy = [...points ]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div className="App">
      < Display title='Anecdote of the day' text={anecdotes[selected]} votes={points[selected]} />
      < VoteButton vote={vote} text='Vote' />
      < NextButton next={setNewSelected} text='Next andecdote' />
      < Display title='Anecdote with most votes' text={anecdotes[points.indexOf(Math.max(...points))]} votes={points[points.indexOf(Math.max(...points))]} />
    </div>
  );
}

export default App;
