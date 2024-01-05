import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const result = await axios
    .get('http://openapi.seoul.go.kr:8088/7a7875414e4b6f72313031474b746970/json/gongGongArtStatue/1/200/')
    .then((res) => res.data.gongGongArtStatue.row);
// .then((res) => res.data);

export let sttArt = createSlice({
    name: 'sttArt',
    initialState: result,
});
