import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
	name: "query",
	initialState: { value: "" },
	reducers: {
		setQuery(state, action) {
			state.value = action.payload
		}
	}
})

export const { setQuery } = slice.actions
export default slice.reducer
