
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
import Right from "./component/Right";

function App() {

const pageSize=10;

  return (
    
    <div>
    
   <div>
        <KeepNotes/>
        <Writer/>
       <Right/>
        <Profile/>
        <Search/>
        <Top/>
        </div>

        <Router>
          <Navbar/>
        <Routes>
        <Route exact path="/"  element={<News country="in"  pageSize={pageSize} key = "general" category="general"/>} />
        <Route exact path="/general"  element={<News country="in"  pageSize={pageSize} key = "general" category="general"/>} />
        <Route exact path="/business" element={<News country="in"  pageSize={pageSize} key = "business" category="business"/>} />
        <Route exact path="/entertainment" element={<News country="in" pageSize={pageSize} key = "entertainment"  category="entertainment"/>} />
        <Route exact path="/health" element={<News  pageSize={pageSize} key = "health" country="in" category="health"/>} />
        <Route exact path="/science" element={<News pageSize={pageSize} key = "science"  country="in" category="science"/>} />
        <Route exact path="/sports" element={<News pageSize={pageSize} key = "sports"  country="in" category="sports"/>} />
        <Route exact path="/technology" element={<News  pageSize={pageSize} key = "technology"  country="in" category="technology"/>} />
        </Routes>
       
        </Router>
        
    </div>
  );
}
export default App;
