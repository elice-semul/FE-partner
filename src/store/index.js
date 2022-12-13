import { configureStore } from '@reduxjs/toolkit';

import testReducer from '@/store/features/testSlice';

export const store = configureStore({ reducer: { testReducer } });
