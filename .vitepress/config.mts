import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig, type DefaultTheme } from 'vitepress';

// Repozitoriy ildizi — doclar shu yerda (`DNN-qisqa-nom.md`)
const rootDir = fileURLToPath(new URL('..', import.meta.url));

// Katalog guruhlari (00-root.md, "Doclar katalogi"). Yangi doc yozilsa,
// u ID'si bo'yicha menyuga o'zi tushadi — config'ni o'zgartirish shart emas.
const groups: { text: string; from: number; to: number }[] = [
  { text: 'A. Asos', from: 1, to: 2 },
  { text: 'B. Boshlash va dizayn', from: 3, to: 6 },
  { text: 'C. Planlash va jarayon', from: 7, to: 10 },
  { text: 'D. Ishlab chiqish va sifat', from: 11, to: 14 },
  { text: 'E. Topshirish va ekspluatatsiya', from: 15, to: 17 },
];

function docItems(): { id: number; item: DefaultTheme.SidebarItem }[] {
  return readdirSync(rootDir)
    .filter((file) => /^D\d{2}-.+\.md$/.test(file))
    .sort()
    .map((file) => {
      // Sarlavha faylning birinchi `# ` qatoridan olinadi
      const heading = readFileSync(`${rootDir}/${file}`, 'utf8')
        .split(/\r?\n/)
        .find((line) => line.startsWith('# '));
      return {
        id: Number(file.slice(1, 3)),
        item: {
          text: heading ? heading.slice(2).trim() : file,
          link: `/${file.replace(/\.md$/, '')}`,
        },
      };
    });
}

function sidebar(): DefaultTheme.SidebarItem[] {
  const docs = docItems();
  const catalog = groups
    .map((group) => ({
      text: group.text,
      collapsed: false,
      items: docs.filter((d) => d.id >= group.from && d.id <= group.to).map((d) => d.item),
    }))
    // Hali hech bir doci yozilmagan guruh menyuda ko'rinmaydi
    .filter((group) => group.items.length > 0);

  return [
    {
      text: 'Boshlash',
      items: [
        { text: 'Bosh sahifa', link: '/' },
        { text: 'Root doc: standart haqida', link: '/00-root' },
      ],
    },
    ...catalog,
    {
      text: 'Mualliflar uchun',
      collapsed: true,
      items: [{ text: 'Doclarni yozish tartibi', link: '/AGENTS' }],
    },
  ];
}

export default defineConfig({
  lang: 'uz-Latn',
  title: 'Loyiha standarti',
  description: "Kompaniyada loyiha qurish standarti: bosqichlar, rollar, qoidalar va uzedu misollari",
  srcExclude: ['node_modules/**', 'README.md'],
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Root doc', link: '/00-root' },
      { text: 'Hayot sikli', link: '/D02-loyiha-hayot-sikli' },
    ],
    sidebar: sidebar(),
    outline: { level: [2, 3], label: 'Ushbu sahifada' },
    docFooter: { prev: 'Oldingi', next: 'Keyingi' },
    lastUpdated: { text: 'Oxirgi yangilangan' },
    darkModeSwitchLabel: "Ko'rinish",
    lightModeSwitchTitle: "Yorug' rejim",
    darkModeSwitchTitle: "Qorong'i rejim",
    sidebarMenuLabel: 'Menyu',
    returnToTopLabel: 'Yuqoriga',
    notFound: {
      title: 'Sahifa topilmadi',
      quote: "Bu doc hali yozilmagan bo'lishi mumkin — root docdagi TODO'ga qarang.",
      linkText: 'Bosh sahifaga',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Qidirish', buttonAriaLabel: 'Qidirish' },
          modal: {
            displayDetails: "Batafsil ko'rsatish",
            resetButtonTitle: 'Tozalash',
            backButtonTitle: 'Yopish',
            noResultsText: 'Hech narsa topilmadi',
            footer: {
              selectText: 'tanlash',
              navigateText: "o'tish",
              closeText: 'yopish',
            },
          },
        },
      },
    },
  },
});
