import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import { getDataFromServer } from './redux/Rockets/RocketsSlice';
import './index.css';
import Navbar from './components/Navbar';
import Dragons from './components/Dragons';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFromServer());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/dragons" element={<Dragons />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
