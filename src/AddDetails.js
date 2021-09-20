import React, { useState } from 'react';

export default function AddDetails(props) {
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(true);

  const onAddValue = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setName(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.addItem(name);
    setName('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label style={{ color: !isValid ? 'red' : 'black' }}> Add Value </label>
      <input
        style={{ backgroundColor: !isValid ? 'red' : 'white' }}
        type="text"
        value={name}
        onChange={onAddValue}
      />
      <button type="submit"> add </button>
    </form>
  );
}
