import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './reducers';
import { fetchPosts } from './actions/posts';

type Props = {
  onIncrement: () => void;
  onDecrement: () => void;
};

function App({ onIncrement, onDecrement }: Props) {
  const todos: string[] = useSelector((state: RootState) => state.todos);
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState('');

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', text: todoValue });
    setTodoValue('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="App">
      Clicked: times
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
