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

const getSalaryRange = (salary)=>{
    if(salary>= 50000) return "High Earner";
    if(salary >= 40000) return "Medium Earner";
    return "Standard"
}
const EmployeePayrollRecords = ()=>{
return(
    <div>
     <h3>Employee Payroll Records</h3>
     <table>
       <thead>
         <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Hourly Salary</th>
            <th>Week 1</th>
            <th>Week 2</th>
            <th>Week 3</th>
            <th>Week 4</th>
            <th>Total Hours</th>
            <th>Total Salary</th>
            <th>Bonus</th>
            <th>Total Compensation</th>
            <th>Salary Range</th>
         </tr>
       </thead>
       <tbody>
        {calculateEmployeesAnalysis.map(({name,department,hourlySalary,week1Hours,week2Hours,week3Hours,week4Hours,totalHours,getTotalSalaryFourWeeks,bonusAmount,totalCompensation})=>(
            <tr>
             <td>{name}</td>
             <td>{department}</td>
             <td>₹{hourlySalary}/hr</td>
             <td>{week1Hours}h</td>
             <td>{week2Hours}h</td>
             <td>{week3Hours}h</td>
             <td>{week4Hours}h</td>
             <td>{totalHours}h</td>
             <td>₹{getTotalSalaryFourWeeks}</td>
             <td>₹{bonusAmount}</td>
             <td>₹{totalCompensation}</td>
             <td>{getSalaryRange(totalCompensation)}</td>
            </tr>
        ))}
       </tbody>
     </table>
    </div>
)
}

export const EmployeeRecords = () => {
    return(
        <>
         <EmployeeHeader/>
         <div className="container">
          <hgroup>
           <h2>All Employee Data</h2>
           <p>Complete employee payroll records using some hof</p>
          </hgroup>
          <EmployeePayrollRecords/>
         </div>
        </>
    )
}