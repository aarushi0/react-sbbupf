import React, { useState } from 'react';
import AddDetails from './AddDetails';
import ItemList from './ItemList';
import './style.css';

export default function App() {
  const [enteredValue, setEnteredValue] = useState([
    { id: '1', text: 'first text' },
    { id: '2', text: 'second text' },
  ]);

  const addItem = (item) => {
    setEnteredValue((prevState) => {
      const updatedValue = [...prevState];
      updatedValue.unshift({ id: Math.random().toString(), text: item });
      return updatedValue;
    });
  };

  const Ondelete = (id) => {
    setEnteredValue((prevState) => {
      const updatedValue = prevState.filter((item) => item.id !== id);
      return updatedValue;
    });
  };

  return (
    <div>
      <AddDetails addItem={addItem} />
      <ItemList enteredValue={enteredValue} Ondelete={Ondelete} />
    </div>
  );
}
