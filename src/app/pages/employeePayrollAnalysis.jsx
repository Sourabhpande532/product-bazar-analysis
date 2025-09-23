import { employeeData } from "../../data/employeeData"
import { EmployeeHeader } from "../component/employeeHeader"

const calculateEmployeesAnalysis = employeeData.map((eachEmployee)=>{
  const {hourlySalary,week1Hours,week2Hours,week3Hours,week4Hours,bonusMultiplier} = eachEmployee;
  const totalHours = week1Hours + week2Hours + week3Hours + week4Hours;
  const getTotalSalaryFourWeeks = totalHours * hourlySalary;
  const bonusThreshold = 160; // 40 * 4 i.e 160
  let extraBonusHours = 0;
  if(totalHours > bonusThreshold){
    extraBonusHours = totalHours - bonusThreshold;
  }else{
    extraBonusHours = 0;
  }

  const bonusAmount = extraBonusHours * hourlySalary * (bonusMultiplier / 100);

  const totalCompensation = getTotalSalaryFourWeeks + bonusAmount;

  return {
    ...eachEmployee,
    totalHours,
    getTotalSalaryFourWeeks,
    bonusAmount,
    totalCompensation
  }
})
// console.log(calculateEmployeesAnalysis);

export const PayrollAnalysis = () => {
    return(
        <div>
          <EmployeeHeader/>
          <main className="container">
          <h1>Payroll analysis</h1>
          </main>
        </div>
    )
}