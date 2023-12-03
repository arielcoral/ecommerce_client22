function ProductCard(props) {
    const product = props.product

    return <div className="product-card">
            <table>
                <tr>
                    <th>name:</th>
                    <td>{product.name}</td>
                </tr>
                <tr>
                    <th>price:</th>
                    <td>${product.price}</td>
                </tr>
            </table>
    </div>;
}

export default ProductCard