import styles from './styles.module.css';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import texts from '../../../content.json';
import Logo from '../../assets/Logo Full.png'
import Icon from '../../assets/Icon.png'

export default function Footer() {
    const footer = texts.footer;

    return (
        <footer className={styles.footer}>
            <div>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center'}}>
                    <h1>PJS</h1>
                    <img src={Icon} alt="PJS Distribuidora" className={styles.logo} />
                    <h1>DISTRIBUIDORA</h1>
                </div>
            </div>
            <br />
            <div className={styles.socialMedia}>
                <a href={footer.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialMediaIcon}>
                    <FaInstagram />
                </a>
                <a href={footer.socialMedia.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.socialMediaIcon}>
                    <FaWhatsapp />
                </a>
                <a href={footer.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialMediaIcon}>
                    <CiLinkedin />
                </a>
            </div>
            <div className={styles.footerText}>
                <p>&copy; {new Date().getFullYear()} {footer.text}</p>
            </div>
        </footer>
    )
}