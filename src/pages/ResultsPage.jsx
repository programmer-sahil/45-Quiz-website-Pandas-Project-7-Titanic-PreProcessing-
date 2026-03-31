import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Trophy, RotateCcw, Home } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import { ALL_TOPICS_ID, topicColors } from '../data/quizTopics';
import { QUIZ_RESULTS_STORAGE_KEY } from '../utils/quizHelpers';

export default function ResultsPage() {
  const navigate = useNavigate();

  const results = JSON.parse(
    localStorage.getItem(QUIZ_RESULTS_STORAGE_KEY) ||
      '{"answers":[],"score":0,"total":0,"selectedTopicId":"all-topics","selectedTopicTitle":"All Questions Quiz","isAllTopics":true}'
  );

  const { answers, score, total, selectedTopicId, selectedTopicTitle, isAllTopics } = results;
  const percentage = total ? Math.round((score / total) * 100) : 0;

  const topicPerformance = useMemo(() => {
    const map = {};
    answers.forEach((item) => {
      const key = isAllTopics ? item.sourceTopicTitle || item.topic : item.topic;
      if (!map[key]) map[key] = { topic: key, correct: 0, total: 0 };
      map[key].total += 1;
      if (item.selected === item.answer) map[key].correct += 1;
    });
    return Object.values(map);
  }, [answers, isAllTopics]);

  const pieData = [
    { name: 'Correct', value: score },
    { name: 'Wrong', value: Math.max(total - score, 0) }
  ];

  const grade = percentage >= 85 ? 'Excellent' : percentage >= 70 ? 'Very Good' : percentage >= 50 ? 'Good Start' : 'Keep Practicing';
  const retryPath = selectedTopicId && selectedTopicId !== ALL_TOPICS_ID ? `/quiz/${selectedTopicId}` : '/quiz';

  return (
    <Layout>
      <Navbar startQuizPath={retryPath} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid xl:grid-cols-[380px_1fr] gap-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-2xl h-fit">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-xl shadow-cyan-500/20 mb-5">
              <Trophy className="w-10 h-10" />
            </div>

            <div className="text-sm text-slate-300">Final Result</div>
            <div className="text-sm text-cyan-200 mt-1">{selectedTopicTitle}</div>
            <div className="text-5xl font-bold mt-2">{percentage}%</div>
            <div className="text-xl mt-2 font-semibold text-cyan-200">{grade}</div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-emerald-500/10 border border-emerald-400/20 p-4">
                <div className="text-sm text-emerald-200">Correct</div>
                <div className="text-2xl font-bold">{score}</div>
              </div>
              <div className="rounded-2xl bg-rose-500/10 border border-rose-400/20 p-4">
                <div className="text-sm text-rose-200">Wrong</div>
                <div className="text-2xl font-bold">{Math.max(total - score, 0)}</div>
              </div>
            </div>

            <div className="mt-4 text-sm text-slate-300">
              <div className="flex justify-between"><span>Attempted</span><span>{total}</span></div>
              <div className="flex justify-between"><span>Percentage</span><span>{percentage}%</span></div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <button onClick={() => navigate(retryPath)} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 font-semibold">
                <RotateCcw className="w-5 h-5" /> Retry Quiz
              </button>
              <button onClick={() => navigate('/')} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
                <Home className="w-5 h-5" /> Back Home
              </button>
            </div>

            <div className="mt-6 text-xs text-slate-400">Created by SK SAHIL - Full Stack AI Developer</div>
          </div>

          <div className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-2xl h-[360px]">
                <div className="text-xl font-semibold mb-4">Overall Accuracy</div>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={70} outerRadius={110} paddingAngle={4}>
                      <Cell fill="#22c55e" />
                      <Cell fill="#ef4444" />
                    </Pie>
                    <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-2xl h-[360px]">
                <div className="text-xl font-semibold mb-4">Topic Performance</div>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topicPerformance}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                    <XAxis dataKey="topic" hide />
                    <YAxis stroke="#cbd5e1" allowDecimals={false} />
                    <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16 }} />
                    <Bar dataKey="correct" radius={[12, 12, 0, 0]}>
                      {topicPerformance.map((entry) => (
                        <Cell key={entry.topic} fill={topicColors[entry.topic] || '#38bdf8'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                <div className="text-xl font-semibold">Detailed Review</div>
              </div>

              <div className="space-y-4 max-h-[560px] overflow-y-auto pr-2">
                {answers.map((item, idx) => {
                  const correct = item.selected === item.answer;
                  return (
                    <div key={`${item.id}-${idx}`} className="rounded-3xl border border-white/10 bg-slate-900/50 p-5">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <div className="font-semibold text-lg">Q{idx + 1}. {item.question}</div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${correct ? 'bg-emerald-500/15 text-emerald-200 border border-emerald-400/20' : 'bg-rose-500/15 text-rose-200 border border-rose-400/20'}`}>
                          {correct ? 'Correct' : 'Wrong'}
                        </span>
                      </div>
                      <div className="text-sm text-slate-300 mb-2">Topic: {isAllTopics ? item.sourceTopicTitle || item.topic : item.topic}</div>
                      <div className="text-sm"><span className="text-slate-400">Your Answer:</span> <span className={correct ? 'text-emerald-300' : 'text-rose-300'}>{item.selected || 'Not Answered'}</span></div>
                      <div className="text-sm mt-1"><span className="text-slate-400">Correct Answer:</span> <span className="text-cyan-300">{item.answer}</span></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
