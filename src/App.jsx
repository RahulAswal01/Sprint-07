import PersonalInfo from "./Components/PersonalInfo";
import AccountInfo from "./Components/AccountInfo";
import Review from "./Components/Review";
import Topbar from "./Components/Topbar";
import useFormStore from "./Store/Store";

function App() {
  const { step, submitted, resetForm } = useFormStore();

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8">
      <Topbar currentStep={step} />

      {submitted ? (
        <section className="mx-auto max-w-3xl rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center shadow-lg shadow-emerald-100/80">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-600">
            Success
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            Your profile has been submitted.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Thank you for completing the multi-step form.
          </p>
          <button
            type="button"
            onClick={resetForm}
            className="mt-6 rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
          >
            Start Again
          </button>
        </section>
      ) : step === 1 ? (
        <PersonalInfo />
      ) : step === 2 ? (
        <AccountInfo />
      ) : (
        <Review />
      )}
    </main>
  );
}

export default App;
