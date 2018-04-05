import React from 'react';

const textInput = (props) => {
  const showInfo = () => {
    //console.log(props.info);
    alert(props.info);
  }
  return(
	  <div className="textInput">
	   <button onClick={showInfo} >?</button>
    </div>
	);
}

export default textInput;