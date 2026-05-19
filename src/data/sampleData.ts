import {
  ClassicalChineseArticle,
  ClassicalChineseSentencePattern,
  ClassicalChineseVocabulary,
  EnglishGrammarPoint,
  EnglishVocabulary,
  KnowledgePoint,
  LessonPractice,
  LessonQuestionCategory,
  MistakeRecord,
  Question,
  ReadingPassage,
  Semester,
  Student,
  Subject,
  SubjectName,
  Unit,
  WeeklyReport
} from "@/types/learning";

export const semester: Semester = {
  year: 114,
  grade: 7,
  term: "全年",
  textbookVersions: {
    國文: "翰林",
    英文: "翰林",
    數學: "康軒",
    社會: "翰林",
    自然: "翰林",
    科技: "翰林",
    健體: "奇鼎",
    綜合: "康軒",
    藝術: "翰林"
  }
};

export const student: Student = {
  id: "stu-001",
  name: "北安七年級學生",
  grade: 7,
  school: "臺北市立北安國中",
  semester
};

export const subjects: Subject[] = [
  { id: "chinese", name: "國文", publisher: "翰林", priority: 1, completionRate: 68, weeklyMinutes: 145 },
  { id: "english", name: "英文", publisher: "翰林", priority: 1, completionRate: 62, weeklyMinutes: 130 },
  { id: "math", name: "數學", publisher: "康軒", priority: 2, completionRate: 44, weeklyMinutes: 90 },
  { id: "science", name: "自然", publisher: "翰林", priority: 2, completionRate: 38, weeklyMinutes: 75 },
  { id: "social", name: "社會", publisher: "翰林", priority: 3, completionRate: 32, weeklyMinutes: 50 },
  { id: "tech", name: "科技", publisher: "翰林", priority: 3, completionRate: 24, weeklyMinutes: 25 },
  { id: "pe", name: "健體", publisher: "奇鼎", priority: 3, completionRate: 28, weeklyMinutes: 25 },
  { id: "integrative", name: "綜合", publisher: "康軒", priority: 3, completionRate: 26, weeklyMinutes: 20 },
  { id: "arts", name: "藝術", publisher: "翰林", priority: 3, completionRate: 26, weeklyMinutes: 25 }
];

export const knowledgePoints: KnowledgePoint[] = [
  { id: "cc-function-words", subject: "國文", title: "文言虛字", description: "之、其、而、以、於、乃、遂等字詞判讀。", examFocus: ["同字異義", "文意承接", "句型判斷"] },
  { id: "cc-reading", subject: "國文", title: "閱讀理解", description: "從文章脈絡推論主旨、人物觀點與修辭效果。", examFocus: ["主旨題", "推論題", "修辭題"] },
  { id: "en-reading", subject: "英文", title: "英文閱讀", description: "抓住人物、時間、轉折、原因與結果。", examFocus: ["細節定位", "主旨判讀", "推論"] },
  { id: "en-grammar", subject: "英文", title: "英文文法", description: "七年級核心句型、時態、助動詞與介系詞。", examFocus: ["句型", "時態", "語意一致"] },
  { id: "math-core", subject: "數學", title: "七年級數學核心", description: "數與量、代數、幾何、統計的基礎能力。", examFocus: ["列式", "計算", "圖形判讀"] },
  { id: "science-core", subject: "自然", title: "自然科觀念", description: "科學方法、生物、物質、力與能量基礎。", examFocus: ["變因", "圖表", "概念推理"] },
  { id: "social-core", subject: "社會", title: "社會閱讀整理", description: "地理、歷史、公民的資料判讀與概念比較。", examFocus: ["地圖判讀", "史料閱讀", "公民概念"] }
];

