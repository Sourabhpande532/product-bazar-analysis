import { MoviesHeader } from "../component/MoviesHeader"
import { movieData } from "../../data/moviesData";

const updateMovie = movieData.map( ( eachMovie ) => {
    const { boxOffice, satelliteRights, ottRights, musicRights } = eachMovie;
    const totalRevenue = boxOffice + satelliteRights + ottRights + musicRights;
    const totalAverage = totalRevenue / 4;
    return {
        ...eachMovie,
        totalRevenue,
        totalAverage
    }
} )

export const MoviesRecords = () => {

    function getRange( total ) {
        if ( total >= 1000 ) return "Blockbuster";
        if ( total >= 800 ) return "Hit";
        if ( total >= 600 ) return "Average"
        return "Low Budget";
    }
    return (
        <>
            <MoviesHeader />
            <br />
            <main className="container">
                <hgroup>
                    <h1>All Movie Data</h1>
                    <p>Complete movie revenue records using map</p>
                </hgroup>
                <br/>
                <section>
                    <h2>Movie Revenue Records</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Genre</th>
                                <th>Box Office</th>
                                <th>Satellite Rights</th>
                                <th>OTT Rights</th>
                                <th>Music Rights</th>
                                <th>Total Cost</th>
                                <th>Cost Range</th>
                            </tr>
                        </thead>
                        <tbody>
                            { updateMovie.map( ( { name, genre, boxOffice, satelliteRights, ottRights, musicRights, totalRevenue, totalAverage } ) => (
                                <tr>
                                    <td>{ name }</td>
                                    <td>{ genre }</td>
                                    <td>₹{ boxOffice } Cr</td>
                                    <td>₹{ satelliteRights } Cr</td>
                                    <td>₹{ ottRights } Cr</td>
                                    <td>₹{ musicRights } Cr</td>
                                    <td>₹{ totalRevenue } Cr</td>
                                    <td>{ getRange( totalRevenue ) }</td>
                                </tr>
                            ) ) }
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    )
}