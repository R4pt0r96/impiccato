import { useEffect, useState } from 'react';
import './WordToFind.css';

const BoxLettera = ({ w, h, letter }) => {
  return (
    <div className='box_lettera' style={{ width: w, height: h, fontSize: w }}>
      {letter}
    </div>
  );
};

const WordToFind = ({ wordInserted, wordToFind }) => {
  const [wordSize, setWordSize] = useState('100px');

  const calcNewSize = () => {
    let windowSize = window.innerWidth;
    let newWidth = Math.floor((windowSize - 100) / wordToFind.length);
    if (newWidth < 100) {
      setWordSize(() => newWidth);
    } else {
      setWordSize(() => '100px');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', calcNewSize);

    return () => window.removeEventListener('resize', calcNewSize);
  }, []);

  return (
    <div className='div_word'>
      {wordInserted.map((letter) => (
        <BoxLettera
          key={Math.random()}
          w={wordSize}
          h={wordSize}
          letter={letter}
        />
      ))}
    </div>
  );
};
export default WordToFind;
