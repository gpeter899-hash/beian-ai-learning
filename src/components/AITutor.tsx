"use client";

import { Bot, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function tutorReply(input: string) {
  const text = input.trim();
  if (!text) return "先丟一句你卡住的地方給我，我們慢慢拆。";
  if (text.includes("文言") || text.includes("意思")) {
    return "文言文先別逐字硬翻。第一步找主詞，第二步找動詞，第三步看虛字是在接原因、轉折還是結果。你把原句貼上來，我會像補習班老師一樣一段一段帶你拆。";
  }
  if (text.includes("答案") || text.includes("為什麼")) {
    return "我先不直接公布答案。請你先回題目找一個關鍵字，再對照選項哪一個最貼近原文或單元重點。會考題最重視證據，不是猜感覺。";
  }
  if (text.includes("英文") || text.includes("閱讀")) {
    return "英文閱讀先圈人物、時間、轉折字和原因字。看到 however 後面常是重點，because 後面通常是理由。先找答案句，再選選項。";
  }
  if (text.includes("數學")) {
    return "數學題先把中文翻成式子。不要急著算，先確認未知數是什麼、等量關係在哪裡，這樣比較不會被題目帶著跑。";
  }
  return "很好，這題可以拆。先分成三格：已知什麼、要問什麼、哪個單元觀念用得上。你先告訴我卡在哪一格，我們就從那裡開始。";
}

export function AITutor() {
  const [input, setInput] = useState("文言文意思是什麼");
  const [messages, setMessages] = useState([
    { role: "ai", text: "我是北安 AI 家教。你可以問：我看不懂、這題怎麼寫、為什麼答案是這個。" }
  ]);

  function send() {
    setMessages((current) => [...current, { role: "student", text: input }, { role: "ai", text: tutorReply(input) }]);
    setInput("");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          AI 家教模式
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="max-h-72 space-y-2 overflow-auto rounded-md bg-muted p-3">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`rounded-md p-3 text-sm ${message.role === "ai" ? "bg-white" : "ml-auto bg-primary text-primary-foreground"}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            className="min-w-0 flex-1 rounded-md border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") send();
            }}
            placeholder="輸入你卡住的地方"
          />
          <Button onClick={send} size="icon" aria-label="送出">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
