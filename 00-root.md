# Loyiha boshqaruvi standarti — Root doc

Egasi: @Odilbek · Oxirgi yangilangan: 2026-11-06 · Keyingi ko'rib chiqish: har pilot loyiha retrosidan keyin (D17)

## Maqsad va muammo tahlili

Bu hujjat kompaniyaning loyiha qurish standartini (playbook) yaratish uchun yagona boshlang'ich nuqta. Unda qaysi doclar yozilishi, qaysi tartibda, kim uchun va qanday sifatda bo'lishi belgilangan. Doclardagi misollar bitta real loyiha — **uzedu** — asosida yoziladi: "shu tizimni bugun noldan qursak, har bosqichda nima qilardik". uzedu jarayon namunasi emas: u release qilingan va har kuni ishlatilayotgan mahsulot bo'lgani uchun maqsadli natija sifatida olinadi (batafsil — "Misol: uzedu'ni noldan qurish" bo'limida).

**Uchta tomon uchun natija:**

- **Kompaniya:** sroklar aniqroq, qayta ishlash (rework) kamroq, loyiha bir odamga bog'lanib qolmaydi.
- **Xodimlar:** kim nima qilishi va qachon ish tugagani aniq; kechki "yong'in o'chirish" va o'zaro ayblash kamayadi.
- **Mijoz va foydalanuvchilar:** kelishilgan narsa o'z vaqtida, tushunarli UI va qo'llanma bilan yetkaziladi.

**Muammo qayerda.** Muammo odatda bitta rolda (PM, analitik, dizayner yoki dasturchi) emas, bosqichlar orasidagi uzatish joylarida bo'ladi. Har bosqichning kirishi va chiqishi kelishilmagan bo'lsa, har kim o'zicha tushunadi va farq faqat oxirida chiqadi.

Asosiy alomatlar:

- Talablar og'zaki yoki tarqoq (chat, ovozli xabar) — yagona manba yo'q.
- Dizayner va dasturchi to'liq bo'lmagan doc bilan ishni boshlaydi.
- Srok ishni bajaradigan odam bilan kelishilmasdan qo'yiladi.
- Task qachon "tayyor" ekani aniqlanmagan, shuning uchun test va review keyinga qoladi.
- Talab o'rtada o'zgaradi, lekin srok va scope qayta ko'rilmaydi.
- Qarorlar yozilmaydi — keyin "kim aytgandi?" degan bahs boshlanadi.

**Yechim g'oyasi.** Shaffoflik odamlarning yaxshi niyatiga emas, jarayonga bog'lanadi: har bosqichda aniq hujjat, aniq egasi va aniq "tayyor" mezoni bo'ladi. Ish holati hammaga ochiq kanbanda ko'rinadi, qarorlar yozib boriladi, standart esa har retrodan keyin yangilanadi.

### Jamoadagi real og'riqlar va ularni yopadigan doclar

Jamoa o'z loyihalarida duch kelgan og'riqlar va standartning qaysi qismi ularni yopishi:

| Og'riq (jamoa so'zi bilan) | Sababi | Qaysi doc yopadi |
| --- | --- | --- |
| Bitta narsa qayta-qayta qilinadi | Talab va qabul mezoni ish boshlanishidan oldin yozilmagan | [D03](D03-loyiha-boshlangich-hujjati.md) (qabul mezonlari), D04 (handoff), [D08](D08-kanban-dor-dod.md) (DoR) |
| Muhokamalar cho'zilib ketadi | Agenda, oldindan o'qish va aniq chiqish yo'q | D05, D09 |
| Aytilgan narsalar esdan chiqadi | Kelishuv Telegram'da qoladi, Jira yoki docga tushmaydi | 1-tamoyil (yagona manba), [D08](D08-kanban-dor-dod.md), D09 (protokol) |
| "Nega unday qilgandik?" degan savollar | Qaror va uning sababi yozilmagan | [D02](D02-loyiha-hayot-sikli.md) (qarorlar jurnali), [D11](D11-dasturchilar-qoidalari.md) (ADR) |

Bu jadval pilotdan keyin yana tekshiriladi: og'riq kamaydimi yoki yo'qmi (D17).

## Qo'llanmani qanday o'qish kerak

Bu qo'llanma yangi loyihani boshidan to'g'ri qurish uchun: qanday harakat qilish, qanday kod yozish va review qilish, qanday test qilish, qanday deploy qilish va UI qanday bo'lishi kerakligi. Har bir doc qoidani beradi va uni uzedu'ni noldan qurish misolida ko'rsatadi. Hammasini o'qish shart emas: avval umumiy qism, keyin o'z rolingiz doclari.

**Hamma uchun (taxminan 30 daqiqa):** shu root doc → [D02](D02-loyiha-hayot-sikli.md) (hayot sikli) → D01 (rollar) → [D08](D08-kanban-dor-dod.md) (kanban, DoR, DoD).

| Rolingiz | Asosiy doclaringiz | Yangi loyihada birinchi qiladigan ishingiz |
| --- | --- | --- |
| PM | [D02](D02-loyiha-hayot-sikli.md), D05, D06, D07, D09, D10, D17 | [D02](D02-loyiha-hayot-sikli.md) bo'yicha bosqichlarni rejalashtirish, kickoff (D05) o'tkazish |
| Biznes analitik | [D03](D03-loyiha-boshlangich-hujjati.md), D10 | [D03](D03-loyiha-boshlangich-hujjati.md) shabloni bo'yicha TZ yozish |
| UI/UX dizayner | D04, [D12](D12-ui-ux-standartlari.md) | D04 brief'ini analitik bilan to'ldirish |
| Tech lead / dasturchi | [D03](D03-loyiha-boshlangich-hujjati.md) (API kontrakti), D06, [D11](D11-dasturchilar-qoidalari.md), [D12](D12-ui-ux-standartlari.md) (frontend), [D13](D13-test-strategiyasi.md), [D14](D14-release-va-deploy.md) | [D03](D03-loyiha-boshlangich-hujjati.md) ni review qilish, baholash (D06) |
| QA | [D13](D13-test-strategiyasi.md), [D08](D08-kanban-dor-dod.md) | [D03](D03-loyiha-boshlangich-hujjati.md) qabul mezonlaridan test rejasini tuzish |
| DevOps | [D14](D14-release-va-deploy.md) | Muhitlar va release checklistini tayyorlash |
| Support | D15, D16 | Qo'llanma tuzilmasini [D03](D03-loyiha-boshlangich-hujjati.md) rollari bo'yicha tuzish |

