import ProductCard from './card';
import styles from './styles.module.css';

export default function ProductsSection() {
    return (
        <section className='contentSection'>
            <div className='contentHeader'>
                <h2>Nossos Produtos</h2>
                <p className='contentSubtitle'>Peças elétricas automotivas de alta qualidade para todas as suas necessidades</p>
            </div>

            <div className={styles.searchContainer}>
                <input type="text" className={styles.searchInput} placeholder='Buscar produtos...' />
                <select className={styles.categoryFilter}>
                    <option value="">Todas as categorias</option>
                    <option value="baterias">Baterias</option>
                    <option value="filtros">Filtros</option>
                </select>
            </div>

            <div>
                <ProductCard />
            </div>
        </section>
    )
}