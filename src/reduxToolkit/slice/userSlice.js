import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
	user: {},
	isLoading: false,
}

const getAll = createAsyncThunk('userSlice/getAll', async (_, thunkAPI) => {
	try {
		const { data } = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
		)
		return data
	} catch (err) {
		return thunkAPI.rejectWithValue(err)
	}
})

const userSlice = createSlice({
	name: 'userSlice', //prefix
	initialState,
	reducers: {}, //
	extraReducers: build =>
		build
			.addCase(getAll.pending, (state, actions) => {
				state.isLoading = true
			})
			.addCase(getAll.fulfilled, (state, actions) => {
				state.user = actions.payload
				state.isLoading = false
			}),
})

const { reducer: userReducer, actions } = userSlice

const userActions = {
	...actions,
	getAll,
}
export { userActions, userReducer }
