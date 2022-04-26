import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

let dictionary = [
  ["PATER", "father"],
  ["MATER", "mother"],
  ["CANIS", "dog"],
  ["SEDET", "is sitting"],
  ["BIBIT", "is drinking"],
  ["CIBUS", "food"],
  ["SALIT", "jumps"],
  ["SALVE", "hello"],
  ["AUDIT", "hears, listens to"],
  ["CENAM", "dinner"],
  ["VINUM", "wine"],
  ["VIDET", "sees"],
  ["CENAT", "eats dinner, dines"],
  ["VOCAT", "calls"],
  ["DUCIT", "leads"],
  ["PETIT", "heads of, attacks"],
  ["TENET", "is holding"],
  ["SENEX", "old man"],
  ["POETA", "poet"],
  ["RIDET", "laughs, smiles"],
  ["NAVEM", "ship"],
  ["HABET", "has"],
  ["DOCTA", "skillful, good at her job"],
  ["SATIS", "enough"],
  ["TAMEN", "however"],
  ["CERAM", "wax tablet"],
  ["TRADIT", "hands over"],
  ["CAPIT", "takes"],
  ["IUDEX", "judge"],
  ["HODIE", "today"],
  ["DEBET", "owes"],
  ["TESTIS", "witness"],
  ["CELAT", "is hiding"],
  ["DECEM", "ten"],
  ["PAUPER", "a poor man"],
  ["PACEM", "peace"],
    ["SOLUS", "lonely"],
    ["CAUPO", "innkeeper"],
    ["DIVES", "rich"],
    ["MURUM", "wall"],
    ["TANTUM", "only"],
    ["MECUM", "with me"],
    ["SENSI", "felt"],
    ["NUBEM", "cloud"],
    ["SONOS", "noises"],
    ["PAVOR", "panic"],
    ["CINIS", "ash"],
    ["VALEO", "I feel well"],
    ["FINIS", "end"],
    ["FUMUM", "smoke"],
    ["IUBEO", "order"],

]
function selectRandomEntry() {
  let targetEntry = dictionary[Math.floor(Math.random()*dictionary.length)];
  return targetEntry;
}

let targetEntry = selectRandomEntry();
console.log(targetEntry)
let myTarget = targetEntry[0];
let myAnswer = targetEntry[1];

let state = {
  rows: [
    [{ letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }],
    [{ letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }],
    [{ letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }],
    [{ letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }],
    [{ letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }],
    [{ letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }, { letter: '', color: 'white', keyType: 'boardKey' }],
  ],
  index: [0, 0],
  target: myTarget,
  answer: myAnswer,
  victor: false,
};


class App extends React.Component {
  render() {
    return (
      <div className='main' onClick={() => {
        this.forceUpdate(); //I know I'm not supposed to do this but couldn't any other way. 
      }}>
        <Board rows={state.rows} />
        <Keyboard />
      </div>
    );
  }
}

class Space extends React.Component {
  render() {

    let boardToClassMap = {
      boardKey: 'boardKey',
      keyboardKey: 'keyboardKey'
    }

    let colorToClassMap = {
      black: 'black',
      gray: 'gray',
      green: 'green',
      yellow: 'yellow',
      white: 'white',
    };

    // function with logic to convert color to classname, return a string
    return (
      <div
        onClick={() => {
          if (this.props.letter === 'ENTER') {
            if (state.index[1] === 5) {
              enterRow();
              state.index[0] = state.index[0] + 1;
              state.index[1] = 0;
            }
          } else if (this.props.letter === 'DEL') {
            if (state.index[1] <=5 && state.index[1] > 0) {
              state.index[1] = state.index[1] - 1;
              let currentSpace = state.rows[state.index[0]][state.index[1]]
              currentSpace.letter = '';
            }
          } else {
            console.log(state);
            let currentSpace = state.rows[state.index[0]][state.index[1]]
            currentSpace.letter = this.props.letter;
            console.log(state);
            state.index[1] = state.index[1] + 1;
          }
          if (state.index[0]===6) {
            alert("Eheu! Tu non es victor...")
          }
        }}
        className={`space 
        ${colorToClassMap[this.props.color]}
        ${this.props.className}
        ${boardToClassMap[this.props.keyType]}`
        } >
        {this.props.letter}
      </div>
    )
  }
}

