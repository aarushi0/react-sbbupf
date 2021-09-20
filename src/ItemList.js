import React from 'react';

export default function ItemList(props) {
  const deleteItem = (id) => {
    props.Ondelete(id);
  };

  return (
    <div>
      <ul>
        {props.enteredValue.map((item) => {
          return (
            <li key={item.id} id={item.id}>
              {' '}
              {item.text}
              <button onClick={() => deleteItem(item.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
