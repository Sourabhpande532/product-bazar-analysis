import { Header } from "../component/Header";

const ExpensiveProduct = ( { product } ) => {
    const { brand, category, id, name, price, rating } = product.reduce(
        ( acc, curr ) => {
            return curr.price > acc.price ? curr : acc;
        }
    );
    return (
        <div>
            <article>
                <header>
                    <h2>Most Expensive Product</h2>
                </header>
                <p>
                    <strong>Name:</strong> { name }
                </p>
                <p>
                    <strong>Name:</strong> { price }
                </p>
                <p>
                    <strong>Name:</strong> { brand }
                </p>
                <p>
                    <strong>Name:</strong> { category }
                </p>
                <footer>
                    <p>
                        <strong>Rating:</strong> { rating }
                    </p>
                </footer>
            </article>
        </div>
    );
};

const TotalAndAverage = ( { product } ) => {
    const { totalPrice, totalRating, totalElectronicsCount } = product.reduce(
        ( acc, curr ) => {
            acc.totalPrice += curr.price;
            acc.totalRating += curr.rating;
            acc.totalElectronicsCount += curr.category === "Electronics";
            return acc;
        },
        { totalPrice: 0, totalRating: 0, totalElectronicsCount: 0 }
    );
    const analysisData = {
        totalAverage: totalPrice / product.length,
        ratingAverage: totalRating / product.length,
        electricCount: totalElectronicsCount,
    };
    const { totalAverage, ratingAverage, electricCount } = analysisData;
    return (
        <div>
            <article>
                <header><h2>Product Statistics</h2></header>
                <p><strong>Total Electronics Product:</strong> { electricCount }</p>
                <p><strong>Average Price:</strong> { totalAverage }</p>
                <footer>
                    <strong>Average Rating: { ratingAverage.toFixed( 1 ) }</strong>
                </footer>
            </article>
        </div>
    )
};

export const ProductAnalysis = () => {
    const productsData = [
        {
            id: 101,
            name: "Laptop",
            price: 999.99,
            brand: "Dell",
            category: "Electronics",
            rating: 4.5,
        },
        {
            id: 102,
            name: "Smartphone",
            price: 599.99,
            brand: "Samsung",
            category: "Electronics",
            rating: 4.0,
        },
        {
            id: 103,
            name: "Running Shoes",
            price: 79.99,
            brand: "Nike",
            category: "Footwear",
            rating: 4.8,
        },
        {
            id: 104,
            name: "T-shirt",
            price: 19.99,
            brand: "Adidas",
            category: "Apparel",
            rating: 4.2,
        },
        {
            id: 105,
            name: "Coffee Maker",
            price: 49.99,
            brand: "Hamilton",
            category: "Kitchen Appliances",
            rating: 4.6,
        },
    ];
    return (
        <>
            <Header />
            <main className='container'>
                <hgroup>
                    <h1>Product Analysis</h1>
                    <p>Statistical analysis for products</p>
                </hgroup>
                <br />
                <br />
                <ExpensiveProduct product={ productsData } />
                <section>
                    <h2>Total and Averages</h2>
                    <TotalAndAverage product={ productsData } />
                </section>
            </main>
        </>
    );
};
