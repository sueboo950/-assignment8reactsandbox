import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.navLink}>
                        Home
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/about" style={styles.navLink}>
                        About
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/contact" style={styles.navLink}>
                        Contact Us
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/counter" style={styles.navLink}>
                        Counter
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/background" style={styles.navLink}>
                        Color Changing Background
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/calculator" style={styles.navLink}>
                        Calculator
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        backgroundColor: '#333',
        padding: '1rem'
    },
    navList: {
        display: 'flex',
        listStyleType: 'none',
        margin: 0,
        padding: 0
    },
    navItem: {
        marginRight: '1rem'
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none'
    }
};

export default Navbar;
