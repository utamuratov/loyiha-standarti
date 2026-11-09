# Loyiha boshqaruvi standarti — Root doc

Egasi: Odilbek Utamuratov · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: har pilot loyiha retrosidan keyin (D17)

## Maqsad va muammo tahlili

Bu hujjat kompaniyaning loyiha qurish standartini (playbook) yaratish uchun yagona boshlang'ich nuqta. Unda loyiha qaysi bosqichlardan o'tishi, kim nima qilishi va qaysi doclar qanday sifatda bo'lishi belgilangan. Qoidalar bitta real loyiha — **Test Platformasi** — misolida alohida ko'rsatilgan ("Misol loyiha" bo'limiga qarang).

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
| Bitta narsa qayta-qayta qilinadi | Talab va qabul mezoni ish boshlanishidan oldin yozilmagan | [D03](D03-loyiha-boshlangich-hujjati.md) (qabul mezonlari), [D04](D04-dizayn-brief-va-jarayon.md) (handoff), [D08](D08-kanban-dor-dod.md) (DoR) |
| Muhokamalar cho'zilib ketadi | Agenda, oldindan o'qish va aniq chiqish yo'q | [D05](D05-kickoff-va-doc-review.md), [D09](D09-meetinglar-ritmi.md) |
| Aytilgan narsalar esdan chiqadi | Kelishuv Telegram'da qoladi, Jira yoki docga tushmaydi | 1-tamoyil (yagona manba), [D08](D08-kanban-dor-dod.md), [D09](D09-meetinglar-ritmi.md) (protokol) |
| "Nega unday qilgandik?" degan savollar | Qaror va uning sababi yozilmagan | [D02](D02-loyiha-hayot-sikli.md) (qarorlar jurnali), [D11](D11-dasturchilar-qoidalari.md) (ADR) |

Bu jadval pilotdan keyin yana tekshiriladi: og'riq kamaydimi yoki yo'qmi (D17).

## Qo'llanmani qanday o'qish kerak

Bu qo'llanma yangi loyihani boshidan to'g'ri qurish uchun: qanday harakat qilish, qanday kod yozish va review qilish, qanday test qilish, qanday deploy qilish va UI qanday bo'lishi kerakligi. Har bir doc qoida, bo'sh shablon va checklistni beradi; shablonning to'ldirilgan varianti — [misol loyihada](loyihalar/test-platformasi/index.md). Hammasini o'qish shart emas: avval umumiy qism, keyin o'z rolingiz doclari.

**Hamma uchun (taxminan 30 daqiqa):** [jarayon xaritasi](jarayon-xaritasi.md) → shu root doc → [D02](D02-loyiha-hayot-sikli.md) (hayot sikli) → [D01](D01-rollar-va-raci.md) (rollar) → [D08](D08-kanban-dor-dod.md) (kanban, DoR, DoD).

| Rolingiz | Asosiy doclaringiz | Yangi loyihada birinchi qiladigan ishingiz |
| --- | --- | --- |
| PM | [D02](D02-loyiha-hayot-sikli.md), [D05](D05-kickoff-va-doc-review.md), [D06](D06-baholash-va-srok.md), [D07](D07-taqsimot-va-resurs.md), [D09](D09-meetinglar-ritmi.md), [D10](D10-ozgarishlarni-boshqarish.md), D17 | [D02](D02-loyiha-hayot-sikli.md) bo'yicha bosqichlarni rejalashtirish, kickoff ([D05](D05-kickoff-va-doc-review.md)) o'tkazish |
| Biznes analitik | [D03](D03-loyiha-boshlangich-hujjati.md), [D10](D10-ozgarishlarni-boshqarish.md) | [D03](D03-loyiha-boshlangich-hujjati.md) shabloni bo'yicha TZ yozish |
| UI/UX dizayner | [D04](D04-dizayn-brief-va-jarayon.md), [D12](D12-ui-ux-standartlari.md) | [D04](D04-dizayn-brief-va-jarayon.md) brief'ini analitik bilan to'ldirish |
| Tech lead / dasturchi | [D03](D03-loyiha-boshlangich-hujjati.md) (API kontrakti), [D06](D06-baholash-va-srok.md), [D11](D11-dasturchilar-qoidalari.md), [D12](D12-ui-ux-standartlari.md) (frontend), [D13](D13-test-strategiyasi.md), [D14](D14-release-va-deploy.md) | [D03](D03-loyiha-boshlangich-hujjati.md) ni review qilish, baholash ([D06](D06-baholash-va-srok.md)) |
| QA | [D13](D13-test-strategiyasi.md), [D08](D08-kanban-dor-dod.md) | [D03](D03-loyiha-boshlangich-hujjati.md) qabul mezonlaridan test rejasini tuzish |
| DevOps | [D14](D14-release-va-deploy.md) | Muhitlar va release checklistini tayyorlash |
| Support | D15, D16 | Qo'llanma tuzilmasini [D03](D03-loyiha-boshlangich-hujjati.md) rollari bo'yicha tuzish |

Kichik jamoada bir odam bir nechta rolni bajaradi (masalan, PM va analitik bitta odam) — unda shu rollarning hamma doclari uniki bo'ladi. Qaysi doclar majburiy ekani — "Loyiha hajmiga qarab moslashtirish" bo'limida.

## Misol loyiha: Test Platformasi

Standart qanday qo'llanishini ko'rsatish uchun bitta real loyiha olingan: **Test Platformasini bugun noldan qurayapmiz**. Uning hujjatlari standartdan alohida, [misol loyiha papkasida](loyihalar/test-platformasi/index.md) turadi: loyiha kartasi (mahsulot, jamoa, vositalar, repo) va har doc bo'yicha to'ldirilgan hujjat. Har docning "Misol" bo'limi o'sha hujjatga olib boradi. Yangi loyiha shu papka tuzilmasini nusxalab boshlanadi.

## Standartni yozish va yangilash

Yozish navbati (TODO), fazalar va yozish jarayonidagi kelishuvlar — [Ish rejasi](ish-rejasi.md). Doc yozish tartibi, tuzilmasi va qoidalari — [AGENTS.md](AGENTS.md). Doclar menyu, qidiruv va sxemalar bilan hujjat sayti sifatida ham o'qiladi (ishga tushirish — [AGENTS.md](AGENTS.md), "Hujjat sayti").

## Hayot sikli

Sxema ko'rinishida — [Jarayon xaritasi](jarayon-xaritasi.md): bosqichlar va darvozalar, kim kimga nima topshiradi, bitta taskning yo'li.

Loyiha 8 bosqichdan o'tadi; har bosqichning chiqishi keyingisining kirishi bo'ladi. Bosqichdan keyingisiga faqat darvoza mezoni bajarilganda o'tiladi. Batafsil kirish, chiqish va darvoza checklistlari [D02](D02-loyiha-hayot-sikli.md) docda yoziladi.

1. **Boshlash** — loyiha g'oyasi, mijoz va biznes maqsad aniqlanadi. Asosiy doclar: [D01](D01-rollar-va-raci.md), [D03](D03-loyiha-boshlangich-hujjati.md) (Brief qismi).
2. **Talablar** — scope, user story, qabul mezonlari, API kontrakti va nofunksional talablar yoziladi; doc review o'tkaziladi. Asosiy doclar: [D03](D03-loyiha-boshlangich-hujjati.md), [D05](D05-kickoff-va-doc-review.md).
3. **Dizayn** — oqimlar va maketlar chiziladi, dasturchiga topshiriladi. Asosiy doclar: [D04](D04-dizayn-brief-va-jarayon.md), [D12](D12-ui-ux-standartlari.md).
4. **Planlash** — ish bo'linadi, baholanadi, odamlar biriktiriladi, srok kelishiladi. Asosiy doclar: [D06](D06-baholash-va-srok.md), [D07](D07-taqsimot-va-resurs.md).
5. **Ishlab chiqish** — tasklar kanban bo'yicha DoR → DoD yo'lini o'tadi. Asosiy doclar: [D08](D08-kanban-dor-dod.md), [D09](D09-meetinglar-ritmi.md), [D10](D10-ozgarishlarni-boshqarish.md), [D11](D11-dasturchilar-qoidalari.md), [D13](D13-test-strategiyasi.md).
6. **Release** — staging'da tekshiriladi, prod'ga chiqariladi, rollback tayyor turadi. Asosiy doc: [D14](D14-release-va-deploy.md).
7. **Topshirish** — mijoz qabul qiladi (UAT), qo'llanma va o'qitish beriladi. Asosiy doc: D15.
8. **Ekspluatatsiya** — murojaatlar va fikrlar yig'iladi, keyingi rejaga kiradi. Asosiy doc: D16.

Ishlab chiqish (5) haftalik sikl bo'lib aylanadi. O'rtada kelgan yangi talab [D10](D10-ozgarishlarni-boshqarish.md) orqali qayta baholanadi va kerak bo'lsa 2-bosqichga qaytadi. D17 (retro) har bosqich oxirida va loyiha oxirida o'tkaziladi.

**Ikki xil darvoza.** [D02](D02-loyiha-hayot-sikli.md) bosqich darvozalari butun loyihaning keyingi bosqichga o'tishini tekshiradi; [D08](D08-kanban-dor-dod.md) dagi DoR va DoD esa bitta taskning board ustunlari orasida o'tishini tekshiradi.

## Rollar va mas'uliyat

Loyihada 9 ta rol bor: mijoz (PO), PM, biznes analitik, UI/UX dizayner, tech lead, dasturchi, QA, DevOps va support. Har bir qaror va hujjatning bitta egasi bo'ladi. Bitta odam bir nechta rolni bajarishi mumkin (kichik jamoada PM analitik ham bo'lishi mumkin), lekin har bir rolning mas'uliyati baribir yozilgan bo'ladi. Rollar tavsifi, RACI matritsa va kichik jamoada rollarni birlashtirish — [D01](D01-rollar-va-raci.md) da.