const unitSeed: Array<Omit<Unit, "id">> = [
  {
    subjectId: "chinese",
    subject: "國文",
    term: "上學期",
    title: "現代散文與段落主旨",
    description: "練習找段落中心句、轉折句與作者態度。",
    keyPoints: ["段落大意", "作者觀點", "敘事順序"],
    examFocus: ["主旨題", "文意連貫", "作者觀點"],
    reviewScript: "讀散文先不要急著背內容，先抓每段在做什麼：寫景、敘事、抒情，還是說理。"
  },
  {
    subjectId: "chinese",
    subject: "國文",
    term: "上學期",
    title: "文言文入門與常見虛字",
    description: "建立之、其、而、以、於、乃、遂等虛字判斷能力。",
    keyPoints: ["虛字用法", "白話翻譯", "句意承接"],
    examFocus: ["字義判斷", "句意翻譯", "文意理解"],
    reviewScript: "文言文不要逐字硬翻。先找主詞與動詞，再看虛字是在接原因、轉折還是結果。"
  },
  {
    subjectId: "chinese",
    subject: "國文",
    term: "下學期",
    title: "詩歌、修辭與閱讀推論",
    description: "整理譬喻、擬人、排比、反問等常見修辭。",
    keyPoints: ["修辭判斷", "意象", "情感推論"],
    examFocus: ["修辭效果", "情意判讀", "題目陷阱"],
    reviewScript: "修辭題不是只問名稱，常問效果。看到譬喻要問：它讓哪件事變得更具體？"
  },
  {
    subjectId: "english",
    subject: "英文",
    term: "上學期",
    title: "be 動詞、現在簡單式與校園生活",
    description: "建立基本句型、主詞動詞一致與日常單字。",
    keyPoints: ["be 動詞", "現在簡單式", "生活單字"],
    examFocus: ["句型填空", "單字理解", "短文細節"],
    reviewScript: "英文先抓句子骨架：主詞是誰，動詞是什麼。看到 every day 通常要想到現在簡單式。"
  },
  {
    subjectId: "english",
    subject: "英文",
    term: "上學期",
    title: "現在進行式、助動詞與閱讀關鍵字",
    description: "練習 can、should、must 與轉折、原因字。",
    keyPoints: ["現在進行式", "助動詞", "however/because"],
    examFocus: ["文法選擇", "關鍵字定位", "推論題"],
    reviewScript: "助動詞後面動詞用原形；閱讀看到 however，答案常在後半句。"
  },
  {
    subjectId: "english",
    subject: "英文",
    term: "下學期",
    title: "過去式、比較級與閱讀整合",
    description: "整合過去時間線索、比較句型與短文理解。",
    keyPoints: ["過去式", "比較級", "閱讀主旨"],
    examFocus: ["時間副詞", "比較句", "整篇主旨"],
    reviewScript: "先圈 yesterday、last、ago 這些時間字，再決定動詞形式。比較級要看兩者或多者的關係。"
  },
  {
    subjectId: "math",
    subject: "數學",
    term: "上學期",
    title: "整數、因倍數與分數小數",
    description: "建立數感、正負數運算與因數倍數基礎。",
    keyPoints: ["正負數", "因倍數", "分數小數"],
    examFocus: ["運算順序", "生活情境", "數線判讀"],
    reviewScript: "數學先把題目翻成式子。負數題最怕漏掉括號，看到減負數要特別慢一秒。"
  },
  {
    subjectId: "math",
    subject: "數學",
    term: "上學期",
    title: "一元一次式與一元一次方程式",
    description: "用符號表示數量關係並解方程式。",
    keyPoints: ["代數式", "等量公理", "列方程"],
    examFocus: ["移項", "列式", "應用題"],
    reviewScript: "方程式像天平，左右同加同減才公平。應用題先設未知數，再把中文關係翻成等式。"
  },
  {
    subjectId: "math",
    subject: "數學",
    term: "下學期",
    title: "比例、線型函數與統計圖表",
    description: "理解比與比值、坐標平面、資料整理。",
    keyPoints: ["比例", "坐標", "統計圖"],
    examFocus: ["圖表判讀", "速率比例", "資料解讀"],
    reviewScript: "比例題先看單位，圖表題先看橫軸、縱軸與刻度，不要直接看線條猜。"
  },
  {
    subjectId: "math",
    subject: "數學",
    term: "下學期",
    title: "幾何圖形、角度與尺規概念",
    description: "認識線、角、三角形與基本幾何推理。",
    keyPoints: ["角度", "三角形", "平行線"],
    examFocus: ["角度推理", "圖形性質", "幾何語言"],
    reviewScript: "幾何題先把已知角標上去，再用平行、三角形內角和、對頂角慢慢推。"
  },
  {
    subjectId: "science",
    subject: "自然",
    term: "上學期",
    title: "科學方法、測量與變因",
    description: "理解觀察、假設、實驗與變因控制。",
    keyPoints: ["操作變因", "應變變因", "控制變因"],
    examFocus: ["實驗設計", "圖表判讀", "單位換算"],
    reviewScript: "實驗題先問：研究者改變什麼？觀察什麼結果？其他條件有沒有控制住？"
  },
  {
    subjectId: "science",
    subject: "自然",
    term: "上學期",
    title: "生命現象、細胞與生物分類",
    description: "認識細胞構造、生命特徵與分類概念。",
    keyPoints: ["細胞", "顯微鏡", "分類"],
    examFocus: ["構造功能", "觀察技能", "比較表"],
    reviewScript: "生物題很愛考構造對功能。看到細胞構造，直接問它負責做什麼。"
  },
  {
    subjectId: "science",
    subject: "自然",
    term: "下學期",
    title: "物質、溶液與空氣水",
    description: "理解物質性質、濃度、溶解與水空氣循環。",
    keyPoints: ["溶解", "濃度", "水循環"],
    examFocus: ["圖表推論", "濃度比較", "環境議題"],
    reviewScript: "溶液題先分清楚溶質、溶劑、溶液。濃度比較要看比例，不是只看溶質多寡。"
  },
  {
    subjectId: "science",
    subject: "自然",
    term: "下學期",
    title: "力、運動與能量入門",
    description: "認識力的作用、運動狀態與能量轉換。",
    keyPoints: ["力", "速率", "能量轉換"],
    examFocus: ["生活情境", "圖表判讀", "概念推理"],
    reviewScript: "力學題先看物體狀態有沒有改變。能量題則問：能量從哪種形式變成哪種形式？"
  },
  {
    subjectId: "social",
    subject: "社會",
    term: "上學期",
    title: "臺灣地理、地圖與生活空間",
    description: "練習地圖、比例尺、地形、氣候與生活關聯。",
    keyPoints: ["地圖判讀", "臺灣地形", "氣候"],
    examFocus: ["圖資閱讀", "區域比較", "人地互動"],
    reviewScript: "社會地理題先看圖例、方向、比例尺。圖表提供的資訊通常比記憶更重要。"
  },
  {
    subjectId: "social",
    subject: "社會",
    term: "上學期",
    title: "臺灣早期歷史與史料閱讀",
    description: "從史料理解族群互動、移墾與政權變遷。",
    keyPoints: ["史料判讀", "時間順序", "因果關係"],
    examFocus: ["史料題", "時序題", "原因結果"],
    reviewScript: "歷史題不要只背年代，先抓誰、在什麼時代、做了什麼、造成什麼影響。"
  },
  {
    subjectId: "social",
    subject: "社會",
    term: "下學期",
    title: "公民、家庭學校與權利義務",
    description: "理解個人、家庭、學校、社會規範與權利責任。",
    keyPoints: ["權利義務", "規範", "民主參與"],
    examFocus: ["情境判斷", "概念比較", "生活應用"],
    reviewScript: "公民題常給生活情境。先判斷角色，再想每個人有什麼權利與責任。"
  },
  {
    subjectId: "tech",
    subject: "科技",
    term: "全年",
    title: "資訊素養、演算法與生活科技",
    description: "建立資料安全、流程思考與設計製作入門。",
    keyPoints: ["資訊安全", "演算法", "設計思考"],
    examFocus: ["流程判斷", "安全觀念", "問題解決"],
    reviewScript: "科技題重點不是背名詞，而是把問題拆步驟，找到最合理的流程。"
  },
  {
    subjectId: "pe",
    subject: "健體",
    term: "全年",
    title: "健康生活、運動安全與青春期",
    description: "理解健康習慣、運動傷害預防與青春期身心變化。",
    keyPoints: ["健康習慣", "運動安全", "青春期"],
    examFocus: ["生活判斷", "安全行為", "自我照護"],
    reviewScript: "健體題多半是情境判斷。選項要看哪個最安全、最能長期維持健康。"
  },
  {
    subjectId: "integrative",
    subject: "綜合",
    term: "全年",
    title: "自我探索、人際合作與生活管理",
    description: "練習目標設定、溝通、時間管理與團隊合作。",
    keyPoints: ["自我認識", "溝通合作", "時間管理"],
    examFocus: ["情境反思", "問題解決", "合作策略"],
    reviewScript: "綜合活動重點是做選擇的理由。先釐清目標，再看哪個做法最能解決問題。"
  },
  {
    subjectId: "arts",
    subject: "藝術",
    term: "全年",
    title: "視覺、音樂與表演藝術欣賞",
    description: "認識基本元素、作品欣賞與表達方式。",
    keyPoints: ["視覺元素", "音樂元素", "表演表達"],
    examFocus: ["作品判讀", "元素辨識", "表達效果"],
    reviewScript: "藝術題要看元素如何造成感受，例如線條、色彩、節奏、動作都會影響作品效果。"
  }
];

