# 臺北市立北安國中七年級 AI 學習輔導系統 MVP

這是前端 MVP，使用 React、Next.js、TypeScript、Tailwind CSS、shadcn/ui 風格元件、LocalStorage 與 chart.js。

## 最簡單開啟方式

直接用 Chrome 開：

```text
C:\Users\LEGION\Documents\Codex\2026-05-19\ai-ai-114-1-2-3\out\index.html
```

## 重新建置

```powershell
.\scripts\build.ps1
```

## 本機伺服器模式

```powershell
.\scripts\start-site.cmd
```

保持黑色視窗開著，再進入：

```text
http://localhost:3000
```

## 功能範圍

- Dashboard：全年進度、各科完成率、本週學習時數、弱點提醒、進步圖表。
- 全年複習中心：依科目瀏覽七年級上、下學期單元，包含單元重點、會考方向、複習講義、標記進度與單元題。
- 隨機練習：可從全年七年級題庫抽題，適合反覆複習。
- 國文文言文：原創文言短文、白話翻譯、字詞、文意、背景、段落、修辭、主旨、會考考點、互動題。
- 文言文字詞庫：之、其、而、以、於、乃、遂、焉、者、也。
- 英文閱讀：原創短文、中文摘要、單字、文法分析、閱讀測驗。
- AI 家教：用引導式口吻提示，不直接丟答案。
- 錯題本：答錯自動寫入 LocalStorage，保留錯因與 AI 建議。
- 家長週報：學習分析、弱點分析、複習方向。
- 數學、自然、社會、科技、健體、綜合、藝術：已建立七年級全年基礎複習架構與原創題。

## 主要資料夾

```text
src/app              Next.js App Router 頁面
src/components       UI、圖表、題卡、AI 家教元件
src/components/ui    shadcn/ui 風格基礎元件
src/data             七年級全年 sampleData 模擬資料
src/types            Student、Subject、Unit、Question、MistakeRecord 等資料結構
scripts              Windows 啟動與建置腳本
out                  靜態網站輸出，可直接開 index.html
```

## 教材原則

本 MVP 只使用對應課綱與能力點的原創教學內容與題目，不直接複製出版社課本內容。
