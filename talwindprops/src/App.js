import logo from './logo.svg';
import './App.css';
import Getpost from './Components/Getdata';
import Createpost from './Components/Createpost';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetAllPostData from './Components/AllPost';
import Main from './Components/Main';


function App() {
  return (
    <Router>
      <Main/>
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/allpost" element={<GetAllPostData />} />
        <Route path="/getpost/:id" element={<Getpost />} />
        <Route path="/createpost" element={<Createpost />} />
      </Routes>
    </Router>
  );
}

export default App;