export const units: Unit[] = unitSeed.map((unit, index) => ({
  ...unit,
  id: `u-${unit.subjectId}-${index + 1}`
}));

function makeQuestion(unit: Unit, index: number): Question {
  const kpMap: Record<SubjectName, string> = {
    國文: unit.title.includes("文言") ? "cc-function-words" : "cc-reading",
    英文: unit.title.includes("閱讀") ? "en-reading" : "en-grammar",
    數學: "math-core",
    自然: "science-core",
    社會: "social-core",
    科技: "social-core",
    健體: "social-core",
    綜合: "social-core",
    藝術: "social-core"
  };
  const categoryMap: Record<SubjectName, Question["mistakeTags"][number]> = {
    國文: "文意理解錯誤",
    英文: "關鍵字沒抓到",
    數學: "計算觀念錯誤",
    自然: "圖表判讀錯誤",
    社會: "推論錯誤",
    科技: "概念不熟",
    健體: "概念不熟",
    綜合: "概念不熟",
    藝術: "概念不熟"
  };
  return {
    id: `q-${unit.id}`,
    subject: unit.subject,
    unitId: unit.id,
    knowledgePointId: kpMap[unit.subject],
    type: unit.subject === "英文" ? "閱讀理解" : "單選",
    difficulty: index % 2 === 0 ? "基礎" : "會考",
    prompt: `複習「${unit.title}」時，下列哪一個做法最符合本單元的學習重點？`,
    options: [
      { optionId: "A", text: unit.examFocus[0] ? `先掌握「${unit.examFocus[0]}」，再回題目找證據。` : "先整理題目線索。", isCorrect: true },
      { optionId: "B", text: "只背題目答案，不需要理解原因。", isCorrect: false },
      { optionId: "C", text: "看到長題目就先猜最短的選項。", isCorrect: false },
      { optionId: "D", text: "把所有細節混在一起，不用分單元整理。", isCorrect: false }
    ],
    explanation: {
      short: `本題考的是「${unit.title}」的複習方法，要先抓核心概念，再用題目證據判斷。`,
      steps: [
        `先看本單元重點：${unit.keyPoints.join("、")}。`,
        `再對照會考常考方向：${unit.examFocus.join("、")}。`,
        "最後排除只靠猜測或死背的選項。"
      ],
      teacherTip: unit.reviewScript
    },
    mistakeTags: [categoryMap[unit.subject]]
  };
}

export const fullGradeQuestions: Question[] = units.map(makeQuestion);

export const classicalArticles: ClassicalChineseArticle[] = [
  {
    id: "cc-a-1",
    title: "勤學短章",
    sourceNote: "原創仿古短文，對應七年級文言閱讀能力點。",
    originalText: "少者好逸，日暮乃悔。鄰翁見之，曰：「學如植木，朝培其根，夕可望其陰乎？」少者悟，遂晨讀而夜省。",
    translation: "年少的人喜歡安逸，到了傍晚才後悔。鄰居老先生看見後說：「學習像種樹，早上才培養樹根，晚上就能期待樹蔭嗎？」年少的人醒悟，於是早上讀書，晚上反省。",
    keywords: [
      { word: "乃", meaning: "才、於是", usage: "表示時間較晚或承接結果" },
      { word: "遂", meaning: "於是、就", usage: "表示前因導致後果" },
      { word: "其", meaning: "他的、那個", usage: "依前後文判斷代稱對象" }
    ],
    interpretation: "文章用種樹比喻學習，提醒學生不要只想立刻看到成果，而要每天累積。",
    authorBackground: "本篇為原創教學文本，模擬古代勸學短文的口吻。",
    eraBackground: "古代教育常用生活比喻說理，讓抽象道理變成可想像的畫面。",
    paragraphAnalysis: [
      "第一句先寫少者的問題：貪圖安逸、太晚才後悔。",
      "第二句用鄰翁的話點出核心比喻：學習像種樹，不能急著收成。",
      "第三句寫少者改變行動，形成完整因果。"
    ],
    rhetoric: ["譬喻：以植木比喻學習累積。", "反問：夕可望其陰乎？強調不可能立刻成功。"],
    mainIdea: "學習需要長期累積，及早開始並持續反省，才會看見成果。",
    examFocus: ["乃、遂的承接語氣", "譬喻修辭", "人物態度轉變", "主旨歸納"],
    questions: []
  }
];

export const classicalVocabulary: ClassicalChineseVocabulary[] = ["之", "其", "而", "以", "於", "乃", "遂", "焉", "者", "也"].map((word, index) => ({
  id: `cc-v-${word}`,
  word,
  meanings: {
    之: ["的", "它、他", "到、往"],
    其: ["他的、它的", "那、那些", "難道"],
    而: ["而且", "但是", "表示承接"],
    以: ["用、拿", "因為", "來、用來"],
    於: ["在", "向", "比"],
    乃: ["才", "於是", "竟然"],
    遂: ["於是", "就", "終於"],
    焉: ["在那裡", "於此", "語氣詞"],
    者: ["……的人", "停頓提示", "判斷句提示"],
    也: ["是", "語氣詞", "判斷句收尾"]
  }[word] || ["依上下文判斷"],
  usage: `「${word}」要靠前後文判斷，不要只背單一意思。`,
  translationHint: "先試翻，再回句子檢查是否通順。",
  commonPatterns: [`A ${word} B`, `${word} + 動作`, `句末 ${word}`],
  examples: [`學${word}道，貴在日進。`, `見${word}而思其義。`],
  quiz: {
    id: `q-v-${index}`,
    subject: "國文",
    unitId: "u-chinese-2",
    knowledgePointId: "cc-function-words",
    type: "單選",
    difficulty: "基礎",
    prompt: `學習「${word}」這類文言虛字時，最重要的做法是什麼？`,
    options: [
      { optionId: "A", text: "只背一個固定意思。", isCorrect: false },
      { optionId: "B", text: "看前後文，再選最順的翻法。", isCorrect: true },
      { optionId: "C", text: "遇到就跳過。", isCorrect: false },
      { optionId: "D", text: "全部翻成白話的『的』。", isCorrect: false }
    ],
    explanation: {
      short: "文言虛字最怕死背，要回到句子判斷。",
      steps: ["先看前後接什麼詞。", "再試翻。", "最後檢查句意是否合理。"],
      teacherTip: "虛字像路標，不一定是主角，但會告訴你句子怎麼轉彎。"
    },
    mistakeTags: ["字詞不懂"]
  }
}));

