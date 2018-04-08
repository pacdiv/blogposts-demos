import React from 'react';

export default function Button(props) {
  return (
    <button onClick={props.onClick || null} style={props.style || {}}>
      {props.children || 'Submit'}
    </button>
  );
}
