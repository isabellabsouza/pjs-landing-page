import styles from './styles.module.css';

export default function Highlights({icon, title, description, backgroundColor}) {
    return (
        <div className={styles.highlightsContainer}>
            <div className={styles.highlightIcon} style={{ backgroundColor: `var(${backgroundColor})` }}>
                {icon}
            </div>
            <h3>{title}</h3>
            <p className='contentSubtitle'>{description}</p>
        </div>
    )
}