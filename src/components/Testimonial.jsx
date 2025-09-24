import React from "react";
import { quote, profile, Audio_Track } from "..";

export default function Testimonial() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-4 md:py-2">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 md:p-6">
          {/* Header */}
          <div className="flex items-start gap-4 md:gap-5">
            <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-violet-600 ring-1 ring-violet-200">
              <img src={quote} alt="quote" className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-800">
                Testimonials
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-3xl">
                In a fast growing and ever changing city like Bangalore, it
                sometimes becomes very difficult to find or connect with
                like-minded people. Websites like hobbycue.com is a great
                service which helps me get in touch with, communicate, connect,
                and exchange ideas with other dancers. It also provides the
                extra benefit of finding products and services that I can avail,
                which I can be assured is going to be of great quality as it
                comes recommended by people of the hobbycue community. To have
                discussions, to get visibility, and to be able to safely explore
                various hobbies and activities in my city, all under one roof,
                is an excellent idea and I highly recommend it.
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
            {/* Audio Track: 60% (3 cols) on md+ */}
            <div className="order-2 md:order-1 md:col-span-3">
              <img
                src={Audio_Track}
                alt="Audio Track"
                className="w-full h-[70px] object-contain"
              />
            </div>

            {/* Profile Image: 40% (2 cols) on md+ */}
            <div className="order-1 md:order-2 md:col-span-2">
              <img
                src={profile}
                alt="Author"
                className="w-full h-[75px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