export const sentencePatterns: ClassicalChineseSentencePattern[] = [
  { id: "sp-ellipsis", name: "省略句", studentFriendlyRule: "古人常把猜得到的主詞或受詞省掉，閱讀時要幫句子補回來。", example: "遂晨讀而夜省。", breakdown: ["主詞省略：少者。", "動詞是讀、省。", "補完整：少者於晨讀書，於夜反省。"] },
  { id: "sp-inversion", name: "倒裝句", studentFriendlyRule: "為了強調，文言文有時會把順序調換。先抓動詞，再放回白話順序。", example: "何陋之有？", breakdown: ["白話順序：有何陋？", "何是疑問詞。", "之幫助賓語提前。"] },
  { id: "sp-judgement", name: "判斷句", studentFriendlyRule: "看到者、也常常是在說 A 是 B，不要硬翻每一個字。", example: "學者，日進之事也。", breakdown: ["者提示主題。", "也是判斷語氣。", "整句：學習是每天進步的事。"] },
  { id: "sp-passive", name: "被動句", studentFriendlyRule: "看到為、見、被附近，要留意是不是某人被某事影響。", example: "為其言所動。", breakdown: ["為……所是被動線索。", "其言是造成影響的內容。", "整句：被他的話感動。"] }
];

export const englishVocabulary: EnglishVocabulary[] = [
  {
    id: "en-v-1",
    word: "habit",
    chinese: "習慣",
    kk: "[ˋhæbɪt]",
    example: "Reading for ten minutes every day is a good habit.",
    dictationHint: "ha-bit，兩拍，注意不是 hobby。",
    quiz: fullGradeQuestions.filter((q) => q.subject === "英文")[0]
  },
  {
    id: "en-v-2",
    word: "however",
    chinese: "然而",
    kk: "[haʊˋɛvɚ]",
    example: "I wanted to play basketball; however, it started to rain.",
    dictationHint: "how-ever，看到它要準備轉折。",
    quiz: fullGradeQuestions.filter((q) => q.subject === "英文")[1]
  }
];

export const englishGrammar: EnglishGrammarPoint[] = [
  {
    id: "g-tense",
    title: "時態",
    rule: "先看時間線索，再決定動詞形式。",
    steps: ["找時間副詞。", "判斷現在、過去或未來。", "檢查主詞是否第三人稱單數。"],
    examples: ["She studies after dinner.", "They visited Taipei last Sunday."],
    quiz: fullGradeQuestions.filter((q) => q.subject === "英文")[2]
  }
];

export const readingPassages: ReadingPassage[] = [
  {
    id: "rp-en-1",
    title: "A Quiet Study Corner",
    subject: "英文",
    passage: "Mia wanted to study after school, but her living room was noisy. She moved a small desk near the window and put her phone in another room. However, after two weeks, reading became a habit.",
    chineseSummary: "Mia 調整讀書空間並把手機放遠，逐漸養成閱讀習慣。",
    vocabulary: ["quiet 安靜的", "noisy 吵雜的", "habit 習慣", "however 然而"],
    grammarAnalysis: ["wanted、moved、became 是過去式。", "However 提示轉折，後面是習慣養成的結果。"],
    questions: [fullGradeQuestions.filter((q) => q.subject === "英文")[1]]
  }
];

export const mathQuestions = fullGradeQuestions.filter((q) => q.subject === "數學");
export const scienceConcepts = units
  .filter((unit) => unit.subject === "自然")
  .map((unit) => ({ title: unit.title, explanation: unit.description, chartHint: unit.reviewScript }));

const chineseUnitIds = units.filter((unit) => unit.subject === "國文").map((unit) => unit.id);
const englishUnitIds = units.filter((unit) => unit.subject === "英文").map((unit) => unit.id);

const classicalItems = [
  { word: "之", meaning: "的、它、到", sentence: "友人勸之讀書，之後遂能明理。", clue: "第一個之多半代指前面的人，第二個之是連接語意。" },
  { word: "其", meaning: "他的、那個", sentence: "少者知其過，乃改其習。", clue: "其常用來代前面出現的人或事物。" },
  { word: "而", meaning: "而且、但是、承接", sentence: "勤而不倦，久而有成。", clue: "而常連接前後動作或狀態，要看關係是並列、轉折或承接。" },
  { word: "以", meaning: "用、因為、來", sentence: "翁以竹為杖，以示其志。", clue: "以常表示工具、原因或目的。" },
  { word: "於", meaning: "在、向、比", sentence: "學於晨，思於夜。", clue: "於常標示時間、地點或比較對象。" },
  { word: "乃", meaning: "才、於是", sentence: "日暮乃悔，明日乃早起。", clue: "乃常有時間較晚或承接結果的味道。" },
  { word: "遂", meaning: "於是、就", sentence: "聞師言，遂改其法。", clue: "遂常接在原因後面，表示後續結果。" },
  { word: "焉", meaning: "於此、在那裡、語氣詞", sentence: "山有泉焉，行者取水而去。", clue: "焉常把地點或語氣收在句尾。" },
  { word: "者", meaning: "……的人、提示主題", sentence: "勤學者，日有所進。", clue: "者常把前面的詞組變成主題或人物。" },
  { word: "也", meaning: "是、語氣收尾", sentence: "學者，日進之事也。", clue: "也常放在句末，形成判斷或說明語氣。" }
];

const chineseRhetoric = [
  { name: "譬喻", example: "學如植木，根深乃枝茂。", effect: "把抽象的學習累積變成具體畫面。" },
  { name: "擬人", example: "晨光催人起，書聲迎日來。", effect: "讓景物像人一樣有動作，畫面更活。" },
  { name: "排比", example: "晨讀其文，午思其義，夜省其得。", effect: "讓節奏整齊，強調持續練習。" },
  { name: "反問", example: "朝種其木，夕可望其陰乎？", effect: "用疑問加強否定或提醒。" },
  { name: "對偶", example: "山靜鳥鳴遠，水清月影明。", effect: "句式相對，畫面平衡。" },
  { name: "借代", example: "青燈伴卷，終夜不眠。", effect: "用青燈、書卷代指讀書情境。" }
];

