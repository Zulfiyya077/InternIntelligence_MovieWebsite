import { Link } from 'react-router-dom';
import styles from '../styles/M';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>🎬 MovieApp</h2>
      <div>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/about" className={styles.link}>About</Link>
        <Link to="/contact" className={styles.link}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