## Doclar katalogi

Standart 17 ta docdan iborat, 5 guruhga bo'lingan. Faza ustuni yozish navbatini bildiradi ([Ish rejasi](ish-rejasi.md)).

| ID | Doc | Egasi | Bosqich | Faza |
| --- | --- | --- | --- | --- |
| [D01](D01-rollar-va-raci.md) | Rollar va RACI matritsa | PM | Hammasi | 2 |
| [D02](D02-loyiha-hayot-sikli.md) | Loyiha hayot sikli va bosqich darvozalari | PM | Hammasi | 1 |
| [D03](D03-loyiha-boshlangich-hujjati.md) | Loyiha boshlang'ich hujjati (Brief + PRD/TZ) | Analitik | Boshlash | 1 |
| [D04](D04-dizayn-brief-va-jarayon.md) | Dizaynerga brief va dizayn jarayoni | Dizayner + analitik | Dizayn | 2 |
| [D05](D05-kickoff-va-doc-review.md) | Kickoff va doc review meeting | PM | Boshlash | 2 |
| [D06](D06-baholash-va-srok.md) | Baholash va srok belgilash | PM + tech lead | Planlash | 2 |
| [D07](D07-taqsimot-va-resurs.md) | Ishlar taqsimoti va resurs planlash | PM | Planlash | 3 |
| [D08](D08-kanban-dor-dod.md) | Kanban qoidalari, DoR va DoD | PM + tech lead | Ishlab chiqish | 1 |
| [D09](D09-meetinglar-ritmi.md) | Meetinglar ritmi (daily, haftalik, demo, retro) | PM | Ishlab chiqish | 2 |
| [D10](D10-ozgarishlarni-boshqarish.md) | O'zgarishlarni boshqarish (change request) | PM | Ishlab chiqish | 3 |
| [D11](D11-dasturchilar-qoidalari.md) | Dasturchilar qoidalari va code review | Tech lead | Ishlab chiqish | 1 |
| [D12](D12-ui-ux-standartlari.md) | UI/UX standartlari va design system | Dizayner | Dizayn, ishlab chiqish | 1 |
| [D13](D13-test-strategiyasi.md) | Test strategiyasi (unit, integration, e2e) | Tech lead + QA | Ishlab chiqish | 1 |
| [D14](D14-release-va-deploy.md) | Release va deploy tartibi | DevOps | Release | 1 |
| D15 | Foydalanuvchi qo'llanmasi va o'qitish | Support + analitik | Topshirish | 3 |
| D16 | Support va fikr yig'ish | Support | Ekspluatatsiya | 3 |
| D17 | Retrospektiva va standartni yangilash | PM | Har bosqich oxiri | 3 |

