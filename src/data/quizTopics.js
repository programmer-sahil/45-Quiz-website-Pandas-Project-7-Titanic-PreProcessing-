export const ALL_TOPICS_ID = 'all-topics';

const dataPreprocessingQuestions = [
  {
    id: 'dp-1',
    question: 'Which library is mainly used to work with tables of data in Python?',
    options: ['NumPy', 'pandas', 'Matplotlib', 'OS'],
    answer: 'pandas',
    topic: 'Import Libraries',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-2',
    question: 'Which library is commonly imported as np?',
    options: ['pandas', 'sklearn', 'numpy', 'seaborn'],
    answer: 'numpy',
    topic: 'Import Libraries',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-3',
    question: 'Which function is used to read a CSV file in pandas?',
    options: ['pd.load_csv()', 'pd.open_csv()', 'pd.read_csv()', 'pd.csv_read()'],
    answer: 'pd.read_csv()',
    topic: 'Load Dataset from GitHub',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-4',
    question: 'Why do we import libraries in Python projects?',
    options: ['To make the code longer', 'To use pre-built functions and tools', 'To delete data', 'To close the notebook'],
    answer: 'To use pre-built functions and tools',
    topic: 'Import Libraries',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-5',
    question: 'Which line correctly imports pandas?',
    options: ['import pandas as pd', 'import pd as pandas', 'pandas import pd', 'import pandas.py'],
    answer: 'import pandas as pd',
    topic: 'Import Libraries',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-6',
    question: 'Why do we use a raw GitHub link to load a dataset?',
    options: ['Because it shows comments', 'Because it gives the actual file content', 'Because it is more colorful', 'Because it deletes errors'],
    answer: 'Because it gives the actual file content',
    topic: 'Load Dataset from GitHub',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-7',
    question: 'Which command is used to load a dataset from a GitHub raw link?',
    options: ['pd.read_csv(url)', 'pd.load(url)', 'pd.dataset(url)', 'read.github(url)'],
    answer: 'pd.read_csv(url)',
    topic: 'Load Dataset from GitHub',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-8',
    question: 'A dataset loaded into pandas is usually stored in a:',
    options: ['Function', 'Dictionary', 'DataFrame', 'Loop'],
    answer: 'DataFrame',
    topic: 'Explore Dataset',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-9',
    question: 'Which variable name is commonly used for a dataset?',
    options: ['num', 'df', 'txt', 'loop'],
    answer: 'df',
    topic: 'Explore Dataset',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-10',
    question: 'What is the first step after loading a dataset?',
    options: ['Delete all rows', 'Explore and inspect the data', 'Train the model immediately', 'Close Python'],
    answer: 'Explore and inspect the data',
    topic: 'Explore Dataset',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-11',
    question: 'Which function shows the first 5 rows of a dataset?',
    options: ['df.show()', 'df.top()', 'df.head()', 'df.first()'],
    answer: 'df.head()',
    topic: 'Explore Dataset',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-12',
    question: 'Which attribute tells the number of rows and columns?',
    options: ['df.type', 'df.shape', 'df.total', 'df.size()'],
    answer: 'df.shape',
    topic: 'Explore Dataset',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-13',
    question: 'Which command shows the names of all columns?',
    options: ['df.names', 'df.columns', 'df.labels', 'df.col()'],
    answer: 'df.columns',
    topic: 'Explore Dataset',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-14',
    question: 'Which function gives summary information like data type and non-null values?',
    options: ['df.summary()', 'df.describe()', 'df.info()', 'df.check()'],
    answer: 'df.info()',
    topic: 'Explore Dataset',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-15',
    question: 'Which function is mainly used to see statistical summary of numerical columns?',
    options: ['df.describe()', 'df.countrows()', 'df.number()', 'df.numeric()'],
    answer: 'df.describe()',
    topic: 'Explore Dataset',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-16',
    question: 'Which function checks missing values in a dataset?',
    options: ['df.empty()', 'df.isnull()', 'df.remove()', 'df.blank()'],
    answer: 'df.isnull()',
    topic: 'Check Missing Values',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-17',
    question: 'What does df.isnull().sum() do?',
    options: ['Deletes null values', 'Counts missing values in each column', 'Adds new rows', 'Sorts the dataset'],
    answer: 'Counts missing values in each column',
    topic: 'Check Missing Values',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-18',
    question: 'Missing values in a dataset are also called:',
    options: ['Labels', 'Features', 'Null values', 'Targets'],
    answer: 'Null values',
    topic: 'Check Missing Values',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-19',
    question: 'Why do we clean data before training a machine learning model?',
    options: ['To make data dirty', 'To improve quality and usability of data', 'To remove Python', 'To stop the program'],
    answer: 'To improve quality and usability of data',
    topic: 'Data Cleaning',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-20',
    question: 'Which of the following is a data cleaning task?',
    options: ['Printing a greeting', 'Filling missing values', 'Playing audio', 'Drawing only shapes'],
    answer: 'Filling missing values',
    topic: 'Data Cleaning',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-21',
    question: 'Which method is commonly used to fill missing numerical values?',
    options: ['fillna()', 'cutna()', 'droptext()', 'joinna()'],
    answer: 'fillna()',
    topic: 'Data Cleaning',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-22',
    question: 'Which value is often used to fill missing categorical data?',
    options: ['Maximum', 'Mode', 'Range', 'Index'],
    answer: 'Mode',
    topic: 'Data Cleaning',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-23',
    question: 'In machine learning, input columns are usually stored in:',
    options: ['y', 'X', 'z', 'df1'],
    answer: 'X',
    topic: 'Feature and Target Separation',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-24',
    question: 'The output column we want to predict is called:',
    options: ['Feature', 'Input', 'Target', 'Index'],
    answer: 'Target',
    topic: 'Feature and Target Separation',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-25',
    question: 'Which line separates features and target correctly?',
    options: [
      'X = df["Survived"] and y = df.drop("Survived")',
      'X = df.drop("Survived", axis=1) and y = df["Survived"]',
      'X = df.sum() and y = df.mean()',
      'X = df.columns and y = df.rows'
    ],
    answer: 'X = df.drop("Survived", axis=1) and y = df["Survived"]',
    topic: 'Feature and Target Separation',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-26',
    question: 'Why is One-Hot Encoding used?',
    options: ['To delete rows', 'To convert categorical text into numeric columns', 'To print the dataset', 'To add duplicate values'],
    answer: 'To convert categorical text into numeric columns',
    topic: 'One-Hot Encoding',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-27',
    question: 'Which pandas function is commonly used for One-Hot Encoding?',
    options: ['pd.get_dummies()', 'pd.make_numeric()', 'pd.encode_text()', 'pd.onehot()'],
    answer: 'pd.get_dummies()',
    topic: 'One-Hot Encoding',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-28',
    question: 'In One-Hot Encoding, the category male/female is usually converted into:',
    options: ['Random colors', 'Binary columns', 'Audio files', 'Loops'],
    answer: 'Binary columns',
    topic: 'One-Hot Encoding',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-29',
    question: 'What does drop_first=True do in one-hot encoding?',
    options: ['Drops the whole dataset', 'Removes one category column to avoid redundancy', 'Deletes the first row', 'Drops missing values only'],
    answer: 'Removes one category column to avoid redundancy',
    topic: 'One-Hot Encoding',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-30',
    question: 'Label Encoding is mainly used to:',
    options: ['Convert labels into numbers', 'Draw charts', 'Read CSV files', 'Remove rows'],
    answer: 'Convert labels into numbers',
    topic: 'Label Encoding',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-31',
    question: 'Which sklearn class is used for Label Encoding?',
    options: ['LabelScaler', 'LabelEncoder', 'TextEncoder', 'CategoryEncoder'],
    answer: 'LabelEncoder',
    topic: 'Label Encoding',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-32',
    question: 'Label Encoding is usually best for:',
    options: ['Input image resizing', 'Target column', 'Row deletion', 'File upload'],
    answer: 'Target column',
    topic: 'Label Encoding',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-33',
    question: 'Why do we split data into training and testing sets?',
    options: ['To increase spelling mistakes', 'To evaluate model performance on unseen data', 'To remove features', 'To rename columns'],
    answer: 'To evaluate model performance on unseen data',
    topic: 'Train-Test Split',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-34',
    question: 'Which sklearn function is used for train-test split?',
    options: ['split_data()', 'train_test_split()', 'divide_data()', 'test_train_data()'],
    answer: 'train_test_split()',
    topic: 'Train-Test Split',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-35',
    question: 'If test_size=0.2, what does it mean?',
    options: ['20% training and 80% testing', '20% testing and 80% training', '50% testing and 50% training', '100% testing'],
    answer: '20% testing and 80% training',
    topic: 'Train-Test Split',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-36',
    question: 'Why is random_state=42 often used?',
    options: ['To make results reproducible', 'To remove null values', 'To increase file size', 'To create new columns'],
    answer: 'To make results reproducible',
    topic: 'Train-Test Split',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-37',
    question: 'Standardization changes data so that:',
    options: ['Values go from 1 to 100 only', 'Mean becomes 0 and standard deviation becomes 1', 'All values become negative', 'Columns become text'],
    answer: 'Mean becomes 0 and standard deviation becomes 1',
    topic: 'Standardization',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-38',
    question: 'Which sklearn class is used for standardization?',
    options: ['StandardScaler', 'NormalScaler', 'RangeScaler', 'DataScaler'],
    answer: 'StandardScaler',
    topic: 'Standardization',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-39',
    question: 'Standardization is useful when:',
    options: ['Features have different scales', 'The dataset has no rows', 'Python is not installed', 'We want to remove all columns'],
    answer: 'Features have different scales',
    topic: 'Standardization',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-40',
    question: 'Normalization usually scales values into:',
    options: ['10 to 20', '0 to 1', '-100 to 100', '1 to 1000'],
    answer: '0 to 1',
    topic: 'Normalization',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-41',
    question: 'Which sklearn class is used for normalization in this project?',
    options: ['StandardScaler', 'LabelEncoder', 'MinMaxScaler', 'TrainScaler'],
    answer: 'MinMaxScaler',
    topic: 'Normalization',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-42',
    question: 'What is the main purpose of normalization?',
    options: ['To convert text into stories', 'To bring features into a common range', 'To delete labels', 'To create missing values'],
    answer: 'To bring features into a common range',
    topic: 'Normalization',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-43',
    question: 'Which operation should be done before applying machine learning algorithms?',
    options: ['Data preprocessing', 'Deleting Python', 'Restarting the laptop', 'Renaming all files'],
    answer: 'Data preprocessing',
    topic: 'Data Cleaning',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-44',
    question: 'Which of the following is a categorical column example?',
    options: ['Age', 'Fare', 'Sex', 'SibSp'],
    answer: 'Sex',
    topic: 'One-Hot Encoding',
    category: 'Machine Learning / Data Preprocessing'
  },
  {
    id: 'dp-45',
    question: 'Which of the following is a numerical column example?',
    options: ['Embarked', 'Sex', 'Age', 'CabinType'],
    answer: 'Age',
    topic: 'Explore Dataset',
    category: 'Machine Learning / Data Preprocessing'
  }
];

