import React from "react";
import './navbar.module.css';

import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <>
            <section>
                <nav>
                    <Link to="/">logo</Link>
                    <Link to="/">Home</Link>
                </nav>
            </section>
        </>
    )
}

export default Navbar;