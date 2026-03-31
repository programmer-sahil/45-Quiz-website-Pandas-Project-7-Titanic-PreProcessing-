import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

export default function Navbar({ startQuizPath = '/quiz' }) {
  return (
    <nav className="sticky top-0 z-30 backdrop-blur-xl bg-slate-950/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 font-semibold text-lg">
          <div className="p-2 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 shadow-lg shadow-violet-500/20">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <div>Data Prep Quiz Arena</div>
            <div className="text-xs text-slate-300 font-normal">Created by SK SAHIL - Full Stack AI Developer</div>
          </div>
        </Link>

        <div className="flex items-center gap-3 text-sm">
          <Link to="/" className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition">
            Home
          </Link>
          <Link to={startQuizPath} className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 hover:opacity-90 transition font-medium">
            Start Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
}
