import React from 'react';

const TrustBadges: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl border border-slate-100 p-4 sm:p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <i className="fa-brands fa-google text-2xl sm:text-3xl text-[#4285F4]" />
                <div>
                  <p className="font-bold text-slate-900 text-sm sm:text-base">Google</p>
                  <p className="text-xs text-slate-500">Verified reviews</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900">5.0</p>
                <p className="text-amber-500 text-xs">★★★★★</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-100 p-4 sm:p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-shield-check text-2xl sm:text-3xl text-blue-600" />
                <div>
                  <p className="font-bold text-slate-900 text-sm sm:text-base">Thumbtack</p>
                  <p className="text-xs text-slate-500">Trusted local pros</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900">5.0</p>
                <p className="text-amber-500 text-xs">★★★★★</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;

