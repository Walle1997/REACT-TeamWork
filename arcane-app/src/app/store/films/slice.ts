import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';

export interface FilmsState {
  data: any;
  status: 'idle' | 'loading' | 'failed';
}

export interface Options {
  method: string
  headers: Record<string, string>
}

const initialState: FilmsState = {
  data: {},
  status: 'idle',
};

const filmsUrl: string = 'https://moviesdatabase.p.rapidapi.com/titles/random?list=most_pop_series'

const options: Options = {
  method: 'GET',
	headers: {
		'x-rapidapi-key': '09f082c195msh34c805ac40c57ccp1a08d2jsn649906a4295a',
		'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
	}
}

export const getFilmsData = createAsyncThunk(
  'films/getFilms',
  async () => {
    try {
      const response = await fetch(filmsUrl, options);
      return response.json();
    } catch(error:any){
      return isRejectedWithValue(error.response);
    }
  }
);

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(getFilmsData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getFilmsData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(getFilmsData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectFilms = (state: RootState) => state.films;

export default filmsSlice.reducer;
