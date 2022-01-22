import React from 'react';

export default function Event() {
    const handlerButtonClick = (e) => {
        console.dir(e);
        console.log("handleButtonClick");
    }

    const handleMouseLeave = (e) => {
        console.dir(e);
    };

    const handleClickCapture = () => {
        console.log(`handleClickCapture`);
    }
    const handleClickCapture2 = () => {
        console.log(`handleClickCapture2`);
    }
    const handleClickBubble = () => {
        console.log(`handleClickBubble`);
    }

  return (
    <div onClickCapture={handleClickCapture}>
        <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handlerButtonClick} onMouseLeave={handleMouseLeave}>
        Button
        </button>
        </div>
    </div>
  )
}
