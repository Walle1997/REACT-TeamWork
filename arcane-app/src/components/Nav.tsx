import React from "react";

import LogInBtn from "./Links/LogInBtn";
import Favorite from "./Links/Favorite";
import Authentication from "./Links/Authentication";

const Nav: React.FC = () => {
    return (
        <ul className="header__block">
            <li className="header__item"><Favorite /></li>
            <li className="header__item"><LogInBtn /></li>
            <li className="header__item"><Authentication /></li>
        </ul>
    );
};

export default Nav;