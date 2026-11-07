# D03 — Loyiha boshlang'ich hujjati (Brief + TZ)

## 1. Maqsad

Loyiha bo'yicha barcha rollar bir xil tushunadigan yagona manba bo'lsin: nima quriladi, kim uchun, nima kirmaydi va "tayyor" qanday tekshiriladi. Bu doc rework'ning asosiy sababini — ish boshlanganda talab va qabul mezoni yozilmagan bo'lishini — yopadi.

## 2. Kim uchun va qachon

- **Egasi:** biznes analitik (kichik jamoada — PM). Yozadi, versiyasini yuritadi, savollarni yopadi.
- **Tasdiqlaydi:** mijoz (PO) — scope va story'lar bo'yicha yozma tasdiq.
- **Kim nimani o'qiydi:**

| Rol | D03 dan nima oladi |
| --- | --- |
| Dizayner | Ekranlar ro'yxati, story'lar, xato holatlari — maket uchun (D04) |
| Dasturchi / tech lead | Story'lar, ruxsatlar, API kontrakti talablari, nofunksional talablar — baholash (D06) va kod uchun |
| QA | Qabul mezonlari — test ssenariylari uchun ([D13](D13-test-strategiyasi.md)) |
| PM | Scope va release'lar — reja va srok uchun ([D02](D02-loyiha-hayot-sikli.md), D06) |
| Support | Rollar va asosiy oqimlar — qo'llanma uchun (D15) |

- **Qachon:**
  - 1-bosqich (Boshlash): **Brief** qismi, 1–2 sahifa — 1-darvozaga.
  - 2-bosqich (Talablar): **to'liq TZ** — D05 doc review'dan o'tib, 2-darvozaga.
  - Keyin: faqat D10 (change request) orqali o'zgaradi.

**Atamalar.** *User story* — foydalanuvchi nuqtai nazaridan yozilgan talab: "kim, nima qiladi, nima uchun". *Qabul mezoni* (acceptance criteria) — story bajarilganini tekshiradigan aniq shartlar. *API kontrakti* — frontend va backend o'rtasidagi kelishuv: endpoint, so'rov va javob formati, xato kodlari. *Nofunksional talab* — tizim *qanday* ishlashi: tezlik, yuklama, xavfsizlik.

## 3. Qoidalar

1. **Bitta loyiha — bitta D03.** Talab chatda, ovozli xabarda yoki alohida faylda bo'lsa, u D03 ga tushmaguncha talab hisoblanmaydi. *Nega:* tarqoq talablarni har kim o'zicha yig'adi va farq oxirida chiqadi.
2. **Avval Brief, keyin TZ.** Brief'da faqat muammo, maqsad, muvaffaqiyat mezoni va scope chegarasi. Story'lar mijoz Brief'ni tasdiqlagandan keyin yoziladi. *Nega:* maqsad kelishilmasdan yozilgan detallar butunlay qayta yoziladi.
3. **Scope'da "kirmaydi" ro'yxati majburiy.** *Nega:* aytilmagan narsani mijoz "bo'ladi" deb, jamoa "bo'lmaydi" deb tushunadi.
4. **Har story'ning ID'si va kamida 2 ta qabul mezoni bor, ulardan biri — xato yoki chegaraviy holat.** Format: "Agar … / Qachon … / Unda …". *Nega:* dizayner xato holatini chizadi, dasturchi uni kodlaydi, QA tekshiradi — hammasi bitta matndan.
5. **Story ID boshqa joylarda ham ishlatiladi:** Jira task, Figma ekran, test ssenariysi. *Nega:* o'zgarish bo'lsa, nimalarga ta'sir qilishi bir qidiruvda topiladi.
6. **Har bir rol va ruxsat matritsada.** Rol nima ko'radi, nima qiladi, nima qila olmaydi. *Nega:* ruxsatlar odatda oxirida esga olinadi va xavfsizlik teshigi bo'ladi.
7. **Sozlanadigan xulq-atvor alohida ro'yxatda.** Admin yoqib-o'chira oladigan har bir narsa — nomi, standart qiymati, qachon kuchga kirishi. *Nega:* "qachon kuchga kiradi" yozilmasa, har dasturchi o'zicha qiladi.
8. **Nofunksional talablar raqam bilan.** "Tez ishlasin" emas, "imtihon kuni bir vaqtda N ishtirokchi, javobni saqlash 1 soniyadan oshmaydi". *Nega:* raqamsiz talabni tekshirib ham, baholab ham bo'lmaydi.
9. **Shaxsiy ma'lumot bilan ishlansa, alohida bo'lim majburiy:** qaysi ma'lumot, nima uchun, rozilik qanday olinadi va qayd etiladi, kim ko'radi, qayerda va qancha saqlanadi, qachon o'chiriladi. Himoyaning texnik qoidalari — [D14](D14-release-va-deploy.md). *Nega:* bu huquqiy majburiyat; keyin qo'shish qimmat.
10. **API kontrakti talablari D03 da, jarayoni [D11](D11-dasturchilar-qoidalari.md) da.** D03 da: qaysi ma'lumot oqimlari, asosiy endpointlar, xato holatlari va kontrakt fayli qayerda saqlanishi. 2-darvozaga qoralama, 3-darvozagacha asosiy endpointlar kelishilgan bo'ladi. *Nega:* frontend va backend bir vaqtda ishlay olishi uchun kontrakt koddan oldin turishi kerak.
11. **Ochiq savollar — egasi va muddati bilan.** Ish boshlanishini to'xtatadigan savol "bloklovchi" deb belgilanadi (D05). *Nega:* egasiz savol hech qachon yopilmaydi.
12. **Faraz yozib qo'yiladi.** Ma'lumot yo'q bo'lsa, faraz qilinadi va "faraz" deb belgilanadi. *Nega:* faraz noto'g'ri chiqsa, qaysi qism qayta ko'rilishi ko'rinadi.
13. **Versiya va tasdiq.** Har tasdiqlangan versiya raqamlanadi (v1.0, v1.1 …); mijozning yozma tasdig'i va tasdiqlangan versiya raqami Jira epic'ida turadi. Risklar D03 da emas, [D02](D02-loyiha-hayot-sikli.md) risklar reestrida. *Nega:* "qaysi versiya bo'yicha qildik" degan bahs bo'lmaydi.

