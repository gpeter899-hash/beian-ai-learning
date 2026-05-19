"use server";

import { MistakeCategory, SubjectName } from "@/types/learning";

export interface PracticeAttemptInput {
  studentId: string;
  questionId: string;
  subject: SubjectName;
  selectedOption: string;
  correctOption: string;
  mistakeCategory?: MistakeCategory;
}

const attemptStore: PracticeAttemptInput[] = [];

export async function savePracticeAttempt(input: PracticeAttemptInput) {
  attemptStore.push(input);
  return {
    ok: true,
    savedCount: attemptStore.length,
    savedAt: new Date().toISOString()
  };
}

export async function getPracticeAttemptSummary(studentId: string) {
  const attempts = attemptStore.filter((attempt) => attempt.studentId === studentId);
  const correct = attempts.filter((attempt) => attempt.selectedOption === attempt.correctOption).length;
  return {
    total: attempts.length,
    correct,
    accuracy: attempts.length === 0 ? 0 : Math.round((correct / attempts.length) * 100)
  };
}
