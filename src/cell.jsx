// Cell.js

import React, { useContext } from 'react';
import { GridContext } from './grid';

const Cell = ({ id }) => {
  const { gridState, setGridState } = useContext(GridContext);

  const handleClick = () => {
    const newGridState = { ...gridState };
    newGridState[id] = !newGridState[id];
    setGridState(newGridState);
  };

  return (
    <div
      className="cell"
      style={{
        width: '100px',
        height: '100px',
        border: '1px solid grey',
        backgroundColor: gridState[id] ? 'black' : 'white',
      }}
      onClick={handleClick}
    />
  );
};

export default Cell;
