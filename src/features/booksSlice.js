import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  books: [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A novel about the American dream.",
      rating: 4.4,
      category: "Classic"
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      description: "A guide to building good habits.",
      rating: 4.7,
      category: "Self-Help"
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      description: "Dystopian novel about surveillance and control.",
      rating: 4.6,
      category: "Classic"
    },
    {
      id: 4,
      title: "The Lean Startup",
      author: "Eric Ries",
      description: "How modern companies use innovation.",
      rating: 4.2,
      category: "Business"
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = { ...action.payload, id: Date.now() };
      state.books.push(newBook);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
