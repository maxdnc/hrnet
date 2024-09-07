import Link from 'next/link';
import EmployeeForm from './components/EmployeeForm';
import { ArrowUpRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="px-1 py-8">
      <div className="flex items-center flex-col gap-4">
        <h1 className="text-4xl font-bold">HRnet</h1>
        <p className="text-gray-600">Welcome to HRnet</p>
        <Link
          href="/employees"
          className="mt-4 text-indigo-400 font-medium inline-flex gap-1 hover:underline cursor-pointer group"
        >
          <span>View employees list</span>{' '}
          <span className="transform transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 ">
            <ArrowUpRight size={16} color="#818cf8" />
          </span>
        </Link>
        <h2 className="text-2xl font-bold mt-6">Create Employee</h2>
      </div>

      <EmployeeForm />
    </div>
  );
};
export default Home;