function hasWon(){
  let rowIndex = state.index[0];
  for (let i = 0; i < 5; i++) {
    let ourSpace = state.rows[rowIndex][i];
    let char = ourSpace.letter;
    let targetChar = state.target[i];
    if (char !== targetChar) {
      return false
    }
  }
  return true
}

function enterRow() {
  let rowIndex = state.index[0];
  for (let i = 0; i<5; i++) {
    let ourSpace = state.rows[rowIndex][i];
    let char = ourSpace.letter;
    let targetChar = state.target[i];
    if (char===targetChar) {
      ourSpace.color='green';
    } else if (state.target.indexOf(char)!== -1) {
      ourSpace.color = 'yellow'; //small problem: if the letter has already "greened" and appears a second time in the input, it will turn yellow; should be black
    } else {
      ourSpace.color = 'black'
    }
  }
  if (hasWon()) {
    window.alert('Euge! Tu es victor!')
  }
}

function Row({ spaces }) {
  return (
    <div className='board-row'>
      {
        spaces.map((space, key) => <Space key={key} {...space}></Space>)
      }
    </div>
  )
}

function Board({ rows }) {
  return (
    <div className='board'>
      {
        rows.map((row, key) => <Row key={key} spaces={row}></Row>)
      }
    </div>
  )
}

function Keyboard(props) {
  return (
    <div className='keyboard'>
      <div className='keyboard-row'>
        <Space letter='Q' color='gray' keyType='keyboardKey' />
        <Space letter='W' color='gray' keyType='keyboardKey' />
        <Space letter='E' color='gray' keyType='keyboardKey' />
        <Space letter='R' color='gray' keyType='keyboardKey' />
        <Space letter='T' color='gray' keyType='keyboardKey' />
        <Space letter='Y' color='gray' keyType='keyboardKey' />
        <Space letter='U' color='gray' keyType='keyboardKey' />
        <Space letter='I' color='gray' keyType='keyboardKey' />
        <Space letter='O' color='gray' keyType='keyboardKey' />
        <Space letter='P' color='gray' keyType='keyboardKey' />
      </div>

      <div className='keyboard-row'>
        <Space letter='A' color='gray' keyType='keyboardKey' />
        <Space letter='S' color='gray' keyType='keyboardKey' />
        <Space letter='D' color='gray' keyType='keyboardKey' />
        <Space letter='F' color='gray' keyType='keyboardKey' />
        <Space letter='G' color='gray' keyType='keyboardKey' />
        <Space letter='H' color='gray' keyType='keyboardKey' />
        <Space letter='J' color='gray' keyType='keyboardKey' />
        <Space letter='K' color='gray' keyType='keyboardKey' />
        <Space letter='L' color='gray' keyType='keyboardKey' />
      </div>

      <div className='keyboard-row'>
        <Space letter='ENTER' color='gray' keyType='keyboardKey' className='enter' />
        <Space letter='Z' color='gray' keyType='keyboardKey' />
        <Space letter='X' color='gray' keyType='keyboardKey' />
        <Space letter='C' color='gray' keyType='keyboardKey' />
        <Space letter='V' color='gray' keyType='keyboardKey' />
        <Space letter='B' color='gray' keyType='keyboardKey' />
        <Space letter='N' color='gray' keyType='keyboardKey' />
        <Space letter='M' color='gray' keyType='keyboardKey' />
        <Space letter='DEL' color='gray' keyType='keyboardKey' />
      </div>
    </div>
  )
}

// function Modal(props) {
//   <div className = 'modal'>
//     {this.props.message}
//   </div>
// }

export default App;