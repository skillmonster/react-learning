import React from 'react';

export default function Button({ children, text, handleClick }) {
  return <button onClick={handleClick}>{text}</button>
}