import React from 'react';
const Star = () => {
    return (<img width='65' alt='star' src='http://www2.le.ac.uk/digitalsignage/slideshow/chemistry/images/archive/upto-dec-16/star.png' />
    );
  
  }
  const fillStarBoard = (count) => {
    let starBoard = []
  
    // Outer loop to create parent
    for (let i = 0; i < count; i++) {
  
      starBoard.push(<Star key={i} />)
    }
    return starBoard;
  }
  
  
  const StarBoard = (props) => {
  
    return (
      <div className='star-board'>
        {fillStarBoard(props.count)}
  
      </div>
    );
  }
  export default StarBoard;