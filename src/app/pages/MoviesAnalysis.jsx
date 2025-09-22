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
// console.log( updateMovie );

const MoviesAverageDetails = () => {
    const { totalCost, totalBoxOffice, totalSatellightRights, totalOttRights, totalMusicRights } = updateMovie.reduce( ( acc, { totalRevenue, boxOffice, satelliteRights, ottRights, musicRights } ) => (
        {
            totalCost: acc.totalCost + totalRevenue,
            totalBoxOffice: acc.totalBoxOffice + boxOffice,
            totalSatellightRights: acc.totalSatellightRights + satelliteRights,
            totalOttRights: acc.totalOttRights + ottRights,
            totalMusicRights: acc.totalMusicRights + musicRights
        }
    ), { totalCost: 0, totalBoxOffice: 0, totalSatellightRights: 0, totalOttRights: 0, totalMusicRights: 0 } )

    const boxOfficeAverage = totalBoxOffice / movieData.length;
    const satelliteRightsAverage = totalSatellightRights / movieData.length;
    const ottRightsAverage = totalOttRights / movieData.length;
    const musicRightsAverage = totalMusicRights / movieData.length;
    const averageCostPerMovie = boxOfficeAverage + satelliteRightsAverage + ottRightsAverage + musicRightsAverage;

    return (
        <div>
            <article>
                <header><h3>Movies Average</h3></header>
                <p><strong>Total Cost of All Movies: $</strong>{ totalCost } Cr</p>
                <p><strong>Total Average cost of all movies: $</strong>{ averageCostPerMovie } Cr</p>
                <p><strong>Total Box Office Average: $</strong>{ boxOfficeAverage } Cr</p>
                <p><strong>Total Satellite Rights: $</strong>{ satelliteRightsAverage } Cr</p>
                <p><strong>Total OTT Averages: $</strong>{ ottRightsAverage } Cr</p>
                <footer>
                    <h3>Total Music Rights: ${ musicRightsAverage }</h3>
                </footer>
            </article>
        </div>
    )
}

/* Short code
const MoviesAverageDetails = () => {
  const fields = ["boxOffice", "satelliteRights", "ottRights", "musicRights"];
  const totals = updateMovie.reduce((a, m) => {
    fields.forEach(f => a[f] += m[f]);
    a.totalCost += m.totalRevenue;
    return a;
  }, { totalCost: 0, boxOffice: 0, satelliteRights: 0, ottRights: 0, musicRights: 0 });

  const len = movieData.length;

  return (
    <article>
      <header><h3>Movies Average</h3></header>
      <p><strong>Total Cost of All Movies: $</strong>{totals.totalCost} Cr</p>
      <p><strong>Total Average cost of all movies: $</strong>
        {fields.reduce((s,f)=>s+totals[f]/len,0)} Cr
      </p>
      {fields.map(f => (
        <p key={f}><strong>{f} Avg: $</strong>{totals[f]/len} Cr</p>
      ))}
      <footer><h3>Total Music Rights: ${totals.musicRights/len}</h3></footer>
    </article>
  );
};

*/

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
                    <MoviesAverageDetails />
                </section>
            </main>
        </>
    )
}