### A. Asos

**[D01](D01-rollar-va-raci.md) — Rollar va RACI matritsa**

- *Maqsad:* har bir faoliyat uchun kim bajaradi (R), kim javobgar (A), kimdan maslahat olinadi (C), kim xabardor qilinadi (I) — aniq bo'lsin.
- *Mazmuni:* rollar tavsifi; RACI jadvali (talab yig'ish, dizayn, baholash, kod, review, test, deploy, qabul); kichik jamoada rollarni birlashtirish qoidasi.
- *Tayyor mezoni:* har bir qatorda aynan bitta A bor.

**[D02](D02-loyiha-hayot-sikli.md) — Loyiha hayot sikli va bosqich darvozalari**

- *Maqsad:* loyiha qaysi bosqichlardan o'tishi va keyingisiga qachon o'tish mumkinligi aniq bo'lsin.
- *Mazmuni:* bosqichlar ("Hayot sikli" bo'limiga qarang); har bosqichning kirishi, chiqishi, darvoza mezoni va kim tasdiqlashi; qarorlar jurnali (decision log) va risklar reestri shablonlari hamda ularni yuritish qoidasi. Bu ikkala jurnalning yagona uyi — [D02](D02-loyiha-hayot-sikli.md); boshqa doclar ([D05](D05-kickoff-va-doc-review.md), [D09](D09-meetinglar-ritmi.md), [D10](D10-ozgarishlarni-boshqarish.md)) ularga yozadi va shu yerga havola qiladi.
- *Tayyor mezoni:* har bir darvoza tekshiriladigan checklist ko'rinishida.

### B. Boshlash va dizayn

**[D03](D03-loyiha-boshlangich-hujjati.md) — Loyiha boshlang'ich hujjati (Brief + PRD/TZ)**

- *Maqsad:* barcha rollar bir xil tushunadigan yagona manba. Eng muhim doc.
- *Mazmuni:* muammo va biznes maqsad; o'lchanadigan muvaffaqiyat mezonlari; foydalanuvchi rollari; scope (nima kiradi va nima **kirmaydi**); modullar va ekranlar ro'yxati; user story + qabul mezonlari; rollar va ruxsatlar matritsasi; integratsiyalar; **FE–BE API kontrakti talablari** (endpointlar ro'yxati, so'rov va javob formati, xato kodlari, kim kelishadi va qayerda saqlanadi); nofunksional talablar (tezlik, xavfsizlik, yuklama); **shaxsiy ma'lumotlar** (qaysi ma'lumot yig'iladi, masalan JShShIR va yuz tasviri; huquqiy asos va rozilik; kim ko'radi; qayerda va qancha saqlanadi; qachon o'chiriladi); cheklovlar va farazlar; ochiq savollar; versiyalar tarixi. Risklar [D02](D02-loyiha-hayot-sikli.md) dagi risklar reestriga yoziladi, [D03](D03-loyiha-boshlangich-hujjati.md) unga havola qiladi.
- *Tayyor mezoni:* [D05](D05-kickoff-va-doc-review.md) doc review'da bloklovchi deb belgilangan savollar soni 0; qolgan har bir ochiq savolning egasi va muddati bor; har bir story'da qabul mezoni bor.

**[D04](D04-dizayn-brief-va-jarayon.md) — Dizaynerga brief va dizayn jarayoni**

- *Maqsad:* dizayner nima, kim uchun va qanday cheklovlar bilan chizishini aniq bilsin; dasturchiga to'liq maket topshirilsin.
- *Mazmuni:* brief shabloni (maqsad, foydalanuvchi, oqimlar, ekranlar, kontent, brend, qurilmalar, design system'dan nima ishlatiladi); jarayon: wireframe → review → UI → review → handoff; Figma qoidalari (nomlash, komponentlar, holatlar); handoff checklist.
- *Tayyor mezoni:* har bir ekranning barcha holatlari (bo'sh, yuklanmoqda, xato, ruxsat yo'q) chizilgan.

**[D05](D05-kickoff-va-doc-review.md) — Kickoff va doc review meeting**

- *Maqsad:* ish boshlanishidan oldin hamma [D03](D03-loyiha-boshlangich-hujjati.md)'ni o'qib chiqqan, muammoli joylar topilgan va har savolning egasi bo'lsin.
- *Mazmuni:* qatnashchilar; oldindan o'qish talabi (1 ish kuni oldin); agenda; yozma izohlar (`[bloklovchi]`, `[savol]`, `[taklif]`), savolni "bloklovchi" deb belgilash qoidasi; chiqish: scope chegarasi, ochiq savollar, risklar reestri va qarorlar jurnaliga birinchi yozuvlar (shablonlari [D02](D02-loyiha-hayot-sikli.md) da); protokol shabloni. Srok bu yerda emas — 4-darvozada ([D06](D06-baholash-va-srok.md)).
- *Tayyor mezoni:* meetingdan keyin har bir ochiq savolning egasi va muddati bor.

**[D06](D06-baholash-va-srok.md) — Baholash va srok belgilash**

- *Maqsad:* srok ishni bajaradigan odamlar bilan birga, asosli belgilansin.
- *Mazmuni:* taskni bo'lish (1–3 kunlik bo'laklar); baholash usuli (soat, story va release uchun uch nuqtali baho); ochiq bufer; srokni mijozga qanday aytish; srok surilsa nima qilinadi.
- *Tayyor mezoni:* har bir baho bajaruvchi tomonidan tasdiqlangan.

### C. Planlash va jarayon

**[D07](D07-taqsimot-va-resurs.md) — Ishlar taqsimoti va resurs planlash**

- *Maqsad:* deadline va ko'nikmalarga qarab mos odam biriktirilsin, hech kim ortiqcha yuklanmasin.
- *Mazmuni:* ko'nikmalar matritsasi (kim nimani biladi, qay darajada); yuklama jadvali (bir odamga bir vaqtda nechta loyiha); "bus factor" — har bir modulni kamida 2 kishi bilishi; yangi xodimni ulash tartibi.
- *Tayyor mezoni:* har bir modulning asosiy va zaxira bajaruvchisi bor.

**[D08](D08-kanban-dor-dod.md) — Kanban qoidalari, DoR va DoD**

- *Maqsad:* ish holati hammaga so'ramasdan ko'rinsin, "tayyor" so'zi hamma uchun bir xil ma'noda bo'lsin.
- *Mazmuni:* ustunlar (Backlog → Ready → In progress → Code review → Testing → Done); WIP limitlari; task shabloni (sarlavha, tavsif, qabul mezoni, maket havolasi, baho, bajaruvchi); Definition of Ready; Definition of Done; bug shabloni; prioritet va labellar; bloklangan task bilan ishlash.
- *Bog'liqliklar:* DoR'dagi baho sharti — [D06](D06-baholash-va-srok.md); o'zgargan talab — [D10](D10-ozgarishlarni-boshqarish.md); DoD'dagi minimal test talabini [D13](D13-test-strategiyasi.md) kengaytiradi.
- *Tayyor mezoni:* yangi xodim board'ga qarab har bir taskning holatini tushuntira oladi.

**[D09](D09-meetinglar-ritmi.md) — Meetinglar ritmi**

- *Maqsad:* meetinglar kam, qisqa va natijali bo'lsin; har birining aniq chiqishi bo'lsin.
- *Mazmuni:* daily (15 daqiqa yoki yozma); haftalik sync (progress, risk, srok holati); demo (mijozga ishlaydigan natijani ko'rsatish); retro; har biri uchun: kim qatnashadi, davomiyligi, agenda, protokol shabloni.
- *Tayyor mezoni:* har bir meetingdan keyin yozma xulosa va vazifalar egasi bilan qoladi.

**[D10](D10-ozgarishlarni-boshqarish.md) — O'zgarishlarni boshqarish (change request)**

- *Maqsad:* yangi talab yoki o'zgarish srok va scope'ni nazoratsiz buzmasin.
- *Mazmuni:* o'zgarish turlari (aniqlashtirish, kichik va katta change request) va chegarasi; change request shabloni (nima, nega, ta'siri, baho, variantlar); kim tasdiqlaydi; srok va narxga ta'sirini mijoz bilan kelishish; release scope'ini yopish; [D03](D03-loyiha-boshlangich-hujjati.md) versiyasini yangilash.
- *Tayyor mezoni:* hech bir o'zgarish [D03](D03-loyiha-boshlangich-hujjati.md) va boardda aks etmasdan ishga olinmaydi.

### D. Ishlab chiqish va sifat

**[D11](D11-dasturchilar-qoidalari.md) — Dasturchilar qoidalari va code review**

- *Maqsad:* kod bir xil uslubda, tekshirilgan va xavfsiz holda asosiy branchga tushsin.
- *Mazmuni:* git flow va branch nomlash; commit xabarlari formati; PR shabloni va hajmi (kichik PR); code review checklist (logika, nomlash, xatoliklar, xavfsizlik, testlar, performance); review muddati (masalan, 1 ish kuni ichida); merge sharti — [D08](D08-kanban-dor-dod.md) DoD; **FE–BE API kontrakti jarayoni** (kontrakt kod yozishdan oldin kelishiladi, o'zgarishi versiyalanadi va ikkala tomonga e'lon qilinadi, frontend mock'lari kontraktdan olinadi); linter va formatter; texnik qarzni qayd etish; maxfiy ma'lumotlar (kalit, parol) bilan ishlash; ADR (arxitektura qarorlari) shabloni.
- *Tayyor mezoni:* checklist qoidalari CI va PR shablonida avtomatlashtirilgan joylar belgilangan.

**[D12](D12-ui-ux-standartlari.md) — UI/UX standartlari va design system**

- *Maqsad:* barcha loyihalarda interfeys bir xil, tushunarli va qulay bo'lsin.
- *Mazmuni:* asosiy tamoyillar (izchillik, aniq xato xabarlari, tasdiqlash, qaytarish imkoni); komponentlar standarti — **jadval** (qidiruv, filtr, saralash, pagination, ustunlarni sozlash, eksport, ommaviy amallar, bo'sh/yuklanmoqda/xato holatlari), forma (validatsiya, majburiy maydonlar, saqlash), modal, bildirishnomalar; adaptivlik; accessibility asoslari; matn va terminologiya lug'ati; o'rganish uchun manbalar (Material Design, Apple HIG, Nielsen'ning 10 evristikasi).
- *Tayyor mezoni:* dizayner va frontend bir xil komponent ro'yxatidan foydalanadi.

**[D13](D13-test-strategiyasi.md) — Test strategiyasi**

- *Maqsad:* testlar ish davomida yozilsin, release oldidan qo'lda tekshiruvga bog'liqlik kamaysin.
- *Mazmuni:* test piramidasi; unit testlar — biznes logika uchun majburiy; integration — API va DB; e2e — asosiy foydalanuvchi oqimlari (login, asosiy CRUD, to'lov va h.k.); qachon yozilishi (task DoD'ning bir qismi); minimal qamrov maqsadi; test ma'lumotlari; CI'da avtomatik ishga tushirish; QA qo'lda test rejasi va regressiya; bug hayot sikli.
- *Tayyor mezoni:* [D08](D08-kanban-dor-dod.md) DoD'dagi "qizil test bilan merge yo'q" qoidasi avtomatik tekshiriladi (CI yoki chetlab o'tib bo'lmaydigan tekshiruv); 5 ta eng muhim oqim e2e bilan qoplangan.

**[D14](D14-release-va-deploy.md) — Release va deploy tartibi**

- *Maqsad:* release oldindan aytiladigan, xavfsiz va orqaga qaytarsa bo'ladigan bo'lsin.
- *Mazmuni:* muhitlar (dev, staging, prod); versiyalash; release checklist; release notes shabloni; rollback rejasi; DB migratsiyalari; monitoring va loglar; backup; release vaqti va kimni xabardor qilish; **shaxsiy ma'lumotlarni himoyalash** (prod ma'lumoti dev/staging'ga faqat anonimlashtirilib o'tadi; loglarda JShShIR va yuz tasvirlari yozilmaydi; prod'ga kirish huquqi kimda; maxfiy kalitlar CI o'zgaruvchilarida). Talablarning o'zi [D03](D03-loyiha-boshlangich-hujjati.md) da.
- *Tayyor mezoni:* rollback kamida bir marta staging'da sinab ko'rilgan.

### E. Topshirish va ekspluatatsiya

**D15 — Foydalanuvchi qo'llanmasi va o'qitish**

- *Maqsad:* foydalanuvchi tizimni yordamsiz ishlata olsin, support'ga savollar kamaysin.
- *Mazmuni:* qo'llanma tuzilmasi (rol bo'yicha, vazifa bo'yicha "qanday qilish kerak"); skrinshot va qisqa videolar; tizim ichidagi onboarding turlari va maslahatlar; FAQ; o'qitish sessiyasi rejasi; qo'llanmani release bilan birga yangilash qoidasi.
- *Tayyor mezoni:* support vakili tizimni oldin ko'rmagan kamida 3 kishi bilan sinov o'tkazadi; har biri o'z rolining asosiy vazifasini faqat qo'llanma bilan, yordamsiz bajaradi; natija qisqa hisobotda qayd etiladi.

**D16 — Support va fikr yig'ish**

- *Maqsad:* murojaatlar yo'qolmasin, kritik muammolar tez hal qilinsin, foydalanuvchi fikri keyingi rejaga kirsin.
- *Mazmuni:* murojaat kanallari; toifalash (bug, savol, taklif); jiddiylik darajalari va javob vaqti (SLA); bug'ni boardga o'tkazish; fikrlarni yig'ish va tahlil qilish; mijozga hisobot.
- *Tayyor mezoni:* har bir murojaatning holati va egasi kuzatiladi.

**D17 — Retrospektiva va standartni yangilash**

- *Maqsad:* jamoa tajribadan o'rgansin, bu standart esa tirik qolsin.
- *Mazmuni:* retro formati (nima yaxshi, nima yomon, nimani o'zgartiramiz); qachon o'tkaziladi; harakatlar ro'yxati va egasi; standartga o'zgartirish kiritish tartibi; jarayon metrikalari (srok aniqligi, lead time, release'dan keyingi bug'lar soni, rework ulushi).
- *Tayyor mezoni:* har bir retro kamida bitta aniq o'zgarish bilan tugaydi.

## Loyiha hajmiga qarab moslashtirish

Kichik loyihada 17 ta docning hammasini to'liq yuritish byurokratiya bo'ladi. Beshta yadro doc har doim majburiy, qolganlari hajmga qarab qisqartiriladi. Kichik loyiha — jamoasi 3–5 kishi bo'lgan loyiha.

| Doc | Kichik loyiha | O'rta va katta loyiha |
| --- | --- | --- |
| [D01](D01-rollar-va-raci.md), [D02](D02-loyiha-hayot-sikli.md), [D03](D03-loyiha-boshlangich-hujjati.md), [D08](D08-kanban-dor-dod.md), [D11](D11-dasturchilar-qoidalari.md) | Majburiy | Majburiy |
| [D04](D04-dizayn-brief-va-jarayon.md) Dizayn brief | [D03](D03-loyiha-boshlangich-hujjati.md) ichida ekranlar ro'yxati va maket havolasi | To'liq |
| [D05](D05-kickoff-va-doc-review.md) Kickoff | Kickoff va doc review 30–45 daqiqadan; yozma izohlar va protokol majburiy | To'liq |
| [D06](D06-baholash-va-srok.md) Baholash | Tasklar soatda, uch nuqtali baho story darajasida; bufer, yozma srok va kechikish tartibi majburiy | To'liq |
| [D07](D07-taqsimot-va-resurs.md) Resurs planlash | Modullar egasi va zaxirasi, onboarding va handover; matritsa va bandlik jadvali — odamlar boshqa loyihada ham band bo'lsa | To'liq |
| [D09](D09-meetinglar-ritmi.md) Meetinglar | Yozma daily, 30 daqiqalik haftalik sync, har release oxirida demo; umumiy qoidalar to'liq | To'liq |
| [D10](D10-ozgarishlarni-boshqarish.md) Change request | Uch tur va yozma PO qarori; katta CR uchun to'liq doc review shart emas | To'liq |
| [D12](D12-ui-ux-standartlari.md) UI/UX | Kompaniyaning mavjud design system'i ishlatiladi | To'liq |
| [D13](D13-test-strategiyasi.md) Test | [D08](D08-kanban-dor-dod.md) DoD'dagi minimal talab | To'liq |
| [D14](D14-release-va-deploy.md) Release | Release checklist va rollback rejasi | To'liq |
| D15 Qo'llanma | FAQ | To'liq |
| D16 Support | Murojaat kanali va javob vaqti | To'liq |
| D17 Retro | Loyiha oxirida bitta retro | Har bosqich oxirida |

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