**Kichik loyihada.** Shablonning hamma bo'limlari qoladi, lekin har biri qisqa bo'lishi mumkin. Dizayn brief'i (D04) alohida yozilmasa, ekranlar ro'yxatiga maket havolasi qo'shiladi.

## 4. Shablon

```markdown
# <Loyiha nomi> — TZ
Versiya: v<X.Y> · Holat: qoralama / review'da / tasdiqlangan · Egasi: <analitik>
Tasdiqlagan: <mijoz PO, sana>

## A. Brief
1. Muammo — kim, qanday qiyinchilikka duch keladi (2–4 gap)
2. Biznes maqsad
3. Muvaffaqiyat mezonlari — o'lchanadigan, raqam bilan
4. Foydalanuvchilar va rollar — qisqa
5. Scope chegarasi — kiradi / kirmaydi
6. Cheklovlar — muddat, byudjet, texnologiya, huquqiy talablar

## B. Talablar
7. Release'lar — har biriga qaysi story'lar kiradi (D02)
8. Ekranlar ro'yxati — ID, nomi, rol, maket havolasi
9. User story'lar
   US-<NN>. <rol> sifatida <harakat>, <maqsad> uchun.
   Qabul mezonlari:
   - Agar <holat>, qachon <harakat>, unda <natija>.
   - (kamida bitta xato yoki chegaraviy holat)
10. Rollar va ruxsatlar matritsasi
11. Sozlamalar — nomi, ta'siri, standart qiymati, qachon kuchga kiradi
12. Integratsiyalar — tashqi tizim, nima uchun, kim egasi
13. API kontrakti talablari — asosiy endpointlar, xato holatlari, kontrakt fayli havolasi
14. Nofunksional talablar — tezlik, yuklama, ishonchlilik, xavfsizlik, qurilma va brauzerlar
15. Shaxsiy ma'lumotlar — ma'lumot, maqsad, rozilik, kim ko'radi, saqlash joyi va muddati, o'chirish
16. Farazlar
17. Ochiq savollar — savol, egasi, muddat, bloklovchi (ha/yo'q)
18. Risklar — D02 reestriga havola
19. Versiyalar tarixi — versiya, sana, nima o'zgardi, asos (D10 change request)
```

## 5. uzedu misoli: TZ (qisqartirilgan)

