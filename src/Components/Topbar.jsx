const steps = [
  { id: 1, label: "Personal Info" },
  { id: 2, label: "Account Info" },
  { id: 3, label: "Review & Submit" },
];

const Topbar = ({ currentStep }) => {
  return (
    <div className="mx-auto mb-8 max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-2 text-center sm:text-left">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-600">
          Multi-Step Form
        </p>
        <h2 className="text-2xl font-semibold text-slate-900">
          Complete your profile
        </h2>
      </div>

      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <div key={step.id} className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold ${
                  isActive
                    ? "border-sky-600 bg-sky-600 text-white"
                    : isCompleted
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : "border-slate-300 bg-white text-slate-600"
                }`}
              >
                {step.id}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">
                  {step.label}
                </p>
                <p className="text-xs text-slate-500">
                  {isActive
                    ? "Current"
                    : isCompleted
                      ? "Completed"
                      : "Upcoming"}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="ml-2 hidden h-0.5 w-12 bg-slate-200 lg:block" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Topbar;
