import { salesData } from "../../data/SalesData";
import { SalesHeader } from "../component/SalesHeder"

const updateWithTotalNdAvg = salesData.map( ( dataSales ) => {
    const { q1Sales, q2Sales, q3Sales, q4Sales } = dataSales;
    const totalSales = q1Sales + q2Sales + q3Sales + q4Sales;
    const totalAverage = ( totalSales / 4 )
    return { ...dataSales, totalSales, totalAverage }
} )
// console.log( updateWithTotalNdAvg );


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
            </main>
            <footer></footer>
        </>
    )
}