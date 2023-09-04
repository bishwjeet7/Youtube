import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import AllRoutes from './components/AllRoutes'
function App() {
  return (
    <Router>
      <Navbar/>
      <AllRoutes/>
    </Router>
  );
}

export default App;
