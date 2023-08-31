import React, {Component} from "react"
import Product from "./Product"

class ProductListing extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {id: 1, name: "Product1", price: "$10.00"},
                {id: 2, name: "Product2", price: "$20.00"},
                {id: 3, name: "Product3", price: "$30.00"},
                {id: 4, name: "Product4", price: "$40.00"}
            ]
        }
    }

    // Index as Key Anti-pattern
    render() {
        const array1 = [1, 2, 3, 4, 3];
        return <div>
            {array1.map((arr, index) => <h1 key={index}>{index} - {arr}</h1>)}
        </div>
    }

    // List Rendering with special key props
    render1() {
        return (
            <div>
                <div>Product Listing</div>
                <ul>
                    {this.state.products.map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                    
                </ul>
            </div>
        )
    }
}
export default ProductListing