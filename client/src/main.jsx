import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import Navbar from './Admin/Components/Navbar/Navbar.jsx';
import Sidebar from './Admin/Components/Sidebar/Sidebar.jsx';

createRoot(document.getElementById('root')).render(
  <Sidebar />

)
