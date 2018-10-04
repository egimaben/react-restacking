import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import NumberPanel from './components/NumberPanel';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    /*********************State Definitions*************************
     * starCount:: how many stars should be randomly displayed
     * correctSelections:: a subset of the 9 number array consisting of summed up numbers
     * inactiveKeys:: numbers(1-9) that should not be selectable from the game keyboard/NumberPanel, a typical use case is when
     *                player has selected them to display, they should not be selected again
     * userInput:: user's selections from the number panel, held in an array
     * chances:: count of how many chances a player has to refresh the display of stars, displayed at the top right corner of screen
     * gameStatus:: a flag to know whether to end game or not and signifies whether a player has won or lost, 3 possible values (playing,win,loss)
     * fail:: this state is a boolean indicating if player has failed a particular addition, by default it's unset and is set when
     *        the result of the addition is wrong. This state helps the game to give player another shot 
     * 
     */
    this.state = {
      starCount: 0,
      correctSelections: [],
      inactiveKeys: [],
      userInput: [],
      chances: 6,
      gameStatus: 'playing',
      fail: false

    }
    this.generateStars = this.generateStars.bind(this);
    this.consumeUserInput = this.consumeUserInput.bind(this);
    this.processInput = this.processInput.bind(this);
    this.undoUserInput = this.undoUserInput.bind(this);
  }

  /**
   * Invoked when user clicks on a number that is already selected and is on display. Typically happens when user wants
   * to undo a selection in favor of a better option
   * @param {*} input number displayed on the clicked button
   */
  undoUserInput(input) {
    this.setState((prevState) => {
      let currentInputs = prevState.inactiveKeys;
      let index = currentInputs.indexOf(input);
      if (index > -1) {
        currentInputs.splice(index, 1);
      }
      return {
        inactiveKeys: currentInputs
      }
    });
  }
  /**
   * Invoked when user clicks a number from the number panel for display, deactivates the selected number from panel
   * @param {*} input 
   */
  consumeUserInput(input) {
    this.setState((prevState) => ({
      userInput: input,
      inactiveKeys: [input, ...prevState.inactiveKeys]
    }));

  }
  /**
   * Invoked when user clicks the equals button from the control panel
   */
  processInput() {
    if (this.state.fail === true) {
      this.setState({ fail: false });
      return;
    }
    if ((this.state.inactiveKeys === undefined || this.state.inactiveKeys.length === 0) && this.state.correctSelections !== 9) {
      return;
    }

    this.setState((prevState) => {
      let correctArr = prevState.correctSelections;
      if (prevState.inactiveKeys.reduce((sum, num) => sum + num) === prevState.starCount) {
        correctArr.push(...prevState.inactiveKeys);
      }
      else {
        return {
          fail: true
        };
      }


      let starCount = [1, 2, 3, 4, 5, 6, 7, 8, 9][Math.floor(Math.random() * 9)];
      if (correctArr.length === 9)
        return {
          gameStatus: 'win',
          correctSelections: correctArr,
          inactiveKeys: [],
          userInput: []
        }

      return {
        starCount: starCount,
        correctSelections: correctArr,
        inactiveKeys: [],
        userInput: []
      }
    });

  }
/**
 * helper method to randomly generate stars
 */
  generateStars() {

    if (this.state.chances === 1 && this.state.correctSelections.length !== 9) {
      this.setState((prevState) => ({
        chances: --prevState.chances,
        gameStatus: 'loss'
      }));
    }
    else if (this.state.correctSelections.length === 9) {
      this.setState((prevState) => ({
        chances: --prevState.chances,
        gameStatus: 'win'
      }));
    }
    else {
      var rand = [1, 2, 3, 4, 5, 6, 7, 8, 9][Math.floor(Math.random() * 9)];
      this.setState((prevState) => ({
        starCount: rand,
        chances: --prevState.chances
      }));
    }
  }
  componentDidMount() {
    this.generateStars();

  }
  render() {
    return (
      <div>
        <Header fail={this.state.fail} gameStatus={this.state.gameStatus} chances={this.state.chances} />
        <Main gameStatus={this.state.gameStatus} userInput={this.state.userInput}
          generateStars={this.generateStars}
          currentNumber={this.state.starCount}
          processInput={this.processInput}
          undoUserInput={this.undoUserInput}
          inactiveKeys={this.state.inactiveKeys}
          fail={this.state.fail}
        />
        <NumberPanel
          fail={this.state.fail}
          gameStatus={this.state.gameStatus}
          clickHandler={this.consumeUserInput}
          currentNumber={this.state.starCount}
          correctSelections={this.state.correctSelections}
          inactiveKeys={this.state.inactiveKeys}
          numCount={9}

        />
      </div>);

  }
}
export default App;
