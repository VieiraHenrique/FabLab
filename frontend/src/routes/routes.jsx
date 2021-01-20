import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Template } from '../components/customer/Template';
import { Admin } from '../components/admin/Admin';

const Routes = (props) => {
    return (
        <Switch>
            <Route path={["/admin/:view", "/admin"]}>
                <Admin />
            </Route>
            <Route path={["/:view/:id", "/:view", "/"]}>
                <Template />
            </Route>
        </Switch>
    )
}

export default Routes;