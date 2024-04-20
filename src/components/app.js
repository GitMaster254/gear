import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Event from './Events/Events';

// Import your other components here

function App() {
    return (
        <Router>
            <div>
                {/* Define your app's navigation here */}
                <nav>

                </nav>

                {/* Define your app's routes here */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="/contact">
                        <Contact />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>

                    <Route path="/event">
                        <Event />
                    </Route>
                    
                </Switch>
            </div>
        </Router>
    );
}

export default App;