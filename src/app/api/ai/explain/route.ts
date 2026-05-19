import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const prompt = String(body.prompt ?? "");
  const subject = String(body.subject ?? "學習");

  return NextResponse.json({
    mode: "mock",
    subject,
    explanation: `這是 Phase 1 的 AI API Routes 雛形。收到的問題是：「${prompt || "尚未提供問題"}」。下一階段接 OpenAI API key 後，這裡會回傳真正的 AI 分步講解。`,
    steps: ["先確認題目問什麼。", "回到文本或單元重點找證據。", "最後用自己的話整理答案。"]
  });
}
