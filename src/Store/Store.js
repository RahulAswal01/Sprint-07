import { create } from "zustand";
import { persist } from "zustand/middleware";

// 1. Structural layout template used to instantiate or wipe the state safely
const getInitialState = () => ({
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
});

const useFormStore = create(
  persist(
    (set, get) => ({
      // Initialize state dynamically
      ...getInitialState(),

      // Safely merge incoming data keys into the nested formData object
      setFormData: (data) =>
        set((state) => ({
          formData: {
            ...state.formData,
            ...(data || {}),
          },
        })),

      // Set the active workflow index step
      setStep: (step) => set({ step }),

      // Toggle final completion visibility flags
      setSubmitted: (submitted) => set({ submitted }),

      // Wipes out both Zustand persistent memory and resets to default
      resetForm: () => {
        // Zustand automatically updates 'multi-step-form-storage' in localStorage
        set(getInitialState());
      },

      // Diagnostic utility helper to view current memory space values
      showState: () => {
        console.log("Current Form Data Slices in Zustand:", get().formData);
      },
    }),
    {
      name: "multi-step-form-storage", // The correct storage key
    },
  ),
);

export default useFormStore;
