import React from "react";
import css from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import FriendsBlockContainer from "./FriendsBlock/FriendsBlockContainer";

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <div>
                <div className={css.item}>
                    <NavLink to="/profile" activeClassName={css.active}>Profile</NavLink>
                </div>
                <div className={css.item}>
                    <NavLink to="/dialogs" activeClassName={css.active}>Dialogs</NavLink>
                </div>
                <div className={css.item}>
                    <NavLink to="/users" activeClassName={css.active}>Users</NavLink>
                </div>
                <div className={css.item}>
                    <NavLink to="/news" activeClassName={css.active}>News</NavLink>
                </div>
                <div className={css.item}>
                    <NavLink to="/music" activeClassName={css.active}>Music</NavLink>
                </div>
                <div className={css.item}>
                    <NavLink to="/settings" activeClassName={css.active}>Settings</NavLink>
                </div>
            </div>
            <FriendsBlockContainer />
        </nav>
    );
}

export default Navbar;