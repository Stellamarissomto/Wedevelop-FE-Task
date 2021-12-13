import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface BookstoreState {
  book: any;
  loading: boolean;
}

const initialState: BookstoreState = {
  book: [],
  loading: false,
};


export const getBooks: any = createAsyncThunk(
  "book/getBooks",
  async (dispatch, getState) => {
    return await axios.get("http://localhost:5000/v1/book").then(
      (res) => res.data
    );
  }
);


export const bookSlice = createSlice({
  name: 'book',
  initialState,

  reducers: {},
  
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.loading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.book = action.payload;
    },
    [getBooks.rejected]: (state, action) => {
      state.loading = false;
    },
  },

})

  
export default bookSlice.reducer;