Kichik jamoada bir odam bir nechta rolni bajaradi (masalan, PM va analitik bitta odam) — unda shu rollarning hamma doclari uniki bo'ladi. Qaysi doclar majburiy ekani — "Loyiha hajmiga qarab moslashtirish" bo'limida.

## Misol: uzedu'ni noldan qurish

Barcha doclardagi misollar bitta ssenariyga bog'lanadi: **uzedu'ni bugun noldan qurayapmiz.** Natija hozirgi uzedu darajasida bo'lishi kerak; savol — unga qaysi bosqichlar, hujjatlar va qoidalar orqali, kamroq rework bilan yetiladi. uzedu'ning o'tmishda qanday qurilgani tahlil qilinmaydi.

- **Mahsulot.** Nomzodlar va o'qituvchilar test topshiradigan tizim. Oqim: nazoratchi login → JShShIR → ariza → Face ID → test → natija; alohida ommaviy test portali; proktoring (kamera, brauzerdan chalg'ish, desktop agent). Bir nechta mijozga alohida build bilan yetkaziladi.
- **Jamoa (ssenariy uchun).** 5 kishi: PM va analitik bitta odam, dizayner, 2 ta backend, 1 ta frontend. Tech lead, QA, DevOps va support ishlari shu jamoa ichida taqsimlanadi (D01 da ko'rsatiladi).
- **Vositalar.** Jira (board), Figma (dizayn), GitLab (kod va CI), Telegram (tezkor aloqa — lekin kelishuv u yerda qolmaydi).
- **Frontend misollari** real repozitoriydan (`test-uzedu-user`) olinadi: standartga mos joylari namuna sifatida, mos kelmaydigan joylari esa "standart bo'yicha nima qo'shilardi" sifatida.
- **Backend misollari.** Backend kodi bu ishda yo'q. Backend uchun qoidalar umumiy yoziladi; aniq misollar `[TO'LDIRILSIN: backend]` deb belgilanadi va backend dasturchilari to'ldiradi.

## Agent uchun ko'rsatmalar

Doclarni yozish tartibi, har bir docning tuzilmasi, fayl nomlash va yozish qoidalari — [AGENTS.md](AGENTS.md) da. Agent ishni shu fayldan boshlaydi.

**Saytda o'qish.** Doclar menyu, qidiruv va havolalar bilan hujjat sayti sifatida ochiladi: `npm install`, keyin `npm run docs:dev` (`http://localhost:5173`). Batafsil — [AGENTS.md](AGENTS.md), "Hujjat sayti".

## Hayot sikli

Loyiha 8 bosqichdan o'tadi; har bosqichning chiqishi keyingisining kirishi bo'ladi. Bosqichdan keyingisiga faqat darvoza mezoni bajarilganda o'tiladi. Batafsil kirish, chiqish va darvoza checklistlari [D02](D02-loyiha-hayot-sikli.md) docda yoziladi.

1. **Boshlash** — loyiha g'oyasi, mijoz va biznes maqsad aniqlanadi. Asosiy doclar: D01, [D03](D03-loyiha-boshlangich-hujjati.md) (Brief qismi).
2. **Talablar** — scope, user story, qabul mezonlari, API kontrakti va nofunksional talablar yoziladi; doc review o'tkaziladi. Asosiy doclar: [D03](D03-loyiha-boshlangich-hujjati.md), D05.
3. **Dizayn** — oqimlar va maketlar chiziladi, dasturchiga topshiriladi. Asosiy doclar: D04, [D12](D12-ui-ux-standartlari.md).
4. **Planlash** — ish bo'linadi, baholanadi, odamlar biriktiriladi, srok kelishiladi. Asosiy doclar: D06, D07.
5. **Ishlab chiqish** — tasklar kanban bo'yicha DoR → DoD yo'lini o'tadi. Asosiy doclar: [D08](D08-kanban-dor-dod.md), D09, D10, [D11](D11-dasturchilar-qoidalari.md), [D13](D13-test-strategiyasi.md).
6. **Release** — staging'da tekshiriladi, prod'ga chiqariladi, rollback tayyor turadi. Asosiy doc: [D14](D14-release-va-deploy.md).
7. **Topshirish** — mijoz qabul qiladi (UAT), qo'llanma va o'qitish beriladi. Asosiy doc: D15.
8. **Ekspluatatsiya** — murojaatlar va fikrlar yig'iladi, keyingi rejaga kiradi. Asosiy doc: D16.

Ishlab chiqish (5) haftalik sikl bo'lib aylanadi. O'rtada kelgan yangi talab D10 orqali qayta baholanadi va kerak bo'lsa 2-bosqichga qaytadi. D17 (retro) har bosqich oxirida va loyiha oxirida o'tkaziladi.

**Ikki xil darvoza.** [D02](D02-loyiha-hayot-sikli.md) bosqich darvozalari butun loyihaning keyingi bosqichga o'tishini tekshiradi; [D08](D08-kanban-dor-dod.md) dagi DoR va DoD esa bitta taskning board ustunlari orasida o'tishini tekshiradi.

## Rollar va mas'uliyat

Har bir qaror va hujjatning bitta egasi bo'ladi. Bitta odam bir nechta rolni bajarishi mumkin (kichik jamoada PM analitik ham bo'lishi mumkin), lekin har bir rolning mas'uliyati baribir yozilgan bo'ladi. Batafsil RACI matritsa D01 docda.

