import React from 'react';
import Background3D from './Background3D';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative">
      <Background3D />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.18),transparent_30%)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
