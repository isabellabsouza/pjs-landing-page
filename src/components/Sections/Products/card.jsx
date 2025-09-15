import styles from './styles.module.css';
import { FaShoppingCart } from "react-icons/fa";

export default function ProductCard({ imageUrl, title, link }) {

    return (

        <div className={styles.productCard}>
            <img src={imageUrl} alt="Produto" className={styles.productImage} />
            <p className={styles.cardTitle}>{title}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.buyButton}>
                <button className={styles.btnBuy}>Comprar</button>
            </a>
        </div >
    )
}