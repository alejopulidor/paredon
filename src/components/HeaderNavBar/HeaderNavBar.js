import React from 'react';
import styles from './HeaderNavBar.module.scss';

const HeaderNavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-light justify-content-between">
                <span className={styles["title"]}>El paredón de la vergüenza</span>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form>
            </nav>
        </div>
    )
}

export default HeaderNavBar
