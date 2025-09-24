import React from "react";
import { add } from "..";

export default function AddYourOwn() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-4 md:py-2">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 md:p-6">
          <div className="flex items-start gap-4 md:gap-5">
            <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600 ring-1 ring-sky-200">
              <img src={add} />
            </span>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-800">
                Add your own
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-3xl">
                Are you a teacher or expert? Do you sell or rent out equipment,
                venue or event tickets? Or, you know someone who should be on
                hobbycue? Go ahead and Add your Own page
              </p>
              <div className="mt-4">
                <button className="inline-flex items-center rounded-full border border-violet-300 px-4 py-1.5 text-sm font-medium text-violet-700 hover:bg-violet-50 active:bg-violet-100 transition-colors">
                  Add new
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
