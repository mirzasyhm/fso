import {useState} from 'react'

const Hello = (props) => {
  console.log(props)
  return (
  <div>
    <p>Hello {props.name}, you are {props.age} years old.</p>
  </div>
  )
}


const Hello2 = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
      <p>You were probably born in {bornYear()}</p>
    </div>
  )
}

const DestructureExample = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>Hello {name}, you are {age} years old.</p>
      <p>You were probably born in {bornYear()}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mirzasyhm'>mirzasyhm</a>
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div> 
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}


const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]
  const friends1 = [ 'Peter', 'Maya']
  console.log('Hello from component')


  const [counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)


  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  //   )

  // console.log('rendering...', counter)

  const handleClick = () => {
    console.log('clicked')
  }

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }
  const decreeaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log('resetting, value before', counter)
    setCounter(0)
  }

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const [clicks, setClicks] = useState({
    left:0, right:0
  })

  const handleLeftClick = () => {
    console.log('left, value before', allClicks)  
    setAll(allClicks.concat('L'))
    setLeft(left+1)
  }
    
  const handleRightClick = () => {
    console.log('right, value before', allClicks) 
    setAll(allClicks.concat('R'))
    setRight(right+1) 
  }
    
  
  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b}
      </p>
      <Hello name='Mirza' age={10+13} />
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{friends1}</p>
      <Hello2 name='Mirza' age={23} />
      <DestructureExample name='Mirza' age={23} />
      <Footer />
      <Display counter={counter} />
      <Button onClick={increaseByOne} text='plus' />
      <Button onClick={setToZero} text='zero' />
      <Button onClick={decreeaseByOne} text='minus' />
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>

  )
}

export default App


