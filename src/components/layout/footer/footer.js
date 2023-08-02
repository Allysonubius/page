import React from "react";

import styles from './footer.module.css';

function Footer(){
    return(
        <>
            <section>
                <footer >
                    <span className={styles.footer}>PAGE &copy; - 2023</span>
                </footer>
            </section>
        </>
    )
}

export default Footer;