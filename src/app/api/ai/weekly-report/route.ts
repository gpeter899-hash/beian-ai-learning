import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const studentName = String(body.studentName ?? "學生");

  return NextResponse.json({
    mode: "mock",
    report: `${studentName} 本週報告 API 已建立。Phase 1 先回傳模擬報告，Phase 2 會根據資料庫中的答題紀錄與錯題分類產生正式家長週報。`,
    suggestions: ["國文持續練文言虛字。", "英文閱讀先圈關鍵字。", "錯題本每週至少回看一次。"]
  });
}
