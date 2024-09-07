'use client';
import Link from 'next/link';
import useEmployeeStore from '../store/useEmployeeStore.js';
import { ArrowLeft } from 'lucide-react';
import { DataTable } from './data-table.jsx';
import { columns } from './columns.js';

const page = () => {
  const { employees } = useEmployeeStore();
  return (
    <div className="px-6 py-20">
      <h1 className="text-4xl font-bold">Employees List</h1>
      <DataTable columns={columns} data={employees} />

      <div className="flex items-center">
        <Link
          href="/"
          className="mx-auto text-xl mt-4 text-indigo-400 font-medium inline-flex items-center gap-4 hover:underline cursor-pointer group"
        >
          <span className="transform transition-transform  group-hover:-translate-x-1 ">
            <ArrowLeft size={22} color="#818cf8" />
          </span>
          <span>Home</span>
        </Link>
      </div>
    </div>
  );
};
export default page;
