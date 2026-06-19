const zhPrompt = [
  "使用幻灯片编辑与图像生成能力，按下面方式处理这份演示文稿：",
  "1. 如果有 logo.png，把它放到每页右下角。",
  "2. 在指定页面把文字移到左侧，并在右侧生成同风格插图。",
  "3. 文字保持为文字，简单图表尽量保持为原生 PowerPoint 图表。",
  "4. 新增页面时延续原有品牌风格、字体、颜色与布局规则。",
  "5. 导出逐页预览图，检查并修复布局问题后再交付。",
  "6. 在交付前运行溢出与字体替换检查，并保存可复用的生成提示词。",
].join("\n");

const enPrompt = [
  "Use slide-editing and image-generation skills to update the deck like this:",
  "1. If logo.png exists, place it in the bottom-right corner on every slide.",
  "2. On selected slides, move text left and generate right-side illustrations in one visual style.",
  "3. Preserve text as text and keep simple charts native when practical.",
  "4. For new slides, reuse the existing branding, fonts, colors, and layout rules.",
  "5. Render slide previews, review them, and fix layout issues before delivery.",
  "6. Run overflow and font-substitution checks and save reusable visual prompts.",
].join("\n");

export const decks = {
  zh: [
    {
      type: "cover",
      kicker: "Codex 学习课件",
      title: "把 OpenAI 这篇文章真正做成 PPT",
      subtitle: "基于《Generate slide decks》的学习与讲解版",
      aside: "适合自己复习，也适合拿去分享",
    },
    {
      type: "overview",
      title: "这篇文章到底在教什么",
      claim: "它教的不是“生成漂亮幻灯片”，而是一套可重复的做稿流程。",
      bullets: [
        "核心对象：直接操作 PPTX，并结合图像生成来补视觉。",
        "官方定位：难度 Easy，时间预估 30 分钟。",
        "更推荐从已有品牌模板出发，而不是每次从零开始。",
      ],
      stats: [
        ["Difficulty", "Easy"],
        ["Time horizon", "30m"],
        ["Output", "Editable deck"],
      ],
    },
    {
      type: "two-column",
      title: "什么时候最适合用这套方法",
      leftTitle: "Best for",
      leftBullets: [
        "把笔记、提纲或结构化信息变成可重复产出的演示文稿",
        "从零开始做一套新 deck",
        "根据截图、PDF 或参考稿重建或扩展现有幻灯片",
      ],
      rightTitle: "讲解重点",
      rightBullets: [
        "它更像“系统化制作”，不是一次性灵感生成",
        "对团队协作尤其有价值，因为规则可复用",
        "越清楚输入材料与版式要求，结果越稳",
      ],
    },
    {
      type: "workflow",
      title: "官方方法可以浓缩成 5 步",
      steps: [
        ["1", "先看源材料", "先检查已有 deck、截图或 PDF，再决定怎么改。"],
        ["2", "保持可编辑", "文字还是文字，简单图表还是原生图表。"],
        ["3", "统一出视觉", "先定义风格，再成组复用到多页。"],
        ["4", "逐页下指令", "每页分别说清楚：保留、重写、补图还是微调。"],
        ["5", "交付前检查", "导出预览图，查溢出、错位、字体替换。"],
      ],
    },
    {
      type: "principle",
      title: "原则 1：从源 deck 和参考资料开始",
      icon: "FolderKanban",
      claim: "先看原稿几何，再改内容，能大幅减少“猜版式”的浪费。",
      bullets: [
        "如果已经有现成 deck，先让 Codex 检查它，再动手改。",
        "如果来源是截图或 PDF，也先渲染或检查，再比较页面结构。",
        "优先匹配原始比例；只有没有明确定义时，才默认 16:9。",
      ],
      takeaway: "对学习者来说，这一步是在建立“先观察、后改写”的习惯。",
    },
    {
      type: "principle",
      title: "原则 2：让内容保持可编辑",
      icon: "SquarePen",
      claim: "能保留为原生对象的，就不要整页栅格化。",
      bullets: [
        "文字保持为文字，后续才能继续改文案和层级。",
        "柱状图、折线图、饼图、直方图等简单图表尽量保留为原生图表。",
        "复杂时间线或插图可以分开生成局部元素，再用原生线条连接。",
      ],
      takeaway: "这一步决定了你的 PPT 是“可维护文件”还是“一次性海报”。",
    },
    {
      type: "principle",
      title: "原则 3：视觉生成要有意图，逐页逻辑要明确",
      icon: "Sparkles",
      claim: "视觉风格和页面决策都要显式表达，Codex 才能稳定复用。",
      bullets: [
        "先定义视觉方向，再把同一风格复用到整套 deck。",
        "有多页相关插图时，要保存提示词或生成说明，方便以后扩展。",
        "逐页说明哪些页面保留原文、哪些重写标题、哪些只修格式。",
      ],
      takeaway: "文章强调的是“明确控制”，而不是把一切交给模型临场发挥。",
    },
    {
      type: "principle",
      title: "原则 4：交付前一定要做验证",
      icon: "ShieldCheck",
      claim: "PPT 最容易“看起来差不多”，但导出后才暴露问题。",
      bullets: [
        "先渲染成逐页预览图，快速看是否有挤压、漂移、碰撞。",
        "再检查超出画布的内容、字体替换与版式偏移。",
        "页面越密、边距越紧，这一步越不能省。",
      ],
      takeaway: "这一步决定你交出去的是半成品，还是能讲的成品。",
    },
    {
      type: "prompt",
      title: "可以直接复用的提示词骨架",
      prompt: zhPrompt,
      note: "学会这页，基本就掌握了文章的操作语言。",
    },
    {
      type: "summary",
      title: "学习这篇文章后，你要形成的动作",
      checks: [
        "先让 Codex 看源文件和参考资料，而不是立刻重画。",
        "要求保持可编辑，尤其是文字、简单图表和基本结构。",
        "把视觉风格和逐页动作写清楚，不要只给一句笼统命令。",
        "交付前导出预览并做检查，避免文本溢出和版式漂移。",
      ],
      footerNote: "下一步练习：找一份旧 PPT，让 Codex 只改 2 到 3 页，完整走一遍这套流程。",
    },
  ],
  en: [
    {
      type: "cover",
      kicker: "Codex Study Deck",
      title: "Turning One OpenAI Article into a Real PPT",
      subtitle: "A study-and-teaching version of “Generate slide decks”",
      aside: "Designed for both self-study and live explanation",
    },
    {
      type: "overview",
      title: "What this article is actually teaching",
      claim: "The goal is not “make pretty slides”; it is a repeatable slide-production workflow.",
      bullets: [
        "Core capability: manipulate PPTX files and pair them with image generation.",
        "Official framing: Difficulty Easy, time horizon 30 minutes.",
        "The preferred workflow starts from an existing branded deck when possible.",
      ],
      stats: [
        ["Difficulty", "Easy"],
        ["Time horizon", "30m"],
        ["Output", "Editable deck"],
      ],
    },
    {
      type: "two-column",
      title: "When this workflow is the right fit",
      leftTitle: "Best for",
      leftBullets: [
        "Turning notes or structured inputs into repeatable slide decks",
        "Creating a new visual presentation from scratch",
        "Rebuilding or extending decks from screenshots, PDFs, or references",
      ],
      rightTitle: "Teaching lens",
      rightBullets: [
        "This is systematic production, not one-shot inspiration",
        "It becomes more valuable when teams reuse the same rules",
        "The clearer the inputs and layout rules, the more stable the output",
      ],
    },
    {
      type: "workflow",
      title: "The article compresses into 5 practical steps",
      steps: [
        ["1", "Inspect sources first", "Check the existing deck, screenshots, or PDFs before changing layout."],
        ["2", "Keep it editable", "Text stays text; simple charts stay native charts."],
        ["3", "Set one visual direction", "Define a style once, then reuse it across slides."],
        ["4", "Give slide-specific instructions", "Say what to preserve, rewrite, illustrate, or clean up."],
        ["5", "Validate before delivery", "Render previews and check overflow, drift, and font substitution."],
      ],
    },
    {
      type: "principle",
      title: "Principle 1: Start from the source deck and references",
      icon: "FolderKanban",
      claim: "Observe the original slide geometry first, then change content.",
      bullets: [
        "If a deck already exists, ask Codex to inspect it before editing.",
        "If the source is a screenshot or PDF, inspect or render it first.",
        "Match the source aspect ratio before rebuilding layout; default to 16:9 only when needed.",
      ],
      takeaway: "For learning, this builds the habit of observation before intervention.",
    },
    {
      type: "principle",
      title: "Principle 2: Keep the deck editable",
      icon: "SquarePen",
      claim: "If an element can stay native, do not flatten the whole slide into pixels.",
      bullets: [
        "Keep text as text so copy and hierarchy remain easy to edit.",
        "Keep simple bar, line, pie, and histogram visuals native when practical.",
        "For richer timelines or illustrated diagrams, generate separate assets and connect them with native lines.",
      ],
      takeaway: "This is the difference between a maintainable deck and a disposable poster.",
    },
    {
      type: "principle",
      title: "Principle 3: Be intentional with visuals and explicit with slide logic",
      icon: "Sparkles",
      claim: "Stable automation depends on named visual rules and named slide decisions.",
      bullets: [
        "Define the visual direction first, then reuse it consistently.",
        "Save prompts or generation notes when several slides share a visual family.",
        "State slide by slide what should be preserved, rewritten, illustrated, or lightly cleaned up.",
      ],
      takeaway: "The article argues for controlled reuse, not vague prompting.",
    },
    {
      type: "principle",
      title: "Principle 4: Validate before delivery",
      icon: "ShieldCheck",
      claim: "Decks are easy to get almost right and still ship with visible defects.",
      bullets: [
        "Render slide previews to catch clipping, collisions, and drift quickly.",
        "Check overflow beyond the canvas and look for font substitution.",
        "The denser the slide, the more important this QA pass becomes.",
      ],
      takeaway: "This step turns a nearly-finished deck into a trustworthy delivery.",
    },
    {
      type: "prompt",
      title: "A reusable starter prompt",
      prompt: enPrompt,
      note: "If you understand this slide, you understand the article’s operating language.",
    },
    {
      type: "summary",
      title: "Habits to keep after reading the article",
      checks: [
        "Ask Codex to inspect source files and references before redesigning.",
        "Request editability for text, simple charts, and layout primitives.",
        "Write visual rules and slide-by-slide actions explicitly.",
        "Render previews and run checks before you call the deck done.",
      ],
      footerNote: "Next practice: take an old deck and let Codex update only 2 or 3 slides using the full workflow.",
    },
  ],
};
