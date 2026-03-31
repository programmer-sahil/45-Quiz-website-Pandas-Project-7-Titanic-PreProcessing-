import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function TopicCard({ topic, color, to, ctaLabel = 'Start Topic Quiz' }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-white/10 transition shadow-xl">
      <div className="w-3 h-3 rounded-full mb-4" style={{ backgroundColor: color }} />
      <div className="text-lg font-semibold">{topic.title}</div>
      <div className="text-slate-300 mt-2 min-h-[48px]">{topic.description}</div>

      <div className="mt-4 space-y-1 text-sm">
        <div className="flex justify-between"><span className="text-slate-400">MCQs</span><span>{topic.count}</span></div>
        <div className="flex justify-between"><span className="text-slate-400">Difficulty</span><span>{topic.difficulty}</span></div>
        <div className="flex justify-between"><span className="text-slate-400">Category</span><span className="text-right max-w-[180px]">{topic.category}</span></div>
      </div>

      <Link to={to} className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 font-medium hover:opacity-90 transition">
        {ctaLabel} <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
