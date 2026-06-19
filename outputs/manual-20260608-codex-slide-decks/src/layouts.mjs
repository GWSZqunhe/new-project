import { COLORS, SLIDE, getFonts, getSourceLine } from "./theme.mjs";
import { decks } from "./content.mjs";

function addBg(slide, ctx) {
  ctx.addShape(slide, { x: 0, y: 0, width: SLIDE.width, height: SLIDE.height, fill: COLORS.bg });
  ctx.addShape(slide, {
    x: -64,
    y: -58,
    width: 190,
    height: 190,
    geometry: "ellipse",
    fill: COLORS.accentSoft,
    line: { fill: COLORS.accentSoft, width: 0 },
  });
  ctx.addShape(slide, {
    x: SLIDE.width - 152,
    y: SLIDE.height - 152,
    width: 190,
    height: 190,
    geometry: "ellipse",
    fill: "#D7D4CE",
    line: { fill: "#D7D4CE", width: 0 },
  });
}

function addHeader(slide, ctx, title, lang) {
  const fonts = getFonts(lang);
  ctx.addText(slide, {
    text: title,
    x: 72,
    y: 48,
    width: 930,
    height: 52,
    fontSize: 28,
    bold: true,
    color: COLORS.ink,
    typeface: fonts.title,
  });
  ctx.addShape(slide, {
    x: 72,
    y: 104,
    width: 180,
    height: 4,
    fill: COLORS.accent,
    line: { fill: COLORS.accent, width: 0 },
  });
}

function addFooter(slide, ctx, lang, slideNumber, total) {
  const fonts = getFonts(lang);
  ctx.addText(slide, {
    text: getSourceLine(lang),
    x: 72,
    y: 684,
    width: 860,
    height: 18,
    fontSize: 11,
    color: COLORS.muted,
    typeface: fonts.body,
  });
  ctx.addText(slide, {
    text: `${slideNumber}/${total}`,
    x: 1140,
    y: 680,
    width: 70,
    height: 22,
    fontSize: 12,
    bold: true,
    color: COLORS.charcoal,
    typeface: fonts.body,
    align: "right",
  });
}

function addBulletList(slide, ctx, items, options) {
  const fonts = getFonts(options.lang);
  items.forEach((item, index) => {
    const y = options.y + index * options.gap;
    ctx.addShape(slide, {
      x: options.x,
      y: y + 8,
      width: 10,
      height: 10,
      geometry: "ellipse",
      fill: options.dotColor || COLORS.accent,
      line: { fill: options.dotColor || COLORS.accent, width: 0 },
    });
    ctx.addText(slide, {
      text: item,
      x: options.x + 22,
      y,
      width: options.width,
      height: options.itemHeight || 48,
      fontSize: options.fontSize || 21,
      color: COLORS.ink,
      typeface: fonts.body,
    });
  });
}

function addStat(slide, ctx, x, y, label, value, lang) {
  const fonts = getFonts(lang);
  ctx.addShape(slide, {
    x,
    y,
    width: 170,
    height: 96,
    geometry: "roundRect",
    fill: COLORS.paper,
    line: { fill: COLORS.line, width: 1.5 },
    radius: 18,
  });
  ctx.addText(slide, {
    text: label,
    x: x + 18,
    y: y + 18,
    width: 134,
    height: 18,
    fontSize: 12,
    color: COLORS.muted,
    typeface: fonts.body,
  });
  ctx.addText(slide, {
    text: value,
    x: x + 18,
    y: y + 42,
    width: 134,
    height: 28,
    fontSize: 28,
    bold: true,
    color: COLORS.charcoal,
    typeface: fonts.title,
  });
}

