# Ish rejasi: standartni yozish va joriy etish

Bu sahifa standartning o'zi emas — uni yozish va joriy etish rejasi hamda yozish jarayonida qabul qilingan kelishuvlar. Standart — [root doc](00-root.md), misol loyiha — [Test Platformasi](loyihalar/test-platformasi/index.md), doc yozish tartibi — [AGENTS.md](AGENTS.md).

## TODO ro'yxati

Ish 5 fazada boradi: tayyorgarlik, doclar uchta fazada, keyin joriy etish. 1-faza tugagach, u keyingi real loyihada sinab ko'riladi; 2- va 3-fazalar sinov natijasiga qarab tuzatiladi. Har bir doc yozilgach, shu yerda belgilanadi.

### 0-faza: Tayyorgarlik

- [x] Asosiy savollarga javob olish (2026-11-06) — "Kelishuvlar" bo'limi va [misol loyiha kartasi](loyihalar/test-platformasi/index.md)
- [x] Misol tanlandi: Test Platformasini noldan qurish ssenariysi; frontend misollari real repodan, backend misollari backendchilardan
- [ ] Backend dasturchilari bilan kelishish: misol loyihadagi `[TO'LDIRILSIN: backend]` qismlarini kim va qachon to'ldiradi ([ochiq joylar](loyihalar/test-platformasi/index.md#ochiq-joylar))
- [ ] Test Platformasi materiallari: frontend repozitoriyi (`test-uzedu-user`) olindi. Kerak: Figma'dagi asosiy ekranlar ([D04](D04-dizayn-brief-va-jarayon.md), [D12](D12-ui-ux-standartlari.md) misollari uchun)
- [x] Nomlash tartibi: `DNN-qisqa-nom.md` (masalan, `D03-loyiha-boshlangich-hujjati.md`), shu repozitoriy ildizida; batafsil — [AGENTS.md](AGENTS.md)
- [x] Doclarni tasdiqlash: doc egasi tayyorlaydi, jamoa bilan kelishib tasdiqlanadi

### 1-faza: Asosiy yadro — jarayon asosi va texnik standartlar

Eng ko'p so'ralgan mavzular (code review, test, deploy, UI) shu fazada. Rollar va RACI — [D01](D01-rollar-va-raci.md) (2-fazada yozildi).

