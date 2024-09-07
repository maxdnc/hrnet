'use client';
import Link from 'next/link';
import useEmployeeStore from '../store/useEmployeeStore';
import { ArrowLeft } from 'lucide-react';

const page = () => {
  const { employees } = useEmployeeStore();
  return (
    <div>
      <h1 className="text-4xl font-bold">Employee List</h1>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.firstName} {employee.lastName}
          </li>
        ))}
      </ul>

      <Link
        href="/"
        className="mt-4 text-indigo-400 font-medium inline-flex items-center gap-2 hover:underline cursor-pointer group"
      >
        <span className="transform transition-transform  group-hover:-translate-x-1 ">
          <ArrowLeft size={16} color="#818cf8" />
        </span>
        <span>Home</span>
      </Link>
    </div>
  );
};
export default page;
