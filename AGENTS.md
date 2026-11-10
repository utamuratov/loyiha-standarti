# Agent uchun ko'rsatmalar

Bu fayl loyiha standartini yozayotgan agent (va odam muallif) uchun ish tartibi. Uchta joy bor:

- **Standart** — [00-root.md](00-root.md) (hayot sikli, rollar, doclar katalogi) va `DNN-....md` doclar. Unda faqat qoida, shablon va checklist; aniq loyiha faktlari yo'q.
- **Misol loyiha** — [loyihalar/test-platformasi/](loyihalar/test-platformasi/index.md): loyiha kartasi (faktlar) va har doc bo'yicha to'ldirilgan hujjat.
- **Ish rejasi** — [ish-rejasi.md](ish-rejasi.md): TODO, fazalar va yozish boshidagi kelishuvlar.

Agentning vazifasi: root docdagi katalogdagi doclarni ish rejasidagi TODO tartibida birma-bir yozish. Har bir doc yangi loyihani qanday qurishni ko'rsatadi va boshqa loyihalarda shablon sifatida ishlatiladi; uning "Test Platformasini noldan qurish" ssenariysi bo'yicha to'ldirilgan varianti misol loyihada yoziladi.

O'quvchi — yangi loyihada ishlaydigan jamoa a'zosi (PM, analitik, dizayner, dasturchi, QA, DevOps, support). U docni o'qib, o'z rolida nima qilishini va qachon ish tugaganini bilishi kerak. Shuning uchun qoidalar "kim nima qiladi" ko'rinishida yoziladi, umumiy nazariya emas.

## Kirish materiallari (foydalanuvchidan so'raladi)

- Test Platformasi bo'yicha mavjud TZ, doclar, chat yozishmalaridan muhim qismlar.
- Ekranlar (skrinshot yoki Figma), modullar va rollar ro'yxati.
- Repozitoriy yoki texnik stack, mavjud test va deploy holati.
- Jamoa tarkibi: rollar, soni, kim nima qilgan.
- Loyihada nima yaxshi o'tgan va nima muammo bo'lgan (qisqa retro).

Reference repozitoriy (faqat o'qish uchun, o'zgartirilmaydi): `test-uzedu-user` — Test Platformasining nomzodlar test topshiradigan frontendi.

## Ish tartibi

1. Ishni boshlashdan oldin ish rejasidagi "Kelishuvlar" va misol loyiha kartasini o'qing; yetishmagan javobni foydalanuvchidan so'rang.
2. Ish rejasidagi TODO navbati bo'yicha bitta docni oling.
3. Misol uchun kerakli faktlarni yig'ing: misol loyiha kartasi, frontend uchun reference repozitoriy. Test Platformasining o'tmishda qanday qurilganini tahlil qilmang. Backend bo'yicha fakt yo'q — `[TO'LDIRILSIN: backend]` qo'ying.
4. Standart docni quyidagi tuzilmada yozing; to'ldirilgan variantni misol loyihada alohida faylga yozing.
5. Docni foydalanuvchiga ko'rib chiqish uchun bering; izohlar bo'yicha tuzating.
6. Ish rejasidagi TODO belgisini, misol loyiha kartasidagi "Hujjatlar" jadvalini va [jarayon xaritasini](jarayon-xaritasi.md) yangilang, keyin keyingi docga o'ting.

## Fayl nomlash

