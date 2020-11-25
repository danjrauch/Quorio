import { remote } from 'electron';
import React, { useState, useEffect } from 'react';
import '@/app/app.scss';
import Board from './board';

interface Props {

}

const App: React.FC<Props> = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  //const [window, setWindow] = useState(remote.getCurrentWindow());

  //useEffect(() => {
    //console.log("Hey");
    // console.log(window.getSize()[0]);
    // console.log(window.getSize()[1]);
    // const updateWindowDimensions = () => {
    //   const size = win.getSize();
    //   const width = size[0];
    //   const height = size[1];
    //   console.log(`${width} - ${height}`);
    //   setWidth(width);
    //   setHeight(height);
    // }
    // updateWindowDimensions();
    // win.on('resize', updateWindowDimensions);

    // return () => {
    //   win.removeListener('resize', updateWindowDimensions); 
    // }
  //});
  
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start'
    }} className='grid' >
      <div className='grid__col grid__col--1-of-3'>
        <div className='column'>
          Engine
        </div>
      </div>
      <div className='grid__col grid__col--1-of-3 column'>
        <div className='column'>
          <Board rows={9} columns={9} squareWidth={90 / 9} />
        </div>
      </div>
      <div className='grid__col grid__col--1-of-3 column'>
        <div className='column'>
          Notation
        </div>
      </div>
    </div>
  );
}

export default App;