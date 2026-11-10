# D08 — Kanban qoidalari, DoR va DoD

*`[b.q.]` — boshlang'ich qiymat: bu raqam manbadan olinmagan, standart yozilganda taklif sifatida qo'yilgan; pilotda tekshiriladi va retroda ([D17](D17-retro-va-standartni-yangilash.md)) tuzatiladi. Barcha bunday qiymatlar va manbalar — [Manbalar](manbalar.md).*

## 1. Maqsad

Har bir taskning holati hech kimdan so'ramasdan boardda ko'rinsin, "tayyor" so'zi esa hamma uchun bir xil ma'noni bildirsin. Kelishuvlar chatda qolib ketmasin, chala task ishga olinmasin.

## 2. Kim uchun va qachon

- **Egalari:** PM (board, ustunlar, DoR) va tech lead (DoD'ning texnik qismi).
- **Kim ishlatadi:** butun jamoa, har kuni.
  - Analitik va PM tasklarni Ready'ga tayyorlaydi.
  - Dasturchi taskni oladi va DoD bo'yicha tugatadi.
  - Tekshiruvchi (QA, kichik jamoada esa task muallifi bo'lmagan odam) Testing ustunini yuritadi.
- **Qachon:** 4-bosqichda (Planlash) board tuziladi; 5-bosqichda (Ishlab chiqish) har kuni ishlatiladi.

**Atamalar.** *Kanban* — ishni ustunlar bo'ylab harakatlanuvchi kartochkalar orqali boshqarish usuli. *WIP limiti* (work in progress) — bir ustunda bir vaqtda turishi mumkin bo'lgan tasklarning eng ko'p soni. *DoR* (Definition of Ready) — taskni ishga olish mumkinligini belgilaydigan mezon. *DoD* (Definition of Done) — task tugaganini belgilaydigan mezon.

**Bu doc va [D02](D02-loyiha-hayot-sikli.md).** [D02](D02-loyiha-hayot-sikli.md) darvozalari butun loyihaning bosqichdan bosqichga o'tishini tekshiradi; DoR va DoD esa bitta taskning ustundan ustunga o'tishini tekshiradi.

## 3. Board

### 3.1. Ustunlar

| Ustun | Ma'nosi | Kim o'tkazadi | O'tish sharti |
| --- | --- | --- | --- |
| Backlog | Qayd etilgan, hali tayyor emas | Istalgan odam | Sarlavha va manba bor |
| Ready | Ishga olsa bo'ladi | Analitik / PM | DoR bajarilgan |
| In progress | Ishlanmoqda | Bajaruvchi | Bajaruvchi o'zini biriktirgan |
| Code review | Merge request ochilgan, review kutilmoqda | Bajaruvchi | MR ochilgan, avtomatik tekshiruvlar yashil ([D11](D11-dasturchilar-qoidalari.md)) |
| Testing | Qabul mezonlari bo'yicha tekshirilmoqda | Reviewer | Review tasdiqlangan, test muhitida ishlaydi |
| Done | Tugadi | Tekshiruvchi | DoD bajarilgan |

Prod'ga chiqarish alohida jarayon ([D14](D14-release-va-deploy.md)): Done'dagi tasklar keyingi release'ga kiradi.

### 3.2. WIP limitlari

| Ustun | Limit | Nega |
| --- | --- | --- |
| In progress | Har bajaruvchiga 1 ta [b.q.]; 2-si faqat 1-si bloklangan bo'lsa | Bir nechta chala ish bitta tugagan ishdan yomon |
| Code review | Jamoadagi dasturchilar soni | Review navbati to'planib qolsa, yangi ish olinmaydi: avval review qilinadi |
| Testing | Jamoadagi dasturchilar soni | Sababi xuddi shu |

Limit to'lgan bo'lsa, yangi task olinmaydi: bo'shagan odam avval review yoki testga yordam beradi.

### 3.3. Task turlari va Jira tuzilmasi

- **Epic** — release ([D02](D02-loyiha-hayot-sikli.md), masalan "R1").
- **Story** — [D03](D03-loyiha-boshlangich-hujjati.md) dagi user story; uning sarlavhasida ID bo'ladi (`US-04`).
- **Task / Sub-task** — story'ni bajarish uchun 1–3 kunlik [b.q.] bo'laklar (frontend va backend alohida).
- **Bug** — 3.5-bo'limdagi shablon bo'yicha ochiladi.

### 3.4. Task shabloni

```
Sarlavha: [US-<NN>] <fe|be> — <nima qilinadi, fe'l bilan>
Tavsif: nima va nega (1–3 gap); D03 bo'limiga havola
Qabul mezonlari: D03 dagidan nusxa emas — havola + shu taskka tegishlilari
Maket: <Figma havolasi> (UI bo'lsa)
API: <endpoint, kontraktga havola> (FE+BE bo'lsa)
Baho: <soat> — bajaruvchi bergan (D06)
Bajaruvchi: <ism>
Bog'liqlik: <qaysi task tugashini kutadi>
```

### 3.5. Bug shabloni

```
Sarlavha: <qayerda> — <nima noto'g'ri>
Muhit: staging / prod; mijoz build'i; brauzer
Qadamlar: 1. … 2. … 3. …
Kutilgan natija: …
Haqiqiy natija: …
Dalil: skrinshot, video, log, so'rov ID'si
Jiddiylik: kritik / yuqori / o'rta / past
Bog'liq story: US-<NN>
```

**Jiddiylik.** Murojaatlarga javob vaqti (SLA) [D16](D16-support-va-fikr-yigish.md) da belgilangan.

| Daraja | Ta'rifi |
| --- | --- |
| Kritik | Asosiy oqim ishlamaydi yoki ma'lumot yo'qoladi/sizib chiqadi, aylanib o'tish yo'li yo'q |
| Yuqori | Asosiy oqim ishlaydi, lekin muhim qismi buzilgan yoki aylanib o'tish yo'li noqulay |
| O'rta | Ikkinchi darajali funksiya buzilgan |
| Past | Ko'rinish, matn, kichik noqulaylik |

### 3.6. Labellar

- Qism: `frontend`, `backend`, `design`.
- Tur: `change-request`, `tech-debt`.
- Mijoz (bir nechta mijozga yetkaziladigan loyihada): har mijoz uchun bitta label.

Prioritet uchun Jira'ning standart maydoni ishlatiladi. Backlog ichidagi tartibni PM belgilaydi, Ready ichida esa yuqoridagi task birinchi olinadi.

## 4. Definition of Ready

Task Ready'ga faqat quyidagilar bajarilganda o'tadi. Uni analitik yoki PM o'tkazadi.

- [ ] [D03](D03-loyiha-boshlangich-hujjati.md) dagi story'ga havola va qabul mezonlari bor
- [ ] Task UI'ga tegishli bo'lsa, barcha holatlari chizilgan maket havolasi bor ([D04](D04-dizayn-brief-va-jarayon.md))
- [ ] Task FE va BE'ga tegishli bo'lsa, endpoint kontraktda kelishilgan ([D11](D11-dasturchilar-qoidalari.md))
- [ ] **Bahoni bajaruvchining o'zi bergan**; baho 3 kundan [b.q.] oshsa, task bo'linadi
- [ ] Bog'liqliklar tugagan yoki parallel ishlash usuli aniq (masalan, mock orqali)
- [ ] Bloklovchi ochiq savol yo'q

*Nega:* chala task bilan boshlangan ish o'rtada to'xtaydi yoki qayta qilinadi. Bahoni bajaruvchi berishi esa srokni ishni bilmaydigan odam qo'ymasligi uchun kerak (to'liq qoidalar [D06](D06-baholash-va-srok.md) da).

## 5. Definition of Done

Task Done'ga faqat quyidagilar bajarilganda o'tadi. Uni tekshiruvchi o'tkazadi.

- [ ] Kod asosiy ishlab chiqish branchiga merge qilingan, code review o'tgan ([D11](D11-dasturchilar-qoidalari.md))
- [ ] **Biznes logikaga unit test yozilgan**
- [ ] **Barcha avtomatik tekshiruvlar yashil; qizil test bilan merge qilinmaydi**
- [ ] Qabul mezonlarining har biri test muhitida **task muallifi bo'lmagan odam tomonidan** tekshirilgan
- [ ] Topilgan muammolar shu taskda tuzatilgan yoki alohida bug sifatida ochilgan
- [ ] Kerak bo'lsa, texnik hujjat, tarjima kalitlari va [D03](D03-loyiha-boshlangich-hujjati.md) yangilangan ([D03](D03-loyiha-boshlangich-hujjati.md) o'zgarsa, [D10](D10-ozgarishlarni-boshqarish.md) orqali)

