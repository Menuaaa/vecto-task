import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
   
  } from 'react-router-dom';
  import PagesHeader from "./pages/pagesHeader/PagesHeader";




const Routs =()=>{
    return(
        <>
        <Router>
                <Routes>
                    <Route path ="/" element={<PagesHeader/>}/>
                </Routes>
        </Router>
        </>
    )

}
export default Routs