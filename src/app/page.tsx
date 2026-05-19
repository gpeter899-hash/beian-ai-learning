"use client";

import {
  BarChart3,
  BookOpenText,
  Brain,
  CalendarDays,
  GraduationCap,
  Languages,
  NotebookPen,
  Shuffle,
  Sparkles,
  Users
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AITutor } from "@/components/AITutor";
import { ProgressChart } from "@/components/ProgressChart";
import { QuestionCard } from "@/components/QuestionCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  allQuestions,
  classicalArticles,
  classicalVocabulary,
  generatedChineseQuestions,
  generatedEnglishQuestions,
  initialMistakes,
  lessonPractices,
  readingPassages,
  sentencePatterns,
  student,
  subjects,
  units,
  weeklyReport
} from "@/data/sampleData";
import { LessonQuestionCategory, MistakeRecord, Question, SubjectName, Unit } from "@/types/learning";

const storageKey = "beian-ai-learning-mistakes";
const progressKey = "beian-ai-learning-reviewed-units";

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeSubject, setActiveSubject] = useState<SubjectName>("國文");
  const [activeUnitId, setActiveUnitId] = useState(units[0].id);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(allQuestions[0]);
  const [lessonCategory, setLessonCategory] = useState<LessonQuestionCategory | "全部">("全部");
  const [lessonQuestion, setLessonQuestion] = useState<Question>(lessonPractices[0].questions[0]);
  const [mistakes, setMistakes] = useState<MistakeRecord[]>(initialMistakes);
  const [reviewedUnits, setReviewedUnits] = useState<string[]>([]);

  useEffect(() => {
    const savedMistakes = window.localStorage.getItem(storageKey);
    const savedProgress = window.localStorage.getItem(progressKey);
    if (savedMistakes) setMistakes(JSON.parse(savedMistakes));
    if (savedProgress) setReviewedUnits(JSON.parse(savedProgress));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(mistakes));
  }, [mistakes]);

  useEffect(() => {
    window.localStorage.setItem(progressKey, JSON.stringify(reviewedUnits));
  }, [reviewedUnits]);

  const subjectUnits = units.filter((unit) => unit.subject === activeSubject);
  const activeUnit = units.find((unit) => unit.id === activeUnitId) ?? subjectUnits[0] ?? units[0];
  const unitQuestions = allQuestions.filter((question) => question.unitId === activeUnit.id);
  const subjectQuestions = allQuestions.filter((question) => question.subject === activeSubject);
  const activeQuestionIndex = Math.max(0, unitQuestions.findIndex((question) => question.id === currentQuestion.id));
  const reviewedRate = Math.round((reviewedUnits.length / units.length) * 100);
  const subjectMinutes = useMemo(() => subjects.reduce((sum, item) => sum + item.weeklyMinutes, 0), []);
  const activeLesson = lessonPractices[0];
  const lessonQuestions =
    lessonCategory === "全部"
      ? activeLesson.questions
      : activeLesson.questions.filter((question) => question.id.includes(lessonCategory));
  const lessonQuestionIndex = Math.max(0, lessonQuestions.findIndex((question) => question.id === lessonQuestion.id));

  function addMistake(record: MistakeRecord) {
    setMistakes((current) => [record, ...current.filter((item) => item.questionId !== record.questionId)].slice(0, 60));
  }

  function chooseSubject(subject: SubjectName) {
    const firstUnit = units.find((unit) => unit.subject === subject);
    setActiveSubject(subject);
    if (firstUnit) {
      setActiveUnitId(firstUnit.id);
      setCurrentQuestion(allQuestions.find((question) => question.unitId === firstUnit.id) ?? allQuestions[0]);
    }
  }

  function chooseUnit(unit: Unit) {
    setActiveUnitId(unit.id);
    setCurrentQuestion(allQuestions.find((question) => question.unitId === unit.id) ?? allQuestions[0]);
  }

  function markReviewed(unitId: string) {
    setReviewedUnits((current) => (current.includes(unitId) ? current : [...current, unitId]));
  }

  function randomQuestion() {
    const pool = activeTab === "review" ? allQuestions.filter((question) => question.subject === activeSubject) : allQuestions;
    const next = pool[Math.floor(Math.random() * pool.length)] ?? allQuestions[0];
    setCurrentQuestion(next);
    const targetUnit = units.find((unit) => unit.id === next.unitId);
    if (targetUnit) {
      setActiveSubject(targetUnit.subject);
      setActiveUnitId(targetUnit.id);
      setActiveTab("review");
    }
  }

  function nextUnitQuestion() {
    const pool = unitQuestions.length > 0 ? unitQuestions : [currentQuestion];
    const currentIndex = pool.findIndex((question) => question.id === currentQuestion.id);
    const next = pool[(currentIndex + 1 + pool.length) % pool.length];
    setCurrentQuestion(next);
  }

  function randomUnitQuestion() {
    const pool = unitQuestions.length > 0 ? unitQuestions : [currentQuestion];
    const next = pool[Math.floor(Math.random() * pool.length)] ?? currentQuestion;
    setCurrentQuestion(next);
  }

  function nextLessonQuestion() {
    const pool = lessonQuestions.length > 0 ? lessonQuestions : activeLesson.questions;
    const currentIndex = pool.findIndex((question) => question.id === lessonQuestion.id);
    setLessonQuestion(pool[(currentIndex + 1 + pool.length) % pool.length]);
  }

  function randomLessonQuestion() {
    const pool = lessonQuestions.length > 0 ? lessonQuestions : activeLesson.questions;
    setLessonQuestion(pool[Math.floor(Math.random() * pool.length)] ?? activeLesson.questions[0]);
  }

  function changeLessonCategory(category: LessonQuestionCategory | "全部") {
    setLessonCategory(category);
    const pool = category === "全部" ? activeLesson.questions : activeLesson.questions.filter((question) => question.id.includes(category));
    setLessonQuestion(pool[0] ?? activeLesson.questions[0]);
  }

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "review", label: "全年複習", icon: CalendarDays },
    { id: "lesson", label: "課次練習", icon: GraduationCap },
    { id: "classical", label: "文言文核心", icon: BookOpenText },
    { id: "english", label: "英文閱讀", icon: Languages },
    { id: "mistakes", label: "錯題本", icon: NotebookPen },
    { id: "parent", label: "家長週報", icon: Users }
  ];

  return (
    <main className="min-h-screen">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <Badge className="border-primary/30 text-primary">114 學年度七年級</Badge>
              <Badge>全年複習版</Badge>
              <Badge>原創題庫</Badge>
              <Badge>LocalStorage 紀錄</Badge>
            </div>
            <h1 className="text-2xl font-black tracking-normal text-slate-900 md:text-3xl">
              臺北市立北安國中 七年級 AI 學習輔導系統
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              進入網站後可依科目複習七年級全年單元，並用隨機題、錯題本與 AI 家教建立個人化練習節奏。
            </p>
          </div>
          <div className="rounded-lg border bg-muted px-4 py-3 text-sm">
            <div className="font-bold">{student.name}</div>
            <div className="text-muted-foreground">已建立 {units.length} 個全年複習單元、{allQuestions.length} 題原創練習題</div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-5 lg:grid-cols-[220px_1fr]">
        <nav className="h-fit rounded-lg border bg-white p-2 lg:sticky lg:top-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`mb-1 flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-semibold transition ${
                  activeTab === tab.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
                onClick={() => setActiveTab(tab.id)}
                type="button"
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
          <Button className="mt-3 w-full" variant="accent" onClick={randomQuestion}>
            <Shuffle className="h-4 w-4" />
            隨機一題
          </Button>
        </nav>

        <section className="space-y-4">
          {activeTab === "dashboard" ? (
            <div className="dashboard-grid">
              <Card className="col-span-12 md:col-span-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    全年複習進度
                  </CardTitle>
                  <CardDescription>已複習 {reviewedUnits.length} / {units.length} 個單元。</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Progress value={reviewedRate} />
                  <p className="text-sm text-muted-foreground">目前完成率 {reviewedRate}% 。建議每天完成 2 個單元與 5 題練習。</p>
                  <Button onClick={() => setActiveTab("review")}>開始全年複習</Button>
                </CardContent>
              </Card>
              <Card className="col-span-12 md:col-span-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-secondary" />
                    本週學習時數
                  </CardTitle>
                  <CardDescription>目前約 {(subjectMinutes / 60).toFixed(1)} 小時。</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {subjects.slice(0, 5).map((subject) => (
                    <div key={subject.id}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span>{subject.name}</span>
                        <span>{subject.completionRate}%</span>
                      </div>
                      <Progress value={subject.completionRate} />
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card className="col-span-12 md:col-span-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-accent" />
                    今日建議
                  </CardTitle>
                  <CardDescription>依七年級全範圍安排。</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <Insight title="題庫量" text={`國文 ${generatedChineseQuestions.length} 題、英文 ${generatedEnglishQuestions.length} 題，另含全年各科單元題。`} />
                  <Insight title="國文" text="先複習文言虛字與閱讀主旨，這是會考閱讀的底盤。" />
                  <Insight title="英文" text="每天一篇短文，圈時間、轉折、原因字。" />
                </CardContent>
              </Card>
              <Card className="col-span-12 lg:col-span-7">
                <CardHeader>
                  <CardTitle>本週進步圖表</CardTitle>
                  <CardDescription>chart.js 顯示國文與英文掌握率趨勢。</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-72">
                    <ProgressChart />
                  </div>
                </CardContent>
              </Card>
              <div className="col-span-12 lg:col-span-5">
                <AITutor />
              </div>
            </div>
          ) : null}

          {activeTab === "review" ? (
            <div className="grid gap-4 xl:grid-cols-[280px_1fr]">
              <Card>
                <CardHeader>
                  <CardTitle>科目</CardTitle>
                  <CardDescription>依 114 學年度版本建立全年複習。</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {subjects.map((subject) => (
                    <button
                      key={subject.id}
                      className={`flex w-full items-center justify-between rounded-md border px-3 py-2 text-left text-sm ${
                        activeSubject === subject.name ? "border-primary bg-primary/5 font-bold text-primary" : "bg-white hover:bg-muted"
                      }`}
                      onClick={() => chooseSubject(subject.name)}
                      type="button"
                    >
                      <span>{subject.name}</span>
                      <span className="text-xs text-muted-foreground">{subject.publisher}</span>
                    </button>
                  ))}
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>{activeSubject} 七年級全年單元</CardTitle>
                    <CardDescription>
                      本科共有 {subjectQuestions.length} 題；選一個單元後，右下方可切換該單元題目。
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-3 md:grid-cols-2">
                    {subjectUnits.map((unit) => (
                      <button
                        key={unit.id}
                        className={`rounded-md border p-4 text-left transition ${
                          activeUnit.id === unit.id ? "border-primary bg-primary/5" : "bg-white hover:bg-muted"
                        }`}
                        onClick={() => chooseUnit(unit)}
                        type="button"
                      >
                        <div className="mb-2 flex flex-wrap gap-2">
                          <Badge>{unit.term}</Badge>
                          {reviewedUnits.includes(unit.id) ? <Badge className="border-secondary text-secondary">已複習</Badge> : null}
                        </div>
                        <div className="font-bold">{unit.title}</div>
                        <p className="mt-2 text-sm text-muted-foreground">{unit.description}</p>
                      </button>
                    ))}
                  </CardContent>
                </Card>

                <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
                  <Card>
                    <CardHeader>
                      <CardTitle>{activeUnit.title}</CardTitle>
                      <CardDescription>{activeUnit.term} · {activeUnit.subject}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <TextList title="知識點" items={activeUnit.keyPoints} />
                      <TextList title="會考方向" items={activeUnit.examFocus} />
                      <div className="rounded-md border-l-4 border-primary bg-white p-4 text-sm leading-7">{activeUnit.reviewScript}</div>
                      <Button onClick={() => markReviewed(activeUnit.id)}>標記為已複習</Button>
                    </CardContent>
                  </Card>

                  <div className="space-y-3">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between gap-3">
                          <span>練習題</span>
                          <Badge>
                            本單元 {unitQuestions.length} 題 · 第 {Math.min(activeQuestionIndex + 1, unitQuestions.length || 1)} 題
                          </Badge>
                        </CardTitle>
                        <CardDescription>
                          可連續練同單元，也可以抽同科隨機題。國文與英文題庫會在這裡被叫出來。
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-wrap gap-2">
                        <Button variant="secondary" onClick={nextUnitQuestion}>本單元下一題</Button>
                        <Button variant="outline" onClick={randomUnitQuestion}>本單元隨機</Button>
                        <Button variant="accent" onClick={randomQuestion}>
                          <Shuffle className="h-4 w-4" />
                          同科隨機
                        </Button>
                      </CardContent>
                    </Card>
                    <QuestionCard key={currentQuestion.id} question={currentQuestion} onMistake={addMistake} />
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {activeTab === "lesson" ? (
            <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
              <Card>
                <CardHeader>
                  <CardTitle>{activeLesson.title}</CardTitle>
                  <CardDescription>
                    {activeLesson.term} · 第 {activeLesson.lessonNo} 課 · {activeLesson.publisher} · 原創能力題
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {activeLesson.courseTypes.map((type) => <Badge key={type}>{type}</Badge>)}
                  </div>
                  <TextList title="核心能力" items={activeLesson.coreAbilities} />
                  <div className="grid gap-3">
                    {activeLesson.originalMaterials.map((material) => (
                      <details key={material.title} className="rounded-md border bg-white p-4">
                        <summary className="cursor-pointer font-bold">{material.title} · {material.type}</summary>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">{material.text}</p>
                      </details>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>30 題分類練習</CardTitle>
                    <CardDescription>
                      目前分類 {lessonCategory}，共 {lessonQuestions.length} 題；第 {Math.min(lessonQuestionIndex + 1, lessonQuestions.length || 1)} 題。
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {(["全部", "基礎題", "閱讀理解", "修辭與寫作特色", "推論題", "會考整合題"] as Array<LessonQuestionCategory | "全部">).map((category) => (
                        <Button
                          key={category}
                          variant={lessonCategory === category ? "default" : "outline"}
                          onClick={() => changeLessonCategory(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="secondary" onClick={nextLessonQuestion}>下一題</Button>
                      <Button variant="accent" onClick={randomLessonQuestion}>
                        <Shuffle className="h-4 w-4" />
                        本課隨機
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <QuestionCard key={lessonQuestion.id} question={lessonQuestion} onMistake={addMistake} />
              </div>
            </div>
          ) : null}

          {activeTab === "classical" ? (
            <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpenText className="h-5 w-5 text-primary" />
                    {classicalArticles[0].title}
                  </CardTitle>
                  <CardDescription>{classicalArticles[0].sourceNote}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <TextBlock title="原文" text={classicalArticles[0].originalText} strong />
                  <TextBlock title="白話翻譯" text={classicalArticles[0].translation} />
                  <TextBlock title="文意解析" text={classicalArticles[0].interpretation} />
                  <div className="grid gap-3 md:grid-cols-2">
                    <TextList title="段落分析" items={classicalArticles[0].paragraphAnalysis} />
                    <TextList title="會考常見考點" items={classicalArticles[0].examFocus} />
                    <TextList title="修辭技巧" items={classicalArticles[0].rhetoric} />
                    <TextList title="主旨整理" items={[classicalArticles[0].mainIdea]} />
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>文言文字詞庫</CardTitle>
                    <CardDescription>常見虛字：意思、用法、句型與小測驗。</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-3">
                    {classicalVocabulary.map((item) => (
                      <details key={item.id} className="rounded-md border bg-white p-3">
                        <summary className="cursor-pointer font-bold">{item.word}：{item.meanings.join("、")}</summary>
                        <p className="mt-2 text-sm text-muted-foreground">{item.usage}</p>
                        <p className="mt-1 text-sm">{item.translationHint}</p>
                      </details>
                    ))}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>句型分析</CardTitle>
                    <CardDescription>用國中生聽得懂的方式拆句。</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {sentencePatterns.map((pattern) => (
                      <div key={pattern.id} className="rounded-md border p-3">
                        <div className="font-bold">{pattern.name}</div>
                        <p className="mt-1 text-sm">{pattern.studentFriendlyRule}</p>
                        <p className="mt-2 rounded-md bg-muted p-2 text-sm">{pattern.example}</p>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                          {pattern.breakdown.map((line) => <li key={line}>{line}</li>)}
                        </ul>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
              <div className="xl:col-span-2 grid gap-4 md:grid-cols-2">
                {classicalVocabulary.slice(0, 4).map((item) => (
                  <QuestionCard key={item.quiz.id} question={item.quiz} onMistake={addMistake} />
                ))}
              </div>
            </div>
          ) : null}

          {activeTab === "english" ? (
            <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Languages className="h-5 w-5 text-primary" />
                    {readingPassages[0].title}
                  </CardTitle>
                  <CardDescription>英文閱讀理解、單字與文法分析。</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <TextBlock title="Reading Passage" text={readingPassages[0].passage} strong />
                  <TextBlock title="中文摘要" text={readingPassages[0].chineseSummary} />
                  <TextList title="重點單字" items={readingPassages[0].vocabulary} />
                  <TextList title="文法分析" items={readingPassages[0].grammarAnalysis} />
                </CardContent>
              </Card>
              <div className="space-y-4">
                <QuestionCard question={readingPassages[0].questions[0]} onMistake={addMistake} />
                <AITutor />
              </div>
            </div>
          ) : null}

          {activeTab === "mistakes" ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <NotebookPen className="h-5 w-5 text-primary" />
                  AI 錯題本
                </CardTitle>
                <CardDescription>答錯會自動保存到瀏覽器 LocalStorage。</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {mistakes.map((mistake) => (
                  <div key={mistake.id} className="rounded-md border bg-white p-4">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <Badge>{mistake.subject}</Badge>
                      <Badge>{mistake.category}</Badge>
                      <span className="text-xs text-muted-foreground">{mistake.createdAt}</span>
                    </div>
                    <div className="text-sm">你的答案：{mistake.studentAnswer}，正確答案：{mistake.correctAnswer}</div>
                    <p className="mt-2 rounded-md bg-muted p-3 text-sm">{mistake.aiAdvice}</p>
                  </div>
                ))}
                <Button variant="outline" onClick={() => setMistakes(initialMistakes)}>重設示範錯題</Button>
              </CardContent>
            </Card>
          ) : null}

          {activeTab === "parent" ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  家長週報
                </CardTitle>
                <CardDescription>用家長看得懂的語言呈現學習狀況。</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="rounded-md border-l-4 border-primary bg-white p-4 text-sm leading-7">{weeklyReport.summaryForParent}</div>
                <div className="grid gap-4 md:grid-cols-3">
                  <TextList title="優勢" items={weeklyReport.strengths} />
                  <TextList title="弱點" items={weeklyReport.weaknesses} />
                  <TextList title="建議複習方向" items={weeklyReport.reviewPlan} />
                </div>
              </CardContent>
            </Card>
          ) : null}
        </section>
      </div>
    </main>
  );
}

function Insight({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-md border bg-white p-3">
      <div className="font-bold">{title}</div>
      <p className="mt-1 text-muted-foreground">{text}</p>
    </div>
  );
}

function TextBlock({ title, text, strong = false }: { title: string; text: string; strong?: boolean }) {
  return (
    <section>
      <h2 className="mb-2 text-sm font-black text-primary">{title}</h2>
      <p className={`rounded-md border bg-white p-4 leading-7 ${strong ? "text-lg font-semibold" : "text-sm"}`}>{text}</p>
    </section>
  );
}

function TextList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-md border bg-white p-4">
      <h2 className="mb-2 text-sm font-black text-primary">{title}</h2>
      <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}
