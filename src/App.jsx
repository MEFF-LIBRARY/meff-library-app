import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookList from './pages/booklist'
import AddBook from './pages/addBook'
import BookDetails from './pages/bookDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BookList />
    },
    {
      path: "/add-new",
      element: <AddBook />
    },
    {
      path: "/books/:id",
      element: <BookDetails />
    },
  ]);

  return <RouterProvider router={router} />
}

export default App
