import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../Pages/Home"
import Blogs from "../Pages/Blogs"
import Bookmarks from "../Pages/Bookmarks"
import Blog from "../Pages/Blog"
import Content from "../components/Content"
import Author from "../components/Author"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blogs',
                element: <Blogs />,
                loader: () => fetch('https://dev.to/api/articles/latest?per_page=20&top=7'),
            },
            {
                path: '/bookmarks',
                element: <Bookmarks />
            },
            {
                path: '/blog/:id',
                element: <Blog />,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                children: [
                    {
                        index: true,
                        element: <Content />,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                    },
                    {
                        path: 'author',
                        element: <Author />,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                    }
                ]
            },
        ]
    },

])