import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Stars, Text3D, Center } from '@react-three/drei';
import { Brain, CheckCircle2, CircleHelp, Trophy, RotateCcw, Home, ArrowRight, User, Sparkles } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const quizData = [
  {
    question: 'Which library is mainly used to work with tables of data in Python?',
    options: ['NumPy', 'pandas', 'Matplotlib', 'OS'],
    answer: 'pandas',
    topic: 'Import Libraries'
  },
  {
    question: 'Which library is commonly imported as np?',
    options: ['pandas', 'sklearn', 'numpy', 'seaborn'],
    answer: 'numpy',
    topic: 'Import Libraries'
  },
  {
    question: 'Which function is used to read a CSV file in pandas?',
    options: ['pd.load_csv()', 'pd.open_csv()', 'pd.read_csv()', 'pd.csv_read()'],
    answer: 'pd.read_csv()',
    topic: 'Load Dataset from GitHub'
  },
  {
    question: 'Why do we import libraries in Python projects?',
    options: ['To make the code longer', 'To use pre-built functions and tools', 'To delete data', 'To close the notebook'],
    answer: 'To use pre-built functions and tools',
    topic: 'Import Libraries'
  },
  {
    question: 'Which line correctly imports pandas?',
    options: ['import pandas as pd', 'import pd as pandas', 'pandas import pd', 'import pandas.py'],
    answer: 'import pandas as pd',
    topic: 'Import Libraries'
  },
  {
    question: 'Why do we use a raw GitHub link to load a dataset?',
    options: ['Because it shows comments', 'Because it gives the actual file content', 'Because it is more colorful', 'Because it deletes errors'],
    answer: 'Because it gives the actual file content',
    topic: 'Load Dataset from GitHub'
  },
  {
    question: 'Which command is used to load a dataset from a GitHub raw link?',
    options: ['pd.read_csv(url)', 'pd.load(url)', 'pd.dataset(url)', 'read.github(url)'],
    answer: 'pd.read_csv(url)',
    topic: 'Load Dataset from GitHub'
  },
  {
    question: 'A dataset loaded into pandas is usually stored in a:',
    options: ['Function', 'Dictionary', 'DataFrame', 'Loop'],
    answer: 'DataFrame',
    topic: 'Explore Dataset'
  },
  {
    question: 'Which variable name is commonly used for a dataset?',
    options: ['num', 'df', 'txt', 'loop'],
    answer: 'df',
    topic: 'Explore Dataset'
  },
  {
    question: 'What is the first step after loading a dataset?',
    options: ['Delete all rows', 'Explore and inspect the data', 'Train the model immediately', 'Close Python'],
    answer: 'Explore and inspect the data',
    topic: 'Explore Dataset'
  },
  {
    question: 'Which function shows the first 5 rows of a dataset?',
    options: ['df.show()', 'df.top()', 'df.head()', 'df.first()'],
    answer: 'df.head()',
    topic: 'Explore Dataset'
  },
  {
    question: 'Which attribute tells the number of rows and columns?',
    options: ['df.type', 'df.shape', 'df.total', 'df.size()'],
    answer: 'df.shape',
    topic: 'Explore Dataset'
  },
  {
    question: 'Which command shows the names of all columns?',
    options: ['df.names', 'df.columns', 'df.labels', 'df.col()'],
    answer: 'df.columns',
    topic: 'Explore Dataset'
  },
  {
    question: 'Which function gives summary information like data type and non-null values?',
    options: ['df.summary()', 'df.describe()', 'df.info()', 'df.check()'],
    answer: 'df.info()',
    topic: 'Explore Dataset'
  },
  {
    question: 'Which function is mainly used to see statistical summary of numerical columns?',
    options: ['df.describe()', 'df.countrows()', 'df.number()', 'df.numeric()'],
    answer: 'df.describe()',
    topic: 'Explore Dataset'
  },
  {
    question: 'Which function checks missing values in a dataset?',
    options: ['df.empty()', 'df.isnull()', 'df.remove()', 'df.blank()'],
    answer: 'df.isnull()',
    topic: 'Check Missing Values'
  },
  {
    question: 'What does df.isnull().sum() do?',
    options: ['Deletes null values', 'Counts missing values in each column', 'Adds new rows', 'Sorts the dataset'],
    answer: 'Counts missing values in each column',
    topic: 'Check Missing Values'
  },
  {
    question: 'Missing values in a dataset are also called:',
    options: ['Labels', 'Features', 'Null values', 'Targets'],
    answer: 'Null values',
    topic: 'Check Missing Values'
  },
  {
    question: 'Why do we clean data before training a machine learning model?',
    options: ['To make data dirty', 'To improve quality and usability of data', 'To remove Python', 'To stop the program'],
    answer: 'To improve quality and usability of data',
    topic: 'Data Cleaning'
  },
  {
    question: 'Which of the following is a data cleaning task?',
    options: ['Printing a greeting', 'Filling missing values', 'Playing audio', 'Drawing only shapes'],
    answer: 'Filling missing values',
    topic: 'Data Cleaning'
  },
  {
    question: 'Which method is commonly used to fill missing numerical values?',
    options: ['fillna()', 'cutna()', 'droptext()', 'joinna()'],
    answer: 'fillna()',
    topic: 'Data Cleaning'
  },
  {
    question: 'Which value is often used to fill missing categorical data?',
    options: ['Maximum', 'Mode', 'Range', 'Index'],
    answer: 'Mode',
    topic: 'Data Cleaning'
  },
  {
    question: 'In machine learning, input columns are usually stored in:',
    options: ['y', 'X', 'z', 'df1'],
    answer: 'X',
    topic: 'Feature and Target Separation'
  },
  {
    question: 'The output column we want to predict is called:',
    options: ['Feature', 'Input', 'Target', 'Index'],
    answer: 'Target',
    topic: 'Feature and Target Separation'
  },
  {
    question: 'Which line separates features and target correctly?',
    options: [
      'X = df["Survived"] and y = df.drop("Survived")',
      'X = df.drop("Survived", axis=1) and y = df["Survived"]',
      'X = df.sum() and y = df.mean()',
      'X = df.columns and y = df.rows'
    ],
    answer: 'X = df.drop("Survived", axis=1) and y = df["Survived"]',
    topic: 'Feature and Target Separation'
  },
  {
    question: 'Why is One-Hot Encoding used?',
    options: ['To delete rows', 'To convert categorical text into numeric columns', 'To print the dataset', 'To add duplicate values'],
    answer: 'To convert categorical text into numeric columns',
    topic: 'One-Hot Encoding'
  },
  {
    question: 'Which pandas function is commonly used for One-Hot Encoding?',
    options: ['pd.get_dummies()', 'pd.make_numeric()', 'pd.encode_text()', 'pd.onehot()'],
    answer: 'pd.get_dummies()',
    topic: 'One-Hot Encoding'
  },
  {
    question: 'In One-Hot Encoding, the category male/female is usually converted into:',
    options: ['Random colors', 'Binary columns', 'Audio files', 'Loops'],
    answer: 'Binary columns',
    topic: 'One-Hot Encoding'
  },
  {
    question: 'What does drop_first=True do in one-hot encoding?',
    options: ['Drops the whole dataset', 'Removes one category column to avoid redundancy', 'Deletes the first row', 'Drops missing values only'],
    answer: 'Removes one category column to avoid redundancy',
    topic: 'One-Hot Encoding'
  },
  {
    question: 'Label Encoding is mainly used to:',
    options: ['Convert labels into numbers', 'Draw charts', 'Read CSV files', 'Remove rows'],
    answer: 'Convert labels into numbers',
    topic: 'Label Encoding'
  },
  {
    question: 'Which sklearn class is used for Label Encoding?',
    options: ['LabelScaler', 'LabelEncoder', 'TextEncoder', 'CategoryEncoder'],
    answer: 'LabelEncoder',
    topic: 'Label Encoding'
  },
  {
    question: 'Label Encoding is usually best for:',
    options: ['Input image resizing', 'Target column', 'Row deletion', 'File upload'],
    answer: 'Target column',
    topic: 'Label Encoding'
  },
  {
    question: 'Why do we split data into training and testing sets?',
    options: ['To increase spelling mistakes', 'To evaluate model performance on unseen data', 'To remove features', 'To rename columns'],
    answer: 'To evaluate model performance on unseen data',
    topic: 'Train-Test Split'
  },
  {
    question: 'Which sklearn function is used for train-test split?',
    options: ['split_data()', 'train_test_split()', 'divide_data()', 'test_train_data()'],
    answer: 'train_test_split()',
    topic: 'Train-Test Split'
  },
  {
    question: 'If test_size=0.2, what does it mean?',
    options: ['20% training and 80% testing', '20% testing and 80% training', '50% testing and 50% training', '100% testing'],
    answer: '20% testing and 80% training',
    topic: 'Train-Test Split'
  },
  {
    question: 'Why is random_state=42 often used?',
    options: ['To make results reproducible', 'To remove null values', 'To increase file size', 'To create new columns'],
    answer: 'To make results reproducible',
    topic: 'Train-Test Split'
  },
  {
    question: 'Standardization changes data so that:',
    options: ['Values go from 1 to 100 only', 'Mean becomes 0 and standard deviation becomes 1', 'All values become negative', 'Columns become text'],
    answer: 'Mean becomes 0 and standard deviation becomes 1',
    topic: 'Standardization'
  },
  {
    question: 'Which sklearn class is used for standardization?',
    options: ['StandardScaler', 'NormalScaler', 'RangeScaler', 'DataScaler'],
    answer: 'StandardScaler',
    topic: 'Standardization'
  },
  {
    question: 'Standardization is useful when:',
    options: ['Features have different scales', 'The dataset has no rows', 'Python is not installed', 'We want to remove all columns'],
    answer: 'Features have different scales',
    topic: 'Standardization'
  },
  {
    question: 'Normalization usually scales values into:',
    options: ['10 to 20', '0 to 1', '-100 to 100', '1 to 1000'],
    answer: '0 to 1',
    topic: 'Normalization'
  },
  {
    question: 'Which sklearn class is used for normalization in this project?',
    options: ['StandardScaler', 'LabelEncoder', 'MinMaxScaler', 'TrainScaler'],
    answer: 'MinMaxScaler',
    topic: 'Normalization'
  },
  {
    question: 'What is the main purpose of normalization?',
    options: ['To convert text into stories', 'To bring features into a common range', 'To delete labels', 'To create missing values'],
    answer: 'To bring features into a common range',
    topic: 'Normalization'
  },
  {
    question: 'Which operation should be done before applying machine learning algorithms?',
    options: ['Data preprocessing', 'Deleting Python', 'Restarting the laptop', 'Renaming all files'],
    answer: 'Data preprocessing',
    topic: 'Data Cleaning'
  },
  {
    question: 'Which of the following is a categorical column example?',
    options: ['Age', 'Fare', 'Sex', 'SibSp'],
    answer: 'Sex',
    topic: 'One-Hot Encoding'
  },
  {
    question: 'Which of the following is a numerical column example?',
    options: ['Embarked', 'Sex', 'Age', 'CabinType'],
    answer: 'Age',
    topic: 'Explore Dataset'
  }
];

