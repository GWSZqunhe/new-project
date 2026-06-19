export const SLIDE = { width: 1280, height: 720 };

export const COLORS = {
  bg: "#F7F1E7",
  paper: "#FFFDFC",
  ink: "#1D1D23",
  muted: "#5F6472",
  line: "#D7CEC1",
  soft: "#EFE5D7",
  accent: "#E64B2C",
  accentSoft: "#F8D7CF",
  charcoal: "#2C313C",
  success: "#1C7C54",
};

export function getFonts(lang) {
  if (lang === "zh") {
    return {
      title: "PingFang SC",
      body: "PingFang SC",
      mono: "Menlo",
    };
  }
  return {
    title: "Aptos Display",
    body: "Aptos",
    mono: "Menlo",
  };
}

export function getSourceLine(lang) {
  return lang === "zh"
    ? "来源：OpenAI Developers · Codex use case · Generate slide decks"
    : "Source: OpenAI Developers · Codex use case · Generate slide decks";
}
