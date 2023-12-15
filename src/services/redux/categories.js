import {createSlice} from "@reduxjs/toolkit"

export const setCategoriesItems = createSlice({
    name: "categoryItems",
    initialState: {
        categories: [],
    },
    reducers: {
        updateCategories: (state, action) => {
            state.categories = action.payload
        }
    }
})

export const {updateCategories} = setCategoriesItems.actions
export default setCategoriesItems.reducer