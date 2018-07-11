import React from "react";
import { Route, Link } from "react-router-dom";

const SideItem = ({ to, ...rest }) => (
    <Route
        path={to}
        exact
        children={({ match }) => (
            <Link to={to} {...rest} className={match ? "side-item active" : "side-item"} />
        )}
    />
);

export default SideItem;

