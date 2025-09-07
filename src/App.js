import { Link } from "react-router-dom";
import { Header } from "./app/component/Header";
// import "bootstrap/dist/css/bootstrap.min.css"
import { productsData } from "./data/productData";
const ExpensiveProduct = ( { product } ) => {
  const { brand, category, id, name, price, rating } = product.reduce(
    ( acc, curr ) => {
      return curr.price > acc.price ? curr : acc;
    }
  );
  return (
    <div>
      <article>
        <header className='text-light'>
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
            <strong className='text-light'>Rating:</strong> { rating }
          </p>
        </footer>
      </article>
    </div>
  );
};

/* const TotalAndAverage = ( { product } ) => {
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
      <article className=''>
        <header className='text-light'>
          <h2>Product Statistics</h2>
        </header>
        <p>
          <strong>Total Electronics Product:</strong> { electricCount }
        </p>
        <p>
          <strong>Average Price:</strong> { totalAverage }
        </p>
        <footer>
          <strong className='text-light'>
            Average Rating: { ratingAverage.toFixed( 1 ) }
          </strong>
        </footer>
      </article>
    </div>
  );
}; */

const TotalAndAverage = ( { product } ) => {
  const { totalPrice, totalRating, totalElectronicsCount } = product.reduce( ( acc, { price, category, rating } ) => ( {
    totalPrice: acc.totalPrice + price,
    totalRating: acc.totalRating + rating,
    totalElectronicsCount: acc.totalElectronicsCount + ( category === "Electronics" ? 1 : 0 )
  } ),
    { totalPrice: 0, totalRating: 0, totalElectronicsCount: 0 } );

  const totalAverage = totalPrice / product.length;
  const totalAvgRating = totalRating / product.length;
  return (
    <div>
      <article className=''>
        <header className='text-light'>
          <h2>Product Statistics</h2>
        </header>
        <p>
          <strong>Total Electronics Product:</strong> { totalElectronicsCount }
        </p>
        <p>
          <strong>Average Price:</strong> { totalAverage.toFixed( 2 ) }
        </p>
        <p>Total price: { totalPrice }</p>
        <p>Total Rating: { totalRating }</p>
        <footer>
          <strong className='text-light'>
            Average Rating: { totalAvgRating.toFixed( 1 ) }
          </strong>
        </footer>
      </article>
    </div>
  )
}

const ProductUnder50 = ( { product } ) => {
  const filterPrice = product.filter( ( { price } ) => price < 50 );
  const displayData = filterPrice.map(
    ( { id, name, price, brand, category, rating } ) => (
      <div key={ id }>
        <article>
          <header>
            <h3>{ name }</h3>
          </header>
          <p>
            <strong>Price:</strong> { price }
          </p>
          <p>
            <strong>Brand:</strong> { brand }
          </p>
          <p>
            <strong>Category:</strong> { category }
          </p>
          <footer>
            <p>
              <strong>Rating:</strong> { rating }
            </p>
          </footer>
        </article>
        <br />
      </div>
    )
  );
  return displayData;
};

const App = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <hgroup>
          <h1>Product Analysis</h1>
          <p>Statistical analysis for products</p>
        </hgroup>
        <button><Link style={{textDecoration:"none", color: "wheat", fontWeight:"bold"}} to="/salesAnalysis">View Sales</Link></button>
        <br /> <br />
        <ExpensiveProduct product={ productsData } />
        <section className=''>
          <h2 className='py-3'>Total and Averages</h2>
          <TotalAndAverage product={ productsData } />
        </section>
        <pre></pre>
        <section >
          <h2>Product with price less than $ 50</h2>
          <ProductUnder50 product={ productsData } />
        </section>&nbsp;

      </main>
      <footer class="container">
        <small>Learning JavaScript for React component with product data analysis</small>
      </footer>
    </>
  );
};

export default App;
