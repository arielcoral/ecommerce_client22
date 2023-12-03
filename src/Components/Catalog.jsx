import products from "../products";
import ProductCard from './ProductCard'
export default function Catalog(){
    const cards = products.map(p => <ProductCard product={p} />);


    return <div className="catalog-board">
        {cards}
    </div>;
    // return <pre>
    //     {JSON.stringify(products, null, 2)}
    // </pre>;
}

