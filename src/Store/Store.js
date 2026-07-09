import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  step: 1,
  submitted: false,
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    username: "",
    password: "",
    confirmPassword: "",
    accountType: "",
    contactNumber: "",
  },
};

const useFormStore = create(
  persist(
    (set) => ({
      ...initialState,
      setFormData: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...(data || {}) },
        })),
      setStep: (step) => set({ step }),
      setSubmitted: (submitted) => set({ submitted }),
      resetForm: () =>
        set({
          ...initialState,
          formData: { ...initialState.formData },
        }),
      showState: () => {
        console.log({ ...initialState });
      },
    }),
    {
      name: "multi-step-form-storage",
    },
  ),
);

export default useFormStore;
