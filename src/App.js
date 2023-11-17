import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import ProductDetailPage from './pages/ProductDetailPage';
import ForecastTable from './features/product/components/ForecastTable';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  { 
    path: '/product-detail',
    element: <ProductDetailPage/>,
  },
  { 
    path: '/forcast-detail',
    element: <ForecastTable/>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
