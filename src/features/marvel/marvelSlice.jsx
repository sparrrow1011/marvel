import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
import MD5 from "crypto-js/md5"
import {nanoid} from "nanoid";

const API_URL= "https://gateway.marvel.com:443/v1/";

const getHash = (ts, secretKey, publicKey) =>{
    return MD5(ts + secretKey + publicKey).toString();
};

const initialState = {
    comics: [],
    loading: false,
    error: null,
    comicsPerPage: 12,
    currentPage: 1
};

let baseUrl = `${API_URL}/public/comics`;
let ts = nanoid(10);
let apiKey = "f4bb7c43073357bda2eab008bb4cd9cc";
let privateKey = "454008c057f6ad1b8f5cabf69bc5d6cd58af68e8";
let hash = getHash(ts, privateKey, apiKey);
let url = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

export const fetchAllComics = createAsyncThunk(
    '',
    async (name, { rejectWithValue }) => {
        try {
            let response = await axios.get(url)
            let data = await response.data.data.results;
            console.log(data);
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch comics.');
        }
    }
);
export const fetchComics = createAsyncThunk(
    '',
    async (name, { rejectWithValue }) => {
        let extension=`&titleStartsWith=`;
        try {
            let response = await axios.get(url+extension+name)
            let data = await response.data.data.results;
            console.log(data);
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch comics.');
        }
    }
);




export const comicsSlice = createSlice({
    name: 'comics',
    initialState,
    comicsPerPage: 12,
    currentPage: 1,
    reducers: {
        reset: (state) => initialState,
        addFavouriteComic: (state, action) => {
            // state.favourites = action.payload;
            localStorage.setItem('favourites', JSON.stringify(action.payload));
        },
        onNavigateNext: (state) => {
            state.currentPage++;
        },
        onNavigatePrev: (state) => {
            state.currentPage--;
        },
        onChangeComicPerPage: (state, action) => {
            state.ComicsPerPage = action.payload;
        },
        onClickCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
    extraReducers: {
        [fetchAllComics.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [fetchAllComics.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.comics = payload;
        },
        [fetchAllComics.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [fetchComics.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [fetchComics.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.comics = payload;
        },
        [fetchComics.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
    },
});

// export const { reset } = comicsSlice.actions
export const comicActions = comicsSlice.actions
export default comicsSlice.reducer;
