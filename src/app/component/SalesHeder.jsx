import { NavLink } from "react-router-dom"

export const SalesHeader = () => {
    return (
        <div>
            <header className="container">
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/salesAnalysis">Sales Analyisis</NavLink></li>
                        <li><NavLink to="/salesData">All Sales Data</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}