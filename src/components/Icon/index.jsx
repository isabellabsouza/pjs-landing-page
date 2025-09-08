import styles from './styles.module.css'
import { FaBoltLightning } from "react-icons/fa6";

export default function Icon({backgroundColor}) {
    return (
        <div className={styles.iconWrapper}>
            <div className={styles.icon} style={{ backgroundColor: `var(${backgroundColor})` }}>
                <FaBoltLightning />
            </div>
            <span className={styles.companyName}>PJS Distribuidora</span>
        </div>
    )
}