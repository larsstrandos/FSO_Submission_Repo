import { React } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {
  const course = 'Half Stack application development'
  // Make exercises and Parts into lists
  const parts = [
    {
      description: 'Fundamentals of React',
      exercises: 10
    },
    {
      description: 'Using props to pass data',
      exercises: 7
    },
    {
      description: 'State of a component',
      exercises: 14
    }
  ]

  const totalExercises = parts.map(data => {
    return data.exercises
  }).reduce((x, c) => {
    return x += c
  })

  return (
    <div>
      < Header course={course} />
      < Content parts={parts} />
      < Total totalExercises={totalExercises}/>
    </div>
  )
}

export default App