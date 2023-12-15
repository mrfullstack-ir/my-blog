import {configureStore} from '@reduxjs/toolkit'
import posts from "./posts";
import categories from "./categories";

export default configureStore({
    reducer: {
        posts: posts,
        categories: categories
    }
})