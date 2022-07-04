import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import { AboutScreen } from './AboutScreen'
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export let AppRouter = () => {
    
    return( 

        <Router>
        <div>
            
            <NavBar/>
        <div className='container'>    
        <Routes>
            <Route exact path="/" element = {<HomeScreen/>}/>
            <Route exact path="/about" element = {<AboutScreen/>}/>
            <Route exact path= "/Login" element= {<LoginScreen/>}/>
            <Route component = {<HomeScreen/>}/>
        </Routes>
        </div>


        </div>
        </Router>
    
    )
}
