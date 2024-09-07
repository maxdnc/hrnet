'use client';
import Link from 'next/link';
import useEmployeeStore from '../store/useEmployeeStore.js';
import { ArrowLeft } from 'lucide-react';
import { DataTable } from './data-table.jsx';
import { columns } from './columns.js';

const page = () => {
  const { employees } = useEmployeeStore();
  return (
    <div className="px-1 py-8">
      <h1 className="text-4xl font-bold">Employee List</h1>
      <DataTable columns={columns} data={employees} />

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
