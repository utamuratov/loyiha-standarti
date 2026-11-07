# Agent uchun ko'rsatmalar

Bu fayl loyiha standartini yozayotgan agent (va odam muallif) uchun ish tartibi. Standartning o'zi, doclar katalogi va TODO — [00-root.md](00-root.md) da.

Agentning vazifasi: root docdagi katalogdagi doclarni TODO tartibida birma-bir yozish. Har bir doc yangi loyihani qanday qurishni ko'rsatadi, misollar "uzedu'ni noldan qurish" ssenariysi bo'yicha beriladi (root docdagi "Misol: uzedu'ni noldan qurish" bo'limi), doc esa boshqa loyihalarda shablon sifatida ishlatiladi.

O'quvchi — yangi loyihada ishlaydigan jamoa a'zosi (PM, analitik, dizayner, dasturchi, QA, DevOps, support). U docni o'qib, o'z rolida nima qilishini va qachon ish tugaganini bilishi kerak. Shuning uchun qoidalar "kim nima qiladi" ko'rinishida yoziladi, umumiy nazariya emas.

## Kirish materiallari (foydalanuvchidan so'raladi)

- uzedu bo'yicha mavjud TZ, doclar, chat yozishmalaridan muhim qismlar.
- Ekranlar (skrinshot yoki Figma), modullar va rollar ro'yxati.
- Repozitoriy yoki texnik stack, mavjud test va deploy holati.
- Jamoa tarkibi: rollar, soni, kim nima qilgan.
- Loyihada nima yaxshi o'tgan va nima muammo bo'lgan (qisqa retro).

Reference repozitoriy (faqat o'qish uchun, o'zgartirilmaydi): `test-uzedu-user` — uzedu'ning nomzodlar test topshiradigan frontendi.

## Ish tartibi

1. Ishni boshlashdan oldin root docdagi "Ochiq savollar" bo'limidagi savollarga javob oling.
2. TODO ro'yxatidagi navbat bo'yicha bitta docni oling.
3. Misol uchun kerakli faktlarni yig'ing: root docdagi ssenariy va ochiq savollar javoblari, frontend uchun reference repozitoriy. uzedu'ning o'tmishda qanday qurilganini tahlil qilmang. Backend bo'yicha fakt yo'q — `[TO'LDIRILSIN: backend]` qo'ying.
4. Shu asosda docni quyidagi tuzilmada yozing.
5. Docni foydalanuvchiga ko'rib chiqish uchun bering; izohlar bo'yicha tuzating.
6. Root docdagi TODO belgisini yangilang va keyingi docga o'ting.

## Fayl nomlash

- Har bir doc repozitoriy ildizida, `DNN-qisqa-nom.md` ko'rinishida: masalan, `D03-loyiha-boshlangich-hujjati.md`.
- Qisqa nom — kichik harf, lotin, so'zlar `-` bilan, apostrofsiz.

## Har bir docning tuzilmasi

1. **Maqsad** — 1–2 gap: bu doc qaysi muammoni yechadi.
2. **Kim uchun va qachon** — qaysi rol, loyihaning qaysi bosqichida.
3. **Qoidalar** — qisqa, raqamlangan, tekshirsa bo'ladigan qoidalar.
4. **Shablon** — to'ldiriladigan bo'sh forma (agar doc turi talab qilsa).
5. **uzedu misoli** — shablonning "uzedu'ni noldan qurish" ssenariysi uchun to'ldirilgan varianti. Frontend misoli real repodan olinsa, manbasi (fayl yo'li) ko'rsatiladi; repo standartga mos kelmagan joyda "standart bo'yicha nima qo'shilardi" yoziladi. Imkon bo'lsa, root docdagi "Jamoadagi real og'riqlar" jadvalidan tegishli og'riqqa bog'lanadi.
6. **Checklist** — "tayyor" deyish uchun tekshiriladigan punktlar.
7. **Tez-tez uchraydigan xatolar** — 3–5 ta anti-pattern.

## Yozish qoidalari

- Til: o'zbek (lotin). Kasbiy atamalar (PR, code review, kanban, e2e) asl holicha qoladi, birinchi uchraganda qisqa izohlanadi.
- Hajm: asosiy qism 1–3 sahifa. Shablon va misol qo'shimcha bo'lishi mumkin.
- Faktlarni o'ylab topmang. uzedu bo'yicha ma'lumot yetmasa, `[TO'LDIRILSIN: ...]` deb belgilang va savolni foydalanuvchiga bering.
- Har bir qoida "nega" degan savolga javob bera olsin; asossiz byurokratiya qo'shmang.
- Doclar bir-biriga havola qiladi (masalan, D13 test strategiyasi D08 DoD'dagi minimal test talabini kengaytiradi); bir xil qoidani ikki joyda takrorlamang. Har bir mavzuning uyi bitta doc (root docdagi katalogga qarang).
- Tayyor mezoni tekshirsa bo'ladigan bo'lsin: kim tekshiradi, nimani sanaydi, qancha bo'lishi kerak.
- Har bir doc oxirida: egasi (rol), oxirgi yangilangan sana, keyingi ko'rib chiqish sanasi.
