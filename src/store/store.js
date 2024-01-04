import { configureStore } from '@reduxjs/toolkit';
import { allArt } from './AllArt';

export default configureStore({
    reducer: {
        allArt: allArt.reducer,
    },
});
