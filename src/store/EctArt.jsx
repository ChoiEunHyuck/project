import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const result = await axios
    .get('http://openapi.seoul.go.kr:8088/7a7875414e4b6f72313031474b746970/json/gongGongArtEtc/1/300/')
    .then((res) => res.data.gongGongArtEtc.row);
// .then((res) => res.data);

export let ectArt = createSlice({
    name: 'ectArt',
    initialState: result,
});
