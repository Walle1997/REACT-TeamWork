import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HistoryItem {
  id: number;
  title: string;
  timestamp: string;
  description: string;
}

interface HistoryState {
  items: HistoryItem[];
}

const initialState: HistoryState = {
  items: [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistoryItem: (state, action: PayloadAction<HistoryItem>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addHistoryItem } = historySlice.actions;
export default historySlice.reducer;