const chineseReadingSeeds = [
  { title: "晨讀", text: "阿仁原本總在考前才翻書，後來把每天早上十分鐘留給閱讀。三週後，他發現自己看文章不再急著猜答案。", main: "學習需要固定累積。" },
  { title: "問路", text: "小禾遇到難題時不再立刻問答案，而是先說出自己卡住的地方。老師聽完，只問了兩個問題，她便自己想通。", main: "提問前先整理思路。" },
  { title: "借傘", text: "大雨忽至，小城把傘借給同學，自己快步跑回家。隔日同學還傘，並在傘柄貼上謝卡。", main: "善意會帶來回應。" },
  { title: "校園樹", text: "操場邊的老樹春天發芽、夏天成蔭。新生在樹下讀書，畢業生回來時，仍認得那片熟悉的影子。", main: "校園記憶來自長久陪伴。" },
  { title: "修筆", text: "美術課前，小寧發現筆尖裂開。她沒有抱怨，先借膠帶固定，再把作品完成。", main: "解決問題比抱怨更重要。" },
  { title: "回信", text: "爺爺寫信給小安，信中沒有大道理，只問她最近是否好好吃飯、好好睡覺。小安讀完，突然想把房間整理好。", main: "關心能帶來改變的力量。" },
  { title: "比賽", text: "班際賽輸了，隊長沒有責怪隊友，只把失誤記下來。下一次練習，他們先練最常漏接的球。", main: "面對失敗要找原因再改進。" },
  { title: "書籤", text: "小瑜把不懂的句子貼上書籤，週末再回頭讀。她發現以前覺得難的段落，其實只是少看了前一句。", main: "閱讀理解要回到上下文。" }
];

function makeChineseQuestion(index: number): Question {
  const mode = index % 5;
  const unitId = chineseUnitIds[index % chineseUnitIds.length] ?? "u-chinese-1";
  if (mode === 0) {
    const item = classicalItems[index % classicalItems.length];
    return {
      id: `q-bank-ch-${index + 1}`,
      subject: "國文",
      unitId,
      knowledgePointId: "cc-function-words",
      type: "單選",
      difficulty: index % 2 === 0 ? "基礎" : "會考",
      prompt: `「${item.sentence}」中的「${item.word}」最適合先從哪個方向判斷？`,
      options: [
        { optionId: "A", text: `看前後文，判斷是否接近「${item.meaning}」。`, isCorrect: true },
        { optionId: "B", text: "固定翻成「但是」，不需要看句子。", isCorrect: false },
        { optionId: "C", text: "遇到虛字直接略過，完全不影響文意。", isCorrect: false },
        { optionId: "D", text: "只看字形，不看它前後接什麼。", isCorrect: false }
      ],
      explanation: {
        short: `這題練的是「${item.word}」的上下文判斷。`,
        steps: [`先看句子：「${item.sentence}」。`, item.clue, "再把選項代回句子，選最通順的一個。"],
        teacherTip: "文言虛字不要死背。會考常考的是你能不能把它放回句子裡判斷。"
      },
      mistakeTags: ["字詞不懂"]
    };
  }
  if (mode === 1) {
    const seed = chineseReadingSeeds[index % chineseReadingSeeds.length];
    return {
      id: `q-bank-ch-${index + 1}`,
      subject: "國文",
      unitId,
      knowledgePointId: "cc-reading",
      type: "閱讀理解",
      difficulty: "會考",
      prompt: `閱讀短文：「${seed.text}」本文最適合的主旨是什麼？`,
      options: [
        { optionId: "A", text: seed.main, isCorrect: true },
        { optionId: "B", text: "只要結果好，過程完全不重要。", isCorrect: false },
        { optionId: "C", text: "遇到問題時應該避免面對。", isCorrect: false },
        { optionId: "D", text: "文章重點只是在描寫天氣變化。", isCorrect: false }
      ],
      explanation: {
        short: `這篇「${seed.title}」重點不是表面事件，而是事件背後的態度。`,
        steps: ["先找人物遇到什麼情況。", "再看人物做了什麼改變。", `最後歸納成主旨：${seed.main}`],
        teacherTip: "主旨題不要選太細的事情，要選能涵蓋整篇文章的句子。"
      },
      mistakeTags: ["文意理解錯誤"]
    };
  }
  if (mode === 2) {
    const rhetoric = chineseRhetoric[index % chineseRhetoric.length];
    return {
      id: `q-bank-ch-${index + 1}`,
      subject: "國文",
      unitId,
      knowledgePointId: "cc-reading",
      type: "單選",
      difficulty: "基礎",
      prompt: `「${rhetoric.example}」主要使用哪一種修辭？`,
      options: [
        { optionId: "A", text: rhetoric.name, isCorrect: true },
        { optionId: "B", text: "設問", isCorrect: rhetoric.name === "反問" ? false : false },
        { optionId: "C", text: "誇飾", isCorrect: false },
        { optionId: "D", text: "轉化以外的純敘述", isCorrect: false }
      ],
      explanation: {
        short: `這句主要是「${rhetoric.name}」。`,
        steps: [`先看句子：「${rhetoric.example}」。`, `它的效果是：${rhetoric.effect}`, "修辭題要同時判斷名稱與效果。"],
        teacherTip: "會考修辭題常不是只問名字，還會問這樣寫有什麼用。"
      },
      mistakeTags: ["修辭判斷錯誤"]
    };
  }
  if (mode === 3) {
    const pattern = sentencePatterns[index % sentencePatterns.length];
    return {
      id: `q-bank-ch-${index + 1}`,
      subject: "國文",
      unitId,
      knowledgePointId: "cc-function-words",
      type: "單選",
      difficulty: "會考",
      prompt: `句子「${pattern.example}」最適合用哪一種句型概念來分析？`,
      options: [
        { optionId: "A", text: pattern.name, isCorrect: true },
        { optionId: "B", text: "純粹白話句，不需要分析。", isCorrect: false },
        { optionId: "C", text: "只有押韻，沒有句型。", isCorrect: false },
        { optionId: "D", text: "一定是感嘆句。", isCorrect: false }
      ],
      explanation: {
        short: `這題考「${pattern.name}」。`,
        steps: pattern.breakdown,
        teacherTip: pattern.studentFriendlyRule
      },
      mistakeTags: ["句型不熟"]
    };
  }
  const item = classicalItems[index % classicalItems.length];
  const rhetoric = chineseRhetoric[index % chineseRhetoric.length];
  return {
    id: `q-bank-ch-${index + 1}`,
    subject: "國文",
    unitId,
    knowledgePointId: "cc-reading",
    type: "單選",
    difficulty: "會考",
    prompt: `若題目同時出現「${item.word}」與「${rhetoric.name}」，作答順序最建議哪一個？`,
    options: [
      { optionId: "A", text: "先讀懂句意，再判斷字詞或修辭效果。", isCorrect: true },
      { optionId: "B", text: "先猜答案，解釋等訂正時再說。", isCorrect: false },
      { optionId: "C", text: "只看選項長短，最長的一定對。", isCorrect: false },
      { optionId: "D", text: "看到文言字就完全跳過。", isCorrect: false }
    ],
    explanation: {
      short: "混合題最重要的是先穩住文意。",
      steps: ["先把句子大意抓出來。", `再處理「${item.word}」的用法。`, `最後判斷「${rhetoric.name}」的表達效果。`],
      teacherTip: "國文會考很少只考背誦，更多是在考你能不能用證據讀懂文章。"
    },
    mistakeTags: ["題目陷阱"]
  };
}