| Rol | Asosiy mas'uliyat | Qaror huquqi | Asosiy hujjatlari |
| --- | --- | --- | --- |
| Mijoz / Product owner | Biznes maqsad, ustuvorliklar, natijani qabul qilish | Scope va ustuvorlik | Tasdiqlangan [D03](D03-loyiha-boshlangich-hujjati.md), UAT akti |
| PM | Srok, resurs, risk, aloqa; jarayonni yuritish | Taqsimot, meetinglar, change request'ni rasmiylashtirish | D05, D06, D07, D09, D10 |
| Biznes analitik | Talablarni yig'ish, user story va qabul mezonlari | Talablar to'liqligi (DoR) | [D03](D03-loyiha-boshlangich-hujjati.md) |
| UI/UX dizayner | Foydalanuvchi oqimlari, maket, design system | UI yechimlari standart doirasida | D04, [D12](D12-ui-ux-standartlari.md) |
| Tech lead | Arxitektura, texnik baholash, code review sifati | Texnik yechimlar, merge | [D11](D11-dasturchilar-qoidalari.md), [D13](D13-test-strategiyasi.md), [D14](D14-release-va-deploy.md) |
| Dasturchi (FE/BE/mobile) | Taskni DoD bo'yicha bajarish, testlar, PR | Task ichidagi implementatsiya | PR, unit testlar |
| QA | Test rejasi, e2e, regressiya, bug hisoboti | Release'ga tayyorlik (QA sign-off) | [D13](D13-test-strategiyasi.md), test hisobotlari |
| DevOps | Muhitlar, CI/CD, monitoring, backup | Deploy tartibi | [D14](D14-release-va-deploy.md) |
| Support / Customer success | Qo'llanma, o'qitish, foydalanuvchi murojaatlari | Murojaatlarni toifalash | D15, D16 |

## Doclar katalogi

Standart 17 ta docdan iborat, 5 guruhga bo'lingan. Faza ustuni yozish navbatini bildiradi (TODO bo'limiga qarang).

| ID | Doc | Egasi | Bosqich | Faza |
| --- | --- | --- | --- | --- |
| D01 | Rollar va RACI matritsa | PM | Hammasi | 2 |
| [D02](D02-loyiha-hayot-sikli.md) | Loyiha hayot sikli va bosqich darvozalari | PM | Hammasi | 1 |
| [D03](D03-loyiha-boshlangich-hujjati.md) | Loyiha boshlang'ich hujjati (Brief + PRD/TZ) | Analitik | Boshlash | 1 |
| D04 | Dizaynerga brief va dizayn jarayoni | Dizayner + analitik | Dizayn | 2 |
| D05 | Kickoff va doc review meeting | PM | Boshlash | 2 |
| D06 | Baholash va srok belgilash | PM + tech lead | Planlash | 2 |
| D07 | Ishlar taqsimoti va resurs planlash | PM | Planlash | 3 |
| [D08](D08-kanban-dor-dod.md) | Kanban qoidalari, DoR va DoD | PM + tech lead | Ishlab chiqish | 1 |
| D09 | Meetinglar ritmi (daily, haftalik, demo, retro) | PM | Ishlab chiqish | 2 |
| D10 | O'zgarishlarni boshqarish (change request) | PM | Ishlab chiqish | 3 |
| [D11](D11-dasturchilar-qoidalari.md) | Dasturchilar qoidalari va code review | Tech lead | Ishlab chiqish | 1 |
| [D12](D12-ui-ux-standartlari.md) | UI/UX standartlari va design system | Dizayner | Dizayn, ishlab chiqish | 1 |
| [D13](D13-test-strategiyasi.md) | Test strategiyasi (unit, integration, e2e) | Tech lead + QA | Ishlab chiqish | 1 |
| [D14](D14-release-va-deploy.md) | Release va deploy tartibi | DevOps | Release | 1 |
| D15 | Foydalanuvchi qo'llanmasi va o'qitish | Support + analitik | Topshirish | 3 |
| D16 | Support va fikr yig'ish | Support | Ekspluatatsiya | 3 |
| D17 | Retrospektiva va standartni yangilash | PM | Har bosqich oxiri | 3 |

### A. Asos

**D01 — Rollar va RACI matritsa**

