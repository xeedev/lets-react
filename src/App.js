import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import {SignInComponent, TemporaryDrawer} from "./components";
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
                        <li>
                            <p>{process.env.REACT_APP_SERVER_URL}</p>
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
