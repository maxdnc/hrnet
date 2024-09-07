'use client';
import Link from 'next/link';
import useEmployeeStore from '../store/useEmployeeStore';

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

      <Link href="/" className="mt-4 text-blue-600 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};
export default page;
