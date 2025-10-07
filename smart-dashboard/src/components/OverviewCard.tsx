import React from "react";

type OverviewCardProps = {
  title: string;
  value: string;
  change: string;
  changeType?: "positive" | "negative";
};

export const OverviewCard: React.FC<OverviewCardProps> = ({ title, value, change, changeType }) => {
  const isPositive = changeType !== "negative";
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 shadow-lg backdrop-blur">
      <p className="text-sm font-medium text-slate-400">{title}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
      <p className={`mt-2 text-sm ${isPositive ? "text-emerald-400" : "text-rose-400"}`}>{change}</p>
    </div>
  );
};