const englishVocabSeeds = [
  ["habit", "習慣", "Reading every day is a useful habit."],
  ["focus", "專心", "Mia can focus better in a quiet room."],
  ["however", "然而", "I wanted to go out; however, it rained."],
  ["because", "因為", "Leo stayed home because he was tired."],
  ["before", "在……之前", "Wash your hands before dinner."],
  ["after", "在……之後", "We played basketball after school."],
  ["healthy", "健康的", "A healthy breakfast helps you learn."],
  ["practice", "練習", "Practice makes the song sound better."],
  ["borrow", "借入", "May I borrow your ruler?"],
  ["return", "歸還", "Please return the book tomorrow."],
  ["important", "重要的", "Sleep is important for students."],
  ["quiet", "安靜的", "The library is quiet in the morning."]
];

const englishGrammarSeeds = [
  { rule: "be 動詞", prompt: "Amy ___ a junior high school student.", answer: "is", wrong: ["are", "am", "be"], tip: "主詞 Amy 是第三人稱單數，所以用 is。" },
  { rule: "現在簡單式", prompt: "Ben ___ English every day.", answer: "studies", wrong: ["study", "studied", "studying"], tip: "every day 是現在簡單式，Ben 是第三人稱單數，study 要變 studies。" },
  { rule: "現在進行式", prompt: "They ___ basketball now.", answer: "are playing", wrong: ["play", "played", "plays"], tip: "now 提示現在進行式：be + V-ing。" },
  { rule: "過去式", prompt: "We ___ the museum last Sunday.", answer: "visited", wrong: ["visit", "visits", "will visit"], tip: "last Sunday 是過去時間，動詞用過去式。" },
  { rule: "助動詞", prompt: "You should ___ more water.", answer: "drink", wrong: ["drinks", "drank", "drinking"], tip: "should 後面接原形動詞。" },
  { rule: "比較級", prompt: "This bag is ___ than that one.", answer: "heavier", wrong: ["heavy", "heaviest", "more heavy"], tip: "than 提示比較級，heavy 變 heavier。" },
  { rule: "介系詞", prompt: "The cat is ___ the table.", answer: "under", wrong: ["happy", "read", "quickly"], tip: "描述位置時要用介系詞。" },
  { rule: "不定詞", prompt: "I want ___ a new book.", answer: "to buy", wrong: ["buy", "buying", "bought"], tip: "want 後面常接 to + 原形動詞。" }
];

const englishReadingSeeds = [
  { title: "Lunch Box", text: "Nina forgot her lunch box, so her friend shared a sandwich with her. Nina thanked her and brought an extra snack the next day.", answer: "A friend helped Nina, and Nina showed thanks later." },
  { title: "Rainy Game", text: "Tom wanted to play soccer. However, it started to rain, so the team watched a game video and discussed their mistakes.", answer: "The team changed the plan and still learned from the day." },
  { title: "New Club", text: "Ivy joined the science club because she liked asking questions. At first she was shy, but she soon enjoyed working with her group.", answer: "Ivy became more comfortable in a club she liked." },
  { title: "Reading Time", text: "Ken put his phone away before reading. After two weeks, he could read longer and understand more.", answer: "Small study habits helped Ken improve." },
  { title: "Bus Stop", text: "The bus was late, but May used the time to review five new words. She felt the wait was not wasted.", answer: "May used waiting time wisely." },
  { title: "Clean Desk", text: "Ray cleaned his desk before doing homework. He found his notebook and finished the work faster.", answer: "A clean space helped Ray study better." }
];

function makeEnglishQuestion(index: number): Question {
  const mode = index % 4;
  const unitId = englishUnitIds[index % englishUnitIds.length] ?? "u-english-1";
  if (mode === 0) {
    const [word, meaning, sentence] = englishVocabSeeds[index % englishVocabSeeds.length];
    return {
      id: `q-bank-en-${index + 1}`,
      subject: "英文",
      unitId,
      knowledgePointId: "en-reading",
      type: "單選",
      difficulty: "基礎",
      prompt: `In the sentence "${sentence}", what does "${word}" mean?`,
      options: [
        { optionId: "A", text: meaning, isCorrect: true },
        { optionId: "B", text: "突然", isCorrect: false },
        { optionId: "C", text: "危險", isCorrect: false },
        { optionId: "D", text: "比賽", isCorrect: false }
      ],
      explanation: {
        short: `${word} 的意思是「${meaning}」。`,
        steps: [`先看例句：${sentence}`, "再用前後文猜字義。", `最後確認 ${word} = ${meaning}。`],
        teacherTip: "單字題不要只靠背，例句會給你判斷線索。"
      },
      mistakeTags: ["單字不熟"]
    };
  }
  if (mode === 1) {
    const grammar = englishGrammarSeeds[index % englishGrammarSeeds.length];
    return {
      id: `q-bank-en-${index + 1}`,
      subject: "英文",
      unitId,
      knowledgePointId: "en-grammar",
      type: "單選",
      difficulty: index % 2 === 0 ? "基礎" : "會考",
      prompt: `${grammar.prompt}`,
      options: [
        { optionId: "A", text: grammar.answer, isCorrect: true },
        { optionId: "B", text: grammar.wrong[0], isCorrect: false },
        { optionId: "C", text: grammar.wrong[1], isCorrect: false },
        { optionId: "D", text: grammar.wrong[2], isCorrect: false }
      ],
      explanation: {
        short: `本題考 ${grammar.rule}。`,
        steps: ["先找時間或句型線索。", grammar.tip, "再把答案代回句子確認語意通順。"],
        teacherTip: "英文文法題先找線索字，不要看到空格就直接猜。"
      },
      mistakeTags: ["文法錯誤"]
    };
  }
  if (mode === 2) {
    const passage = englishReadingSeeds[index % englishReadingSeeds.length];
    return {
      id: `q-bank-en-${index + 1}`,
      subject: "英文",
      unitId,
      knowledgePointId: "en-reading",
      type: "閱讀理解",
      difficulty: "會考",
      prompt: `Read: "${passage.text}" What is the best main idea?`,
      options: [
        { optionId: "A", text: passage.answer, isCorrect: true },
        { optionId: "B", text: "The story is only about buying expensive things.", isCorrect: false },
        { optionId: "C", text: "The student did not learn anything.", isCorrect: false },
        { optionId: "D", text: "The weather is the only important point.", isCorrect: false }
      ],
      explanation: {
        short: `這篇 ${passage.title} 要抓整體事件和改變。`,
        steps: ["先找主角。", "再找發生什麼事。", "最後選能涵蓋整段的主旨。"],
        teacherTip: "英文主旨題不要選太小的細節，要選能包住整段的句子。"
      },
      mistakeTags: ["閱讀理解錯誤"]
    };
  }
  const passage = englishReadingSeeds[index % englishReadingSeeds.length];
  return {
    id: `q-bank-en-${index + 1}`,
    subject: "英文",
    unitId,
    knowledgePointId: "en-reading",
    type: "閱讀理解",
    difficulty: "會考",
    prompt: `Read: "${passage.text}" Which strategy helps answer this question best?`,
    options: [
      { optionId: "A", text: "Circle signal words like but, however, because, so, before, and after.", isCorrect: true },
      { optionId: "B", text: "Ignore the passage and only choose the longest option.", isCorrect: false },
      { optionId: "C", text: "Translate one word and skip the rest.", isCorrect: false },
      { optionId: "D", text: "Never look back at the passage.", isCorrect: false }
    ],
    explanation: {
      short: "閱讀題要用關鍵字定位。",
      steps: ["先圈轉折、原因、時間字。", "回文章找到答案句。", "再比對選項是否和原文一致。"],
      teacherTip: "閱讀不是比誰翻得最漂亮，而是比誰找證據找得準。"
    },
    mistakeTags: ["關鍵字沒抓到"]
  };
}

