import React from 'react';
const Header = (props)=>{
    return(
      <div>
      <div className='header'>
        <h2 className='left-header'>Play Nine</h2>
        {props.fail===true && <div className='mid-header'><span>Wrong!</span></div>}
        {props.gameStatus==='win' && <div className='mid-header'><span>You win</span></div>}
        {props.gameStatus==='loss' && <div className='mid-header'><span>You Lose</span></div>}
        {props.gameStatus==='playing' && <div className='mid-header'><span></span></div>}
        <h2 className='right-header'>Chances:<span className='chances'>{props.chances}</span></h2>
       
      </div>
      <hr/>
      </div>
    );
    }
    export default Header;