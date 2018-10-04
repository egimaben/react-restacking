import React from 'react';
import NumberPanel from './NumberPanel';
const Display = (props) => {
    return (
      <div className='selected-number'>
        <NumberPanel clickHandler={(number) => props.undoUserInput(number)}
          correctSelections={[]}
          inactiveKeys={[]}
          buttons={props.inactiveKeys}
        />
      </div>
    );
  }
  export default Display;