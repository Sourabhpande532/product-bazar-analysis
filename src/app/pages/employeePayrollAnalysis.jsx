import { employeeData } from "../../data/employeeData"
import { EmployeeHeader } from "../component/employeeHeader"

const calculateEmployeesAnalysis = employeeData.map( ( eachEmployee ) => {
  const { hourlySalary, week1Hours, week2Hours, week3Hours, week4Hours, bonusMultiplier } = eachEmployee;
  const totalHours = week1Hours + week2Hours + week3Hours + week4Hours;
  const getTotalSalaryFourWeeks = totalHours * hourlySalary;
  const bonusThreshold = 160; // 40 * 4 i.e 160
  let extraBonusHours = 0;
  if ( totalHours > bonusThreshold ) {
    extraBonusHours = totalHours - bonusThreshold;
  } else {
    extraBonusHours = 0;
  }

  const bonusAmount = extraBonusHours * hourlySalary * ( bonusMultiplier / 100 );

  const totalCompensation = getTotalSalaryFourWeeks + bonusAmount;

  return {
    ...eachEmployee,
    totalHours,
    getTotalSalaryFourWeeks,
    bonusAmount,
    totalCompensation
  }
} )
// console.log(calculateEmployeesAnalysis);

const MostPaidEmployee = () => {
  const { name, department, totalHours, getTotalSalaryFourWeeks, bonusAmount, totalCompensation } = calculateEmployeesAnalysis.reduce( ( acc, curr ) => curr.totalCompensation > acc.totalCompensation ? curr : acc )
  return (
    <div>
      <h2>Most Paid Employee</h2>
      <article>
        <header><p>Most Paid Employee</p></header>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Total Hours Worked:</strong> {totalHours}</p>
        <p><strong>Total Salary for Four Weeks:</strong>  ${getTotalSalaryFourWeeks}</p>
        <p><strong>Bonus:</strong>  ${bonusAmount}</p>
        <footer>
        <p><strong>Total Compensations:</strong> $ {totalCompensation}</p>
        </footer>
      </article>
    </div>
  )
}
export const PayrollAnalysis = () => {
  return (
    <div>
      <EmployeeHeader />
      <main className="container">
        <hgroup>
          <h2>Employee Payroll Analysis</h2>
          <p>HR analytics and payroll calculations using data</p>
        </hgroup>
        <br />
        <MostPaidEmployee />
      </main>
    </div>
  )
}