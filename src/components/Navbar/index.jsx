import styles from './styles.module.css';
import Icon from '../../assets/favicon.png';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <a href="#home" className={styles.logoLink}>
                    <img src={Icon} alt="Logo" className={styles.logo} /> PJS Distribuidora
                </a>
            </div>
            <button className={styles.menuButton} onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#products" onClick={toggleMenu}>Produtos</a></li>
                <li><a href="#about" onClick={toggleMenu}>Sobre</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
            </ul>
        </nav>
    )
}