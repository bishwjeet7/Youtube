import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import AllRoutes from './components/AllRoutes'
import DrawerSidebar from './components/LeftSidebar/DrawerSidebar';
function App() {
  return (
    <Router>
      <Navbar/>
      {
        <DrawerSidebar/>
      }
      <AllRoutes/>
    </Router>
  );
}

export default App;
