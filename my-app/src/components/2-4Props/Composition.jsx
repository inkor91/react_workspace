import React from 'react';

function Welcome(props){
    return <h1> Hello, {props.name}</h1>;
}

export default function Composition() {
  return (
  
  <div>
      <Welcome name ="React"/>
      <Welcome name ="Native"/>
      <Welcome name ="JavaScript"/>
      <Welcome name ="Spring"/>
  </div>
    
  );
}
