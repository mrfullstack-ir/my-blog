import {createSlice} from "@reduxjs/toolkit"

export const setPostsItems = createSlice({
    name: "postsItems",
    initialState: {
        posts: [],
        totalPosts: 0,
        pagination: 0
    },
    reducers: {
        updatePosts: (state, action) => {
            state.posts = action.payload
        },
        updateTotalPosts: (state, action) => {
            state.totalPosts = action.payload
        },
        updatePagination: (state, action) => {
            state.pagination = action.payload
        }
    }
})

export const {updatePosts, updateTotalPosts, updatePagination} = setPostsItems.actions
export default setPostsItems.reducer