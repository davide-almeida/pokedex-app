import React from 'react'

const Button = ({
  onClick,
  counter
}) => {
  const [notice, setNotice] = React.useState('Click-me please!')
  
  React.useEffect(
    () => {
      if(counter > 3) {
        setNotice('Be faster!!');
      }
    }, [counter]
  )

  const btnStyle = "border-2 border-double border-slate-400 hover:bg-slate-800 hover:text-white rounded p-2"

  return (
    <button 
      className={btnStyle} onClick={onClick}>
      {notice}
    </button>
  )
}

export default Button
