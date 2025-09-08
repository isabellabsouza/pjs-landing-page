import Highlights from '../../Highlights';
import styles from './styles.module.css';
import texts from '../../../../content.json';
import { FaShieldAlt, FaUser, FaAward } from 'react-icons/fa';

export default function AboutUsSection() {

    const aboutUsText = texts.aboutUsSection;
    const iconsMap = {
        FaShieldAlt: FaShieldAlt,
        FaUser: FaUser,
        FaAward: FaAward
    };

    return (
        <section className='contentSection'>
            <div className='contentHeader'>
                <h2>{aboutUsText.title}</h2>
                <p className='contentSubtitle'>{aboutUsText.subtitle}</p>
            </div>

            <div className={styles.highlightsWrapper}>
                {aboutUsText.highlights.map((item, index) => {
                    const IconComponent = iconsMap[item.icon];
                    
                    return (
                        <Highlights
                            key={index}
                            icon={<IconComponent />}
                            title={item.title}
                            description={item.description}
                            backgroundColor="--blue"
                        />
                    )
                })}
            </div>
        </section>
    )
}