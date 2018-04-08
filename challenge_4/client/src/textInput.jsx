import React from 'react';
import Styles from './textInput.css';

const textInput = (props) => {
  return(
	  <div className="textInput">
	  	<p className="textPrompt">{props.name}</p>
      <input className="textInputField" type="text" name={props.name} defaultValue={props.value} onChange={props.onChange} onKeyUp={props.onKeyUp} />
      <p className="textMessage">{props.message}</p>
    </div>
	);
}

export default textInput;