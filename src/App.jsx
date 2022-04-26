import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

let dictionary = [
  ["PATER", "father"],
  ["BARBA", "beard"],
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
  ["TURBA", "crowd"],
  ["MANET", "remains, stays"],
  ["PUERI", "boys"],
  ["ABEST", "is out"],
  ["MULTI, many"],
  ["PUGNA", "fight"],
  ["LAETE", "happily"],
  ["SOLUS", "alone"],
  ["NIHIL", "nothing"],
  ["MISIT", "sent"],
  ["PLENA", "full"],
  ["SILVA", "woods, forest"],
  ["DIXIT", "said"],
  ["LUPUS", "wolf"],
  ["CAUTE", "cautiously"],
  ["ALIAM", "another"],
  ["VIVIT", "is alive"],
  ["UMBRA", "ghost"],
  ["FELES", "cat"],
  ["VENIT", "came"],
  ["CERVI", "deer"],
  ["LATET", "lies hidden"],
  ["FEROX", "ferocious"],
  ["CEPIT", "took"],
  ["COXIT", "cooked"],
  ["STILI", "pens (used for writing on wax tablets)"],
  ["CURAS", "take care of"],
  ["SAEPE", "often"],
  ["CIVES", "citizens"],
  ["CAVEA", "seating area"],
  ["DEDIT", "gave"],
  ["PEDEM", "foot, paw"],
  ["DOLET", "hurt"],
  ["IBANT", "used to go"],
  ["OLEUM", "oil"],
  ["TOGAS", "togas"],
  ["NOVAM", "new"],
  ["LONGE", "far"],
  ["DONUM", "present, gift"],
  ["INTUS", "inside"],
  ["ALIAS", "other"],
  ["CUPIO", "I want"]
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
  keyboardrows: [
    [{ letter: 'Q', color: 'gray', keyType: 'keyboardKey' }, { letter: 'W', color: 'gray', keyType: 'keyboardKey' }, { letter: 'E', color: 'gray', keyType: 'keyboardKey' }, { letter: 'R', color: 'gray', keyType: 'keyboardKey' }, { letter: 'T', color: 'gray', keyType: 'keyboardKey' }, { letter: 'Y', color: 'gray', keyType: 'keyboardKey' }, { letter: 'U', color: 'gray', keyType: 'keyboardKey' }, { letter: 'I', color: 'gray', keyType: 'keyboardKey' }, { letter: 'O', color: 'gray', keyType: 'keyboardKey' }, { letter: 'P', color: 'gray', keyType: 'keyboardKey' }, ],
    [{ letter: 'A', color: 'gray', keyType: 'keyboardKey' }, { letter: 'S', color: 'gray', keyType: 'keyboardKey' }, { letter: 'D', color: 'gray', keyType: 'keyboardKey' }, { letter: 'F', color: 'gray', keyType: 'keyboardKey' }, { letter: 'G', color: 'gray', keyType: 'keyboardKey' }, { letter: 'H', color: 'gray', keyType: 'keyboardKey' }, { letter: 'J', color: 'gray', keyType: 'keyboardKey' }, { letter: 'K', color: 'gray', keyType: 'keyboardKey' }, { letter: 'L', color: 'gray', keyType: 'keyboardKey' },],
    [{ letter: 'ENTER', color: 'gray', keyType: 'keyboardKey', className: 'enter' }, { letter: 'Z', color: 'gray', keyType: 'keyboardKey' }, { letter: 'X', color: 'gray', keyType: 'keyboardKey' }, { letter: 'C', color: 'gray', keyType: 'keyboardKey' }, { letter: 'V', color: 'gray', keyType: 'keyboardKey' }, { letter: 'B', color: 'gray', keyType: 'keyboardKey' }, { letter: 'N', color: 'gray', keyType: 'keyboardKey' }, { letter: 'M', color: 'gray', keyType: 'keyboardKey' }, { letter: 'DEL', color: 'gray', keyType: 'keyboardKey' }, ],
  ],
  index: [0, 0],
  target: myTarget,
  answer: myAnswer,
  victor: false,
  bonus: false,
  message: 'THIS IS A TEST',
  modalvisibility: 'hidden',
  victorymodalvisibility: 'visible',
};


