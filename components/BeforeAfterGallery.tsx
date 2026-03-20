import React from 'react';

const BeforeAfterGallery: React.FC = () => {
  const items = [
    {
      id: 1,
      label: 'Kitchen deep cleaning',
      before: '',
      after: '',
    },
    {
      id: 2,
      label: 'Bathroom refresh',
      before: '',
      after: '',
    },
    {
      id: 3,
      label: 'Move-out cleaning',
      before: '',
      after: '',
    },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <span className="text-blue-600 font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">
            Before &amp; After
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-950 mb-4 tracking-tight">
            Real Transformations by Clean &amp; Shine
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            This section is ready for your real before-and-after projects. We will replace each card
            with your own client photos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 flex flex-col"
            >
              <div className="grid grid-cols-2 h-40 sm:h-52">
                <div className="relative">
                  {item.before ? (
                    <img
                      src={item.before}
                      alt={`${item.label} before`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                      <div className="text-center px-3">
                        <i className="fa-regular fa-image text-slate-400 text-xl mb-2" />
                        <p className="text-[10px] uppercase tracking-wider text-slate-500">
                          Before photo pending
                        </p>
                      </div>
                    </div>
                  )}
                  <span className="absolute top-2 left-2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-slate-900/80 text-white rounded-full">
                    Before
                  </span>
                </div>
                <div className="relative">
                  {item.after ? (
                    <img
                      src={item.after}
                      alt={`${item.label} after`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-blue-50 flex items-center justify-center">
                      <div className="text-center px-3">
                        <i className="fa-regular fa-image text-blue-400 text-xl mb-2" />
                        <p className="text-[10px] uppercase tracking-wider text-blue-500">
                          After photo pending
                        </p>
                      </div>
                    </div>
                  )}
                  <span className="absolute top-2 left-2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-emerald-500 text-white rounded-full">
                    After
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">
                  {item.label}
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500">
                  Waiting for your real client photos for this project.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;

