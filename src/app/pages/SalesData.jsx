import { SalesHeader } from "../component/SalesHeder"
import { salesData } from "../../data/SalesData"


const performanceGrade = ( avg ) => {
    if ( avg >= 140000 ) return "Top Performer";
    if ( avg >= 120000 && avg < 140000 ) return "Medium Performer";
    return "Low Performance";
}

export const SalesData = () => {
    const tableData = salesData.map( ( { name, location, q1Sales, q2Sales, q3Sales, q4Sales } ) => {
        const totalSales = q1Sales + q2Sales + q3Sales + q4Sales;
        const averageSales = totalSales / 4;
        return (
            <>
                <tr>
                    <td>{ name }</td>
                    <td>{ location }</td>
                    <td>{ q1Sales }</td>
                    <td>{ q2Sales }</td>
                    <td>{ q3Sales }</td>
                    <td>{ q4Sales }</td>
                    <td>{ totalSales }</td>
                    <td>{ averageSales }</td>
                    <td>{ performanceGrade( averageSales ) }</td>
                </tr>
            </>
        )
    } )
    return (
        <>
            <SalesHeader />
            <main className="container">
                <br />
                <hgroup>
                    <h1>All Sales Data</h1>
                    <p>Complete Sales records using for loop templating.</p>
                </hgroup>
                <section>
                    <h4>Sales Team Performance</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Q1 Sales</th>
                                <th>Q2 Sales</th>
                                <th>Q3 Sales</th>
                                <th>Q4 Sales</th>
                                <th>Total Sales</th>
                                <th>Average Sales</th>
                                <th>Performance Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            { tableData }
                        </tbody>
                    </table>
                </section>
            </main>
            <footer></footer>
        </>
    )
}