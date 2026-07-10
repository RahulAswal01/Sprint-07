import useFormStore from "../Store/Store";

const Review = () => {
  const { formData, setStep, setSubmitted } = useFormStore();

  const fields = [
    { label: "First Name", value: formData?.firstName || "" },
    { label: "Last Name", value: formData?.lastName || "" },
    { label: "Email", value: formData?.email || "" },
    { label: "Phone", value: formData?.phone || "" },
    { label: "Date of Birth", value: formData?.dob || "" },
    { label: "Address", value: formData?.address || "" },
    { label: "City", value: formData?.city || "" },
    { label: "State", value: formData?.state || "" },
    { label: "PIN Code", value: formData?.pin || "" },
    { label: "Username", value: formData?.username || "" },
    { label: "Account Type", value: formData?.accountType || "" },
    { label: "Contact Number", value: formData?.contactNumber || "" },
    { label: "Password", value: formData?.password ? "••••••••" : "—" },
  ];

  return (
    <section className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg shadow-slate-200/80 sm:p-10">
      <div className="mb-7 space-y-2 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-600">
          Review
        </p>
        <h2 className="text-3xl font-semibold text-slate-900">
          Review your details
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-6 text-slate-600">
          Confirm everything before you submit your profile.
        </p>
      </div>

      <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
        {fields.map((item) => (
          <div
            key={item.label}
            className="flex flex-col gap-1 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
          >
            <span className="text-sm font-medium text-slate-500">
              {item.label}
            </span>
            <span className="text-sm text-slate-900">
              {item.value ? item.value : "—"}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100"
        >
          Edit Personal Info
        </button>
        <button
          type="button"
          onClick={() => setStep(2)}
          className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100"
        >
          Edit Account Info
        </button>
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default Review;
