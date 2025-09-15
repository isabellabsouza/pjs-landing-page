import styles from './styles.module.css';

export default function Highlights({icon, title, description, backgroundColor, small}) {

    const iconClasses = `${styles.highlightIcon} ${small ? styles.small : ''}`;
    const titleClasses = `${styles.highlightTitle} ${small ? styles.small : ''}`;
    const contentClasses = `${styles.highlightContent} ${small ? styles.small : ''}`;
    
    return (
        <div className={styles.highlightsContainer}>
            <div className={iconClasses} style={{ backgroundColor: `var(${backgroundColor})` }}>
                {icon}
            </div>
            <h3 className={titleClasses}>{title}</h3>
            <p className={contentClasses}>{description}</p>
        </div>
    )
}