import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  let id = useSelector(state => state.id);
  let password = useSelector(state => state.password);

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  }
  const login = () => {
    dispatch({ type: 'LOGIN', payload: { id: "daechul", password: "123" } });
  }
  return (
    <>
      <h1>{id}, {password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={login}>Login</button>
      <Box />
    </>
  );
}

export default App; 
