import { NavLink } from "react-router-dom"

export const EmployeeHeader = () => {
    return (
        <div className="container">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/employeeAnalysis">Payroll Analysis</NavLink>
                    </li>
                    <li>
                        <NavLink to="/employeeRecords">All Employee Data</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}