class App extends React.Component {
  render() {
    return (
      <div className='main' onClick={() => {
        this.forceUpdate(); //I know I'm not supposed to do this but couldn't any other way. 
      }}>

        <Modal message={state.message} ></Modal>
        <Board rows={state.rows} />
        <Keyboard rows={state.keyboardrows}/>
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
            let myString = ''
            for (let i = 0; i < 5; i++) {
              let rowIndex = state.index[0];
              let ourSpace = state.rows[rowIndex][i];
              let char = ourSpace.letter;
              myString += char
            }
            if (state.index[1] === 5 && isValidWord(myString)) {
              let rowIndex = state.index[0];
              enterRow();
              state.index[0] = state.index[0] + 1;
              state.index[1] = 0;
             } else {
                state.message="Invalid word.";
                state.modalvisibility='visible';
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
          if (state.index[0]===6 && state.victor===false) {
            state.message="Eheu! Tu non es victor...";
            state.modalvisibility='visible';
          }
        }}
        className={`space 
        ${colorToClassMap[this.props.color]}
        ${boardToClassMap[this.props.keyType]}
        ${this.props.className}`
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
  state.victor=true;
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
        let myind = findKeyboardIndex(ourSpace.letter);
        state.keyboardrows[myind[0]][myind[1]].color='green';
      } else if (state.target.indexOf(char)!== -1) {
        ourSpace.color = 'yellow'; //small problem: if the letter has already "greened" and appears a second time in the input, it will turn yellow; should be black
        let myind = findKeyboardIndex(ourSpace.letter);
        if (state.keyboardrows[myind[0]][myind[1]].color !== 'green'){
          state.keyboardrows[myind[0]][myind[1]].color = 'yellow';
        }
      } else {
        ourSpace.color = 'black'
        let myind = findKeyboardIndex(ourSpace.letter);
        state.keyboardrows[myind[0]][myind[1]].color = 'black';
      }
    } 
  if (hasWon()) {
    state.message='Euge! Tu es victor!';
    state.modalvisibility='visible';
  }
  console.log(state.index)
}

function findKeyboardIndex(someletter) {
  for(let i = 0; i<state.keyboardrows.length; i++) {
    for (let j=0; j<state.keyboardrows[i].length; j++) {
      if (state.keyboardrows[i][j].letter===someletter) {
        return [i,j]
      }
    }
  }
}

function isValidWord(word) {
  for (let i = 0; i<dictionary.length; i++) {
    if (word === dictionary[i][0]){
      return true;
    }
  }
  return false;
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

function Keyboard({ rows }) {
  return (
    <div className='keyboard'>
      <div className='keyboard-row'>
        {
          rows.map((row, key) => <Row key={key} spaces = {row}></Row>)
        }
      </div>
    </div>
  )
}

function Modal(props) {
  return (
    <div className = 'modal' style={{visibility: state.modalvisibility}}
      onClick={() => {
        state.modalvisibility='hidden'
      }
    }>
      <div>Quintilianus * SPQR * Verble</div>
      <div><strong>{props.message}</strong></div>
      <div>(Click anywhere in this box to make it disappear.)</div>
    </div>
  )
}

// function Victorymodal(props) {
//   return (
//     <div className = 'victoryModal' style = {{visibility: state.victorymodalvisibility}}>
//       <div>Quintilianus * SPQR * Verble</div>
//       <div>Euge! Tu es victor!</div>
//         <div>For bonus pecunia, what does {targetEntry[0]} mean?</div>
//         <input type='radio' name='mc' value='correct'>{props.answer}</input>
//     </div>
//   )
// }

export default App;