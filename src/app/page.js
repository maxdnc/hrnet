import Link from 'next/link';
import EmployeeForm from './components/EmployeeForm';

const Home = () => {
  return (
    <div>
      <EmployeeForm />

      <Link href="/employees" className="mt-4 text-blue-600 hover:underline">
        View Employees{' '}
      </Link>
    </div>
  );
};
export default Home;
