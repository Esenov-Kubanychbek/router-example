import { Route } from "react-router"
import { Link } from 'react-router-dom';

import classes from "./Categories.module.css";
import Action from "./Action/Action"
import Educational from "./Educational/Educational"
import Race from "./Race/Race"
import Strategy from "./Strategy/Strategy"

const Categories = () => {
    return ( <div className={classes.Categories}>
        <div  className={classes.categories}>
        
            <Link to="/categories/action">Action</Link>
            <Link to="/categories/educational">Educational</Link>
            <Link to="/categories/race">Race</Link>
            <Link to="/categories/strategy">Strategy</Link>
       
            
       <switch>
           <Route path="/categories/action" component = {Action}/>
            <Route path="/categories/educational" component = {Educational}/>
            <Route path="/categories/race" component = {Race}/>
            <Route path="/categories/strategy" component = {Strategy}/>
       </switch>
            
        </div>
        
      
    </div> );
}
 
export default Categories;