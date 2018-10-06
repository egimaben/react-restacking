import React from 'react';
const ControlPanel = (props) => {
    let equalsClassNames = 'equals-button';
    let refreshClassNames = 'refresh-button';
    if (props.fail === true) {
      equalsClassNames += ' red';
      refreshClassNames += ' btn-disabled';
    }
    return (
      <div className='controls-container'>
      <div className='left-padding' />
      <div className='controls'>
        <button className={equalsClassNames} onClick={props.processInput}>
          <img alt='equals button' src='/equal.png' />
        </button>
        <button className={refreshClassNames} onClick={props.generateStars}>
          <img alt='refresh button' src='/refresh.png' />
        </button>
      </div>
      <div className='right-padding' />

      </div>
    );
  }
  export default ControlPanel;