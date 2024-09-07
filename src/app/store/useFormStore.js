import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  startDate: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  department: '',
};

const useFormStore = create(
  persist(
    (set) => ({
      formData: initialState,
      setFormData: (name, value) =>
        set((state) => ({
          formData: {
            ...state.formData,
            [name]: value,
          },
        })),
      resetFormData: () => set({ formData: initialState }),
    }),
    {
      name: 'employe-form-storage', // unique name for the storage
    }
  )
);

export default useFormStore;
