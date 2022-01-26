import React from 'react';

export default function Background() {
  return (
  < div style={{height:300}}>
    <div style={{width:100}} className="bg-sky-500/100 ...">1</div>
    <div style={{width:100}} className="bg-sky-500/75 ...">2</div>
    <div style={{width:100}} className="bg-sky-500/50 ...">3</div>
  </div>
  );
}
