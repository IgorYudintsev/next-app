import Link from 'next/link';
import styles from './navBar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.navLink}>
                Home
            </Link>
            <Link href="/characters" className={styles.navLink}>
                Characters
            </Link>
            <Link href="/about" className={styles.navLink}>
                About
            </Link>
        </nav>
    );
};

export default NavBar;