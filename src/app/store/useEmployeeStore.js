import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useEmployeeStore = create(
  persist(
    (set) => ({
      employees: [],
      addEmployee: (employee) =>
        set((state) => ({
          employees: [...state.employees, employee],
        })),
    }),
    {
      name: 'employees-storage', // unique name for the storage
    }
  )
);

export default useEmployeeStore;
