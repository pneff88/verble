import React from 'react';
import './App.css';
let startingKey = { letter: '', color: 'white', keyType: 'boardKey' };
let state = {
  rows: [
    [startingKey, startingKey, startingKey, startingKey, startingKey],
    [startingKey, startingKey, startingKey, startingKey, startingKey],
    [startingKey, startingKey, startingKey, startingKey, startingKey],
    [startingKey, startingKey, startingKey, startingKey, startingKey],
    [startingKey, startingKey, startingKey, startingKey, startingKey],
    [startingKey, startingKey, startingKey, startingKey, startingKey]
  ],
  index: [0, 0],
  target: 'mater',
};

function App() {
  return (
    <div className='main'>
      <Board rows={state.rows} />
      <Keyboard />
    </div>
  );
}

function Space(props) { //will be passed letter

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
        if (props.letter=='ENTER') {
          console.log('Enter pressed')
          if (state.index[1]==6) {
            //run word check
          }
        } else if (props.letter=='DEL') {
          console.log('Del pressed.')
          if (state.index[1]<6 && state.index[1] > 0) {
            let currentSpace = state.rows[state.index[0]][state.index[1]]
            currentSpace.letter='';
            state.index[1]=state.index[1]-1;
          }
        } else {
          console.log(props.letter);
          let currentSpace = state.rows[state.index[0]][state.index[1]]
          console.log(currentSpace);
          currentSpace.letter=props.letter;
          console.log(state.index);
          state.index[1] = state.index[1]+1;
          console.log(state.index);
        }
        
      }}
      className={`space 
        ${colorToClassMap[props.color]}
        ${props.className}
        ${boardToClassMap[props.keyType]}`
      } >
      {props.letter}
    </div>
  )
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

export default App;