const spamClassificationQuestions = [
  {
    id: 'spam-1',
    question: 'Which function is commonly used to load a CSV dataset in pandas?',
    options: ['pd.open_csv()', 'pd.read_csv()', 'pd.load_data()', 'pd.file_csv()'],
    answer: 'pd.read_csv()',
    topic: 'Spam Message Detector / Text Classification',
    category: 'Machine Learning / NLP'
  },
  {
    id: 'spam-2',
    question: 'A dataset in pandas is usually stored in a:',
    options: ['loop', 'string', 'DataFrame', 'function'],
    answer: 'DataFrame',
    topic: 'Spam Message Detector / Text Classification',
    category: 'Machine Learning / NLP'
  },
  {
    id: 'spam-3',
    question: 'Why do we clean text data before training a model?',
    options: ['To increase file size', 'To make text more consistent and useful', 'To delete all messages', 'To remove Python libraries'],
    answer: 'To make text more consistent and useful',
    topic: 'Spam Message Detector / Text Classification',
    category: 'Machine Learning / NLP'
  },
  {
    id: 'spam-4',
    question: 'Which of the following is a text cleaning task?',
    options: ['Converting text to lowercase', 'Drawing a chart', 'Creating a folder', 'Restarting the notebook'],
    answer: 'Converting text to lowercase',
    topic: 'Spam Message Detector / Text Classification',
    category: 'Machine Learning / NLP'
  },
  {
    id: 'spam-5',
    question: 'Which Python library is commonly used for text cleaning with patterns?',
    options: ['random', 'math', 're', 'os'],
    answer: 're',
    topic: 'Spam Message Detector / Text Classification',
    category: 'Machine Learning / NLP'
  },
  {
    id: 'spam-6',
    question: 'Label encoding is used to:',
    options: ['convert text labels into numbers', 'remove duplicate rows', 'scale numerical values', 'draw graphs'],
    answer: 'convert text labels into numbers',
    topic: 'Spam Message Detector / Text Classification',
    category: 'Machine Learning / NLP'
  },
  {
    id: 'spam-7',
    question: 'If ham = 0 and spam = 1, this is an example of:',
    options: ['normalization', 'label encoding', 'vectorization', 'prediction'],
    answer: 'label encoding',
    topic: 'Spam Message Detector / Text Classification',
    category: 'Machine Learning / NLP'
  },
  {
    id: 'spam-8',
    question: 'Why do we split data into train and test sets?',
    options: ['To make the code longer', 'To evaluate model performance on unseen data', 'To remove features', 'To duplicate the dataset'],
    answer: 'To evaluate model performance on unseen data',
    topic: 'Spam Message Detector / Text Classification',
    category: 'Machine Learning / NLP'
  },
  {
    id: 'spam-9',
    question: 'In train_test_split(X, y, test_size=0.2), what does 0.2 mean?',
    options: ['20% training data', '20% testing data', '2% testing data', '80% testing data'],
    answer: '20% testing data',
    topic: 'Spam Message Detector / Text Classification',
    category: 'Machine Learning / NLP'
  },
  {
    id: 'spam-10',
    question: 'Text vectorization means:',
    options: ['deleting text columns', 'converting text into numerical form', 'converting numbers into text', 'sorting messages alphabetically'],
    answer: 'converting text into numerical form',
    topic: 'Spam Message Detector / Text Classification',
    category: 'Machine Learning / NLP'
  },
  {
    id: 'spam-11',
    question: 'Which class is commonly used to convert text into word-count features?',
    options: ['LabelEncoder', 'CountVectorizer', 'StandardScaler', 'MinMaxScaler'],
    answer: 'CountVectorizer',
    topic: 'Spam Message Detector / Text Classification',
    category: 'Machine Learning / NLP'
  },
  {
    id: 'spam-12',
    question: 'Why is model training important?',
    options: ['It helps the model learn patterns from data', 'It removes all rows', 'It converts CSV into PDF', 'It changes labels into strings'],
    answer: 'It helps the model learn patterns from data',
    topic: 'Spam Message Detector / Text Classification',
    category: 'Machine Learning / NLP'
  },
  {
    id: 'spam-13',
    question: 'Which algorithm is commonly used for beginner spam detection projects?',
    options: ['Linear Search', 'Bubble Sort', 'Multinomial Naive Bayes', 'Decision Tree Traversal'],
    answer: 'Multinomial Naive Bayes',
    topic: 'Spam Message Detector / Text Classification',
    category: 'Machine Learning / NLP'
  },
  {
    id: 'spam-14',
    question: 'Prediction means:',
    options: ['checking column names', 'forecasting the class/output for new data', 'deleting missing values', 'importing libraries'],
    answer: 'forecasting the class/output for new data',
    topic: 'Spam Message Detector / Text Classification',
    category: 'Machine Learning / NLP'
  },
  {
    id: 'spam-15',
    question: 'Which metric tells how many predictions are correct out of total predictions?',
    options: ['accuracy_score', 'read_csv', 'fillna', 'head()'],
    answer: 'accuracy_score',
    topic: 'Spam Message Detector / Text Classification',
    category: 'Machine Learning / NLP'
  }
];

export const quizTopics = [
  {
    id: 'data-preprocessing-essentials',
    title: 'Data Preprocessing Essentials',
    description: 'Core beginner MCQs covering import, exploration, cleaning, encoding, splitting, and scaling workflows.',
    category: 'Machine Learning / Data Preprocessing',
    difficulty: 'Beginner',
    questions: dataPreprocessingQuestions
  },
  {
    id: 'spam-text-classification',
    title: 'Spam Message Detector / Text Classification',
    description: 'Beginner MCQs on dataset loading, text cleaning, label encoding, vectorization, model training, prediction, and evaluation.',
    category: 'Machine Learning / NLP',
    difficulty: 'Beginner',
    questions: spamClassificationQuestions
  }
];

export const topicColors = {
  'Data Preprocessing Essentials': '#8b5cf6',
  'Spam Message Detector / Text Classification': '#06b6d4',
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
