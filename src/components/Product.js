function Product({product})
{
    return (
        <li>
            <h1>{product.name}</h1>
            <span>{product.price}</span>
        </li>
    )
}
export default Product