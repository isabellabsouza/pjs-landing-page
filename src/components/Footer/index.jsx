import styles from './styles.module.css';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import texts from '../../../content.json';
import Icon from '../Icon';

export default function Footer() {
    const footer = texts.footer;

    return (
        <footer className={styles.footer}>
            <Icon 
                backgroundColor= "--red"
            />
            <div className={styles.socialMedia}>
                <FaInstagram />
                <FaWhatsapp />
                <CiLinkedin />
            </div>
            <div className={styles.footerText}>
                <p>{footer.text}</p>
            </div>
        </footer>
    )
}