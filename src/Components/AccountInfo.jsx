import { useState } from "react";
import { useForm } from "react-hook-form";
import useFormStore from "../Store/Store";

const AccountInfo = () => {
  const { formData, setStep, setFormData, showState } = useFormStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      username: formData.username || "",
      contactNumber: formData.contactNumber || "",
      password: formData.password || "",
      confirmPassword: formData.confirmPassword || "",
      accountType: formData.accountType || "",
    },
  });

  const onPrevious = () => {
    setStep(1);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const password = watch("password", "");

  const onValidSubmit = (data) => {
    setFormData(data);
    setStep(3);
    showState();
  };

  return (
    <section className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg shadow-slate-200/80 sm:p-10">
      <div className="mb-7 space-y-2 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-600">
          Account Setup
        </p>
        <h2 className="text-3xl font-semibold text-slate-900">
          Account Information
        </h2>
      </div>

      <form
        onSubmit={handleSubmit(onValidSubmit)}
        className="grid gap-5 sm:grid-cols-2"
      >
        <div className="space-y-2">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-slate-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username", { required: "Username is required" })}
            placeholder="Username"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
          {errors.username && (
            <p className="text-red-500 text-xs mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contactNumber"
            className="block text-sm font-medium text-slate-700"
          >
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            {...register("contactNumber", {
              required: "Contact number is required",
            })}
            placeholder="Contact number"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
          {errors.contactNumber && (
            <p className="text-red-500 text-xs mt-1">
              {errors.contactNumber.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-700"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", { required: "Password is required" })}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-sky-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-slate-700"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              {...register("confirmPassword", {
                validate: (v) => v === password || "Match failed",
              })}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-sky-600"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="accountType"
            className="block text-sm font-medium text-slate-700"
          >
            Account Type
          </label>
          <select
            id="accountType"
            {...register("accountType", { required: "Select type" })}
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500"
          >
            <option value="">Select type</option>
            <option value="personal">Personal</option>
            <option value="business">Business</option>
          </select>
          {errors.accountType && (
            <p className="text-red-500 text-xs mt-1">
              {errors.accountType.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onPrevious}
            className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Previous
          </button>
          <button
            type="submit"
            className="rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700"
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default AccountInfo;
