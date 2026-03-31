import { ALL_TOPICS_ID, quizTopics } from '../data/quizTopics';

export const QUIZ_RESULTS_STORAGE_KEY = 'quiz-results';

export function getTopicById(topicId) {
  return quizTopics.find((topic) => topic.id === topicId) || null;
}

export function getAllQuestions() {
  return quizTopics.flatMap((topic) =>
    topic.questions.map((question) => ({
      ...question,
      sourceTopicId: topic.id,
      sourceTopicTitle: topic.title
    }))
  );
}

export function getQuizSession(topicIdParam) {
  const requestedTopicId = topicIdParam || ALL_TOPICS_ID;

  if (requestedTopicId === ALL_TOPICS_ID) {
    const questions = getAllQuestions();
    return {
      topicId: ALL_TOPICS_ID,
      title: 'All Questions Quiz',
      description: 'Combined quiz from all available quiz topics.',
      category: 'Mixed Topics',
      difficulty: 'Beginner to Intermediate',
      isAllTopics: true,
      questions
    };
  }

  const topic = getTopicById(requestedTopicId);
  if (!topic) return null;

  return {
    topicId: topic.id,
    title: topic.title,
    description: topic.description,
    category: topic.category,
    difficulty: topic.difficulty,
    isAllTopics: false,
    questions: topic.questions.map((question) => ({
      ...question,
      sourceTopicId: topic.id,
      sourceTopicTitle: topic.title
    }))
  };
}

export function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

export function calculateTimerSeconds(questionCount) {
  if (!questionCount) return 600;

  const secondsPerQuestion = 40;
  const minimumSeconds = 600;
  return Math.max(minimumSeconds, questionCount * secondsPerQuestion);
}

export function buildTopicSummary(topics) {
  return topics.map((topic) => ({
    id: topic.id,
    title: topic.title,
    description: topic.description,
    difficulty: topic.difficulty,
    category: topic.category,
    count: topic.questions.length
  }));
}

export function getTotalQuestionCount(topics) {
  return topics.reduce((acc, topic) => acc + topic.questions.length, 0);
}

export function scoreAnswers(answers) {
  return answers.filter((item) => item.selected === item.answer).length;
}
