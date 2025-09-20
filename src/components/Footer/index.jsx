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
                <p>{footer.text}</p>
            </div>
        </footer>
    )
}