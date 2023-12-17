import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux"
import store from "./services/redux/store"
import "./styles/app/prefix.css"
import "./styles/app/fonts.css"
import "./styles/app/flexbox.css"
import {HomePage} from "./pages/HomePage";
import {PostPage} from "./pages/PostPage";
import {TagPage} from "./pages/TagPage";
import {CategoryPage} from "./pages/CategoryPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/post/:slug",
        element: <PostPage/>
    },
    {
        path: "/tag/:slug",
        element: <TagPage/>
    },
    {
        path: "/category/:slug",
        element: <CategoryPage/>
    }
])

root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);

