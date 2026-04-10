import React, { useState } from "react";
import type { Employee } from "./Employee";

interface Props {
  onAdd: (emp: Employee) => void;
}

// export default function Addemployee( {onAdd}) { }

const Addemployee: React.FC<Props> = ({ onAdd }) => 
{
   const [form, setForm] = useState<Employee>({
    id: 0,
    name: "",
    designation: "",
    department: "",
  });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = () => {
    onAdd({ ...form, id: Date.now() });
  };

  return (
    <div>
      <input name="id" placeholder="enter id" onChange={handleChange} />
      <input name="name" placeholder="enter name" onChange={handleChange} />
      <input name="designation" onChange={handleChange} />
      <input name="department" onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default Addemployee;