import { NavLink } from "react-router-dom"

export const MoviesHeader = () => {
    return (
        <div className="container">
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/moviesAnalysis">Movies Analysis</NavLink></li>
                        <li><NavLink to="/moviesRecords">Movies Records</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}