Test talabining to'liq versiyasi (qaysi testlar, qamrov, e2e) [D13](D13-test-strategiyasi.md) da yozilgan. [D13](D13-test-strategiyasi.md) bu talabni kengaytiradi, takrorlamaydi.

*Nega:* "tayyor" so'zining yagona ma'nosi bo'lmasa, test va review keyinga qoladi va release oldidan to'planadi.

## 6. Ish qoidalari

1. **Boardda yo'q ish ish hisoblanmaydi.** Chatda, qo'ng'iroqda yoki yo'lakda kelgan so'rov 1 ish kuni [b.q.] ichida Backlog'ga yoziladi, chatga esa task havolasi tashlanadi. Uni so'rovni qabul qilgan odam yozadi. *Nega:* aytilgan narsa esdan chiqadi, boardga tushgani esa chiqmaydi.
2. **Holatni so'rash o'rniga boardga qaraladi.** Bajaruvchi holat o'zgarganda taskni o'zi suradi; "qayerda?" degan savol board noto'g'ri yuritilayotganining belgisi. *Nega:* shaffoflik odamning xotirasida emas, jarayonda bo'lishi kerak.
3. **Talab o'rtada o'zgarsa, change request ochiladi.** Task `change-request` labeli bilan Backlog'ga qaytadi va [D10](D10-ozgarishlarni-boshqarish.md) bo'yicha qaror qabul qilinib, [D03](D03-loyiha-boshlangich-hujjati.md) yangilangandan keyingina qayta Ready'ga o'tadi. O'zgarish turlari, kim tasdiqlashi va to'liq tartib [D10](D10-ozgarishlarni-boshqarish.md) da yozilgan. *Nega:* "yo'l-yo'lakay qo'shib qo'ying" srokni yashirin buzadi.
4. **Bloklangan task belgilanadi.** Jira'da unga "Flagged" belgisi qo'yiladi va izohda task nimani va kimni kutayotgani yoziladi. 1 ish kunidan ortiq bloklansa [b.q.], PM daily'da ([D09](D09-meetinglar-ritmi.md)) ko'taradi. *Nega:* jim bloklangan task srok o'tgandagina ko'rinadi.
5. **Muallif o'z taskini o'zi testlamaydi.** Kichik jamoada QA bo'lmasa, Testing'ni analitik yoki boshqa dasturchi qiladi. *Nega:* muallif tizimni qanday ishlatish kerakligini biladi va xatoga yo'l qo'yadigan qadamni qilmaydi.
6. **Qaytgan task orqaga suriladi.** Testing'da qabul mezoni bajarilmasa, task In progress'ga qaytadi va izohda sababi yoziladi. Yangi task ochilmaydi (yangi bug faqat boshqa muammo uchun). *Nega:* rework sanaladi va retroda ([D17](D17-retro-va-standartni-yangilash.md)) ko'rinadi.

