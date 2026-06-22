import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddProduct />
              <ProductList />
            </>
          }
        />

        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;