Ssenariy: uzedu'ni noldan quryapmiz; quyida R1 release (asosiy test oqimi) uchun TZ'dan parchalar. Faktlar `test-uzedu-user` frontend repozitoriyidan olingan (manbalar ko'rsatilgan); backend va admin tomoni bu repoda yo'q.

### A. Brief

1. **Muammo.** Nomzodlar va o'qituvchilarning test sinovlari shaffof va nazorat ostida o'tishi kerak: test topshiruvchi aynan ro'yxatdagi odam ekani, test vaqtida begona yordam yo'qligi, natija adolatli hisoblanishi. (`README.md`)
2. **Biznes maqsad.** [TO'LDIRILSIN: mijozning o'z so'zlari bilan — masalan, qo'lda o'tkaziladigan imtihonlarni almashtirish]
3. **Muvaffaqiyat mezonlari.** [TO'LDIRILSIN: raqamlar — masalan, bir imtihon kunida o'tkaziladigan testlar soni, texnik sabab bilan to'xtatilgan testlar ulushi]
4. **Rollar.** Nazoratchi (test o'tkaziladigan joyda ishlaydi), ishtirokchi (nomzod), admin (sozlamalar va test turlari — backend tomonida). Ommaviy portal foydalanuvchisi — R3.
5. **Scope (R1).**
   - *Kiradi:* nazoratchi login'i va test turini tanlash; ishtirokchini JShShIR yoki ariza raqami bo'yicha topish; ariza va fanni tanlash; shaxsiy ma'lumotlarga rozilik; test yechish (6 ta savol turi, taymer); testni yakunlash va natija.
   - *Kirmaydi (R1 da):* Face ID va proktoring (R2), desktop agent (R2), ommaviy test portali (R3), admin panel (alohida loyiha — [TO'LDIRILSIN: admin panel kimda va qanday quriladi]).
6. **Cheklovlar.** Bitta kod bazasi bir nechta mijozga alohida build bilan yetkaziladi (`package.json`). Tarjimalar backend'da saqlanadi (`docs/translations.md`).

### B. Ekranlar ro'yxati (R1)

Manba: `docs/test-entry-flow.md`.

| ID | Ekran | Rol | Maket |
| --- | --- | --- | --- |
| E-01 | Nazoratchi login'i va test turini tanlash (`/auth/login`) | Nazoratchi | [TO'LDIRILSIN: Figma havolasi] |
| E-02 | Ishtirokchini topish (`/auth/pinfl`) | Nazoratchi | |
| E-03 | Ariza tafsilotlari, fan tanlash, rozilik (`/auth/application-details`) | Ishtirokchi | |
| E-04 | Test yechish (`/solve-test`) | Ishtirokchi | |
| E-05 | Natijalar (`/auth/participant-results`) | Ishtirokchi | |

### C. User story'lar (parcha)

Qabul mezonlari repodagi hozirgi xulq-atvordan olingan — ya'ni ular amalda ishlayotgani tasdiqlangan talablar.

**US-03. Ishtirokchi sifatida shaxsiy ma'lumotlarimdan foydalanishga rozilik beraman, testga kirish uchun.** (E-03)
- Agar rozilik belgilanmagan bo'lsa, unda «Kirish» tugmasi o'chiq.
- Agar ishtirokchi rozilik havolasini bossa, unda qaysi ma'lumotlar va qaysi maqsadda ishlatilishi ko'rsatilgan oyna ochiladi; «Roziman» rozilikni belgilaydi.
- Agar sahifa qayta ochilsa, unda rozilik qaytadan so'raladi.

**US-04. Ishtirokchi sifatida internet uzilganda vaqtim ketmasligini xohlayman, adolatli baholanish uchun.** (E-04)
- Agar internet uzilsa, unda taymer to'xtaydi va internet qaytganda davom etadi.
- Agar joriy savol fayllari hali yuklanmagan bo'lsa, unda taymer savol ko'ringuncha to'xtaydi.
- Agar savol 3 marta urinishdan keyin ham yuklanmasa, unda taymer to'xtagan holda qoladi va xato holati ko'rsatiladi.
- Agar ishtirokchi yuklangan boshqa savolga o'tsa, unda taymer darhol davom etadi.

Manba: `docs/test-timer-and-question-loader.md`.

**US-05. Ishtirokchi sifatida testni yakunlashdan oldin holatimni ko'rishni xohlayman, tasodifan erta yakunlamaslik uchun.** (E-04, E-05)
- Agar ishtirokchi «Yakunlash»ni bossa, unda yechilgan savollar foizi va qolgan vaqt ko'rsatilib, tasdiq so'raladi.
- Agar vaqt tugasa, unda test avtomatik yakunlanadi va javoblar yuboriladi.
- Agar yakunlash muvaffaqiyatli bo'lsa, unda ishtirokchi natijalar sahifasiga o'tadi.

Manba: `docs/testing.md`, 2- va 4-bo'limlar.

**US-06. Nazoratchi sifatida admin o'zgartirgan kirish sozlamasi qachon kuchga kirishini bilishni xohlayman, ishtirokchilarga to'g'ri yo'l-yo'riq berish uchun.** (E-02)
- Agar admin kirish sozlamasini o'zgartirsa, unda u keyingi ishtirokchidan (E-02 qayta ochilganda) kuchga kiradi; nazoratchi qayta login qilmaydi.
- Agar ishtirokchi oqimi allaqachon boshlangan bo'lsa, unda u eski sozlama bilan oxirigacha o'tadi.
- Test davomidagi sozlamalar test boshlanganda olinadi va test oxirigacha o'zgarmaydi.

Manba: `docs/test-entry-flow.md`, "Sozlamalar qachon yangilanadi".

### D. Rollar va ruxsatlar (parcha)

| Harakat | Nazoratchi | Ishtirokchi | Admin |
| --- | --- | --- | --- |
| Test turini tanlash | ✅ | — | — |
| Ishtirokchini JShShIR bo'yicha topish | ✅ | — | — |
| Maxfiy kodni kiritish (sozlama yoqilgan bo'lsa) | ✅ | — | — |
| Rozilik berish, test yechish, shikoyat yuborish | — | ✅ | — |
| Kirish va test sozlamalarini o'zgartirish | — | — | ✅ |

Muhim fakt: test yechish so'rovlari ham nazoratchi tokeni bilan ketadi (`docs/test-entry-flow.md`). Bu ruxsatlar bo'limida aytilishi kerak bo'lgan qaror — u xavfsizlik va sessiya xulq-atvoriga ta'sir qiladi; [D02](D02-loyiha-hayot-sikli.md) qarorlar jurnaliga ham yoziladi.

### E. Sozlamalar (parcha)

Manba: `docs/test-entry-flow.md`, "Sozlamalar xulosasi".

| Sozlama | Ta'siri | Qachon kuchga kiradi |
| --- | --- | --- |
| `requiredSecretCode` | «Kirish»dan keyin nazoratchi maxfiy kodini so'raydi | Keyingi ishtirokchidan |
| `checkFaceID` | Testdan oldin Face ID sahifasi (R2) | Keyingi ishtirokchidan |
| `inputTypes` | Ishtirokchini qaysi maydon bo'yicha topish; bo'sh bo'lsa oqim to'xtaydi | Keyingi ishtirokchidan |
| `allowCalculator`, `allowReferenceMaterials` | Test oynasida kalkulyator va ma'lumotnoma | Keyingi testdan |

Standart qiymatlari — [TO'LDIRILSIN: backend].

### F. API kontrakti talablari (parcha)

Endpoint nomlari frontend kodidan (`docs/test-entry-flow.md`); javob formati va xato kodlari backendda yozilishi kerak.

| Endpoint | Maqsad | So'rov | Javob | Xato holatlari |
| --- | --- | --- | --- | --- |
| `supervisor/login` | Nazoratchi kirishi | login, parol | `accessToken` | [TO'LDIRILSIN: backend] |
| `participant/applications` | Ishtirokchi arizalarini topish | `testType`, `computerId`, `pinfl` yoki `applicationNumber` | arizalar ro'yxati | topilmadi — [TO'LDIRILSIN: backend] |
| `testprocess/generate` | Test savollarini yaratish | `applicationId`, `computerId`, `testEventId`, `selections` | [TO'LDIRILSIN: backend] | [TO'LDIRILSIN: backend] |

Kontrakt fayli: [TO'LDIRILSIN: masalan, backend repodagi OpenAPI spetsifikatsiyasi]. Uni yuritish tartibi — [D11](D11-dasturchilar-qoidalari.md).

### G. Nofunksional talablar (parcha)

- **Yuklama:** imtihon kunlarida minglab parallel ishtirokchi bo'ladi (`docs/test-entry-flow.md`). Aniq raqam: [TO'LDIRILSIN: bir vaqtdagi maksimal ishtirokchi soni].
- **Ishonchlilik:** internet uzilishi testni buzmasligi kerak (US-04); qolgan vaqt serverga davriy yuboriladi, sahifa yangilansa vaqt yo'qolmaydi (`docs/testing.md`).
- **Tezlik:** [TO'LDIRILSIN: javobni saqlash va savolni ochish uchun maksimal vaqt].
- **Qurilmalar va brauzerlar:** [TO'LDIRILSIN].

### H. Shaxsiy ma'lumotlar (parcha)

| Ma'lumot | Maqsad | Kim ko'radi | Saqlash joyi va muddati |
| --- | --- | --- | --- |
| JShShIR, ariza raqami | Ishtirokchini aniqlash | Nazoratchi, admin | [TO'LDIRILSIN: backend] |
| Yuz tasviri (R2) | Shaxsni tasdiqlash | [TO'LDIRILSIN] | [TO'LDIRILSIN] |

**Standart bo'yicha nima qo'shilardi.** Hozir rozilik faqat ekranda so'raladi: u saqlanmaydi va backendga yuborilmaydi (`docs/test-entry-flow.md`). D03 da shu savol ochiq yozilishi kerak edi: "Rozilikni kim va qachon berganini qayd etish huquqiy jihatdan talab qilinadimi?" — egasi: mijoz yuristi, bloklovchi: ha (R2 dan oldin).

### I. Ochiq savollar (parcha)

| # | Savol | Egasi | Muddat | Bloklovchi |
| --- | --- | --- | --- | --- |
| S-01 | Rozilik qayd etilishi kerakmi (H bo'limi)? | Mijoz | 2-darvozagacha | Ha |
| S-02 | Bir vaqtdagi maksimal ishtirokchi soni qancha? | Mijoz | 2-darvozagacha | Ha (yuklama testi shunga bog'liq) |
| S-03 | Admin panel shu loyihaning scope'idami? | PM | 1-darvozagacha | Ha |

### Og'riqqa bog'liqlik

"Bitta narsa qayta-qayta qilinadi" (root doc, "Jamoadagi real og'riqlar") — US-04 kabi talab qabul mezonisiz "internet uzilsa taymer to'xtasin" deb berilsa, savol yuklanishi va xato holati keyin, alohida topshiriq sifatida qaytib keladi. Qabul mezonlari ularni birinchi topshiriqdayoq ochadi.

## 6. Checklist: D03 tayyormi

- [ ] Brief mijoz tomonidan tasdiqlangan (1-darvoza)
- [ ] Scope'da "kirmaydi" ro'yxati bor
- [ ] Har story'ning ID'si va kamida 2 ta qabul mezoni bor, biri — xato yoki chegaraviy holat
- [ ] Har ekranning ID'si va tegishli story'lari bor
- [ ] Rollar va ruxsatlar matritsasida har rol uchun ruxsat etilgan va taqiqlangan harakatlar bor
- [ ] Sozlamalar "qachon kuchga kiradi" bilan yozilgan
- [ ] Nofunksional talablarda raqamlar bor yoki ochiq savol sifatida yozilgan
- [ ] Shaxsiy ma'lumotlar bo'limi to'ldirilgan (agar tegishli bo'lsa)
- [ ] API kontrakti qoralamasi va kontrakt fayli havolasi bor
- [ ] D05 doc review'da bloklovchi savollar soni 0; qolgan savollarning egasi va muddati bor
- [ ] Versiya raqami va mijozning yozma tasdig'i Jira epic'ida

## 7. Tez-tez uchraydigan xatolar

1. **Faqat "baxtli yo'l".** Story'larda internet uzilishi, topilmagan foydalanuvchi, ruxsat yo'qligi yozilmaydi — ular release oldidan bug bo'lib chiqadi.
2. **"Va hokazo" bilan tugaydigan scope.** "Hisobotlar va h.k." — baholab ham, qabul qilib ham bo'lmaydi. Har bir narsa nomi bilan yoki "kirmaydi" ro'yxatida.
3. **TZ — bir martalik hujjat.** Tasdiqlangandan keyin o'zgarishlar chatda qoladi va D03 eskiradi. To'g'risi: har o'zgarish D10 orqali va versiyalar tarixida.
4. **Dasturchi yozadigan narsani analitik yozadi.** TZ'da jadval nomlari, kod tuzilmasi. To'g'risi: D03 "nima" va "qanday tekshiriladi" ni yozadi; "qanday quriladi" — ADR va kod ([D11](D11-dasturchilar-qoidalari.md)).
5. **Raqamsiz nofunksional talablar.** "Ko'p foydalanuvchiga chidasin" — yuklama testi nimaga qarab o'tkazilishi noma'lum.

---

Egasi: biznes analitik · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin (D17)
