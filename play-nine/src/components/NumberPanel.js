import React from 'react';

const NumberButton = (props) => {
    let className = 'round-button';
    if (props.inactiveKeys.includes(props.number) || props.fail === true) {
        className += ' btn-disabled'
    }
    else {
        props.correctSelections.includes(props.number) && (className += ' button-green');
    }

    return (
        <button onClick={() => props.clickHandler(props.number)} className={className}>{props.number}</button>
    );
}

const NumberPanel = (props) => {
    let buttonArr;
    if (props.buttons) {
        buttonArr = props.buttons.map((number, index) => {
            return <NumberButton
                key={index}
                clickHandler={props.clickHandler}
                number={number}
                correctSelections={props.correctSelections}
                inactiveKeys={props.inactiveKeys}
            />
        });
    }
    else {
        buttonArr = [];

        for (let i = 1; i <= props.numCount; i++) {
            buttonArr.push(<NumberButton
                fail={props.fail}
                key={i}
                clickHandler={props.clickHandler}
                number={i}
                correctSelections={props.correctSelections}
                inactiveKeys={props.inactiveKeys}
            />);
        }
    }
    return (
        <div className='number-container'>
            {buttonArr}
        </div>
    );
}
export default NumberPanel;