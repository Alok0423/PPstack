import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const mockCourses = [
  {
    id: 'c1',
    provider: 'IBM',
    title: 'Introduction to Data Analytics',
    progress: 10,
    eta: 'Nov 15, 2025',
    quiz: { title: 'Graded Quiz', time: 'Graded Assignment (15 minutes)' }
  },
  {
    id: 'c2',
    provider: 'DL',
    title: 'AI For Everyone',
    progress: 19,
    eta: 'Sep 24, 2025',
    quiz: { title: 'Week 1 Quiz', time: 'Graded Assignment (30 minutes)' }
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatDelay: 4
  }
};

function ProgressBar({ value }) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(value);
    }, 300);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="relative w-full h-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-purple-600 to-purple-500 rounded-full relative overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: `${animatedValue}%` }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
}

function CourseCard({ course, onResume, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ 
        y: -6,
        boxShadow: '0 20px 40px -10px rgba(139, 92, 246, 0.15)'
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center justify-between relative overflow-hidden transition-all duration-300 hover:border-purple-200"
    >
      {/* Subtle gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="flex items-start gap-4 relative z-10">
        <motion.div 
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-700 shadow-sm"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {course.provider}
        </motion.div>
        <div>
          <div className="text-sm text-gray-500 mb-1">Course</div>
          <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
          <div className="text-xs text-gray-500 mb-3">
            {course.progress}% complete · Estimated completion: {course.eta}
          </div>
          <ProgressBar value={course.progress} />
        </div>
      </div>

      <div className="ml-4 w-56 relative z-10">
        <motion.div 
          className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-4 border border-gray-200 flex items-center justify-between shadow-sm"
          whileHover={{ scale: 1.02 }}
        >
          <div>
            <div className="text-sm font-semibold text-gray-800">{course.quiz.title}</div>
            <div className="text-xs text-gray-500 mt-1">{course.quiz.time}</div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <motion.button
              onClick={() => onResume(course)}
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-1">
                Resume
                <motion.span
                  animate={{ x: isHovered ? 4 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </span>
              {/* Ripple effect background */}
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: [0, 1, 0] }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
            <motion.button
              title="More"
              className="text-gray-400 hover:text-gray-600 p-1"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              ⋮
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function TodayGoals() {
  const goals = [
    { text: 'Complete any 3 learning items', meta: '0/3' },
    { text: 'Watch a video' },
    { text: 'Complete a graded assessment' }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
    >
      <h4 className="font-bold text-gray-800 mb-4">Today&apos;s goals</h4>
      <motion.ul 
        className="space-y-3 text-sm text-gray-600"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {goals.map((g, i) => (
          <motion.li
            key={i}
            variants={fadeInUp}
            transition={{ duration: 0.3 }}
            className="flex items-start gap-3 group cursor-pointer"
            whileHover={{ x: 4 }}
          >
            <motion.div
              className="mt-0.5 w-7 h-7 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center text-xs border border-gray-200"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              ⭐
            </motion.div>
            <div className="flex-1">
              <div className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors">
                {g.text}
              </div>
              {g.meta && (
                <motion.div 
                  className="text-xs text-gray-400 mt-0.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {g.meta}
                </motion.div>
              )}
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

function LearningPlan() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const month = 'January 2026';
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
    >
      <h4 className="font-bold text-gray-800 mb-4">Learning plan</h4>
      <div className="flex gap-2 mb-4">
        {days.map((d, i) => (
          <motion.div
            key={i}
            className="flex-1 h-9 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center text-sm font-medium text-gray-600 cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            {d}
          </motion.div>
        ))}
      </div>
      <motion.button
        className="text-indigo-600 text-sm font-medium relative group"
        whileHover={{ x: 4 }}
      >
        Set your learning plan
        <motion.span
          className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"
        />
      </motion.button>

      <div className="mt-5 border border-gray-200 rounded-xl p-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="flex items-center justify-between text-sm text-gray-700 mb-4 font-medium">
          <div>{month}</div>
          <div className="text-xs text-gray-400">◀ ▶</div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-xs text-gray-600">
          {Array.from({ length: 35 }).map((_, i) => (
            <motion.div
              key={i}
              className={`h-8 flex items-center justify-center rounded-lg cursor-pointer hover:bg-purple-50 transition-colors ${
                i === 6 ? 'rounded-full border-2 border-purple-600 text-purple-700 bg-purple-50' : ''
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.01 }}
            >
              {(i % 31) + 1}
            </motion.div>
          ))}
        </div>
        <div className="mt-4 space-y-2 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-purple-600 rounded-full inline-block shadow-sm" />
            1+ daily goals completed
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-0.5 bg-gray-300 inline-block rounded-full" />
            All daily goals completed
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function LastWeeks() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center"
    >
      <h4 className="font-bold text-sm text-gray-600 mb-4">Last 4 weeks</h4>
      <motion.div
        className="text-4xl font-bold text-gray-900"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
      >
        0
      </motion.div>
      <div className="text-xs text-gray-500 mt-2">Daily goals completed</div>
    </motion.div>
  );
}

export default function MyLearning() {
  const [tab, setTab] = useState('inprogress');
  const navigate = useNavigate();

  const handleResume = (course) => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.header
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-start gap-4 mb-6">
            <motion.div
              className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center text-white font-bold text-2xl shadow-md"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
            AS
            </motion.div>
            <div className="flex-1">
              <motion.h1
                className="text-3xl font-bold text-gray-900 mb-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Good evening, Alok
              </motion.h1>
              <motion.div
                className="text-base text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                You are interested in the role of{' '}
                <span className="font-semibold text-gray-900 underline decoration-2 underline-offset-2">
                  Devops Engineer
                </span>{' '}
                <motion.button
                  className="text-blue-600 ml-2 relative group inline-block font-normal hover:underline"
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Edit goal
                </motion.button>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="bg-blue-50/80 border border-blue-100 rounded-2xl p-4 flex items-center gap-4 shadow-sm cursor-pointer"
              whileHover={{ y: -4, boxShadow: '0 12px 24px -8px rgba(59, 130, 246, 0.2)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl shadow-sm"
                animate={pulseAnimation}
              >
                🤓
              </motion.div>
              <div className="flex-1">
                <span className="text-gray-900 font-normal">
                  Let&apos;s get started! What&apos;s your goal?
                </span>
                <motion.button
                  className="text-blue-600 font-medium ml-3 hover:underline"
                  whileHover={{ x: 4 }}
                >
                  Select a goal
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-4 space-y-5">
            <TodayGoals />
            <LearningPlan />
            <LastWeeks />
          </aside>

          <main className="lg:col-span-8 space-y-5">
            <motion.div
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 relative">
                  <motion.button
                    onClick={() => setTab('inprogress')}
                    className={`px-4 py-2 rounded-full font-medium transition-all relative z-10 ${
                      tab === 'inprogress' ? 'text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    In Progress
                  </motion.button>
                  <motion.button
                    onClick={() => setTab('completed')}
                    className={`px-4 py-2 rounded-full font-medium transition-all relative z-10 ${
                      tab === 'completed' ? 'text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    Completed
                  </motion.button>
                  {/* Animated pill background */}
                  <motion.div
                    className="absolute h-10 bg-gradient-to-r from-gray-900 to-gray-800 rounded-full shadow-md"
                    initial={false}
                    animate={{
                      x: tab === 'inprogress' ? 0 : 126,
                      width: tab === 'inprogress' ? 110 : 115
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </div>
                <motion.div
                  className="text-sm text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Showing {tab === 'inprogress' ? 'in-progress' : 'completed'} courses
                </motion.div>
              </div>
            </motion.div>

            <div className="space-y-5">
              <AnimatePresence mode="wait">
                {mockCourses.map((c, index) => (
                  <CourseCard key={c.id} course={c} onResume={handleResume} index={index} />
                ))}
              </AnimatePresence>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}