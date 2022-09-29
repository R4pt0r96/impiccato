import './styles.css';
import { useSelector } from 'react-redux';
import Lettera from './Lettera';

const Alfabeto = () => {
  const alfabeto = useSelector((state) => state.store.alfabeto);
  const wordInserted = useSelector((state) => state.store.wordInserted);
  const wordWrong = useSelector((state) => state.store.wordWrong);
  return (
    <div className='alfabeto'>
      {alfabeto.map((lettera) => {
        if (wordInserted.includes(lettera) || wordWrong.includes(lettera)) {
          return <Lettera key={lettera} l='' />;
        } else {
          return <Lettera key={lettera} l={lettera} />;
        }
      })}
    </div>
  );
};
export default Alfabeto;
