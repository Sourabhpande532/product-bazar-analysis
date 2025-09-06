import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <div>
            <header className="container">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Product Analysis</NavLink>
                        </li>
                        <li>
                            <NavLink to="/productRecords">All Products Data</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}