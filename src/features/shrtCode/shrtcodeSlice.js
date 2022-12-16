import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    shortLinks: {},
    error: {},
    loading: false
}

export const getShrtCode = createAsyncThunk(
    'shrtcode/getShrtCode',
    async (path) => {
         return await fetch(`https://api.shrtco.de/v2/shorten?url=${path}`).then(
            (data) => data.json()
        )
});

export const shirtcodeSlice = createSlice({
    name: 'shirtcode',
    initialState,
    reducers: {},
    extraReducers: {
        [getShrtCode.pending]: (state) => {
            state.loading = true
        },
        [getShrtCode.fulfilled]: (state, {payload}) => {
            state.loading = false;
            if(payload.ok){
                state.shortLinks = payload.result;
                state.error = {};
            } else {
                state.shortLinks = {};
                state.error = payload;
            }
        },
        [getShrtCode.rejected]: (state) => {
            state.loading = false
        },
    },
})

export default shirtcodeSlice.reducer
