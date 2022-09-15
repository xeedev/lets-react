import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import {SignInComponent, TemporaryDrawer} from "./components";
// require('dotenv').config()
export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>

                {/* 👇️ Wrap your Route components in a Routes component */}
                <Routes>
                    <Route path="/about" element={<TemporaryDrawer />} />
                    <Route path="/" element={<SignInComponent />} />
                </Routes>
            </div>
        </Router>
    );
}
