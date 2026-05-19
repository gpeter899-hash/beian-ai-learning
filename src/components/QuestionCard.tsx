"use client";

import { CheckCircle2, CircleAlert, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MistakeRecord, Question } from "@/types/learning";

export function QuestionCard({
  question,
  onMistake
}: {
  question: Question;
  onMistake: (record: MistakeRecord) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const correct = question.options.find((option) => option.isCorrect);
  const isCorrect = selected === correct?.optionId;

  function submitAnswer() {
    setChecked(true);
    if (!isCorrect && selected && correct) {
      onMistake({
        id: `m-${question.id}-${Date.now()}`,
        questionId: question.id,
        subject: question.subject,
        category: question.mistakeTags[0],
        studentAnswer: selected,
        correctAnswer: correct.optionId,
        createdAt: new Date().toISOString().slice(0, 10),
        aiAdvice: question.explanation.teacherTip
      });
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{question.subject}</Badge>
          <Badge>{question.type}</Badge>
        </div>
        <CardTitle className="leading-6">{question.prompt}</CardTitle>
        <CardDescription>作答後 AI 會用補習班老師的節奏拆解。</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          {question.options.map((option) => (
            <button
              key={option.optionId}
              className={`rounded-md border p-3 text-left text-sm transition ${
                selected === option.optionId ? "border-primary bg-primary/5" : "hover:bg-muted"
              }`}
              onClick={() => {
                setSelected(option.optionId);
                setChecked(false);
              }}
              type="button"
            >
              <span className="font-bold">{option.optionId}.</span> {option.text}
            </button>
          ))}
        </div>
        <Button onClick={submitAnswer} disabled={!selected}>
          <Sparkles className="h-4 w-4" />
          AI 批改與講解
        </Button>
        {checked ? (
          <div className={`rounded-md border p-4 ${isCorrect ? "bg-secondary/10" : "bg-accent/15"}`}>
            <div className="mb-2 flex items-center gap-2 font-bold">
              {isCorrect ? <CheckCircle2 className="h-5 w-5 text-secondary" /> : <CircleAlert className="h-5 w-5 text-accent" />}
              {isCorrect ? "答對了，觀念有抓到。" : "這題先別急，錯得很有價值。"}
            </div>
            <p className="text-sm">{question.explanation.short}</p>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-muted-foreground">
              {question.explanation.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="mt-3 rounded-md bg-white p-3 text-sm font-medium">{question.explanation.teacherTip}</p>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
