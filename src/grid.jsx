// Grid.js

import React, { useState, createContext } from 'react';
import Cell from './cell';

export const GridContext = createContext();

const Grid = () => {
  const [gridState, setGridState] = useState({
    cell1: false,
    cell2: false,
    cell3: false,
    cell4: false,
  });

  const countOnCells = () => {
    return Object.values(gridState).filter((cell) => cell).length;
  };

  return (
    <GridContext.Provider value={{ gridState, setGridState }}>
      <div>
        <h2 style={{ textAlign: 'center' }}>Count: {countOnCells()}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
          <Cell id="cell1" />
          <Cell id="cell2" />
          <Cell id="cell3" />
          <Cell id="cell4" />
        </div>
      </div>
    </GridContext.Provider>
  );
};

export default Grid;
