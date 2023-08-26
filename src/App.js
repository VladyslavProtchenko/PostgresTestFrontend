import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Main from './pages/Main/Main';
import End from './pages/other/End';
import Receipts from './pages/other/receipts';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Main/>}/>
    <Route path='/end' element={<End/>}/>
    <Route path='/receipts' element={<Receipts/>}/>
  </Route>
))

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;