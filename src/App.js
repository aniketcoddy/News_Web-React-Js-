
import "./App.css";
import KeepNotes from "./component/KeepNotes";
import News from "./component/News";
import Profile from "./component/Profile";
import Search from "./component/Search";
import Navbar from "./component/Navbar";
import Top from "./component/Top";
import Weather from "./component/Weather";
import Writer from "./component/Writer";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {


  return (
    
    <div className="relative w-[1519px] h-[1938px] bg-[#F4F9F8]">
      <div>
       
        <KeepNotes/>
        <Writer/>
        <Weather/>
        <Profile/>
        <Search/>
        <Top/>
        <Router>
          <Navbar/>
        <Routes>
        <Route exact path="/general"  element={<News country="in"  key = "general" category="general"/>} />
        <Route exact path="/business" element={<News country="in"  key = "business" category="business"/>} />
        <Route exact path="/entertainment" element={<News country="in" key = "entertainment"  category="entertainment"/>} />
        <Route exact path="/health" element={<News  key = "health" country="in" category="health"/>} />
        <Route exact path="/science" element={<News key = "science"  country="in" category="science"/>} />
        <Route exact path="/sports" element={<News key = "sports"  country="in" category="sports"/>} />
        <Route exact path="/technology" element={<News key = "technology"  country="in" category="technology"/>} />
        </Routes>
        </Router>
        
        </div>
      </div>
    
  );
}
export default App;
