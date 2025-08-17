import styles from './styles.module.css';
import Icon from '../../assets/favicon.png';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <img src={Icon} alt="Logo" className={styles.logo} />
                <span>PJS Distribuidora</span>
            </div>
            <div>
                <FaInstagram />
                <CiLinkedin />
            </div>
            <div className={styles.footerText}>
                <p>© 2024 PJS Distribuidora. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}