function coverSlide(presentation, ctx, slideData, lang, slideNumber, total) {
  const slide = presentation.slides.add();
  const fonts = getFonts(lang);
  addBg(slide, ctx);
  ctx.addShape(slide, {
    x: 760,
    y: 116,
    width: 380,
    height: 380,
    geometry: "roundRect",
    fill: COLORS.paper,
    line: { fill: COLORS.line, width: 2 },
  });
  ctx.addShape(slide, {
    x: 816,
    y: 184,
    width: 120,
    height: 120,
    geometry: "hexagon",
    fill: COLORS.charcoal,
    line: { fill: COLORS.charcoal, width: 0 },
  });
  ctx.addShape(slide, {
    x: 856,
    y: 224,
    width: 40,
    height: 40,
    geometry: "cube",
    fill: COLORS.accent,
    line: { fill: COLORS.accent, width: 0 },
  });
  ctx.addShape(slide, {
    x: 970,
    y: 208,
    width: 110,
    height: 74,
    geometry: "roundRect",
    fill: COLORS.soft,
    line: { fill: COLORS.line, width: 1.2 },
  });
  ctx.addShape(slide, {
    x: 970,
    y: 304,
    width: 110,
    height: 74,
    geometry: "roundRect",
    fill: COLORS.soft,
    line: { fill: COLORS.line, width: 1.2 },
  });
  ctx.addShape(slide, {
    x: 970,
    y: 400,
    width: 110,
    height: 74,
    geometry: "roundRect",
    fill: COLORS.soft,
    line: { fill: COLORS.line, width: 1.2 },
  });
  ctx.addText(slide, {
    text: slideData.kicker,
    x: 72,
    y: 92,
    width: 260,
    height: 22,
    fontSize: 14,
    bold: true,
    color: COLORS.accent,
    typeface: fonts.body,
  });
  ctx.addText(slide, {
    text: slideData.title,
    x: 72,
    y: 126,
    width: 590,
    height: 150,
    fontSize: lang === "zh" ? 34 : 36,
    bold: true,
    color: COLORS.ink,
    typeface: fonts.title,
  });
  ctx.addText(slide, {
    text: slideData.subtitle,
    x: 72,
    y: 288,
    width: 560,
    height: 68,
    fontSize: 21,
    color: COLORS.muted,
    typeface: fonts.body,
  });
  ctx.addShape(slide, {
    x: 72,
    y: 404,
    width: 520,
    height: 94,
    geometry: "roundRect",
    fill: COLORS.paper,
    line: { fill: COLORS.line, width: 1.5 },
  });
  ctx.addText(slide, {
    text: slideData.aside,
    x: 98,
    y: 434,
    width: 470,
    height: 30,
    fontSize: 20,
    color: COLORS.charcoal,
    typeface: fonts.body,
  });
  addFooter(slide, ctx, lang, slideNumber, total);
  return slide;
}

function overviewSlide(presentation, ctx, slideData, lang, slideNumber, total) {
  const slide = presentation.slides.add();
  const fonts = getFonts(lang);
  addBg(slide, ctx);
  addHeader(slide, ctx, slideData.title, lang);
  ctx.addText(slide, {
    text: slideData.claim,
    x: 72,
    y: 144,
    width: 700,
    height: 64,
    fontSize: 28,
    bold: true,
    color: COLORS.charcoal,
    typeface: fonts.title,
  });
  addBulletList(slide, ctx, slideData.bullets, {
    x: 78,
    y: 244,
    width: 650,
    gap: 76,
    itemHeight: 54,
    lang,
  });
  slideData.stats.forEach((item, index) => addStat(slide, ctx, 870, 190 + index * 118, item[0], item[1], lang));
  addFooter(slide, ctx, lang, slideNumber, total);
  return slide;
}

