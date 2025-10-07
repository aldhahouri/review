import React from "react";
import Link from "next/link";
import { OverviewCard } from "@/components/OverviewCard";

const features = [
  {
    title: "Real-time Analytics",
    description:
      "Connect your data sources and surface the metrics that matter with live updating widgets.",
    icon: "📊"
  },
  {
    title: "Smart Alerts",
    description:
      "Keep your team informed with AI-assisted anomaly detection delivered to Slack or email.",
    icon: "🔔"
  },
  {
    title: "Customizable Workspaces",
    description:
      "Drag-and-drop components to compose dashboards that fit every stakeholder's needs.",
    icon: "🧩"
  }
];

const overviewMetrics = [
  {
    title: "Monthly Revenue",
    value: "$128K",
    change: "▲ 12.4% vs last month",
    changeType: "positive" as const
  },
  {
    title: "Active Users",
    value: "8,542",
    change: "▲ 5.1% vs last week",
    changeType: "positive" as const
  },
  {
    title: "Churn Rate",
    value: "2.3%",
    change: "▼ 0.6% vs last quarter",
    changeType: "negative" as const
  }
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <section className="w-full max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-12 text-slate-100 shadow-xl backdrop-blur">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Smart Dashboard Starter
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Build intelligent analytics experiences in minutes, not months.
            </h1>
            <p className="text-lg text-slate-300">
              Kickstart your product with a Next.js + Tailwind CSS foundation that is optimized for
              modern data teams. Ship dashboards, admin portals and reporting suites faster than ever.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://nextjs.org/docs"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                View Documentation
              </Link>
              <Link
                href="https://tailwindcss.com/docs"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:text-slate-50"
              >
                Tailwind Components
              </Link>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-lg backdrop-blur"
                >
                  <div className="mb-4 text-3xl">{feature.icon}</div>
                  <h2 className="text-xl font-semibold text-white">{feature.title}</h2>
                  <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {overviewMetrics.map((metric) => (
            <OverviewCard key={metric.title} {...metric} />
          ))}
        </div>
      </section>
      <footer className="mt-16 text-sm text-slate-500">
        Crafted with Next.js 14 & Tailwind CSS 3.4 for forward-thinking teams.
      </footer>
    </main>
  );
}