const topicColors = {
  'Import Libraries': '#8b5cf6',
  'Load Dataset from GitHub': '#06b6d4',
  'Explore Dataset': '#10b981',
  'Check Missing Values': '#f59e0b',
  'Data Cleaning': '#ef4444',
  'Feature and Target Separation': '#3b82f6',
  'One-Hot Encoding': '#ec4899',
  'Label Encoding': '#14b8a6',
  'Train-Test Split': '#f97316',
  'Standardization': '#6366f1',
  'Normalization': '#84cc16'
};

function Background3D() {
  return (
    <div className="absolute inset-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 4, 5]} intensity={1.5} />
        <Stars radius={60} depth={50} count={3000} factor={4} saturation={0} fade speed={0.7} />
        <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
          <mesh position={[-2.5, 1.5, 0]}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial color="#7c3aed" wireframe />
          </mesh>
        </Float>
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
          <mesh position={[2.5, -1.2, 0]}>
            <torusKnotGeometry args={[0.8, 0.25, 120, 16]} />
            <meshStandardMaterial color="#06b6d4" wireframe />
          </mesh>
        </Float>
        <Float speed={1.8} rotationIntensity={1} floatIntensity={1.5}>
          <mesh position={[0, 0.4, -1]}>
            <octahedronGeometry args={[1]} />
            <meshStandardMaterial color="#22c55e" wireframe />
          </mesh>
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
      </Canvas>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative">
      <Background3D />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.18),transparent_30%)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-30 backdrop-blur-xl bg-slate-950/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 font-semibold text-lg">
          <div className="p-2 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 shadow-lg shadow-violet-500/20">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <div>Data Prep Quiz Arena</div>
            <div className="text-xs text-slate-300 font-normal">Created by SK SAHIL · Full Stack AI Developer</div>
          </div>
        </Link>
        <div className="flex items-center gap-3 text-sm">
          <Link to="/" className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition">Home</Link>
          <Link to="/quiz" className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 hover:opacity-90 transition font-medium">Start Quiz</Link>
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  const topicSummary = useMemo(() => {
    const counts = {};
    quizData.forEach((q) => {
      counts[q.topic] = (counts[q.topic] || 0) + 1;
    });
    return Object.entries(counts).map(([topic, count]) => ({ topic, count }));
  }, []);

  return (
    <Layout>
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 text-sm mb-6">
              <Sparkles className="w-4 h-4" /> Beginner-Friendly Interactive Quiz Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-300 to-emerald-300">Data Preprocessing</span> Through a Stunning Quiz Experience
            </h1>
            <p className="mt-6 text-slate-300 text-lg leading-8 max-w-2xl">
              A professional React quiz website with 45 MCQs covering import libraries, dataset loading, exploration, cleaning, encoding, splitting, standardization, and normalization.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/quiz" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 font-semibold shadow-xl shadow-cyan-500/20 hover:scale-[1.02] transition">
                Start 45 MCQ Quiz <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#topics" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition">
                Explore Topics
              </a>
            </div>
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { label: 'Total MCQs', value: '45', icon: CircleHelp },
                { label: 'Core Topics', value: '11', icon: Brain },
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
                    <XAxis dataKey="topic" hide />
                    <YAxis stroke="#cbd5e1" allowDecimals={false} />
                    <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16 }} />
                    <Bar dataKey="count" radius={[12, 12, 0, 0]}>
                      {topicSummary.map((entry) => (
                        <Cell key={entry.topic} fill={topicColors[entry.topic] || '#22c55e'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {topicSummary.slice(0, 6).map((item) => (
                  <div key={item.topic} className="rounded-2xl p-3 border border-white/10 bg-slate-900/50">
                    <div className="text-xs text-slate-400">{item.topic}</div>
                    <div className="font-bold text-lg">{item.count} Questions</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div id="topics" className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {topicSummary.map((item, index) => (
            <motion.div
              key={item.topic}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-white/10 transition"
            >
              <div className="w-3 h-3 rounded-full mb-4" style={{ backgroundColor: topicColors[item.topic] }} />
              <div className="text-lg font-semibold">{item.topic}</div>
              <div className="text-slate-300 mt-2">{item.count} beginner-friendly MCQs to strengthen the concept.</div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

function QuizPage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(1800);

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
    if (timeLeft === 0) {
      finishQuiz();
    }
  }, [timeLeft]);

  const currentQuestion = quizData[currentIndex];
  const progress = ((currentIndex + 1) / quizData.length) * 100;

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  const handleNext = () => {
    if (!selected) return;
    const updatedAnswers = [...answers, { ...currentQuestion, selected }];
    setAnswers(updatedAnswers);
    setSelected('');

    if (currentIndex < quizData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      const score = updatedAnswers.filter((item) => item.selected === item.answer).length;
      localStorage.setItem('quiz-results', JSON.stringify({ answers: updatedAnswers, score, total: quizData.length }));
      navigate('/results');
    }
  };

  const finishQuiz = () => {
    const finalAnswers = selected ? [...answers, { ...currentQuestion, selected }] : [...answers];
    const score = finalAnswers.filter((item) => item.selected === item.answer).length;
    localStorage.setItem('quiz-results', JSON.stringify({ answers: finalAnswers, score, total: quizData.length }));
    navigate('/results');
  };

  return (
    <Layout>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-[1fr_320px] gap-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 md:p-8 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-sm text-slate-300">Question {currentIndex + 1} of {quizData.length}</div>
                <div className="text-2xl font-bold">{currentQuestion.topic}</div>
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
                key={currentIndex}
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
                      className={`w-full text-left rounded-2xl border px-5 py-4 transition-all ${
                        selected === option
                          ? 'border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-500/10'
                          : 'border-white/10 bg-slate-900/50 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${selected === option ? 'bg-cyan-400 text-slate-950' : 'bg-white/10'}`}>
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
                {currentIndex === quizData.length - 1 ? 'Finish Quiz' : 'Next Question'} <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-5 h-5 text-cyan-300" />
                <div>
                  <div className="font-semibold">Quiz Info</div>
                  <div className="text-sm text-slate-300">Professional UI by SK SAHIL</div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-slate-300">Questions</span><span>{quizData.length}</span></div>
                <div className="flex justify-between"><span className="text-slate-300">Selected</span><span>{answers.length + (selected ? 1 : 0)}</span></div>
                <div className="flex justify-between"><span className="text-slate-300">Current Topic</span><span className="text-right max-w-[140px]">{currentQuestion.topic}</span></div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-2xl">
              <div className="font-semibold mb-4">Question Tracker</div>
              <div className="grid grid-cols-5 gap-2">
                {quizData.map((_, i) => {
                  const answered = i < answers.length || (i === currentIndex && selected);
                  const current = i === currentIndex;
                  return (
                    <div
                      key={i}
                      className={`h-10 rounded-xl flex items-center justify-center text-sm font-semibold border ${
                        current
                          ? 'bg-cyan-400 text-slate-950 border-cyan-300'
                          : answered
                          ? 'bg-emerald-500/15 text-emerald-200 border-emerald-400/30'
                          : 'bg-white/5 text-slate-300 border-white/10'
                      }`}
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

function ResultsPage() {
  const navigate = useNavigate();
  const results = JSON.parse(localStorage.getItem('quiz-results') || '{"answers":[],"score":0,"total":45}');
  const { answers, score, total } = results;
  const percentage = total ? Math.round((score / total) * 100) : 0;

  const topicPerformance = useMemo(() => {
    const map = {};
    answers.forEach((item) => {
      if (!map[item.topic]) map[item.topic] = { topic: item.topic, correct: 0, total: 0 };
      map[item.topic].total += 1;
      if (item.selected === item.answer) map[item.topic].correct += 1;
    });
    return Object.values(map);
  }, [answers]);

  const pieData = [
    { name: 'Correct', value: score },
    { name: 'Wrong', value: Math.max(total - score, 0) }
  ];

  const grade = percentage >= 85 ? 'Excellent' : percentage >= 70 ? 'Very Good' : percentage >= 50 ? 'Good Start' : 'Keep Practicing';

  return (
    <Layout>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid xl:grid-cols-[380px_1fr] gap-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-2xl h-fit">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-xl shadow-cyan-500/20 mb-5">
              <Trophy className="w-10 h-10" />
            </div>
            <div className="text-sm text-slate-300">Final Result</div>
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
            <div className="mt-6 flex flex-col gap-3">
              <button onClick={() => navigate('/quiz')} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 font-semibold">
                <RotateCcw className="w-5 h-5" /> Retry Quiz
              </button>
              <button onClick={() => navigate('/')} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
                <Home className="w-5 h-5" /> Back Home
              </button>
            </div>
            <div className="mt-6 text-xs text-slate-400">Created by SK SAHIL (Full Stack AI Developer)</div>
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
                    <div key={`${item.question}-${idx}`} className="rounded-3xl border border-white/10 bg-slate-900/50 p-5">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <div className="font-semibold text-lg">Q{idx + 1}. {item.question}</div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${correct ? 'bg-emerald-500/15 text-emerald-200 border border-emerald-400/20' : 'bg-rose-500/15 text-rose-200 border border-rose-400/20'}`}>
                          {correct ? 'Correct' : 'Wrong'}
                        </span>
                      </div>
                      <div className="text-sm text-slate-300 mb-2">Topic: {item.topic}</div>
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
