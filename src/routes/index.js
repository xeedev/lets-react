import React, { memo } from 'react';
import { Router, Route } from 'react-router-dom';
import {SignInComponent} from "../components";


const Routes = () => (
    <Router>
            <Route path="/">
                <SignInComponent />
            </Route>
    </Router>
)

export default memo(Routes);
