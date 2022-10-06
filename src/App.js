
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Main from './Layouts/Main';
import Shop from './Components/Shop/Shop'
import Orders from './Components/Orders/Orders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        }
      ]
    },
    {
      path: 'about', 
      element: <About></About>
    },
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
