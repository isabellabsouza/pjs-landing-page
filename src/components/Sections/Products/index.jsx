import ProductCard from './card';
import styles from './styles.module.css';
import texts from '../../../../content.json';

export default function ProductsSection() {

    const productsText = texts.productsSection;
    return (
        <section id='products' className='contentSection' style={{ backgroundColor: 'var(--bg-gray)' }}>
            <div className='contentHeader'>
                <h2>{productsText.title}</h2>
                <p className='contentSubtitle'>{productsText.subtitle}</p>
            </div>

            <div className={styles.searchContainer}>
                {/* <input type="text" className={styles.searchInput} placeholder='Buscar produtos...' />
                <select className={styles.categoryFilter}>
                    <option value="">Todas as categorias</option>
                    <option value="baterias">Baterias</option>
                    <option value="filtros">Filtros</option>
                </select> */}
            </div>

            <div className='highlightsWrapper'>
                {productsText.products.map((item, index) => {
                    return (
                        <ProductCard
                            key={index}
                            imageUrl={item.image}
                            title={item.title}
                            link={item.mercadoLivreLink}
                        />
                    )
                })}
            </div>
        </section>
    )
}