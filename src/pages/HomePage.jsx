import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, CircleHelp, Trophy, Sparkles, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import TopicCard from '../components/TopicCard';
import { ALL_TOPICS_ID, quizTopics, topicColors } from '../data/quizTopics';
import { buildTopicSummary, getTotalQuestionCount } from '../utils/quizHelpers';

export default function HomePage() {
  const topicSummary = useMemo(() => buildTopicSummary(quizTopics), []);
  const totalQuestions = useMemo(() => getTotalQuestionCount(quizTopics), []);

  const allTopicsCard = {
    id: ALL_TOPICS_ID,
    title: 'All Topics / All Questions Quiz',
    description: 'Attempt a combined quiz with every question from every available topic.',
    difficulty: 'Beginner to Intermediate',
    category: 'Mixed Topics',
    count: totalQuestions
  };

  return (
    <Layout>
      <Navbar startQuizPath="/quiz" />

      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 text-sm mb-6">
              <Sparkles className="w-4 h-4" /> Beginner-Friendly Interactive Quiz Platform
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-300 to-emerald-300">Data & NLP</span> Through a Stunning Quiz Experience
            </h1>

            <p className="mt-6 text-slate-300 text-lg leading-8 max-w-2xl">
              Choose quizzes topic-wise and practice core concepts with the same premium interactive UI, now fully scalable for future subjects.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/quiz" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 font-semibold shadow-xl shadow-cyan-500/20 hover:scale-[1.02] transition">
                Start All Questions Quiz <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#choose-topic" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition">
                Choose by Topic
              </a>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { label: 'Total MCQs', value: String(totalQuestions), icon: CircleHelp },
                { label: 'Quiz Topics', value: String(quizTopics.length), icon: Brain },
                { label: 'Skill Level', value: 'Beginner', icon: Trophy }
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-2xl">
                  <item.icon className="w-6 h-6 text-cyan-300 mb-3" />
                  <div className="text-2xl font-bold">{item.value}</div>
                  <div className="text-slate-300 text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-slate-300">Quiz Preview</div>
                  <div className="text-xl font-semibold">Topic Distribution</div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
              </div>

              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topicSummary}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                    <XAxis dataKey="title" hide />
                    <YAxis stroke="#cbd5e1" allowDecimals={false} />
                    <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16 }} />
                    <Bar dataKey="count" radius={[12, 12, 0, 0]}>
                      {topicSummary.map((entry) => (
                        <Cell key={entry.id} fill={topicColors[entry.title] || '#22c55e'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {[allTopicsCard, ...topicSummary].map((item) => (
                  <div key={item.id} className="rounded-2xl p-3 border border-white/10 bg-slate-900/50">
                    <div className="text-xs text-slate-400">{item.title}</div>
                    <div className="font-bold text-lg">{item.count} Questions</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div id="choose-topic" className="mt-16">
          <div className="mb-6">
            <div className="text-sm uppercase tracking-[0.2em] text-cyan-300/90">Choose Quiz by Topic</div>
            <div className="text-2xl md:text-3xl font-bold mt-2">Pick One Topic or Attempt All Questions</div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.02 }}>
              <TopicCard topic={allTopicsCard} color="#22c55e" to="/quiz" ctaLabel="Start All Questions Quiz" />
            </motion.div>

            {topicSummary.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 1) * 0.04 }}
              >
                <TopicCard topic={topic} color={topicColors[topic.title] || '#38bdf8'} to={`/quiz/${topic.id}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
