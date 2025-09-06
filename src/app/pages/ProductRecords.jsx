import { Header } from "../component/Header"
import { productsData } from "../../data/productData"
export const ProductRecords = () => {
    const priceRange = ( price ) => {
        if ( price >= 500 ) return "Premium";
        if ( price >= 100 ) return "Mid-Range";
        if ( price >= 50 ) return "Standard";
        return "Budget"
    }
    return (
        <>
            <Header />
            <main className="container"><br />
                <hgroup>
                    <h1>All Products Data</h1>
                    <p>Complete product catalog using data</p>
                </hgroup><pre />
                <h2>Product Catalog</h2>
                <table>
                    <thead>
                        <tr>
                            <th><strong>ID</strong></th>
                            <th><strong>Name</strong></th>
                            <th><strong>Price</strong></th>
                            <th><strong>Brand</strong></th>
                            <th><strong>Category</strong></th>
                            <th><strong>Rating</strong></th>
                            <th><strong>Price Range</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        { productsData.map( ( { id, name, price, brand, category, rating } ) => (
                            <tr key={ id }>
                                <td>{ id }</td>
                                <td>{ name }</td>
                                <td>{ price }</td>
                                <td>{ brand }</td>
                                <td>{ category }</td>
                                <td>{ rating }</td>
                                <td>{ priceRange( price ) }</td>
                            </tr>
                        ) ) }
                    </tbody>
                </table>
            </main>
        </>
    )
}