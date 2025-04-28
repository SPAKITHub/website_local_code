"use client";

import { useLocation } from "react-router-dom";

const Apply = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const jobTitle = searchParams.get("job") || "Open Position";

  return (
    <section id="apply" className="py-24 px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-3xl mx-auto bg-white/90 p-8 rounded-xl border border-spak-100 shadow-lg">
        <h2 className="text-3xl font-display font-bold mb-8 text-center">
          Apply for {jobTitle}
        </h2>
        <form className="grid gap-6">
          <input type="text" placeholder="Full Name" required className="border rounded-md p-3 w-full" />
          <input type="email" placeholder="Email Address" required className="border rounded-md p-3 w-full" />
          <input type="tel" placeholder="Phone Number" className="border rounded-md p-3 w-full" />
          <input type="file" className="border rounded-md p-3 w-full" accept=".pdf,.doc,.docx" />
          <textarea placeholder="Cover Letter" rows={5} className="border rounded-md p-3 w-full" />
          <button
            type="submit"
            className="bg-spak-600 hover:bg-spak-700 text-white rounded-md px-8 py-3 font-medium transition-colors"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default Apply;
