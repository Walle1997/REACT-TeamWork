import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteItem {
  id: number;
  title: string;
  description: string;
}

interface FavoritesState {
  items: FavoriteItem[];
}

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoriteItem>) => {
      state.items.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;