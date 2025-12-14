const Hello = (props) => {
  console.log(props)
  return (
  <div>
    <p>Hello {props.name}, you are {props.age} years old.</p>
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
      <Footer />

    </div>
  )
}

export default App


