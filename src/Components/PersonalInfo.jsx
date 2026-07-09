import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useFormStore from "../Store/Store";

const PersonalInfo = () => {
  const { formData, setStep, setFormData, showState } = useFormStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  useEffect(() => {
    reset(formData);
  }, [formData, reset]);

  const onValidSubmit = (data) => {
    setFormData(data);
    setStep(2);

    console.log("Personal Info step submitted:", data);
    showState();
  };

  return (
    <section className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg shadow-slate-200/80 sm:p-10">
      <div className="mb-7 space-y-2 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-600">
          Profile Details
        </p>
        <h2 className="text-3xl font-semibold text-slate-900">
          Personal Information
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-6 text-slate-600">
          Share your basic information so we can personalize your experience and
          keep your account up to date.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onValidSubmit)}
        className="grid gap-5 sm:grid-cols-2"
      >
        {/* First Name */}
        <div className="space-y-2">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-slate-700"
          >
            First Name
          </label>
          <input
            {...register("firstName", { required: "First name is required" })}
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-slate-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName")}
            placeholder="Enter your last name"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            placeholder="Enter your email"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-slate-700"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone", {
              required: "Phone number is required",
              minLength: {
                value: 10,
                message: "Phone number must be exactly 10 digits",
              },
              maxLength: {
                value: 10,
                message: "Phone number must be exactly 10 digits",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Only numbers are allowed",
              },
            })}
            placeholder="Enter your phone number"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div className="space-y-2">
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-slate-700"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            {...register("dob", { required: "Date of birth is required" })}
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
          {errors.dob && (
            <p className="text-red-500 text-xs mt-1">{errors.dob.message}</p>
          )}
        </div>

        {/* Address */}
        <div className="space-y-2 sm:col-span-2">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-slate-700"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            {...register("address", { required: "Address is required" })}
            placeholder="Enter your address"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* City */}
        <div className="space-y-2">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-slate-700"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            {...register("city", { required: "City is required" })}
            placeholder="Enter your city"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
          {errors.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
          )}
        </div>

        {/* State */}
        <div className="space-y-2">
          <label
            htmlFor="state"
            className="block text-sm font-medium text-slate-700"
          >
            State / Province
          </label>
          <input
            type="text"
            id="state"
            {...register("state", { required: "State is required" })}
            placeholder="Enter your state or province"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
          {errors.state && (
            <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>
          )}
        </div>

        {/* PIN Code */}
        <div className="space-y-2 sm:col-span-2">
          <label
            htmlFor="pin"
            className="block text-sm font-medium text-slate-700"
          >
            PIN Code
          </label>
          <input
            type="text"
            id="pin"
            {...register("pin", {
              required: "PIN code is required",
              minLength: {
                value: 6,
                message: "PIN code must be exactly 6 digits",
              },
              maxLength: {
                value: 6,
                message: "PIN code must be exactly 6 digits",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Only numbers are allowed",
              },
            })}
            placeholder="Enter your PIN code"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
          {errors.pin && (
            <p className="text-red-500 text-xs mt-1">{errors.pin.message}</p>
          )}
        </div>

        <div className="mt-4 sm:col-span-2">
          <button
            type="submit"
            className="w-full rounded-2xl bg-sky-600 px-4 py-3.5 text-sm font-medium text-white shadow-md shadow-sky-200 transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Continue to Account Setup
          </button>
        </div>
      </form>
    </section>
  );
};

export default PersonalInfo;
