import { MoviesHeader } from "../component/MoviesHeader"
import { movieData } from "../../data/moviesData"

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
// console.log(updateMovie);

export const MoviesAnalysis = () => {
    const { name, genre, boxOffice, satelliteRights, ottRights, musicRights, totalRevenue } = updateMovie.reduce( ( acc, curr ) => curr.totalRevenue > acc.totalRevenue ? curr : acc );
    return (
        <>
            <MoviesHeader />
            <br />
            <main className="container">
                <hgroup>
                    <h1>Movie Cost Analysis</h1>
                    <p>Film industry revenue analysis using for movie data with multiple revenue streams.</p>
                </hgroup>
                <section>
                    <h2>Most Expensive Movie</h2>
                    <article>
                        <header>
                            <h3>Most Expensive Movie</h3>
                        </header>
                        <p><strong>Name:</strong> { name }</p>
                        <p><strong>Genre:</strong> { genre }</p>
                        <p><strong>Box Office:</strong> { boxOffice } Cr</p>
                        <p><strong>Satellite Rights:</strong> { satelliteRights } Cr</p>
                        <p><strong>OTT Rights:</strong> { ottRights } Cr</p>
                        <p><strong>Music Rights:</strong> { musicRights } Cr</p>
                        <footer>
                            <p><strong>Total Cost:</strong> { totalRevenue } Cr</p>
                        </footer>
                    </article>
                </section>
                <br></br>
                <section>
                <h2>Movies Average</h2>
                
                </section>
            </main>
        </>
    )
}