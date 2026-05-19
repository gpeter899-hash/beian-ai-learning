export type SubjectName =
  | "國文"
  | "英文"
  | "數學"
  | "自然"
  | "社會"
  | "科技"
  | "健體"
  | "綜合"
  | "藝術";

export interface Student {
  id: string;
  name: string;
  grade: 7;
  school: "臺北市立北安國中";
  semester: Semester;
}

export interface Semester {
  year: 114;
  grade: 7;
  term: "全年";
  textbookVersions: Record<SubjectName, string>;
}

export interface Subject {
  id: string;
  name: SubjectName;
  publisher: string;
  priority: 1 | 2 | 3;
  completionRate: number;
  weeklyMinutes: number;
}

export interface Unit {
  id: string;
  subjectId: string;
  subject: SubjectName;
  title: string;
  term: "上學期" | "下學期" | "全年";
  description: string;
  keyPoints: string[];
  examFocus: string[];
  reviewScript: string;
}

export interface KnowledgePoint {
  id: string;
  subject: SubjectName;
  title: string;
  description: string;
  examFocus: string[];
}

export interface Answer {
  optionId: string;
  text: string;
  isCorrect: boolean;
}

export interface Explanation {
  short: string;
  steps: string[];
  teacherTip: string;
}

export type QuestionType = "單選" | "多選" | "填充" | "閱讀理解";

export interface Question {
  id: string;
  subject: SubjectName;
  unitId: string;
  knowledgePointId: string;
  type: QuestionType;
  prompt: string;
  options: Answer[];
  explanation: Explanation;
  mistakeTags: MistakeCategory[];
  difficulty?: "基礎" | "會考";
}

export type LessonQuestionCategory =
  | "基礎題"
  | "閱讀理解"
  | "修辭與寫作特色"
  | "推論題"
  | "會考整合題";

export interface LessonPractice {
  id: string;
  subject: SubjectName;
  publisher: string;
  grade: 7;
  term: "上學期" | "下學期";
  lessonNo: number;
  title: string;
  courseTypes: string[];
  coreAbilities: string[];
  originalMaterials: {
    title: string;
    type: string;
    text: string;
  }[];
  questionPlan: Record<LessonQuestionCategory, number>;
  questions: Question[];
}

export type MistakeCategory =
  | "字詞不懂"
  | "文意理解錯誤"
  | "修辭判斷錯誤"
  | "題目陷阱"
  | "粗心"
  | "句型不熟"
  | "單字不熟"
  | "文法錯誤"
  | "閱讀理解錯誤"
  | "關鍵字沒抓到"
  | "推論錯誤"
  | "計算觀念錯誤"
  | "圖表判讀錯誤"
  | "概念不熟";

export interface MistakeRecord {
  id: string;
  questionId: string;
  subject: SubjectName;
  category: MistakeCategory;
  studentAnswer: string;
  correctAnswer: string;
  createdAt: string;
  aiAdvice: string;
}

export interface WeeklyReport {
  studentId: string;
  weekLabel: string;
  summaryForParent: string;
  strengths: string[];
  weaknesses: string[];
  reviewPlan: string[];
  progressDelta: number;
}

export interface ClassicalChineseArticle {
  id: string;
  title: string;
  sourceNote: string;
  originalText: string;
  translation: string;
  keywords: { word: string; meaning: string; usage: string }[];
  interpretation: string;
  authorBackground: string;
  eraBackground: string;
  paragraphAnalysis: string[];
  rhetoric: string[];
  mainIdea: string;
  examFocus: string[];
  questions: Question[];
}

export interface ClassicalChineseVocabulary {
  id: string;
  word: string;
  meanings: string[];
  usage: string;
  translationHint: string;
  commonPatterns: string[];
  examples: string[];
  quiz: Question;
}

export interface ClassicalChineseSentencePattern {
  id: string;
  name: string;
  studentFriendlyRule: string;
  example: string;
  breakdown: string[];
}

export interface EnglishVocabulary {
  id: string;
  word: string;
  chinese: string;
  kk: string;
  example: string;
  dictationHint: string;
  quiz: Question;
}

export interface EnglishGrammarPoint {
  id: string;
  title: string;
  rule: string;
  steps: string[];
  examples: string[];
  quiz: Question;
}

export interface ReadingPassage {
  id: string;
  title: string;
  subject: "英文" | "國文" | "社會";
  passage: string;
  chineseSummary: string;
  vocabulary: string[];
  grammarAnalysis: string[];
  questions: Question[];
}
