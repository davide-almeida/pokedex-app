import React from 'react'
import Button from '../../components/Button'

const Index = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <Button
        onClick={() => setCount((count) => count + 1)}
        counter={count}
      />
      <p>Contador: {count}</p>
    </div>
  )
}

export default Index