- Har bir doc repozitoriy ildizida, `DNN-qisqa-nom.md` ko'rinishida: masalan, `D03-loyiha-boshlangich-hujjati.md`.
- Qisqa nom — kichik harf, lotin, so'zlar `-` bilan, apostrofsiz.
- Misol loyiha hujjati — `loyihalar/<loyiha>/DNN-qisqa-nom.md` (DNN — qaysi standart docning to'ldirilgan varianti): masalan, `loyihalar/test-platformasi/D03-tz.md`. Faylning boshida standart docga va loyiha kartasiga havola bo'ladi.

## Hujjat sayti (VitePress)

Doclar oddiy Markdown bo'lib qoladi va GitLab'da ham o'qiladi; sayt ularning ustidagi ko'rinish.

- Lokal ko'rish: `npm install`, keyin `npm run docs:dev` (`http://localhost:5173`). Statik build: `npm run docs:build` → `.vitepress/dist/`.
- Yangi `DNN-....md` fayli chap menyuga o'zi tushadi: guruh ID bo'yicha, sarlavha faylning birinchi `# ` qatoridan (`.vitepress/config.mts`). `loyihalar/test-platformasi/` dagi fayllar ham "Misol loyiha" guruhiga o'zi tushadi. Config'ni o'zgartirish shart emas. Menyu dev server ishga tushganda yig'iladi: yangi fayl menyuda ko'rinishi uchun `npm run docs:dev` ni qayta ishga tushiring (build'da har doim ko'rinadi).
- Boshqa docga eslatma — har doim havola: `[D08](D08-kanban-dor-dod.md)`. Hali yozilmagan doc havolasiz, faqat raqami bilan yoziladi; doc yozilgach, unga eslatmalar havolaga aylantiriladi.
- Matnda `<` va `>` bilan yozilgan joy-to'ldirgichlar (`<ism>`) faqat kod bloki yoki `` `...` `` ichida bo'ladi — aks holda sayt ularni HTML teg deb tushunadi.
- `localhost` manzillari ham `` `...` `` ichida yoziladi — oddiy matndagi manzilni sayt havolaga aylantiradi va build uni "buzilgan havola" deb to'xtatadi.
- Docni topshirishdan oldin `npm run docs:build` ishlatiladi: u buzilgan havolalarda xato beradi.
- Yangi doc yozilgach, [jarayon-xaritasi.md](jarayon-xaritasi.md) dagi jadvallarda ("Har bosqichda qaysi doc kerak", "Qaysi savolga qaysi doc") uning oddiy matnini havolaga aylantiring.
- Chiqarish: `main` ga har push'da GitHub Actions (`.github/workflows/docs.yml`) saytni build qilib, GitHub Pages'ga qo'yadi. Sayt hozir ochiq (public) — mahfiy ma'lumot (parol, kalit, shaxsiy ma'lumot) doclarga yozilmaydi.

## Har bir docning tuzilmasi

1. **Maqsad** — 1–2 gap: bu doc qaysi muammoni yechadi.
2. **Kim uchun va qachon** — qaysi rol, loyihaning qaysi bosqichida.
3. **Qoidalar** — qisqa, raqamlangan, tekshirsa bo'ladigan qoidalar.
4. **Shablon** — to'ldiriladigan bo'sh forma (agar doc turi talab qilsa).
5. **Misol** — bitta havola: misol loyihadagi to'ldirilgan variantga. Variantning o'zi `loyihalar/test-platformasi/DNN-....md` da yoziladi: shablon "Test Platformasini noldan qurish" ssenariysi uchun to'ldiriladi; frontend misoli real repodan olinsa, manbasi (fayl yo'li) ko'rsatiladi; repo standartga mos kelmagan joyda "standart bo'yicha nima qo'shilardi" yoziladi; imkon bo'lsa, root docdagi "Jamoadagi real og'riqlar" jadvalidan tegishli og'riqqa bog'lanadi. Loyiha faylidan boshqa loyiha fayliga (masalan, TZ'dagi savolga) havola loyiha ichida qoladi, standart docga emas.
6. **Checklist** — "tayyor" deyish uchun tekshiriladigan punktlar.
7. **Tez-tez uchraydigan xatolar** — 3–5 ta anti-pattern.

## Yozish qoidalari

- Til: o'zbek (lotin). Kasbiy atamalar (PR, code review, kanban, e2e) asl holicha qoladi, birinchi uchraganda qisqa izohlanadi.
- Hajm: asosiy qism 1–3 sahifa. Shablon va misol qo'shimcha bo'lishi mumkin.
- Faktlarni o'ylab topmang. Test Platformasi bo'yicha ma'lumot yetmasa, `[TO'LDIRILSIN: ...]` deb belgilang va savolni foydalanuvchiga bering.
- Qoidaga yangi raqam yoki chegara (muddat, daqiqa, foiz, soni) qo'yilsa: manbasi bo'lsa — [manbalar.md](manbalar.md) ning 1-bo'limiga qo'shing; manbasi bo'lmasa — raqam yoniga `[b.q.]` (boshlang'ich qiymat) qo'ying va [manbalar.md](manbalar.md) ning 3-bo'limidagi jadvalga yozing. Belgi faqat qiymat qoida sifatida birinchi marta yozilgan joyga qo'yiladi; docda birinchi belgi bo'lsa, sarlavha ostiga izoh qatori qo'shiladi (boshqa doclardagidek). Retroda qiymat tasdiqlansa yoki o'zgarsa, belgi va jadval yangilanadi.
- Har bir qoida "nega" degan savolga javob bera olsin; asossiz byurokratiya qo'shmang.
- Doclar bir-biriga havola qiladi (masalan, [D13](D13-test-strategiyasi.md) test strategiyasi [D08](D08-kanban-dor-dod.md) DoD'dagi minimal test talabini kengaytiradi); bir xil qoidani ikki joyda takrorlamang. Har bir mavzuning uyi bitta doc (root docdagi katalogga qarang).
- Tayyor mezoni tekshirsa bo'ladigan bo'lsin: kim tekshiradi, nimani sanaydi, qancha bo'lishi kerak.
- Har bir doc oxirida: egasi (rol), oxirgi yangilangan sana, keyingi ko'rib chiqish sanasi.