export const generatedChineseQuestions: Question[] = Array.from({ length: 300 }, (_, index) => makeChineseQuestion(index));
export const generatedEnglishQuestions: Question[] = Array.from({ length: 300 }, (_, index) => makeEnglishQuestion(index));

const lesson9Materials = [
  {
    title: "窗邊的便條",
    type: "現代文",
    text: "考前一週，子晴把錯題貼在窗邊。她不是要提醒自己曾經失敗，而是要看見每一次訂正後留下的線索。"
  },
  {
    title: "問學",
    type: "文言文",
    text: "生問於師曰：「學有捷徑乎？」師曰：「徑可近，然足不行，終不至也。」生乃退而日習。"
  },
  {
    title: "夜讀",
    type: "詩歌",
    text: "燈下翻書聲細細，窗前月色慢慢移。明朝若問何所得，一字一行皆足跡。"
  },
  {
    title: "有效複習的方法",
    type: "說明文",
    text: "有效複習並不是把同一頁重看很多次，而是先回想，再檢查，再修正。回想能測出缺口，修正能補上理解。"
  }
];

const lesson9BasePrompts = [
  { key: "字詞理解", prompt: "「線索」在文中最接近哪一個意思？", answer: "幫助理解或追蹤原因的提示" },
  { key: "字詞理解", prompt: "「捷徑」在〈問學〉中最接近哪一個意思？", answer: "比較快速到達目標的方法" },
  { key: "字詞理解", prompt: "「乃」在「生乃退而日習」中的語氣最接近哪一個？", answer: "於是、就" },
  { key: "字詞理解", prompt: "「足跡」在詩中象徵什麼？", answer: "努力累積留下的成果" },
  { key: "字詞理解", prompt: "「缺口」在說明文中指的是什麼？", answer: "尚未理解或容易錯的地方" },
  { key: "文意理解", prompt: "子晴把錯題貼在窗邊，真正目的為何？", answer: "提醒自己從錯誤中找出可改進的線索" },
  { key: "文意理解", prompt: "老師說「足不行，終不至也」想提醒學生什麼？", answer: "知道方法還不夠，必須實際練習" },
  { key: "文意理解", prompt: "說明文中有效複習的順序是什麼？", answer: "先回想，再檢查，再修正" },
  { key: "主旨歸納", prompt: "四則材料共同想強調的學習態度是什麼？", answer: "學習要靠持續行動與修正，而非只找捷徑" },
  { key: "文意理解", prompt: "詩中的「一字一行皆足跡」最能呼應哪個觀點？", answer: "每次閱讀與練習都會累積成進步" }
];

const lesson9ReadingPrompts = [
  { material: "窗邊的便條", prompt: "從子晴的行動可看出她如何看待錯題？", answer: "她把錯題當成改進的線索，而不是失敗證明" },
  { material: "窗邊的便條", prompt: "文中「不是……而是……」的作用是什麼？", answer: "轉折並凸顯真正目的" },
  { material: "問學", prompt: "老師回答中「徑可近」與「足不行」形成什麼對比？", answer: "方法再好，沒有行動仍無法達成目標" },
  { material: "問學", prompt: "學生聽完後的改變是什麼？", answer: "退下後每天練習" },
  { material: "夜讀", prompt: "詩中月色移動暗示什麼？", answer: "讀書時間逐漸推移，凸顯持續努力" },
  { material: "夜讀", prompt: "詩末「皆足跡」最能表現哪種情感？", answer: "肯定每一步努力都有價值" },
  { material: "有效複習的方法", prompt: "作者反對哪一種複習方式？", answer: "只把同一頁重看很多次，卻沒有檢查理解" },
  { material: "有效複習的方法", prompt: "為什麼回想能幫助複習？", answer: "能測出自己哪裡還有缺口" }
];

const lesson9RhetoricPrompts = [
  { prompt: "「一字一行皆足跡」主要使用哪一種寫作手法？", answer: "象徵，把閱讀痕跡寫成努力足跡" },
  { prompt: "「燈下翻書聲細細，窗前月色慢慢移」的寫作特色是什麼？", answer: "以景襯托夜讀的安靜與時間流動" },
  { prompt: "「不是要提醒自己曾經失敗，而是要看見……」使用什麼語氣安排？", answer: "轉折，強調真正目的" },
  { prompt: "「徑可近，然足不行，終不至也」使用什麼說理方式？", answer: "對比，指出方法與行動的差別" },
  { prompt: "說明文中「先回想，再檢查，再修正」有什麼表達效果？", answer: "用步驟化排列讓方法清楚易懂" }
];

