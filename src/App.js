import './App.css';
import About from "./About/About"
import Contakts from "./Contakts/Contakts"
import Home from "./Home/Home"
import Categories from "./Categories/Categories"
import New from "./New/New"
import Ofline from "./Ofline/Ofline"
import Online from "./Online/Online"
import Popular from "./Popular/Popular"
import { Route } from "react-router"
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <div className="App1" >
     <div className="app" >
       <h2>PC Games</h2>
       <Link to="/">Home</Link>
        <Link to="/about">About</Link>
       <Link to="/contakts">Contakts</Link>
       <Link to="/new">New</Link>
        <Link to="/categories">Categories</Link>
       <Link to="/popular">Popular</Link>
       <Link to="/online">Online</Link>
        <Link to="/ofline">Ofline</Link></div>
        <div className="result" >
          <switch>
          <Route path="/about" component = {About}/>
          <Route path="/contakts" component = {Contakts}/>
          <Route path="/" component = {Home} exact/>
          <Route path="/new" component = {New}/>
          <Route path="/categories" component = {Categories}/>
          <Route path="/popular" component = {Popular}/>
          <Route path="/online" component = {Online}/>
          <Route path="/ofline" component = {Ofline}/>
        </switch>
         
        </div>
        
     </div>
      
       
     
     
      
    </div>
  );
}

export default App;
