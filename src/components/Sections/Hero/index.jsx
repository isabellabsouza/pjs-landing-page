import styles from './styles.module.css';
import alternador from '../../../assets/alternador.png';

export default function HeroSection() {
    return (
        <section className={styles.hero}  style={{ '--bg-image': `url(${alternador})` }}>
            <div className={styles.heroContent}>
                <h1 className={styles.title}>PJS Distribuidora</h1>
                <p className={styles.subtitle}>Especializada na distribuição de peças elétricas automotivas</p>
            </div>
        </section>
    )
}