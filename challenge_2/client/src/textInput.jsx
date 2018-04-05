import React from 'react';

const textInput = (props) => {
	
  return(
	  <div className="textInput">
	  	<p className="textPrompt">{props.name}</p>
      <input className="textInputField" type="text" name={props.name} defaultValue={props.value} onChange={props.onChange} />
      <p className="textMessage">{props.message}</p>
    </div>
	);
}

export default textInput;