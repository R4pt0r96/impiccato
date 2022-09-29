import { useDispatch } from 'react-redux';
import { insertLetter } from '../../redux/reduxSlice';
import './styles.css';

const Lettera = ({ l }) => {
  const dispatch = useDispatch();

  const handleClick = (lettera) => {
    dispatch(insertLetter(lettera));
  };

  if (l === '') {
    return <div className='lettera_disabled'></div>;
  } else {
    return (
      <div className='lettera' onClick={() => handleClick(l)}>
        {l}
      </div>
    );
  }
};
export default Lettera;
