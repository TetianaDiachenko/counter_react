import React from 'react';
import './Button.css'; 

// reusable button
export default function Button({ onClick, children }) {
  return (
    <button className="round-button" onClick={onClick}>
      {children} {/* This is an option to pass text to the button */}
    </button>
  );
}