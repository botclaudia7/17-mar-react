import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root';
import Home from './Components/Home';
import About from './Components/About';
import Pages from './Components/Pages';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Team from './Components/Team';

import './App.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error/>,
    children:
      [
       { path: '/Home', element: <Home/> },
       { path: '/About', element: <About/> },
       { path: '/Pages', element: <Pages/> ,
        children:
        [
          { path: 'Team', element: <Team/> }
        ]
        },
       // { path: '/Pages/Team', element: <Team/> },

       { path: '/Blog', element: <Blog/> },
       { path: '/Contact', element: <Contact/> },
      ]
  },

]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
