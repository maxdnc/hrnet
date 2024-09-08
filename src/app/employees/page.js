'use client';
import Link from 'next/link';
import useEmployeeStore from '../store/useEmployeeStore.js';
import { ArrowLeft } from 'lucide-react';
import { DataTable } from './data-table.jsx';
import { columns } from './columns.js';
import { MOCK_DATA_EMPLOYEES } from '../mockData/mockDataEmployees';

const page = () => {
  const { employees } = useEmployeeStore();

  return (
    <div className="max-w-[1640px] mx-auto">
      <Link
        href="/"
        className="mx-auto px-6 text-xl mt-8 text-indigo-400 font-medium inline-flex items-center gap-3 hover:underline cursor-pointer group"
      >
        <span className="transform transition-transform  group-hover:-translate-x-1 ">
          <ArrowLeft size={22} color="#818cf8" />
        </span>
        <span>Home</span>
      </Link>
      <div className="px-6 py-16">
        <h2 className="text-3xl font-bold">Employees List</h2>

        <DataTable columns={columns} data={employees} />
      </div>
    </div>
  );
};
export default page;
