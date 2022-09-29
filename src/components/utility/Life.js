import { useSelector } from 'react-redux';
import './Life.css';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';
import Looks6Icon from '@mui/icons-material/Looks6';
import { useEffect, useState } from 'react';

const Life = ({ life }) => {
  const [updateCSS, setUpdateCSS] = useState();
  useEffect(() => {
    setUpdateCSS(() => 'div_life div_life_anim');
    setTimeout(() => {
      setUpdateCSS(() => 'div_life');
    }, 1000);
  }, [life]);

  const numberIcon = () => {
    switch (life) {
      case 1:
        return (
          <LooksOneIcon
            sx={{ color: '#E6000B' }}
            style={{
              width: '50px',
              height: '50px',
              position: 'relative',
              top: '7px',
              marginLeft: '1rem',
            }}
          />
        );
      case 2:
        return (
          <LooksTwoIcon
            sx={{ color: '#E6000B' }}
            style={{
              width: '50px',
              height: '50px',
              position: 'relative',
              top: '7px',
              marginLeft: '1rem',
            }}
          />
        );
      case 3:
        return (
          <Looks3Icon
            sx={{ color: '#E6000B' }}
            style={{
              width: '50px',
              height: '50px',
              position: 'relative',
              top: '7px',
              marginLeft: '1rem',
            }}
          />
        );
      case 4:
        return (
          <Looks4Icon
            sx={{ color: '#00E68E' }}
            style={{
              width: '50px',
              height: '50px',
              position: 'relative',
              top: '7px',
              marginLeft: '1rem',
            }}
          />
        );
      case 5:
        return (
          <Looks5Icon
            sx={{ color: '#00E68E' }}
            style={{
              width: '50px',
              height: '50px',
              position: 'relative',
              top: '7px',
              marginLeft: '1rem',
            }}
          />
        );
      case 6:
        return (
          <Looks6Icon
            sx={{ color: '#00E68E' }}
            style={{
              width: '50px',
              height: '50px',
              position: 'relative',
              top: '7px',
              marginLeft: '1rem',
            }}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className={updateCSS}>
      <h3>Vite rimanenti: </h3>
      {numberIcon()}
    </div>
  );
};
export default Life;
