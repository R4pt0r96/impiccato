import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Alfabeto from './components/alfabeto/Alfabeto';
import FormParola from './components/FormParola/FormParola';
import Life from './components/utility/Life';
import WordToFind from './components/WordToFind/WordToFind';
import ReplayIcon from '@mui/icons-material/Replay';
import { reset } from './redux/reduxSlice';

function App() {
  const dispatch = useDispatch();
  const [animation, setAnimation] = useState(false);
  const wordToFind = useSelector((state) => state.store.wordToFind);
  const wordInserted = useSelector((state) => state.store.wordInserted);
  const life = useSelector((state) => state.store.life);

  useEffect(() => {
    setAnimation(() => true);
  }, [animation]);

  const resetGame = () => {
    dispatch(reset());
    setAnimation(() => false);
  };

  if (life <= 0) {
    return (
      <div className='app'>
        <div
          className={animation ? 'title_logo title_animation' : 'title_logo'}
        >
          <h1 className='title'>IMPICCAT</h1>
          <img className='logo' alt='logo' src={require('./logo.png')}></img>
        </div>
        <div className='loser'>
          <img src='https://image.spreadshirtmedia.net/image-server/v1/designs/172414714,width=178,height=178,colors%5B0%5D=000000.png'></img>
          <h1>HAI PERSO !!!</h1>
          <p>La parola era: {wordToFind.map((l) => l)}</p>
          <IconButton
            onClick={resetGame}
            aria-label='reload'
            size='large'
            style={{ width: '50px', border: 'solid 1px black' }}
          >
            <ReplayIcon fontSize='inherit' />
          </IconButton>
        </div>
      </div>
    );
  }

  if (!wordInserted.includes('') && wordInserted.length !== 0 && life > 0) {
    return (
      <div className='app'>
        <div
          className={animation ? 'title_logo title_animation' : 'title_logo'}
        >
          <h1 className='title'>IMPICCAT</h1>
          <img className='logo' alt='logo' src={require('./logo.png')}></img>
        </div>
        <div className='victory'>
          <h1>HAI VINTO !!!</h1>
          <p>La parola era: {wordToFind.map((l) => l)}</p>
          <IconButton
            onClick={resetGame}
            aria-label='reload'
            size='large'
            style={{ width: '50px', border: 'solid 1px black' }}
          >
            <ReplayIcon fontSize='inherit' />
          </IconButton>
        </div>
      </div>
    );
  }

  return (
    <div className='app'>
      <div className={animation ? 'title_logo title_animation' : 'title_logo'}>
        <h1 className='title'>IMPICCAT</h1>
        <img className='logo' alt='logo' src={require('./logo.png')}></img>
      </div>
      {wordToFind.length === 0 && (
        <FormParola animation={animation ? 'opacityAnimation' : null} />
      )}
      {wordToFind.length !== 0 && <Life life={life} />}
      {wordToFind.length !== 0 && <Alfabeto />}
      {wordToFind.length !== 0 && (
        <WordToFind wordInserted={wordInserted} wordToFind={wordToFind} />
      )}
    </div>
  );
}

export default App;
