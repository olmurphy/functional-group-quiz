export const languageOptions = {
  en: "English",
  zh: "中文",
} as const;

export type LanguageCode = keyof typeof languageOptions;

interface Translation {
  brand: string;
  signIn: string;
  chooseLanguage: string;
  settings: string;
  playQuiz: string;
  learn: string;
  averageScore: string;
  score: string;
  timer: string;
  enterAnswer: string;
  previous: string;
  next: string;
  giveUp: string;
  pauseTimer: string;
  resumeTimer: string;
  groupNames: Record<string, string>;
}

export const translations: Record<LanguageCode, Translation> = {
  en: {
    brand: "Quiz",
    signIn: "Sign In",
    chooseLanguage: "Choose language",
    settings: "Settings",
    playQuiz: "PLAY QUIZ",
    learn: "Learn",
    averageScore: "AVG SCORE",
    score: "SCORE",
    timer: "TIMER",
    enterAnswer: "Enter answer:",
    previous: "PREV",
    next: "NEXT",
    giveUp: "Give Up",
    pauseTimer: "Pause timer",
    resumeTimer: "Resume timer",
    groupNames: {},
  },
  zh: {
    brand: "测验",
    signIn: "登录",
    chooseLanguage: "选择语言",
    settings: "设置",
    playQuiz: "开始测验",
    learn: "学习",
    averageScore: "平均分",
    score: "得分",
    timer: "计时器",
    enterAnswer: "请输入答案：",
    previous: "上一个",
    next: "下一个",
    giveUp: "放弃",
    pauseTimer: "暂停计时",
    resumeTimer: "继续计时",
    groupNames: {
      amine: "胺",
      aldehyde: "醛",
      peroxide: "过氧化物",
      amide: "酰胺",
      cyclopentane: "环戊烷",
      thioether: "硫醚",
      nitrile: "腈",
      epoxide: "环氧化物",
      alkyne: "炔烃",
      thiol: "硫醇",
      ester: "酯",
      alkane: "烷烃",
      carboxylic_acid: "羧酸",
      ketone: "酮",
      alkyl_halide: "卤代烷",
      alkene: "烯烃",
      ether: "醚",
      acid_anhydride: "酸酐",
      acid_chloride: "酰氯",
      alcohol: "醇",
      arene: "芳烃",
    },
  },
};
