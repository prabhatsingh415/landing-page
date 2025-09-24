import React from "react";
import { people, location, product_icon, program } from "..";

const items = [
  {
    id: "people",
    title: "People",
    description:
      "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
    cta: "Connect",
    color: "violet",
    Icon: people,
  },
  {
    id: "place",
    title: "Place",
    description:
      "Find a class, school, playground, auditorium, studio, shop, or an event venue. Book a slot at venues that allow booking through hobbycue.",
    cta: "Meet up",
    color: "green",
    Icon: location,
  },
  {
    id: "product",
    title: "Product",
    description:
      "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
    cta: "Get it",
    color: "rose",
    Icon: product_icon,
  },
  {
    id: "program",
    title: "Program",
    description:
      "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
    cta: "Attend",
    color: "sky",
    Icon: program,
  },
];

const PillButton = ({ children, className = "" }) => (
  <button
    className={[
      "inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full",
      "border border-slate-300 text-slate-700",
      "hover:bg-slate-50 active:bg-slate-100 transition-colors",
      className,
    ].join(" ")}
  >
    {children}
  </button>
);

const Card = ({ item }) => {
  const { Icon } = item;

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div
          className={`h-8 w-8 rounded-md bg-${item.color}-100 text-${item.color}-600 grid place-items-center ring-1 ring-${item.color}-200`}
        >
          <img src={Icon} alt={item.title} className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
      </div>
      <p className="text-slate-600 leading-relaxed text-sm md:text-[15px]">
        {item.description}
      </p>
      <div>
        <PillButton
          className={`border-${item.color}-300 text-${item.color}-700 hover:bg-${item.color}-50`}
        >
          {item.cta}
        </PillButton>
      </div>
    </div>
  );
};

export default function List() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {items.map((it) => (
            <Card item={it} key={it.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
