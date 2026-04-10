
import React from "react";
import type { Employee } from "./Employee";

interface Props {
  employees: Employee[];
}

const EmployeeDashboard: React.FC<Props> = ({ employees }) => {
  return (
    <div>
      <h2>Employee Dashboard</h2>

      {employees.map((emp) => (
        <div key={emp.id}>
         <h3> {emp.name} : {emp.designation}  : {emp.department} </h3>
        </div>
      ))}
    </div>
  );
};

export default EmployeeDashboard;