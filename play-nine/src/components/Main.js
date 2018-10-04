import React from 'react';
import ControlPanel from './ControlPanel';
import Display from './Display';
import StarBoard from './StarBoard';


const Main = (props) => {
  return (
    <div className='main-section'>
      <div className='left-section'>
        <StarBoard count={props.currentNumber} />
      </div>
      <div className='mid-section'>
        <ControlPanel
          fail={props.fail} processInput={props.processInput} generateStars={props.generateStars} />
      </div>
      <div className='right-section'>
        <Display undoUserInput={props.undoUserInput} inactiveKeys={props.inactiveKeys} selectedNumber={props.userInput} />

      </div>
    </div>
  );
}
export default Main;
