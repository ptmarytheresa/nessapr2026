 
import { useEmployees } from "./useEmployee";
 import EmployeeDashboard from "./EmployeeDashboard";
import Addemployee from "./Addemployee";
import EmployeenewDashboard from "./newdashboard/EmployeenewDashboard";
 
 

export default function App()
 {

  const { employees, addEmployee } = useEmployees();

  return (
    <div>
      
      {/* <Addemployee onAdd={addEmployee} />
      <EmployeeDashboard employees={employees} /> */}

      <EmployeenewDashboard/>
 
    </div>
  );
};

 