import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  word: '',
  wordToFind: [],
  wordInserted: [],
  wordWrong: [],
  life: 6,
  alfabeto: [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ],
};

export const reduxSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    saveWord: (state, action) => {
      let word = action.payload.toUpperCase();
      let arrWord = word.split('');
      let arr2 = [];
      for (let i = 0; i < arrWord.length; i++) {
        arr2.push('');
      }
      return { ...state, wordToFind: arrWord, word: word, wordInserted: arr2 };
    },
    insertLetter: (state, action) => {
      const letter = action.payload.toUpperCase();

      if (state.wordToFind.includes(letter)) {
        for (let i = 0; i < state.wordToFind.length; i++) {
          const e = state.wordToFind[i];
          if (e === letter) {
            state.wordInserted[i] = e;
          }
        }
      } else {
        state.life -= 1;
        state.wordWrong.push(letter);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset, saveWord, insertLetter } = reduxSlice.actions;

export default reduxSlice.reducer;
