import { configureStore } from '@reduxjs/toolkit';
import { sttArt } from './Statue';
import { ectArt } from './EctArt';
import { allArt } from './AllArt';

export default configureStore({
    reducer: {
        sttArt: sttArt.reducer,
        ectArt: ectArt.reducer,
        allArt: allArt.reducer,
    },
});
