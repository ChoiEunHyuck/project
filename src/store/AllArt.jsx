import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const result = await axios
    .get('http://openapi.seoul.go.kr:8088/7a7875414e4b6f72313031474b746970/json/tvGonggongAllArt/1/200/')
    .then((res) => res.data.tvGonggongAllArt.row);
// .then((res) => res.data);

export let allArt = createSlice({
    name: 'allArt',
    initialState: result,
});
