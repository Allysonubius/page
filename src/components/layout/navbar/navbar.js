import React from "react";

import styles from './navbar.module.css';

import {Link} from 'react-router-dom';

import logo from '../../../img/icons8-person-80.png';

function Navbar(){
    return(
        <>
            <section >
                <nav className={styles.navbar}>
                    <Link to="/" className={styles.navLink}>
                        <img className={styles.logo} src={ logo } alt="Logo"/>
                        <span className={styles.titleNamePage}>Page</span>
                    </Link>
                    <Link to="/" className={styles.navItem}>Home</Link>
                    <Link to="/contato" className={styles.navItem}>Contato</Link>
                </nav>
            </section>
        </>
    )
}

export default Navbar;