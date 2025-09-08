import styles from './styles.module.css';
import texts from '../../../../content.json';
import Highlights from '../../Highlights';
import { FaEnvelope, FaPhone, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function ContactSection() {

    const contactText = texts.contactSection;
    const iconsMap = {
        FaEnvelope: FaEnvelope,
        FaPhone: FaPhone,
        FaWhatsapp: FaWhatsapp,
        FaInstagram: FaInstagram
    };

    return (
        <section className='contentSection'>
            <div className='contentHeader'>
                <h2>{contactText.title}</h2>
                <p>{contactText.subtitle}</p>
            </div>

            <div className={styles.highlightsWrapper}>
                {contactText.highlights.map((item, index) => {
                    const IconComponent = iconsMap[item.icon];

                    return (
                        <Highlights
                            key={index}
                            icon={<IconComponent />}
                            title={item.title}
                            description={item.description}
                            backgroundColor="--red"
                        />
                    )
                })}
            </div>
        </section>
    )
}