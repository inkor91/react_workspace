// import { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';
// //import notify from './notify';

// class App extends Component {
//   state = {
//     SplitMe: null
//   };

//   handleClick = async () => {
//     const loadedMoudle = await import('./SplitMe');
//     this.setState({
//       SplitMe: loadedMoudle.default
//     });
//   };

//   render(){
//     const {SplitMe} = this.state;
//     return(
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p onClick={this.handleClick}>Hello React!</p>
//           {SplitMe && <SplitMe/>}
//         </header>
//       </div>
//     )
//   }
// }

// export default App;

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React!
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
