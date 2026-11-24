import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import MainRoute from './Routes/MainRoute';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainRoute />
  </BrowserRouter>
)
