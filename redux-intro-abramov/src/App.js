import React from 'react'

const App = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className='body'>
      <h1 className='value'>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

export default App;