function twoColumnSlide(presentation, ctx, slideData, lang, slideNumber, total) {
  const slide = presentation.slides.add();
  const fonts = getFonts(lang);
  addBg(slide, ctx);
  addHeader(slide, ctx, slideData.title, lang);
  [
    [72, slideData.leftTitle, slideData.leftBullets],
    [676, slideData.rightTitle, slideData.rightBullets],
  ].forEach(([x, title, bullets]) => {
    ctx.addShape(slide, {
      x,
      y: 152,
      width: 532,
      height: 434,
      geometry: "roundRect",
      fill: COLORS.paper,
      line: { fill: COLORS.line, width: 1.5 },
    });
    ctx.addText(slide, {
      text: title,
      x: x + 28,
      y: 180,
      width: 220,
      height: 26,
      fontSize: 18,
      bold: true,
      color: COLORS.accent,
      typeface: fonts.body,
    });
    addBulletList(slide, ctx, bullets, {
      x: x + 28,
      y: 236,
      width: 438,
      gap: 92,
      itemHeight: 66,
      fontSize: 22,
      lang,
    });
  });
  addFooter(slide, ctx, lang, slideNumber, total);
  return slide;
}

function workflowSlide(presentation, ctx, slideData, lang, slideNumber, total) {
  const slide = presentation.slides.add();
  const fonts = getFonts(lang);
  addBg(slide, ctx);
  addHeader(slide, ctx, slideData.title, lang);
  slideData.steps.forEach((step, index) => {
    const x = 68 + index * 238;
    ctx.addShape(slide, {
      x,
      y: 184,
      width: 204,
      height: 346,
      geometry: "roundRect",
      fill: index % 2 === 0 ? COLORS.paper : COLORS.soft,
      line: { fill: COLORS.line, width: 1.4 },
    });
    ctx.addText(slide, {
      text: step[0],
      x: x + 24,
      y: 212,
      width: 48,
      height: 32,
      fontSize: 30,
      bold: true,
      color: COLORS.accent,
      typeface: fonts.title,
    });
    ctx.addText(slide, {
      text: step[1],
      x: x + 24,
      y: 258,
      width: 150,
      height: 58,
      fontSize: 22,
      bold: true,
      color: COLORS.ink,
      typeface: fonts.title,
    });
    ctx.addText(slide, {
      text: step[2],
      x: x + 24,
      y: 330,
      width: 156,
      height: 118,
      fontSize: 17,
      color: COLORS.muted,
      typeface: fonts.body,
    });
    if (index < slideData.steps.length - 1) {
      ctx.addShape(slide, {
        x: x + 204,
        y: 343,
        width: 24,
        height: 8,
        fill: COLORS.accent,
        line: { fill: COLORS.accent, width: 0 },
      });
    }
  });
  addFooter(slide, ctx, lang, slideNumber, total);
  return slide;
}

async function principleSlide(presentation, ctx, slideData, lang, slideNumber, total) {
  const slide = presentation.slides.add();
  const fonts = getFonts(lang);
  addBg(slide, ctx);
  addHeader(slide, ctx, slideData.title, lang);
  ctx.addShape(slide, {
    x: 72,
    y: 154,
    width: 220,
    height: 220,
    geometry: "roundRect",
    fill: COLORS.paper,
    line: { fill: COLORS.line, width: 1.5 },
  });
  await ctx.addLucideIcon(slide, {
    icon: slideData.icon,
    x: 126,
    y: 208,
    width: 110,
    height: 110,
    color: COLORS.accent,
    strokeWidth: 1.8,
  });
  ctx.addShape(slide, {
    x: 330,
    y: 154,
    width: 878,
    height: 436,
    geometry: "roundRect",
    fill: COLORS.paper,
    line: { fill: COLORS.line, width: 1.5 },
  });
  ctx.addText(slide, {
    text: slideData.claim,
    x: 366,
    y: 186,
    width: 802,
    height: 56,
    fontSize: 27,
    bold: true,
    color: COLORS.charcoal,
    typeface: fonts.title,
  });
  addBulletList(slide, ctx, slideData.bullets, {
    x: 366,
    y: 274,
    width: 754,
    gap: 86,
    itemHeight: 56,
    fontSize: 20,
    lang,
  });
  ctx.addShape(slide, {
    x: 366,
    y: 518,
    width: 784,
    height: 46,
    geometry: "roundRect",
    fill: COLORS.soft,
    line: { fill: COLORS.soft, width: 0 },
  });
  ctx.addText(slide, {
    text: slideData.takeaway,
    x: 390,
    y: 531,
    width: 740,
    height: 22,
    fontSize: 17,
    color: COLORS.ink,
    typeface: fonts.body,
  });
  addFooter(slide, ctx, lang, slideNumber, total);
  return slide;
}