- [x] [D02](D02-loyiha-hayot-sikli.md) — Loyiha hayot sikli va bosqich darvozalari (2026-11-07, izohsiz qabul qilindi; `[TO'LDIRILSIN]` lari ochiq)
- [x] [D03](D03-loyiha-boshlangich-hujjati.md) — Loyiha boshlang'ich hujjati + Test Platformasi TZ misoli (2026-11-07, izohsiz qabul qilindi; `[TO'LDIRILSIN]` lari ochiq)
- [x] [D08](D08-kanban-dor-dod.md) — Kanban qoidalari, DoR va DoD ([D06](D06-baholash-va-srok.md), [D10](D10-ozgarishlarni-boshqarish.md) yadro qoidalari bilan) (2026-11-07, izohsiz qabul qilindi)
- [x] [D11](D11-dasturchilar-qoidalari.md) — Dasturchilar qoidalari va code review (2026-11-07, izohsiz qabul qilindi; `master`/`olympiad` branchlari va protected sozlamasi ochiq)
- [x] [D13](D13-test-strategiyasi.md) — Test strategiyasi (2026-11-07, izohsiz qabul qilindi; coverage sozlamasi va CI image ochiq)
- [x] [D14](D14-release-va-deploy.md) — Release va deploy tartibi (2026-11-07, izohsiz qabul qilindi; `Dockerfile.prod`, boshqa mijozlar deploy'i, monitoring ochiq)
- [x] [D12](D12-ui-ux-standartlari.md) — UI/UX standartlari va design system (2026-11-07, izohsiz qabul qilindi; Figma havolalari va UI atamalari ochiq)
- [x] Hujjat sayti (VitePress) va GitHub Pages'ga avtomatik chiqarish (2026-11-07)
- [x] [Jarayon xaritasi](jarayon-xaritasi.md): bosqichlar, kim kimga nima topshiradi, taskning yo'li (2026-11-07)
- [x] Standart va misol loyiha ajratildi: doclarda qoida va shablon, to'ldirilgan variantlar — [misol loyihada](loyihalar/test-platformasi/index.md) (2026-11-07)
- [ ] 1-faza doclarini jamoa bilan ko'rib chiqish (30–60 daqiqalik meeting)
- [ ] Keyingi real loyihani pilot sifatida tanlash va 1-faza bo'yicha boshlash
- [ ] Pilot boshidan metrikalarni yozib borish (rejadagi va real srok, release'dan keyingi bug'lar, qayta qilingan tasklar) — keyingi loyihalar shu raqamlar bilan solishtiriladi

### 2-faza: Jarayonni to'ldirish

- [x] [D01](D01-rollar-va-raci.md) — Rollar va RACI matritsa (2026-11-07; root docdagi rollar jadvali [D01](D01-rollar-va-raci.md) ga ko'chdi; misoli — rejada)
- [x] [D05](D05-kickoff-va-doc-review.md) — Kickoff va doc review meeting (2026-11-07; katalogdagi "srok" kickoff natijasidan olib tashlandi — [D06](D06-baholash-va-srok.md) ga zid edi; umumiy meeting qoidalari [D09](D09-meetinglar-ritmi.md) ga ko'chdi; misoli — rejada)
- [x] [D06](D06-baholash-va-srok.md) — Baholash va srok belgilash (2026-11-07; baho birligi — soat, [D08](D08-kanban-dor-dod.md) shabloni moslandi; misoli — rejada)
- [x] [D04](D04-dizayn-brief-va-jarayon.md) — Dizaynerga brief va dizayn jarayoni (2026-11-09; [D12](D12-ui-ux-standartlari.md) bilan chegara: [D04](D04-dizayn-brief-va-jarayon.md) — jarayon va handoff, [D12](D12-ui-ux-standartlari.md) — nima bilan chiziladi; misoli — rejada)
- [x] [D09](D09-meetinglar-ritmi.md) — Meetinglar ritmi (2026-11-07; har qanday meetingning umumiy qoidalari shu yerda, [D05](D05-kickoff-va-doc-review.md) dan ko'chdi; misoli — rejada)

### 3-faza: To'liq sikl

- [x] [D07](D07-taqsimot-va-resurs.md) — Ishlar taqsimoti va resurs planlash (2026-11-09; kichik loyiha uchun "ixtiyoriy" emas — modullar egasi va zaxirasi majburiy qilindi, misol loyihadagi R-05 riski sabab; misoli — rejada)
- [x] [D10](D10-ozgarishlarni-boshqarish.md) — O'zgarishlarni boshqarish (2026-11-09; uch tur: aniqlashtirish, kichik va katta CR; [D08](D08-kanban-dor-dod.md) dagi yadro qoida havolaga aylandi, root katalogdagi "yadro qoidalar" bloki olib tashlandi; misoli — qisman, board faylida)
- [ ] D15 — Foydalanuvchi qo'llanmasi va o'qitish
- [ ] D16 — Support va fikr yig'ish
- [x] [D17](D17-retro-va-standartni-yangilash.md) — Retrospektiva va standartni yangilash (2026-11-09; retro chastotasi hal qilindi: har release'dan keyin va loyiha oxirida, o'rta va katta loyihada 4-darvozadan keyin ham — root doc va [D02](D02-loyiha-hayot-sikli.md) bilan moslandi; boshqa doclar yuboradigan metrikalar bitta jadvalda; misoli — rejada)

### 4-faza: Joriy etish

- [ ] Pilot loyiha bo'yicha retro ([D17](D17-retro-va-standartni-yangilash.md) asosida)
- [ ] Retro natijalari bo'yicha barcha doclarni yangilash
- [ ] Yangi xodimlar uchun 1 sahifalik qisqa yo'riqnoma (standartga kirish)
- [ ] Jarayon metrikalarini kuzatishni boshlash va keyingi ko'rib chiqish sanasini belgilash

## Kelishuvlar

Standartni yozish boshida aniqlangan javoblar (2026-11-06, Odilbek Utamuratovdan). Test Platformasining o'ziga oid faktlar (mahsulot, jamoa, vositalar, repo) — [misol loyiha kartasida](loyihalar/test-platformasi/index.md).

- **Qo'llanmaning asosiy maqsadi.** Yangi loyihani qurish uchun nima bo'lishi va qanday harakat qilish kerakligi — ayniqsa deploy, code review, test va UI standartlari. Shu sabab [D11](D11-dasturchilar-qoidalari.md)–[D14](D14-release-va-deploy.md) 1-fazaga olindi.
- **Eng ko'p og'riq bergan muammolar.** Root docdagi "Jamoadagi real og'riqlar" jadvali.
- **Misol qanday ishlatiladi.** Test Platformasi jarayon namunasi emas (kamchiliklari ko'p), lekin release qilingan real mahsulot. Misollar "Test Platformasini noldan qurish" ssenariysi bo'yicha, standartdan alohida — misol loyiha papkasida yoziladi.
- **Standart kim uchun.** Faqat ichki jamoa uchun. Loyihaning o'z hujjatlari (masalan, [D03](D03-loyiha-boshlangich-hujjati.md) bo'yicha yozilgan TZ) mijoz bilan kelishilishi mumkin, standartning o'zi ko'rsatilmaydi.
- **Doclarni kim tasdiqlaydi.** Jamoa bilan kelishib: doc egasi tayyorlaydi, 1-faza review meetingida kelishiladi. Saqlash joyi — shu repozitoriy.
- **Kichik loyiha chegarasi.** Jamoa 3–5 kishi.
- **Root docning keyingi ko'rib chiqish sanasi.** Vaziyatga qarab — har pilot loyiha retrosidan keyin ([D17](D17-retro-va-standartni-yangilash.md)).

---

Egasi: Odilbek Utamuratov · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: har doc yozilganda
