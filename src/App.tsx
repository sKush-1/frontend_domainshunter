import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import DomainPricing from './components/DomainPricing';




const App = () => {
  const router = createBrowserRouter([

    {
        path:"/",
        element: <Home/>
    },
    {
      path:"/pricing",
      element: <DomainPricing/>
  },
   
   
]);

return <RouterProvider router={router} />;


 
}

export default App