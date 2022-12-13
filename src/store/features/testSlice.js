import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  test: 'test',
};

const test = createSlice({
  name: 'test',
  initialState,
  reducers: {
    create(state) {
      state.test = 'test!';
    },
  },
});

export default test.reducer;
