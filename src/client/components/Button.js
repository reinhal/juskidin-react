import React from 'react';
import './styles/Button.css';

const Button = (props) => {
  return (
    <div>
      <button className="ui secondary button landing-page-button">{props.text}</button>
    </div>
  );
}

export default Button;