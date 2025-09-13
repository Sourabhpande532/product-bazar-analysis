import { salesData } from "../../data/SalesData";
import { SalesHeader } from "../component/SalesHeder"

const updateWithTotalNdAvg = salesData.map( ( dataSales ) => {
    const { q1Sales, q2Sales, q3Sales, q4Sales } = dataSales;
    const totalSales = q1Sales + q2Sales + q3Sales + q4Sales;
    const totalAverage = ( totalSales / 4 )
    return { ...dataSales, totalSales, totalAverage }
} )
console.log( updateWithTotalNdAvg );


const BestPeroformer = () => {
    const { name, location, totalSales } = updateWithTotalNdAvg.reduce( ( acc, curr ) => curr.totalSales > acc.totalSales ? curr : acc )
    const totalUpdated = totalSales.toLocaleString()
    return (
        <div>
            <article>
                <header><h3>Best Performer</h3></header>
                <p><strong>Name:</strong> { name }</p>
                <p><strong>Location:</strong> { location }</p>
                <footer>
                    <p><strong>Total Sales:</strong> ${ totalUpdated }</p>
                </footer>
            </article>
        </div>
    )
}
const CountTopPerformer = () => {
    const countResult = updateWithTotalNdAvg.filter( ( { totalAverage } ) => totalAverage > 120000 )
    return (
        <div>
            <article>
                <header><h3>Top Performers Summary:</h3></header>
                <p><strong>Total No. of Top Performers: { countResult.length }</strong></p>
            </article>
            <br></br>
            { countResult.map( ( { name, location, totalAverage, totalSales } ) => (
                <article key={ name }>
                    <header><strong>{ name }</strong></header>
                    <p><strong>Location: </strong> { location }</p>
                    <p><strong>Average Sales:</strong> { totalAverage }</p>
                    <footer>
                        <p><strong>Total Sales: </strong> { totalSales }</p>
                    </footer>
                </article>
            ) ) }
        </div>
    )
}
const CalculateQuaterlySales = () => {
    const { q1SalesTotal, q2SalesTotal, q3SalesTotal, q4SalesTotal, totalSalesAverage, totalSale } = updateWithTotalNdAvg.reduce( ( acc, { q1Sales, q2Sales, q3Sales, q4Sales, totalAverage, totalSales } ) => ( {
        q1SalesTotal: acc.q1SalesTotal + q1Sales,
        q2SalesTotal: acc.q2SalesTotal + q2Sales,
        q3SalesTotal: acc.q3SalesTotal + q3Sales,
        q4SalesTotal: acc.q4SalesTotal + q4Sales,
        totalSalesAverage: acc.totalSalesAverage + totalAverage,
        totalSale: acc.totalSale + totalSales
    } ), { q1SalesTotal: 0, q2SalesTotal: 0, q3SalesTotal: 0, q4SalesTotal: 0, totalSalesAverage: 0, totalSale: 0 } )

    return (
        <>
            <article>
                <header>
                    <p>Quarterly Sales Average</p>
                </header>
                <p><strong>Q1 Average Sales:</strong> ₹{ ( q1SalesTotal / updateWithTotalNdAvg.length ).toLocaleString( "en-US" ) }</p>
                <p><strong>Q2 Average Sales:</strong> ₹{ ( q2SalesTotal / updateWithTotalNdAvg.length ).toLocaleString( "en-US" ) }</p>
                <p><strong>Q3 Average Sales:</strong> ₹{ ( q3SalesTotal / updateWithTotalNdAvg.length ).toLocaleString( "en-US" ) }</p>
                <p><strong>Q4 Average Sales:</strong> ₹{ ( q4SalesTotal / updateWithTotalNdAvg.length ).toLocaleString( "en-US" ) }</p>
                <footer>
                    <p><strong>Total Sales:</strong> ₹{totalSale.toLocaleString()}</p>
                    <p><strong>Total Average Sales:</strong> ₹{(totalSale/updateWithTotalNdAvg.length).toLocaleString()}</p>
                </footer>
            </article>
        </>
    )

}
export const SalesAnalysis = () => {
    return (
        <>
            <SalesHeader />
            <main className="container">
                <pre />
                <hgroup>
                    <h1>Sales Performance Analysis</h1>
                    <p>Quarterly sales analysis using for sales data with business analytics</p>
                </hgroup>
                <section>
                    <h2>Best Performer</h2>
                    <BestPeroformer />
                </section>
                <section>
                    <h2>Top Performer</h2>
                    <CountTopPerformer />
                </section>
                <br></br>
                <section>
                    <h2>Sales Averages</h2>
                    <CalculateQuaterlySales />
                </section>
            </main>
            <footer></footer>
        </>
    )
}