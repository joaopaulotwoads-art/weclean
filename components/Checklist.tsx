import React from 'react';

const Checklist: React.FC = () => {
  return (
    <section id="checklist" className="py-16 sm:py-32 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">
            Service Checklist
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-950 mb-4 tracking-tight">
            What&apos;s Included in Our Cleaning
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-3xl mx-auto">
            This checklist is a summary of what we typically include in our Regular, Deep, and
            Move-in/Move-out cleanings. Exact scope can be adjusted to your home and needs.
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl shadow-xl border border-slate-100">
          <table className="min-w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="px-4 sm:px-6 py-4 font-semibold">Area / Task</th>
                <th className="px-4 sm:px-6 py-4 font-semibold text-center">Recurring</th>
                <th className="px-4 sm:px-6 py-4 font-semibold text-center">Deep Cleaning</th>
                <th className="px-4 sm:px-6 py-4 font-semibold text-center">Move Cleaning</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-slate-50">
                <td className="px-4 sm:px-6 py-3 font-semibold text-slate-900" colSpan={4}>
                  Kitchen
                </td>
              </tr>
              <tr>
                <td className="px-4 sm:px-6 py-3">Cleaning the stove</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr className="bg-slate-50/60">
                <td className="px-4 sm:px-6 py-3">Cleaning the microwave</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr>
                <td className="px-4 sm:px-6 py-3">Cleaning the countertop</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr className="bg-slate-50/60">
                <td className="px-4 sm:px-6 py-3">Dusting the items on the countertop</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr>
                <td className="px-4 sm:px-6 py-3">Cleaning the inside of the oven</td>
                <td className="text-center text-[11px] text-slate-500">Additional</td>
                <td className="text-center text-[11px] text-slate-500">Additional</td>
                <td className="text-center">✔</td>
              </tr>
              <tr className="bg-slate-50/60">
                <td className="px-4 sm:px-6 py-3">Cleaning the inside of the refrigerator</td>
                <td className="text-center text-[11px] text-slate-500">Additional</td>
                <td className="text-center text-[11px] text-slate-500">Additional</td>
                <td className="text-center">✔</td>
              </tr>
              <tr>
                <td className="px-4 sm:px-6 py-3">Cleaning the outside of the oven</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr className="bg-slate-50/60">
                <td className="px-4 sm:px-6 py-3">Cleaning the outside of the refrigerator</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr>
                <td className="px-4 sm:px-6 py-3">Localized cleaning of the cabinets (outside)</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr className="bg-slate-50/60">
                <td className="px-4 sm:px-6 py-3">Wash the front of cabinets</td>
                <td className="text-center text-red-500">✘</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr>
                <td className="px-4 sm:px-6 py-3">Cleaning inside the cabinets and drawer</td>
                <td className="text-center text-red-500">✘</td>
                <td className="text-center text-[11px] text-slate-500">Additional</td>
                <td className="text-center">✔</td>
              </tr>
              <tr className="bg-slate-50/60">
                <td className="px-4 sm:px-6 py-3">Cleaning the sink and polishing accessories</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>

              <tr className="bg-slate-50">
                <td className="px-4 sm:px-6 py-3 font-semibold text-slate-900" colSpan={4}>
                  Bathroom
                </td>
              </tr>
              <tr>
                <td className="px-4 sm:px-6 py-3">Scrub bathtub and shower</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr className="bg-slate-50/60">
                <td className="px-4 sm:px-6 py-3">Cleaning countertop</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr>
                <td className="px-4 sm:px-6 py-3">Cleaning inside the cabinets and drawer</td>
                <td className="text-center text-red-500">✘</td>
                <td className="text-center text-[11px] text-slate-500">Additional</td>
                <td className="text-center">✔</td>
              </tr>
              <tr className="bg-slate-50/60">
                <td className="px-4 sm:px-6 py-3">Cleaning the sink and polishing accessories</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr>
                <td className="px-4 sm:px-6 py-3">Cleaning the toilet and area</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>

              <tr className="bg-slate-50">
                <td className="px-4 sm:px-6 py-3 font-semibold text-slate-900" colSpan={4}>
                  Bedroom
                </td>
              </tr>
              <tr>
                <td className="px-4 sm:px-6 py-3">Change bed linens (if left on bed)</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>

              <tr className="bg-slate-50">
                <td className="px-4 sm:px-6 py-3 font-semibold text-slate-900" colSpan={4}>
                  All Rooms
                </td>
              </tr>
              <tr>
                <td className="px-4 sm:px-6 py-3">Remove spider webs &amp; general dusting</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr className="bg-slate-50/60">
                <td className="px-4 sm:px-6 py-3">Dusting fans, chandeliers and lighting</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr>
                <td className="px-4 sm:px-6 py-3">Dusting pictures on the walls</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr className="bg-slate-50/60">
                <td className="px-4 sm:px-6 py-3">Dusting furniture</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr>
                <td className="px-4 sm:px-6 py-3">Dusting blinds</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr className="bg-slate-50/60">
                <td className="px-4 sm:px-6 py-3">Wash the blinds</td>
                <td className="text-center text-red-500">✘</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr>
                <td className="px-4 sm:px-6 py-3">Dusting the windowsill</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr className="bg-slate-50/60">
                <td className="px-4 sm:px-6 py-3">Washing doors and door knobs</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr>
                <td className="px-4 sm:px-6 py-3">Dusting doors and door knobs</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr className="bg-slate-50/60">
                <td className="px-4 sm:px-6 py-3">Dusting the baseboard</td>
                <td className="text-center text-red-500">✘</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr>
                <td className="px-4 sm:px-6 py-3">Washing baseboard</td>
                <td className="text-center text-red-500">✘</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr className="bg-slate-50/60">
                <td className="px-4 sm:px-6 py-3">Empty the trash</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr>
                <td className="px-4 sm:px-6 py-3">Vacuum floors</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr className="bg-slate-50/60">
                <td className="px-4 sm:px-6 py-3">Vacuum carpet</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr>
                <td className="px-4 sm:px-6 py-3">Mop the floor</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr className="bg-slate-50/60">
                <td className="px-4 sm:px-6 py-3">Vacuum the sofa</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 sm:mt-10 space-y-3 text-[11px] sm:text-xs text-slate-500">
          <p>We do not collect pet waste.</p>
          <p>We do not move heavy items during regular cleaning and moves.</p>
        </div>
      </div>
    </section>
  );
};

export default Checklist;