- *Maqsad:* har bir faoliyat uchun kim bajaradi (R), kim javobgar (A), kimdan maslahat olinadi (C), kim xabardor qilinadi (I) — aniq bo'lsin.
- *Mazmuni:* rollar tavsifi; RACI jadvali (talab yig'ish, dizayn, baholash, kod, review, test, deploy, qabul); kichik jamoada rollarni birlashtirish qoidasi.
- *uzedu misoli:* 5 kishilik jamoa uchun RACI; tech lead, QA, DevOps va support ishlari (code review, test, deploy, murojaatlar) kimga biriktiriladi.
- *Tayyor mezoni:* har bir qatorda aynan bitta A bor.

**[D02](D02-loyiha-hayot-sikli.md) — Loyiha hayot sikli va bosqich darvozalari**

- *Maqsad:* loyiha qaysi bosqichlardan o'tishi va keyingisiga qachon o'tish mumkinligi aniq bo'lsin.
- *Mazmuni:* bosqichlar ("Hayot sikli" bo'limiga qarang); har bosqichning kirishi, chiqishi, darvoza mezoni va kim tasdiqlashi; qarorlar jurnali (decision log) va risklar reestri shablonlari hamda ularni yuritish qoidasi. Bu ikkala jurnalning yagona uyi — [D02](D02-loyiha-hayot-sikli.md); boshqa doclar (D05, D09, D10) ularga yozadi va shu yerga havola qiladi.
- *uzedu misoli:* uzedu'ni noldan qurish rejasi — 8 bosqichning har biri uchun aniq chiqishlar va darvoza checklisti; qarorlar jurnalidan 3–5 ta namunaviy yozuv (masalan, Face ID qaysi bosqichda tekshirilishi).
- *Tayyor mezoni:* har bir darvoza tekshiriladigan checklist ko'rinishida.

### B. Boshlash va dizayn

**[D03](D03-loyiha-boshlangich-hujjati.md) — Loyiha boshlang'ich hujjati (Brief + PRD/TZ)**

- *Maqsad:* barcha rollar bir xil tushunadigan yagona manba. Eng muhim doc.
- *Mazmuni:* muammo va biznes maqsad; o'lchanadigan muvaffaqiyat mezonlari; foydalanuvchi rollari; scope (nima kiradi va nima **kirmaydi**); modullar va ekranlar ro'yxati; user story + qabul mezonlari; rollar va ruxsatlar matritsasi; integratsiyalar; **FE–BE API kontrakti talablari** (endpointlar ro'yxati, so'rov va javob formati, xato kodlari, kim kelishadi va qayerda saqlanadi); nofunksional talablar (tezlik, xavfsizlik, yuklama); **shaxsiy ma'lumotlar** (qaysi ma'lumot yig'iladi, masalan JShShIR va yuz tasviri; huquqiy asos va rozilik; kim ko'radi; qayerda va qancha saqlanadi; qachon o'chiriladi); cheklovlar va farazlar; ochiq savollar; versiyalar tarixi. Risklar [D02](D02-loyiha-hayot-sikli.md) dagi risklar reestriga yoziladi, [D03](D03-loyiha-boshlangich-hujjati.md) unga havola qiladi.
- *uzedu misoli:* uzedu uchun to'liq TZ: rollar, login → natija oqimi bo'yicha user story'lar va qabul mezonlari, shaxsiy ma'lumotlar bo'limi (JShShIR, yuz tasviri), API kontraktidan namunaviy endpoint.
- *Tayyor mezoni:* D05 doc review'da bloklovchi deb belgilangan savollar soni 0; qolgan har bir ochiq savolning egasi va muddati bor; har bir story'da qabul mezoni bor.

**D04 — Dizaynerga brief va dizayn jarayoni**

- *Maqsad:* dizayner nima, kim uchun va qanday cheklovlar bilan chizishini aniq bilsin; dasturchiga to'liq maket topshirilsin.
- *Mazmuni:* brief shabloni (maqsad, foydalanuvchi, oqimlar, ekranlar, kontent, brend, qurilmalar, design system'dan nima ishlatiladi); jarayon: wireframe → review → UI → review → handoff; Figma qoidalari (nomlash, komponentlar, holatlar); handoff checklist.
- *uzedu misoli:* Face ID tekshiruvi va test yechish ekranlari uchun to'ldirilgan brief.
- *Tayyor mezoni:* har bir ekranning barcha holatlari (bo'sh, yuklanmoqda, xato, ruxsat yo'q) chizilgan.

**D05 — Kickoff va doc review meeting**

- *Maqsad:* ish boshlanishidan oldin hamma [D03](D03-loyiha-boshlangich-hujjati.md)'ni o'qib chiqqan, muammoli joylar va srok kelishilgan bo'lsin.
- *Mazmuni:* qatnashchilar; oldindan o'qish talabi (24 soat oldin); agenda; savollar va qarshi fikrlarni yig'ish usuli, savolni "bloklovchi" deb belgilash qoidasi; chiqish: tasdiqlangan scope, srok, risklar reestri va qarorlar jurnaliga birinchi yozuvlar (shablonlari [D02](D02-loyiha-hayot-sikli.md) da); protokol shabloni.
- *uzedu misoli:* uzedu uchun kickoff protokoli namunasi.
- *Tayyor mezoni:* meetingdan keyin har bir ochiq savolning egasi va muddati bor.

**D06 — Baholash va srok belgilash**

- *Maqsad:* srok ishni bajaradigan odamlar bilan birga, asosli belgilansin.
- *Mazmuni:* taskni bo'lish (1–3 kunlik bo'laklar); baholash usuli (soat yoki story point, uch nuqtali baho); risk buferi; srokni mijozga qanday aytish; srok surilsa nima qilinadi.
- *uzedu misoli:* uzedu modullarini (login, ariza, Face ID, test yechish, natija) 1–3 kunlik tasklarga bo'lish va uch nuqtali baholash.
- *Tayyor mezoni:* har bir baho bajaruvchi tomonidan tasdiqlangan.
- *Pilotda:* to'liq doc 2-fazada; asosiy qoidasi ("srok bajaruvchi bahosisiz qo'yilmaydi") 1-fazada [D08](D08-kanban-dor-dod.md) ichida.

### C. Planlash va jarayon

**D07 — Ishlar taqsimoti va resurs planlash**

- *Maqsad:* deadline va ko'nikmalarga qarab mos odam biriktirilsin, hech kim ortiqcha yuklanmasin.
- *Mazmuni:* ko'nikmalar matritsasi (kim nimani biladi, qay darajada); yuklama jadvali (bir odamga bir vaqtda nechta loyiha); "bus factor" — har bir modulni kamida 2 kishi bilishi; yangi xodimni ulash tartibi.
- *uzedu misoli:* uzedu modullari bo'yicha taqsimot jadvali.
- *Tayyor mezoni:* har bir modulning asosiy va zaxira bajaruvchisi bor.

**[D08](D08-kanban-dor-dod.md) — Kanban qoidalari, DoR va DoD**

- *Maqsad:* ish holati hammaga so'ramasdan ko'rinsin, "tayyor" so'zi hamma uchun bir xil ma'noda bo'lsin.
- *Mazmuni:* ustunlar (Backlog → Ready → In progress → Code review → Testing → Done); WIP limitlari; task shabloni (sarlavha, tavsif, qabul mezoni, maket havolasi, baho, bajaruvchi); Definition of Ready; Definition of Done; bug shabloni; prioritet va labellar; bloklangan task bilan ishlash.
- *Pilot uchun yadro qoidalar (to'liq doclar chiqquncha shu yerda turadi):*
  - DoR: taskning bahosini bajaruvchining o'zi bergan (D06 yadrosi).
  - Talab o'rtada o'zgarsa, task "change request" labeli bilan Backlog'ga qaytadi; PM srok va scope'ga ta'sirini yozadi va [D03](D03-loyiha-boshlangich-hujjati.md) versiyasi yangilanadi; shundan keyingina ishga olinadi (D10 yadrosi).
  - DoD minimal test talabi: biznes logikaga unit test yozilgan; mavjud avtomatik tekshiruvlar (CI yoki git hook) yashil; qizil test bilan merge qilinmaydi. [D13](D13-test-strategiyasi.md) bu talabni kengaytiradi, takrorlamaydi.
- *uzedu misoli:* uzedu'ning 5–10 ta taski to'g'ri formatda (masalan, "Test taymeri" taski DoR va DoD bilan), Jira'dagi board ko'rinishi.
- *Tayyor mezoni:* yangi xodim board'ga qarab har bir taskning holatini tushuntira oladi.

**D09 — Meetinglar ritmi**

- *Maqsad:* meetinglar kam, qisqa va natijali bo'lsin; har birining aniq chiqishi bo'lsin.
- *Mazmuni:* daily (15 daqiqa yoki yozma); haftalik sync (progress, risk, srok holati); demo (mijozga ishlaydigan natijani ko'rsatish); retro; har biri uchun: kim qatnashadi, davomiyligi, agenda, protokol shabloni.
- *uzedu misoli:* uzedu uchun haftalik sync protokoli namunasi.
- *Tayyor mezoni:* har bir meetingdan keyin yozma xulosa va vazifalar egasi bilan qoladi.

**D10 — O'zgarishlarni boshqarish (change request)**

- *Maqsad:* yangi talab yoki o'zgarish srok va scope'ni nazoratsiz buzmasin.
- *Mazmuni:* change request shabloni (nima, nega, ta'siri, baho); kim tasdiqlaydi; srok va narxga ta'sirini mijoz bilan kelishish; "kichik" o'zgarish chegarasi; [D03](D03-loyiha-boshlangich-hujjati.md) versiyasini yangilash.
- *uzedu misoli:* ishlab chiqish o'rtasida yangi mijoz (alohida build) qo'shilishi — change request sifatida rasmiylashtirish.
- *Tayyor mezoni:* hech bir o'zgarish [D03](D03-loyiha-boshlangich-hujjati.md) va boardda aks etmasdan ishga olinmaydi.
- *Pilotda:* to'liq doc 3-fazada; asosiy qoidasi 1-fazada [D08](D08-kanban-dor-dod.md) ichida.

### D. Ishlab chiqish va sifat

**[D11](D11-dasturchilar-qoidalari.md) — Dasturchilar qoidalari va code review**

- *Maqsad:* kod bir xil uslubda, tekshirilgan va xavfsiz holda asosiy branchga tushsin.
- *Mazmuni:* git flow va branch nomlash; commit xabarlari formati; PR shabloni va hajmi (kichik PR); code review checklist (logika, nomlash, xatoliklar, xavfsizlik, testlar, performance); review muddati (masalan, 1 ish kuni ichida); merge sharti — [D08](D08-kanban-dor-dod.md) DoD; **FE–BE API kontrakti jarayoni** (kontrakt kod yozishdan oldin kelishiladi, o'zgarishi versiyalanadi va ikkala tomonga e'lon qilinadi, frontend mock'lari kontraktdan olinadi); linter va formatter; texnik qarzni qayd etish; maxfiy ma'lumotlar (kalit, parol) bilan ishlash; ADR (arxitektura qarorlari) shabloni.
- *uzedu misoli:* frontend — namunaviy PR checklist bo'yicha; real repodagi amaliyotlar (`CLAUDE.md` ish qoidalari, pre-push hook) standart bilan solishtiriladi. Backend — `[TO'LDIRILSIN: backend]`.
- *Tayyor mezoni:* checklist qoidalari CI va PR shablonida avtomatlashtirilgan joylar belgilangan.

**[D12](D12-ui-ux-standartlari.md) — UI/UX standartlari va design system**

- *Maqsad:* barcha loyihalarda interfeys bir xil, tushunarli va qulay bo'lsin.
- *Mazmuni:* asosiy tamoyillar (izchillik, aniq xato xabarlari, tasdiqlash, qaytarish imkoni); komponentlar standarti — **jadval** (qidiruv, filtr, saralash, pagination, ustunlarni sozlash, eksport, ommaviy amallar, bo'sh/yuklanmoqda/xato holatlari), forma (validatsiya, majburiy maydonlar, saqlash), modal, bildirishnomalar; adaptivlik; accessibility asoslari; matn va terminologiya lug'ati; o'rganish uchun manbalar (Material Design, Apple HIG, Nielsen'ning 10 evristikasi).
- *uzedu misoli:* ariza formasi va test yechish ekrani standart bo'yicha qanday chiziladi va qaysi PrimeNG komponentlari ishlatiladi.
- *Tayyor mezoni:* dizayner va frontend bir xil komponent ro'yxatidan foydalanadi.

**[D13](D13-test-strategiyasi.md) — Test strategiyasi**

- *Maqsad:* testlar ish davomida yozilsin, release oldidan qo'lda tekshiruvga bog'liqlik kamaysin.
- *Mazmuni:* test piramidasi; unit testlar — biznes logika uchun majburiy; integration — API va DB; e2e — asosiy foydalanuvchi oqimlari (login, asosiy CRUD, to'lov va h.k.); qachon yozilishi (task DoD'ning bir qismi); minimal qamrov maqsadi; test ma'lumotlari; CI'da avtomatik ishga tushirish; QA qo'lda test rejasi va regressiya; bug hayot sikli.
- *uzedu misoli:* 5 ta eng muhim oqim uchun e2e ssenariylar; frontend'dagi real Cypress testlari (backend mock bilan) namuna sifatida. Backend integration testlari — `[TO'LDIRILSIN: backend]`.
- *Tayyor mezoni:* [D08](D08-kanban-dor-dod.md) DoD'dagi "qizil test bilan merge yo'q" qoidasi avtomatik tekshiriladi (CI yoki chetlab o'tib bo'lmaydigan tekshiruv); 5 ta eng muhim oqim e2e bilan qoplangan.

**[D14](D14-release-va-deploy.md) — Release va deploy tartibi**

- *Maqsad:* release oldindan aytiladigan, xavfsiz va orqaga qaytarsa bo'ladigan bo'lsin.
- *Mazmuni:* muhitlar (dev, staging, prod); versiyalash; release checklist; release notes shabloni; rollback rejasi; DB migratsiyalari; monitoring va loglar; backup; release vaqti va kimni xabardor qilish; **shaxsiy ma'lumotlarni himoyalash** (prod ma'lumoti dev/staging'ga faqat anonimlashtirilib o'tadi; loglarda JShShIR va yuz tasvirlari yozilmaydi; prod'ga kirish huquqi kimda; maxfiy kalitlar CI o'zgaruvchilarida). Talablarning o'zi [D03](D03-loyiha-boshlangich-hujjati.md) da.
- *uzedu misoli:* dev → staging → prod tartibi va bir nechta mijozga alohida build; real `.gitlab-ci.yml` olinib, standart bo'yicha nima qo'shilishi ko'rsatiladi (CI'da test bosqichi, rollback, release notes). Backend deploy va DB migratsiyalari — `[TO'LDIRILSIN: backend]`.
- *Tayyor mezoni:* rollback kamida bir marta staging'da sinab ko'rilgan.

### E. Topshirish va ekspluatatsiya

**D15 — Foydalanuvchi qo'llanmasi va o'qitish**

- *Maqsad:* foydalanuvchi tizimni yordamsiz ishlata olsin, support'ga savollar kamaysin.
- *Mazmuni:* qo'llanma tuzilmasi (rol bo'yicha, vazifa bo'yicha "qanday qilish kerak"); skrinshot va qisqa videolar; tizim ichidagi onboarding turlari va maslahatlar; FAQ; o'qitish sessiyasi rejasi; qo'llanmani release bilan birga yangilash qoidasi.
- *uzedu misoli:* nomzod roli uchun qo'llanma bo'limi (kirishdan natijagacha).
- *Tayyor mezoni:* support vakili tizimni oldin ko'rmagan kamida 3 kishi bilan sinov o'tkazadi; har biri o'z rolining asosiy vazifasini faqat qo'llanma bilan, yordamsiz bajaradi; natija qisqa hisobotda qayd etiladi.

**D16 — Support va fikr yig'ish**

- *Maqsad:* murojaatlar yo'qolmasin, kritik muammolar tez hal qilinsin, foydalanuvchi fikri keyingi rejaga kirsin.
- *Mazmuni:* murojaat kanallari; toifalash (bug, savol, taklif); jiddiylik darajalari va javob vaqti (SLA); bug'ni boardga o'tkazish; fikrlarni yig'ish va tahlil qilish; mijozga hisobot.
- *uzedu misoli:* namunaviy murojaatlarni toifalash (masalan, "test paytida kamera ishlamadi", "natija ko'rinmayapti").
- *Tayyor mezoni:* har bir murojaatning holati va egasi kuzatiladi.

**D17 — Retrospektiva va standartni yangilash**

- *Maqsad:* jamoa tajribadan o'rgansin, bu standart esa tirik qolsin.
- *Mazmuni:* retro formati (nima yaxshi, nima yomon, nimani o'zgartiramiz); qachon o'tkaziladi; harakatlar ro'yxati va egasi; standartga o'zgartirish kiritish tartibi; jarayon metrikalari (srok aniqligi, lead time, release'dan keyingi bug'lar soni, rework ulushi).
- *uzedu misoli:* uzedu'ni qurish loyihasining release'dan keyingi retrosi namunasi.
- *Tayyor mezoni:* har bir retro kamida bitta aniq o'zgarish bilan tugaydi.

## Loyiha hajmiga qarab moslashtirish

Kichik loyihada 17 ta docning hammasini to'liq yuritish byurokratiya bo'ladi. Beshta yadro doc har doim majburiy, qolganlari hajmga qarab qisqartiriladi. Kichik loyiha — jamoasi 3–5 kishi bo'lgan loyiha. uzedu (5 kishi) ham shu toifaga kiradi, shuning uchun uzedu misollari ko'pincha qisqa shaklni ko'rsatadi; to'liq shakl kerak bo'lgan joyda bu alohida aytiladi.

| Doc | Kichik loyiha | O'rta va katta loyiha |
| --- | --- | --- |
| D01, [D02](D02-loyiha-hayot-sikli.md), [D03](D03-loyiha-boshlangich-hujjati.md), [D08](D08-kanban-dor-dod.md), [D11](D11-dasturchilar-qoidalari.md) | Majburiy | Majburiy |
| D04 Dizayn brief | [D03](D03-loyiha-boshlangich-hujjati.md) ichida ekranlar ro'yxati va maket havolasi | To'liq |
| D05 Kickoff | 30 daqiqalik doc review | To'liq |
| D06 Baholash | [D08](D08-kanban-dor-dod.md) dagi yadro qoida yetarli | To'liq |
| D07 Resurs planlash | Ixtiyoriy | To'liq |
| D09 Meetinglar | Yozma daily va demo | To'liq |
| D10 Change request | [D08](D08-kanban-dor-dod.md) dagi yadro qoida yetarli | To'liq |
| [D12](D12-ui-ux-standartlari.md) UI/UX | Kompaniyaning mavjud design system'i ishlatiladi | To'liq |
| [D13](D13-test-strategiyasi.md) Test | [D08](D08-kanban-dor-dod.md) DoD'dagi minimal talab | To'liq |
| [D14](D14-release-va-deploy.md) Release | Release checklist va rollback rejasi | To'liq |
| D15 Qo'llanma | FAQ | To'liq |
| D16 Support | Murojaat kanali va javob vaqti | To'liq |
| D17 Retro | Loyiha oxirida bitta retro | Har bosqich oxirida |

## TODO ro'yxati

Ish 5 fazada boradi: tayyorgarlik, doclar uchta fazada, keyin joriy etish. 1-faza tugagach, u keyingi real loyihada sinab ko'riladi; 2- va 3-fazalar sinov natijasiga qarab tuzatiladi. Har bir doc yozilgach, shu yerda belgilanadi.

### 0-faza: Tayyorgarlik

- [x] "Ochiq savollar" bo'limidagi asosiy savollarga javob olish (2026-11-06)
- [x] Misol tanlandi: uzedu'ni noldan qurish ssenariysi; frontend misollari real repodan, backend misollari backendchilardan
- [ ] Backend dasturchilari bilan kelishish: [D11](D11-dasturchilar-qoidalari.md), [D13](D13-test-strategiyasi.md), [D14](D14-release-va-deploy.md) dagi `[TO'LDIRILSIN: backend]` qismlarini kim va qachon to'ldiradi
- [ ] uzedu materiallari: frontend repozitoriyi (`test-uzedu-user`) olindi. Kerak: Figma'dagi asosiy ekranlar (D04, [D12](D12-ui-ux-standartlari.md) misollari uchun)
- [x] Nomlash tartibi: `DNN-qisqa-nom.md` (masalan, `D03-loyiha-boshlangich-hujjati.md`), shu repozitoriy ildizida; batafsil — [AGENTS.md](AGENTS.md)
- [x] Doclarni tasdiqlash: doc egasi tayyorlaydi, jamoa bilan kelishib tasdiqlanadi

### 1-faza: Asosiy yadro — jarayon asosi va texnik standartlar

Eng ko'p so'ralgan mavzular (code review, test, deploy, UI) shu fazada. Rollar uchun pilotda root docdagi "Rollar va mas'uliyat" jadvali ishlatiladi; to'liq RACI (D01) 2-fazada.

- [x] [D02](D02-loyiha-hayot-sikli.md) — Loyiha hayot sikli va bosqich darvozalari — [D02-loyiha-hayot-sikli.md](D02-loyiha-hayot-sikli.md) (2026-11-07, izohsiz qabul qilindi; `[TO'LDIRILSIN]` lari ochiq)
- [x] [D03](D03-loyiha-boshlangich-hujjati.md) — Loyiha boshlang'ich hujjati + uzedu TZ misoli — [D03-loyiha-boshlangich-hujjati.md](D03-loyiha-boshlangich-hujjati.md) (2026-11-07, izohsiz qabul qilindi; `[TO'LDIRILSIN]` lari ochiq)
- [x] [D08](D08-kanban-dor-dod.md) — Kanban qoidalari, DoR va DoD (D06, D10 yadro qoidalari bilan) — [D08-kanban-dor-dod.md](D08-kanban-dor-dod.md) (2026-11-07, izohsiz qabul qilindi)
- [x] [D11](D11-dasturchilar-qoidalari.md) — Dasturchilar qoidalari va code review — [D11-dasturchilar-qoidalari.md](D11-dasturchilar-qoidalari.md) (2026-11-07, izohsiz qabul qilindi; `master`/`olympiad` branchlari va protected sozlamasi ochiq)
- [x] [D13](D13-test-strategiyasi.md) — Test strategiyasi — [D13-test-strategiyasi.md](D13-test-strategiyasi.md) (2026-11-07, izohsiz qabul qilindi; coverage sozlamasi va CI image ochiq)
- [x] [D14](D14-release-va-deploy.md) — Release va deploy tartibi — [D14-release-va-deploy.md](D14-release-va-deploy.md) (2026-11-07, izohsiz qabul qilindi; `Dockerfile.prod`, boshqa mijozlar deploy'i, monitoring ochiq)
- [x] [D12](D12-ui-ux-standartlari.md) — UI/UX standartlari va design system — [D12-ui-ux-standartlari.md](D12-ui-ux-standartlari.md) (2026-11-07, izohsiz qabul qilindi; Figma havolalari va UI atamalari ochiq)
- [ ] 1-faza doclarini jamoa bilan ko'rib chiqish (30–60 daqiqalik meeting)
- [ ] Keyingi real loyihani pilot sifatida tanlash va 1-faza bo'yicha boshlash
- [ ] Pilot boshidan metrikalarni yozib borish (rejadagi va real srok, release'dan keyingi bug'lar, qayta qilingan tasklar) — keyingi loyihalar shu raqamlar bilan solishtiriladi

### 2-faza: Jarayonni to'ldirish

- [ ] D01 — Rollar va RACI matritsa
- [ ] D05 — Kickoff va doc review meeting
- [ ] D06 — Baholash va srok belgilash
- [ ] D04 — Dizaynerga brief va dizayn jarayoni
- [ ] D09 — Meetinglar ritmi

### 3-faza: To'liq sikl

- [ ] D07 — Ishlar taqsimoti va resurs planlash
- [ ] D10 — O'zgarishlarni boshqarish
- [ ] D15 — Foydalanuvchi qo'llanmasi va o'qitish
- [ ] D16 — Support va fikr yig'ish
- [ ] D17 — Retrospektiva va standartni yangilash

### 4-faza: Joriy etish

- [ ] Pilot loyiha bo'yicha retro (D17 asosida)
- [ ] Retro natijalari bo'yicha barcha doclarni yangilash
- [ ] Yangi xodimlar uchun 1 sahifalik qisqa yo'riqnoma (standartga kirish)
- [ ] Jarayon metrikalarini kuzatishni boshlash va keyingi ko'rib chiqish sanasini belgilash

## Umumiy tamoyillar

Barcha doclar va jarayonlar shu tamoyillarga tayanadi. Agar biror qoida ularga zid bo'lsa, qoida qayta ko'riladi.

1. **Yagona manba.** Har bir mavzu bo'yicha haqiqat bitta joyda yoziladi. Chatdagi kelishuv docga yoki boardga tushmaguncha kelishuv hisoblanmaydi.
2. **Shaffoflik jarayonda, odamda emas.** Holat boardda, qarorlar jurnalda, risklar reestrda ko'rinadi. Hech kim "ish qayerda?" deb so'rashga majbur bo'lmasligi kerak.
3. **Har bir narsaning bitta egasi bor.** Hujjat, task, qaror va riskning egasi bo'ladi.
4. **Kirish va chiqish aniq.** Har bosqich keyingisiga aniq, tekshirsa bo'ladigan natija topshiradi (DoR, DoD, darvozalar).
5. **Srokni bajaruvchi bilan kelishish.** Baholamagan odamga srok qo'yilmaydi.
6. **O'zgarish bepul emas.** Har bir yangi talab srok va scope'ga ta'siri bilan birga ko'riladi.
7. **Sifat ish davomida.** Code review va testlar taskning bir qismi, "keyin qilamiz" emas.
8. **Yengil qoidalar.** Doc qisqa, misolli va amaliy bo'ladi. O'qilmaydigan qoida — qoida emas.
9. **Tirik standart.** Har bir retro natijasi standartga qaytadi. Har bir docning keyingi ko'rib chiqish sanasi bor.
10. **Ayblash emas, tizimni tuzatish.** Xato bo'lsa, "kim aybdor" emas, "qaysi qoida yoki darvoza ishlamadi" deb so'raladi.

**Muvaffaqiyatni o'lchash (pilotdan keyin kuzatiladi):**

- Srok aniqligi: rejadagi va real muddat farqi.
- Rework ulushi: talab tushunmovchiligi sabab qayta qilingan ishlar.
- Release'dan keyingi bug'lar soni.
- Task "In progress"dan "Done"gacha o'rtacha vaqti (lead time).
- Jamoaning jarayondan qoniqishi (retroda qisqa so'rovnoma).

## Ochiq savollar

Agent ishni boshlashdan oldin foydalanuvchidan shularni aniqlaydi. Frontend repozitoriyidan (`test-uzedu-user`) topilgan javoblar manbasi bilan yozilgan; "foydalanuvchi" deb belgilanganlari 2026-11-06 da @Odilbek'dan olingan.

- [x] **uzedu nima: maqsadi, foydalanuvchilari, asosiy modullari, mijoz kim?**
  - *Topildi (`README.md`, `CLAUDE.md`):* Maktabgacha va maktab ta'limi vazirligi tizimida nomzodlar va o'qituvchilar test topshiradigan ilova. Frontend oqimi: nazoratchi login → JShShIR → ariza → Face ID → test → natija; alohida ommaviy test portali. Proktoring: veb-kamera orqali yuzni tanish, brauzerdan chalg'ishni aniqlash, desktop agent (EXE), SignalR.
  - *Foydalanuvchi:* build konfiguratsiyalari (argos, uzinfocom, olymp, control, ssv) — alohida mijozlar. Bitta mahsulot bir nechta mijozga yetkaziladi.
- [x] uzedu hozir qaysi holatda? *Foydalanuvchi:* release bo'lgan, ekspluatatsiyada — foydalanuvchilar har kuni ishlatadi.
- [x] Jamoa tarkibi. *Foydalanuvchi:* 5 kishi — PM va analitik bitta odam, dizayner, 2 ta backend, 1 ta frontend. Alohida tech lead, QA, DevOps va support roli yo'q. Ssenariyda bu rollarning ishi jamoa ichida taqsimlanadi (D01).
- [x] Vositalar. *Foydalanuvchi:* board — Jira, dizayn — Figma, muhokamalar — Telegram. *Topildi (`.gitlab-ci.yml`):* kod GitLab'da (`git.uzinfocom.uz`).
- [x] **Texnik stack va repozitoriy (frontend):**
  - *Stack (`package.json`, `CLAUDE.md`):* Angular 21 (standalone, signals, zoneless), PrimeNG 21, Tailwind v4, Transloco (tarjimalar backend'dan), SignalR, face-api.js.
  - *Testlar (`cypress/e2e/`, `docs/unit-testing.md`):* unit — Vitest; e2e — Cypress, backend to'liq mock, 11 ta spec faylda 171 ta test (`docs/e2e-testing.md`, 2-bo'lim). `docs/e2e-testing.md` 9-bo'limida e2e branch hali `main` ga qo'shilmagan deyilgan, lekin `main` tarixida e2e commitlari bor (`git log`) — hujjat eskirgan.
  - *CI/CD (`.gitlab-ci.yml`):* GitLab CI. `dev` push → staging build → Harbor image → GitOps orqali avtomatik deploy. `main` push → production build → image → prod'ga deploy qo'lda (`when: manual`). CI'da test bosqichi yo'q.
  - *Hook'lar (`.husky/pre-push`, `docs/e2e-testing.md` 2-bo'lim F):* har push'da type-check va unit testlar, `main` push'ida qo'shimcha e2e (~6 daqiqa). Hook lokal, `--no-verify` yoki `SKIP_E2E=1` bilan chetlab o'tiladi. [D08](D08-kanban-dor-dod.md) DoD'dagi "qizil test bilan merge yo'q" qoidasi uchun bu muhim cheklov.
  - *Branch tartibi (`.gitlab-ci.yml`, `docs/e2e-testing.md`):* `dev` → staging, `main` → prod; ikkita remote (`origin` va `uzinfocom`). `docs/e2e-testing.md` Jenkins publish'ini ham tilga oladi — [TO'LDIRILSIN: Jenkins hozir ishlatiladimi].
  - *Foydalanuvchi:* backend alohida repozitoriyda, bu ishda unga kirish yo'q. Backend misollarini backend dasturchilari to'ldiradi.
- [x] Hozirgi jarayon va doclar. *Foydalanuvchi:* belgilangan jarayon ham, TZ ham yo'q. *Topildi:* faqat frontend repozitoriyida `CLAUDE.md` ish qoidalari va `docs/` texnik hujjatlari bor (arxitektura, test oqimi, proktoring, Face ID, tarjimalar, unit va e2e testlar).
- [x] Eng ko'p og'riq bergan muammolar. *Foydalanuvchi:* qarang — "Jamoadagi real og'riqlar" bo'limi.
- [x] Misol qanday ishlatiladi? *Foydalanuvchi:* uzedu jarayon namunasi emas (kamchiliklari ko'p), lekin release qilingan real mahsulot. Misollar "uzedu'ni noldan qurish" ssenariysi bo'yicha yoziladi.
- [x] Qo'llanmaning asosiy maqsadi. *Foydalanuvchi:* yangi loyihani qurish uchun nima bo'lishi va qanday harakat qilish kerakligi — ayniqsa deploy, code review, test va UI standartlari. Shu sabab [D11](D11-dasturchilar-qoidalari.md)–[D14](D14-release-va-deploy.md) 1-fazaga olindi.
- [x] Standart kim uchun? *Foydalanuvchi:* faqat ichki jamoa uchun. Loyihaning o'z hujjatlari (masalan, [D03](D03-loyiha-boshlangich-hujjati.md) bo'yicha yozilgan TZ) mijoz bilan kelishilishi mumkin, standartning o'zi ko'rsatilmaydi.
- [x] Doclarni kim tasdiqlaydi? *Foydalanuvchi:* jamoa bilan kelishib tasdiqlanadi — doc egasi tayyorlaydi, 1-faza review meetingida kelishiladi. Saqlash joyi — shu repozitoriy.
- [x] Kichik loyiha chegarasi. *Foydalanuvchi:* jamoa 3–5 kishi.
- [x] Root docning keyingi ko'rib chiqish sanasi. *Foydalanuvchi:* vaziyatga qarab — har pilot loyiha retrosidan keyin (D17).
