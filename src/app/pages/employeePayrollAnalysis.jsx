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
        <p><strong>Name:</strong> { name }</p>
        <p><strong>Department:</strong> { department }</p>
        <p><strong>Total Hours Worked:</strong> { totalHours }</p>
        <p><strong>Total Salary for Four Weeks:</strong>  ${ getTotalSalaryFourWeeks }</p>
        <p><strong>Bonus:</strong>  ${ bonusAmount }</p>
        <footer>
          <p><strong>Total Compensations:</strong> $ { totalCompensation }</p>
        </footer>
      </article>
    </div>
  )
}

const CompanyAverages = () => {
  const payrollAnalysis = calculateEmployeesAnalysis;
  const { totalHoursWorked, totalWeek1, totalWeek2, totalWeek3, totalWeek4 } = payrollAnalysis.reduce( ( acc, { totalHours, week1Hours, week2Hours, week3Hours, week4Hours } ) => (
    {
      totalHoursWorked: acc.totalHoursWorked + totalHours,
      totalWeek1: acc.totalWeek1 + week1Hours,
      totalWeek2: acc.totalWeek2 + week2Hours,
      totalWeek3: acc.totalWeek3 + week3Hours,
      totalWeek4: acc.totalWeek4 + week4Hours
    }
  ), { totalHoursWorked: 0, totalWeek1: 0, totalWeek2: 0, totalWeek3: 0, totalWeek4: 0 } )
  return (
    <div>
      <h2>Company Averages</h2>
      <article>
        <header><p>Company Averages</p></header>
        <p>Total Hours Worked by All: <strong>{ totalHoursWorked } Hours</strong></p>
        <p>Total Averages Hours of Company: <strong>{ totalHoursWorked / payrollAnalysis.length } Hours per employee</strong></p>
        <p>Total Average of Week one: <strong>{ totalWeek1 / payrollAnalysis.length } Hours</strong></p>
        <p>Total Average of Week Two: <strong>{ totalWeek2 / payrollAnalysis.length } Hours</strong></p>
        <p>Total Average of Week Three: <strong>{ totalWeek3 / payrollAnalysis.length } Hours</strong></p>
        <footer>
        <p>Total Average of Week Four: <strong>{ totalWeek4 / payrollAnalysis.length } Hours</strong></p>
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
        <br />
        <CompanyAverages />
      </main>
    </div>
  )
}