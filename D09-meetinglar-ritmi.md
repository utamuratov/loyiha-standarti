# D09 — Meetinglar ritmi

*`[b.q.]` — boshlang'ich qiymat: bu raqam manbadan olinmagan, standart yozilganda taklif sifatida qo'yilgan; pilotda tekshiriladi va retroda ([D17](D17-retro-va-standartni-yangilash.md)) tuzatiladi. Barcha bunday qiymatlar va manbalar — [Manbalar](manbalar.md).*

## 1. Maqsad

Meetinglar kam, qisqa va natijali bo'lsin: har birining aniq maqsadi, vaqti va yozma natijasi bo'ladi, yozma hal bo'ladigan narsa esa meetingga chiqmaydi. Bu doc har qanday meetingning umumiy qoidalari va ishlab chiqish davridagi doimiy ritm (daily, haftalik sync, demo, retro) uchun yagona joy. U "muhokamalar cho'zilib ketadi" va "aytilgan narsalar esdan chiqadi" og'riqlariga javob beradi.

## 2. Kim uchun va qachon

- **Egasi:** PM. U ritmni loyiha boshida taklif qiladi, meetinglarni yuritadi va protokolni yuboradi.
- **Kim ishlatadi:** butun jamoa; umumiy qoidalarni esa meeting chaqiradigan har kim ishlatadi.
- **Qachon:**
  - 1-bosqichda (Boshlash) ritm jadvali (5.1) kickoff'da ([D05](D05-kickoff-va-doc-review.md)) kelishiladi.
  - 5-bosqichda (Ishlab chiqish) daily va haftalik sync doimiy o'tadi, demo esa kelishilgan chastotada o'tkaziladi.
  - Umumiy qoidalar (3-bo'lim) loyihaning hamma bosqichida, har qanday meeting uchun amal qiladi.

Loyiha boshidagi kickoff va doc review [D05](D05-kickoff-va-doc-review.md) da, retroning formati va chastotasi esa [D17](D17-retro-va-standartni-yangilash.md) da yozilgan. Bu doc ularni takrorlamaydi.

**Atamalar.**
- *Daily* — har kungi qisqa holat: kim nima qildi, nima qiladi va unga nima to'sqinlik qilyapti.
- *Haftalik sync* — haftada bir marta reja, risk va srok holatini ko'rib chiqish.
- *Demo* — mijozga slayd emas, ishlaydigan natijani (staging'da) ko'rsatish.
- *Retro* — jamoa o'z ish jarayonini ko'rib chiqadigan meeting.
- *Protokol* — meeting natijasining yozma qisqa xulosasi.
- *Timebox* — oldindan belgilangan va oshirilmaydigan vaqt.

## 3. Umumiy qoidalar (har qanday meeting)

1. **Avval yozma hal qilinadi.** Holat, oddiy savol va bir kishining javobini kutayotgan masala meetingga chiqmaydi: ular Jira izohi yoki xabar bilan hal qilinadi. Meeting faqat bir nechta odam birga qaror qilishi yoki muhokama qilishi kerak bo'lganda chaqiriladi. *Nega:* bir kishining savoli uchun besh kishining yarim soatini sarflash eng qimmat javob.
2. **Maqsad va agenda taklifda yoziladi.** Meeting taklifida nima uchun chaqirilayotgani, qaysi qaror yoki natija kerakligi, agenda va oldindan o'qiladigan material ko'rsatiladi. Agendasiz meeting chaqirilmaydi; qisqa meeting uchun ham 1–3 qator yetadi. *Nega:* maqsadi aytilmagan meeting mavzudan mavzuga sakraydi va qarorsiz tugaydi.
3. **Faqat kerakli odamlar qatnashadi.** Masala bo'yicha qaror qiluvchi (A) va bajaruvchilar (R) qatnashadi ([D01](D01-rollar-va-raci.md)); maslahatchilar (C) fikrini oldindan yozma berishi mumkin; xabardor bo'lishi kerak bo'lganlar (I) faqat protokolni oladi. *Nega:* har bir ortiqcha qatnashchi jamoaning bir soatlik ishini oladi va muhokamaga yana bir fikr qo'shadi.
4. **Timebox.** Meeting vaqtida boshlanadi va vaqtida tugaydi. Vaqt tugasa, qolgan masala egasi va muddati bilan keyingi qadamga yoziladi, meeting cho'zilmaydi. *Nega:* chegarasiz meeting eng muhim masalani oxiriga, hamma charchagan paytga qoldiradi.
5. **Har masala natija bilan chiqadi.** Natija uch xil bo'ladi: **qaror** qarorlar jurnaliga yoziladi ([D02](D02-loyiha-hayot-sikli.md)); **vazifa** Jira'ga egasi va muddati bilan yoziladi; **ochiq savol** egasi va muddati bilan yoziladi (TZ'ga tegishli bo'lsa, [D03](D03-loyiha-boshlangich-hujjati.md) dagi ro'yxatga). Kelishilmagan masalani [D01](D01-rollar-va-raci.md) dagi A belgilangan muddatda hal qiladi. "Keyin gaplashamiz" natija hisoblanmaydi. *Nega:* egasiz kelishuv bir haftada unutiladi.
6. **Protokol 1 ish kuni [b.q.] ichida yoziladi.** Meetingni chaqirgan odam (doimiy meetinglarda PM) protokolni (5.4) loyiha hujjatlari joyiga qo'yadi va jamoa kanaliga havolasini tashlaydi. Qarorlar jurnalga, vazifalar Jira'ga yoziladi; protokolda ularning nusxasi emas, havolasi turadi. Daily uchun protokol yozilmaydi, uning natijasi boardda ko'rinadi. *Nega:* protokolsiz meetingdan keyin har kim faqat o'z xotirasiga tayanadi; protokol esa "kim aytgandi?" degan savolga javob beradi.
7. **Ritm doimiy va kalendarga qo'yilgan bo'ladi.** Doimiy meetinglar har hafta bir xil vaqtda o'tadi va loyiha boshida kalendarga qo'yiladi. Meeting bekor qilinsa, bu kamida yarim kun oldin, sababi bilan aytiladi. *Nega:* doimiy vaqt odamlarga fokus ishini rejalashtirishga imkon beradi; "har safar kelishib" o'tkaziladigan meeting esa yo kechikadi, yo butunlay yo'qoladi.
8. **Ritm retroda qayta ko'riladi.** Foyda bermayotgan meeting qisqartiriladi yoki olib tashlanadi; yangisi faqat aniq muammo uchun qo'shiladi. *Nega:* meetinglar o'z-o'zidan ko'payadi, hech qachon o'z-o'zidan kamaymaydi.

## 4. Doimiy meetinglar

| Meeting | Qachon | Vaqt | Kim | Natija |
| --- | --- | --- | --- | --- |
| Daily | Har ish kuni, bir xil vaqtda | 15 daq yoki yozma | Ishlab chiqishdagi jamoa; PM yuritadi | Bloklar boardda belgilangan ([D08](D08-kanban-dor-dod.md)), egasi bilan |
| Haftalik sync | Haftada 1 marta | 30–45 daq [b.q.] | PM, tech lead, analitik, dizayner, dasturchilar, QA | Protokol; mijozga haftalik holat xati |
| Demo | Har release oxirida; uzoq release'da har 2 haftada [b.q.] | 30–45 daq | PO, PM, analitik, jamoa | Mijoz fikrlari Backlog'da; scope o'zgarsa, [D10](D10-ozgarishlarni-boshqarish.md) bo'yicha |
| Retro | [D17](D17-retro-va-standartni-yangilash.md) bo'yicha | [D17](D17-retro-va-standartni-yangilash.md) bo'yicha | Jamoa | [D17](D17-retro-va-standartni-yangilash.md) bo'yicha |

### 4.1. Daily

- **Daily odamlar bo'yicha emas, board bo'yicha o'tadi:** o'ngdan chapga, avval Done'ga yaqin tasklar (Testing, Code review), keyin In progress ko'riladi. Boardda kartochkasi yo'q ish haqida gapirilmaydi ([D08](D08-kanban-dor-dod.md)).
- Har bir task bo'yicha bitta savol beriladi: **unga nima to'sqinlik qilyapti?** Bahosidan yarmidan ko'proq oshgan task shu yerda aytiladi ([D06](D06-baholash-va-srok.md), 8-qoida).
- **Muammo daily'da yechilmaydi.** Muhokama kerak bo'lsa, faqat kerakli odamlar daily'dan keyin qoladi.
- **Yozma daily** (5.2) jamoa turli joyda yoki turli vaqtda ishlasa qo'llanadi, kichik jamoada esa bu odatiy shakl. U kelishilgan vaqtgacha yoziladi; PM bloklarni boardga o'tkazadi.

*Nega:* odamlar bo'yicha o'tgan daily "men band edim" degan hisobotga aylanadi; board bo'yicha daily esa jamoani ishni oxiriga yetkazishga yo'naltiradi.

### 4.2. Haftalik sync

Agenda doimiy (5.3) bo'lib, boshqa doclardagi haftalik tekshiruvlarni bir joyga yig'adi:

- reja va haqiqat: qolgan ish va qolgan vaqt ([D06](D06-baholash-va-srok.md), 8-qoida);
- risklar reestri ([D02](D02-loyiha-hayot-sikli.md), 8-qoida);
- board: bloklangan va uzoq turgan tasklar ([D08](D08-kanban-dor-dod.md));
- muddati o'tgan ochiq savollar ([D03](D03-loyiha-boshlangich-hujjati.md));
- karantindagi testlar soni ([D13](D13-test-strategiyasi.md), 11-qoida);
- keyingi hafta ustuvorliklari.

Sync'dan keyin PM mijozga **haftalik holat xati** yuboradi (5.3): nima tugadi, nima keyin, risklar va ulardan kutilayotgan qaror. *Nega:* mijoz holatni so'rab yozishiga hojat qolmaydi; kechikish birinchi haftada ko'rinadi.

### 4.3. Demo

- Staging'da, real ma'lumotga yaqin ma'lumot bilan slayd yoki maket emas, **ishlaydigan** narsa ko'rsatiladi.
- Ko'rsatiladigan story'lar oldindan ro'yxat qilinadi va qabul mezonlari ([D03](D03-loyiha-boshlangich-hujjati.md)) bo'yicha ko'rsatiladi.
- Mijoz fikri shu yerning o'zida yoziladi: xato bug sifatida ochiladi ([D08](D08-kanban-dor-dod.md)); yangi talab yoki o'zgarish esa Backlog'ga `change-request` labeli bilan yoziladi ([D10](D10-ozgarishlarni-boshqarish.md)). Demo'da yangi talab "ha, qilamiz" deb qabul qilinmaydi.

*Nega:* mijoz natijani faqat UAT'da birinchi marta ko'rsa, tushunmovchilik eng qimmat paytda chiqadi.

**Kichik loyihada (3–5 kishi).** Daily yozma o'tadi, haftalik sync 30 daqiqa davom etadi, demo esa har release oxirida o'tkaziladi. Umumiy qoidalar (3-bo'lim) to'liq saqlanadi.

## 5. Shablonlar

### 5.1. Loyiha meeting ritmi

```
Loyiha: <nomi>   Kelishildi: kickoff, <sana>

| Meeting       | Kun va vaqt          | Davomiyligi | Qatnashchilar | Yuritadi |
| ------------- | -------------------- | ----------- | ------------- | -------- |
| Daily         | <har kuni, 10:00>    | 15 daq / yozma <10:00 gacha> |  | PM |
| Haftalik sync | <dushanba, 11:00>    | 30–45 daq   |               | PM       |
| Demo          | <release oxiri / har 2 hafta> | 30–45 daq |       | PM       |
| Retro         | <D17 bo'yicha>       |             |               | PM       |

Protokollar joyi: <havola>   Jamoa kanali: <kanal>   Mijozga holat xati: <kun>
```

### 5.2. Yozma daily

```
<sana> — <ism>
Tugadi: <TASK-ID> <qisqa nom> (yoki: yo'q)
Bugun: <TASK-ID> <qisqa nom>
To'siq: <yo'q / nima va kimni kutyapman — TASK-ID>
```

### 5.3. Haftalik sync agendasi va mijozga holat xati

```
Haftalik sync — <sana>, <30–45> daq

1. Reja va haqiqat: R<N> — qolgan <soat> / qolgan <ish kuni>; holat: rejada / xavf / kechikmoqda
2. Risklar reestri: yangi, o'zgargan, yopilgan
3. Board: bloklangan va 3 kundan ortiq turgan tasklar
4. Ochiq savollar: muddati o'tganlar va egasi
5. Karantindagi testlar: <N>
6. Keyingi hafta: ustuvorliklar, kim nimada

--- Mijozga holat xati ---
Mavzu: <loyiha> — <hafta> holati
Tugadi: <story'lar>
Keyingi hafta: <story'lar>
Srok holati: rejada / xavf (<nima va nega>)
Sizdan kerak: <qaror yoki javob — <sana>gacha> (yoki: hozircha hech narsa)
```

### 5.4. Protokol (umumiy)

```
Meeting: <nomi>   Sana: <sana>   Chaqirdi: <ism>
Maqsad: <qaysi qaror yoki natija kerak edi>
Qatnashdi: <ismlar>

Qarorlar:        Q-<NN> — <qisqa> (→ qarorlar jurnali)
Vazifalar:       <TASK-ID> — <nima> — <kim> — <sana>
Ochiq savollar:  <savol> — <kim> — <sana>
Risklar:         R-<NN> — <qisqa> (→ risklar reestri)
```

## 6. Misol

Test Platformasi uchun haftalik sync protokoli misol loyihada hali yozilmagan: [loyiha kartasidagi "Hujjatlar" jadvalida](loyihalar/test-platformasi/index.md) u "rejada" deb belgilangan.

## 7. Checklist: meetinglar ritmi ishlayaptimi

- [ ] Ritm jadvali (5.1) kickoff'da kelishilgan va kalendarga qo'yilgan
- [ ] Oxirgi 5 ta (daily'dan tashqari) meetingning har birida taklifda maqsad va agenda bo'lgan
- [ ] Har biriga 1 ish kuni ichida protokol yozilgan; qarorlar jurnalda, vazifalar Jira'da
- [ ] Daily board bo'yicha o'tadi va 15 daqiqadan oshmaydi (yoki yozma daily vaqtida yoziladi)
- [ ] Haftalik sync'da reja va haqiqat, risklar va board ko'rilgan; mijozga holat xati ketgan
- [ ] Oxirgi demo staging'da o'tgan; mijoz fikrlari Backlog'da
- [ ] Oxirgi retroda meetinglar ritmi ko'rib chiqilgan (8-qoida)

## 8. Tez-tez uchraydigan xatolar

1. **Status meeting.** Har kim navbat bilan nima qilganini aytadi, qolganlar esa kutib o'tiradi. To'g'risi: holat boardda va yozma daily'da ko'rinadi; meeting faqat qaror kerak bo'lganda chaqiriladi.
2. **Daily'da muammo yechish.** 15 daqiqa bir soatga aylanadi. To'g'risi: daily'da muammo faqat belgilanadi, uning yechimi esa daily'dan keyin kerakli odamlar bilan muhokama qilinadi.
3. **"Hamma qatnashsin".** Har meetingda butun jamoa o'tiradi. To'g'risi: A va R qatnashadi, I esa protokolni oladi.
4. **Demo slayd bilan o'tadi.** Mijoz ishlaydigan narsani UAT'gacha ko'rmaydi. To'g'risi: demo staging'da, qabul mezonlari bo'yicha o'tkaziladi.
5. **Qaror meetingda qolib ketadi.** Protokol yo'q, qaror jurnalga tushmagan, bir haftadan keyin esa "kim aytgandi?" degan savol chiqadi. To'g'risi: 1 ish kuni ichida protokol yozish va qarorni jurnalga kiritish.

---

Egasi: PM · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin ([D17](D17-retro-va-standartni-yangilash.md))
