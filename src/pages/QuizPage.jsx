import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ArrowRight, User } from 'lucide-react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import {
  QUIZ_RESULTS_STORAGE_KEY,
  calculateTimerSeconds,
  formatTime,
  getQuizSession,
  scoreAnswers
} from '../utils/quizHelpers';

export default function QuizPage() {
  const navigate = useNavigate();
  const { topicId } = useParams();

  const session = useMemo(() => getQuizSession(topicId), [topicId]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(() => calculateTimerSeconds(session ? session.questions.length : 0));

  useEffect(() => {
    if (!session) {
      navigate('/', { replace: true });
      return;
    }

    setCurrentIndex(0);
    setSelected('');
    setAnswers([]);
    setTimeLeft(calculateTimerSeconds(session.questions.length));
  }, [session, navigate]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0 && session) {
      finishQuiz();
    }
  }, [timeLeft, session]);

  if (!session) return null;

  const currentQuestion = session.questions[currentIndex];
  const progress = ((currentIndex + 1) / session.questions.length) * 100;

  const persistResultsAndNavigate = (finalAnswers) => {
    const score = scoreAnswers(finalAnswers);

    localStorage.setItem(
      QUIZ_RESULTS_STORAGE_KEY,
      JSON.stringify({
        answers: finalAnswers,
        score,
        total: session.questions.length,
        selectedTopicId: session.topicId,
        selectedTopicTitle: session.title,
        isAllTopics: session.isAllTopics
      })
    );

    navigate('/results');
  };

  const handleNext = () => {
    if (!selected) return;

    const updatedAnswers = [...answers, { ...currentQuestion, selected }];
    setAnswers(updatedAnswers);
    setSelected('');

    if (currentIndex < session.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      return;
    }

    persistResultsAndNavigate(updatedAnswers);
  };

  const finishQuiz = () => {
    const finalAnswers = selected ? [...answers, { ...currentQuestion, selected }] : [...answers];
    persistResultsAndNavigate(finalAnswers);
  };

  return (
    <Layout>
      <Navbar startQuizPath={topicId ? '/quiz/' + topicId : '/quiz'} />

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-[1fr_320px] gap-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 md:p-8 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-sm text-slate-300">Question {currentIndex + 1} of {session.questions.length}</div>
                <div className="text-2xl font-bold">{session.title}</div>
                <div className="text-sm text-cyan-200 mt-1">{currentQuestion.topic}</div>
              </div>
              <div className="px-4 py-2 rounded-2xl bg-red-500/10 text-red-200 border border-red-400/20 font-semibold">
                Time Left: {formatTime(timeLeft)}
              </div>
            </div>

            <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden mb-8">
              <motion.div className="h-full bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400" animate={{ width: `${progress}%` }} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl font-semibold leading-9 mb-8">{currentQuestion.question}</div>
                <div className="space-y-4">
                  {currentQuestion.options.map((option, idx) => (
                    <button
                      key={option}
                      onClick={() => setSelected(option)}
                      className={
                        'w-full text-left rounded-2xl border px-5 py-4 transition-all ' +
                        (selected === option
                          ? 'border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-500/10'
                          : 'border-white/10 bg-slate-900/50 hover:bg-white/10')
                      }
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={
                            'w-10 h-10 rounded-xl flex items-center justify-center font-bold ' +
                            (selected === option ? 'bg-cyan-400 text-slate-950' : 'bg-white/10')
                          }
                        >
                          {String.fromCharCode(65 + idx)}
                        </div>
                        <div className="text-base md:text-lg">{option}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between gap-4">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <Home className="w-5 h-5" /> Exit
              </button>

              <button
                onClick={handleNext}
                disabled={!selected}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentIndex === session.questions.length - 1 ? 'Finish Quiz' : 'Next Question'} <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-5 h-5 text-cyan-300" />
                <div>
                  <div className="font-semibold">Quiz Info</div>
                  <div className="text-sm text-slate-300">Created by SK SAHIL - Full Stack AI Developer</div>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-slate-300">Topic</span><span className="text-right max-w-[140px]">{session.title}</span></div>
                <div className="flex justify-between"><span className="text-slate-300">Questions</span><span>{session.questions.length}</span></div>
                <div className="flex justify-between"><span className="text-slate-300">Selected</span><span>{answers.length + (selected ? 1 : 0)}</span></div>
                <div className="flex justify-between"><span className="text-slate-300">Difficulty</span><span>{session.difficulty}</span></div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-2xl">
              <div className="font-semibold mb-4">Question Tracker</div>
              <div className="grid grid-cols-5 gap-2">
                {session.questions.map((question, i) => {
                  const answered = i < answers.length || (i === currentIndex && selected);
                  const current = i === currentIndex;

                  return (
                    <div
                      key={question.id}
                      className={
                        'h-10 rounded-xl flex items-center justify-center text-sm font-semibold border ' +
                        (current
                          ? 'bg-cyan-400 text-slate-950 border-cyan-300'
                          : answered
                          ? 'bg-emerald-500/15 text-emerald-200 border-emerald-400/30'
                          : 'bg-white/5 text-slate-300 border-white/10')
                      }
                    >
                      {i + 1}
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
