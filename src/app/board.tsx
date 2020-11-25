import React, { Fragment } from 'react';
import '@/app/app.scss';
import Square from './square';

interface Props {
  rows: number;
  columns: number;
  squareWidth: number;
}

const Board: React.FC<Props> = (props: Props) => {
  console.log("- Started building board.");
  const inBetween = 1;
  let rows = [];
  for (let i = 0; i < props.rows; ++i) {
    for (let j = 0; j < props.columns; ++j) {
      const x = j < props.rows/2 ? -(j*props.squareWidth) : j*props.squareWidth;
      rows.push(<Square width={props.squareWidth - inBetween} height={props.squareWidth - inBetween}
                        x={x} y={i*props.squareWidth} />);
    }
  }
  console.log("- Finished building board.");
  return <div style={{position: "relative"}}> {rows} </div>;
}

export default Board;