import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <div>
            <header className="container">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/pa">Product Analysis</NavLink>
                        </li>
                        <li>
                            <NavLink to="/apd">All Products Data</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}