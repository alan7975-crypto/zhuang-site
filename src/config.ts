export const SITE = {
  website: "https://zhuang-site.vercel.app/",
  author: "莊宗翰",
  profile: "https://github.com/alan7975-crypto",
  desc: "IT 系統工程 × 投資思維 × 長期主義｜記錄系統實務、決策模型與可複利的人生策略。",
  title: "小莊的系統筆記",
  ogImage: "og-image.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "zh-TW",
  timezone: "Asia/Taipei",
} as const;

console.log("CONFIG LOADED", SITE.title); // <- 放這裡就安全了