## 7. Misol

Shu doc bo'yicha to'ldirilgan variantni misol loyihada ko'ring: [Test Platformasi · Board va tasklar](loyihalar/test-platformasi/D08-board-va-tasklar.md).

## 8. Checklist: board to'g'ri yuritilyaptimi

PM haftada bir marta tekshiradi (haftalik sync'dan oldin, [D09](D09-meetinglar-ritmi.md)):

- [ ] Ready'dagi har bir task DoR'ga mos (tasodifiy 3 tasi tekshiriladi)
- [ ] In progress'dagi har taskning bajaruvchisi bor va WIP limiti buzilmagan
- [ ] 1 kundan ortiq bloklangan task'larning izohi va egasi bor
- [ ] Done'dagi har bir task DoD'ga mos (tasodifiy 3 tasi tekshiriladi)
- [ ] Hafta davomida chatda kelishilgan so'rovlar boardda bor
- [ ] Testing'dan qaytgan tasklar soni yozildi (rework metrikasi, [D17](D17-retro-va-standartni-yangilash.md))

**Tayyor mezoni.** Jamoaga yangi qo'shilgan odam boardni ko'rib, tasodifiy 5 ta taskdan har birining holatini, kim ishlayotganini va nima kutayotganini so'ramasdan aytib bera oladi. Buni PM har yangi xodim ulanganda tekshiradi.

## 9. Tez-tez uchraydigan xatolar

1. **"Deyarli tayyor" tasklar.** Tasklar In progress'da haftalab turadi. Sababi: task juda katta yoki bloklangan, lekin bu belgilanmagan. To'g'risi: 3 kundan katta task bo'linadi, bloklangani belgilanadi.
2. **Done = "men merge qildim".** Tekshirilmagan task Done'da turadi. To'g'risi: taskni Done'ga muallif emas, tekshiruvchi o'tkazadi.
3. **Board va haqiqat farq qiladi.** Odamlar ishni boshlaydi, lekin taskni surmaydi; PM esa holatni chatda so'raydi. To'g'risi: daily'ni ([D09](D09-meetinglar-ritmi.md)) board bo'yicha o'tkazish; kartochkasi yo'q ish haqida gapirilmaydi.
4. **Chatdagi "kichik o'zgarish".** Telegram'da "shu tugmani ham qo'shib yuboring" deyiladi, lekin bu so'rov hech qayerda yozilmaydi. To'g'risi: so'rovni Backlog'ga yozish, kerak bo'lsa `change-request` labeli bilan.
5. **Hammasi "yuqori" prioritetda.** To'g'risi: Backlog tartibini bitta odam (PM) belgilaydi va shu tartibning o'zi prioritet hisoblanadi.

---

Egasi: PM + tech lead · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin ([D17](D17-retro-va-standartni-yangilash.md))
