import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BrowseBooks from './components/BrowseBooks';
import Home from './components/Home.jsx'
import BookDetails from './components/BookDetails.jsx'
import NotFound from './components/NotFound.jsx'
import AddBook from './components/AddBook.jsx'

const appRouter = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/browse',
        element: <BrowseBooks />
      },
      {
        path: '/browse/:id',
        element: <BookDetails />
      },
      {
        path:"/browse/:category",
        element:<BrowseBooks />
      },
      {
        path:"/addBook",
        element:<AddBook />
      }
    ]
  },
  

  ]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}></RouterProvider>
)
