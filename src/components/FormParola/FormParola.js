import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './styles.css';
import { useDispatch } from 'react-redux';
import { saveWord } from '../../redux/reduxSlice';

const theme = createTheme({
  palette: {
    mycolor: {
      main: '#00E68E',
      contrastText: '#005233',
    },
  },
});

const FormParola = ({ animation }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [inputError, setInputError] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (e.target.word.value === '') {
      setInputError(() => true);
    } else {
      dispatch(saveWord(e.target.word.value));
      handleClose();
    }
  };

  return (
    <div className={animation}>
      <ThemeProvider theme={theme}>
        <Button variant='contained' color='mycolor' onClick={handleClickOpen}>
          INSERISCI LA PAROLA
        </Button>
      </ThemeProvider>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Parola da indovinare:</DialogTitle>
        <form onSubmit={handleSave}>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              id='word'
              name='word'
              label='Parola'
              type='text'
              fullWidth
              variant='standard'
              error={inputError}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Annulla</Button>
            <Button type='submit'>Gioca</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default FormParola;