function promptSlide(presentation, ctx, slideData, lang, slideNumber, total) {
  const slide = presentation.slides.add();
  const fonts = getFonts(lang);
  addBg(slide, ctx);
  addHeader(slide, ctx, slideData.title, lang);
  ctx.addShape(slide, {
    x: 72,
    y: 152,
    width: 1136,
    height: 432,
    geometry: "roundRect",
    fill: COLORS.charcoal,
    line: { fill: COLORS.charcoal, width: 0 },
  });
  ctx.addText(slide, {
    text: slideData.prompt,
    x: 104,
    y: 184,
    width: 1070,
    height: 330,
    fontSize: lang === "zh" ? 18 : 17,
    color: "#F9F5EF",
    typeface: fonts.mono,
  });
  ctx.addText(slide, {
    text: slideData.note,
    x: 72,
    y: 616,
    width: 620,
    height: 24,
    fontSize: 18,
    color: COLORS.accent,
    bold: true,
    typeface: fonts.body,
  });
  addFooter(slide, ctx, lang, slideNumber, total);
  return slide;
}

function summarySlide(presentation, ctx, slideData, lang, slideNumber, total) {
  const slide = presentation.slides.add();
  const fonts = getFonts(lang);
  addBg(slide, ctx);
  addHeader(slide, ctx, slideData.title, lang);
  slideData.checks.forEach((item, index) => {
    const y = 170 + index * 92;
    ctx.addShape(slide, {
      x: 82,
      y,
      width: 1110,
      height: 66,
      geometry: "roundRect",
      fill: index % 2 === 0 ? COLORS.paper : COLORS.soft,
      line: { fill: COLORS.line, width: 1.2 },
    });
    ctx.addText(slide, {
      text: "0" + (index + 1),
      x: 108,
      y: y + 18,
      width: 36,
      height: 24,
      fontSize: 22,
      bold: true,
      color: COLORS.accent,
      typeface: fonts.title,
    });
    ctx.addText(slide, {
      text: item,
      x: 176,
      y: y + 16,
      width: 970,
      height: 34,
      fontSize: 21,
      color: COLORS.ink,
      typeface: fonts.body,
    });
  });
  ctx.addText(slide, {
    text: slideData.footerNote,
    x: 82,
    y: 582,
    width: 1100,
    height: 42,
    fontSize: 18,
    color: COLORS.charcoal,
    typeface: fonts.body,
  });
  addFooter(slide, ctx, lang, slideNumber, total);
  return slide;
}

export async function buildSlide(presentation, ctx, lang, index) {
  const slides = decks[lang];
  const slideData = slides[index];
  const slideNumber = index + 1;
  const total = slides.length;

  switch (slideData.type) {
    case "cover":
      return coverSlide(presentation, ctx, slideData, lang, slideNumber, total);
    case "overview":
      return overviewSlide(presentation, ctx, slideData, lang, slideNumber, total);
    case "two-column":
      return twoColumnSlide(presentation, ctx, slideData, lang, slideNumber, total);
    case "workflow":
      return workflowSlide(presentation, ctx, slideData, lang, slideNumber, total);
    case "principle":
      return principleSlide(presentation, ctx, slideData, lang, slideNumber, total);
    case "prompt":
      return promptSlide(presentation, ctx, slideData, lang, slideNumber, total);
    case "summary":
      return summarySlide(presentation, ctx, slideData, lang, slideNumber, total);
    default:
      throw new Error(`Unknown slide type: ${slideData.type}`);
  }
}