const lesson9InferencePrompts = [
  { prompt: "若子晴只把錯題貼起來卻不訂正，最可能缺少哪一步？", answer: "修正與反思" },
  { prompt: "老師為何不直接回答學生有哪些捷徑？", answer: "因為他想讓學生理解行動比捷徑更重要" },
  { prompt: "詩中的讀書者隔天若面對測驗，最可能具有哪種態度？", answer: "相信平日累積，不只靠臨時準備" },
  { prompt: "說明文提到回想，最適合搭配哪種讀書方法？", answer: "先合上書自問重點，再打開檢查" },
  { prompt: "四則材料若作為同一課延伸閱讀，最適合的單元標題是什麼？", answer: "從錯誤到進步的學習方法" }
];

const lesson9ExamPrompts = [
  { prompt: "綜合四則材料，下列哪一項最符合會考閱讀的整體判斷？", answer: "不同文類都指向持續練習與修正的重要" },
  { prompt: "若要寫一段考作文，哪一個立意最能整合本課能力？", answer: "把錯誤當成前進線索，透過行動累積成果" }
];

function lesson9Question(
  category: LessonQuestionCategory,
  index: number,
  item: { prompt: string; answer: string; key?: string; material?: string }
): Question {
  const optionB = category === "基礎題" ? "只看字面，不需要放回文章判斷" : "文章只是單純描述事件，沒有更深層意思";
  return {
    id: `q-lesson-ch-7b-9-${category}-${index + 1}`,
    subject: "國文",
    unitId: "lesson-ch-7b-9",
    knowledgePointId: category === "修辭與寫作特色" ? "cc-reading" : "cc-reading",
    type: category === "閱讀理解" || category === "會考整合題" ? "閱讀理解" : "單選",
    difficulty: category === "會考整合題" || category === "推論題" ? "會考" : "基礎",
    prompt: `${category} ${index + 1}：${item.prompt}`,
    options: [
      { optionId: "A", text: item.answer, isCorrect: true },
      { optionId: "B", text: optionB, isCorrect: false },
      { optionId: "C", text: "只要背下句子，不必理解作者安排", isCorrect: false },
      { optionId: "D", text: "題目重點與上下文無關", isCorrect: false }
    ],
    explanation: {
      short: `本題答案是：${item.answer}。`,
      steps: [
        item.material ? `先回到材料〈${item.material}〉定位。` : "先抓題目關鍵字。",
        item.key ? `本題核心能力是「${item.key}」。` : `本題分類是「${category}」。`,
        "再把答案放回文本脈絡檢查是否合理。"
      ],
      teacherTip: "段考複習不要只背答案，要練會「從文本找證據」。這樣換一篇文章也能作答。"
    },
    mistakeTags:
      category === "修辭與寫作特色"
        ? ["修辭判斷錯誤"]
        : category === "推論題" || category === "會考整合題"
          ? ["推論錯誤"]
          : category === "基礎題"
            ? ["字詞不懂"]
            : ["文意理解錯誤"]
  };
}

export const lessonPractices: LessonPractice[] = [
  {
    id: "lesson-ch-7b-9",
    subject: "國文",
    publisher: "翰林",
    grade: 7,
    term: "下學期",
    lessonNo: 9,
    title: "七下國文第九課能力複習試作",
    courseTypes: ["現代文", "文言文", "詩歌", "說明文"],
    coreAbilities: ["字詞理解", "文意理解", "修辭判斷", "主旨歸納", "會考閱讀推論"],
    originalMaterials: lesson9Materials,
    questionPlan: {
      基礎題: 10,
      閱讀理解: 8,
      修辭與寫作特色: 5,
      推論題: 5,
      會考整合題: 2
    },
    questions: [
      ...lesson9BasePrompts.map((item, index) => lesson9Question("基礎題", index, item)),
      ...lesson9ReadingPrompts.map((item, index) => lesson9Question("閱讀理解", index, item)),
      ...lesson9RhetoricPrompts.map((item, index) => lesson9Question("修辭與寫作特色", index, item)),
      ...lesson9InferencePrompts.map((item, index) => lesson9Question("推論題", index, item)),
      ...lesson9ExamPrompts.map((item, index) => lesson9Question("會考整合題", index, item))
    ]
  }
];

export const allQuestions: Question[] = [
  ...fullGradeQuestions,
  ...classicalVocabulary.map((item) => item.quiz),
  ...generatedChineseQuestions,
  ...generatedEnglishQuestions,
  ...lessonPractices.flatMap((lesson) => lesson.questions)
];

export const initialMistakes: MistakeRecord[] = [
  {
    id: "m-1",
    questionId: "q-u-chinese-2",
    subject: "國文",
    category: "字詞不懂",
    studentAnswer: "C",
    correctAnswer: "A",
    createdAt: "2026-05-18",
    aiAdvice: "文言虛字先看前後文，不要只背一個固定翻譯。"
  },
  {
    id: "m-2",
    questionId: "q-u-english-2",
    subject: "英文",
    category: "關鍵字沒抓到",
    studentAnswer: "B",
    correctAnswer: "A",
    createdAt: "2026-05-18",
    aiAdvice: "英文閱讀先圈 however、because、so 這類訊號字，再回文章找答案。"
  }
];

export const weeklyReport: WeeklyReport = {
  studentId: "stu-001",
  weekLabel: "第 1 週",
  summaryForParent: "孩子本週已開始建立七年級全年複習節奏。國文文言文能抓到大意，英文閱讀需要加強關鍵字定位；數學與自然建議依單元逐步練習，不要一次跳太快。",
  strengths: ["能理解文言文故事大意", "願意用錯題本回頭看原因", "數學基礎題願意一步一步算"],
  weaknesses: ["文言虛字容易死背", "英文轉折字未充分利用", "自然圖表題需要先看變因"],
  reviewPlan: ["國文：每天 2 題虛字與 1 題主旨題。", "英文：每篇短文先圈人物、時間、轉折字。", "數學自然：照全年單元地圖每次複習一小節。"],
  progressDelta: 12
};

export const weeklyProgress = [
  { day: "一", chinese: 52, english: 48 },
  { day: "二", chinese: 56, english: 50 },
  { day: "三", chinese: 61, english: 55 },
  { day: "四", chinese: 64, english: 58 },
  { day: "五", chinese: 68, english: 62 },
  { day: "六", chinese: 72, english: 66 },
  { day: "日", chinese: 74, english: 69 }
];
