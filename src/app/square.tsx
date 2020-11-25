import React, { CSSProperties } from 'react';
import '@/app/app.scss';

interface Props {
  width: number;
  height: number;
  x: number;
  y: number;
}

const Square: React.FC<Props> = (props: Props) => {
  const squareStyle : CSSProperties = {
    height: `${props.height}px`,
    width: `${props.width}px`,
    left: `${props.x}px`,
    top: `${props.y}px`,
    position: "absolute"
  }
  return (
    <div style={squareStyle} className="square"></div>
  );
}

export default Square;