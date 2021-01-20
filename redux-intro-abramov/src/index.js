import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './reduxTests/counterReducer'

export const render = () => ReactDOM.render(
    <App 
      value={store.getState()}
      onIncrement={() => store.dispatch({
        type: 'INCREMENT'
      })}
      onDecrement={() => store.dispatch(
        {
          type: 'DECREMENT'
        }
      )}
    />,
  document.getElementById('root')
);

store.subscribe(render)
render()

