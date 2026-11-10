# D03 · TZ (qisqartirilgan)

Standart: [D03 — Loyiha boshlang'ich hujjati (Brief + TZ)](../../D03-loyiha-boshlangich-hujjati.md). Misol loyiha: [Test Platformasi](index.md).

Quyida R1 release (asosiy test oqimi) uchun TZ'dan parchalar berilgan. Faktlar `test-uzedu-user` frontend repozitoriyidan olingan (manbalar ko'rsatilgan); backend va admin tomoni bu repoda yo'q.

## A. Brief

1. **Muammo.** Nomzodlar va o'qituvchilarning test sinovlari shaffof va nazorat ostida o'tishi kerak: test topshiruvchi aynan ro'yxatdagi odam ekani, test vaqtida begona yordam yo'qligi va natija adolatli hisoblanishi ta'minlanishi lozim. (`README.md`)
2. **Biznes maqsad.** [TO'LDIRILSIN: mijozning o'z so'zlari bilan — masalan, qo'lda o'tkaziladigan imtihonlarni almashtirish]
3. **Muvaffaqiyat mezonlari.** [TO'LDIRILSIN: raqamlar — masalan, bir imtihon kunida o'tkaziladigan testlar soni, texnik sabab bilan to'xtatilgan testlar ulushi]
4. **Rollar.** Nazoratchi (test o'tkaziladigan joyda ishlaydi), ishtirokchi (nomzod), admin (sozlamalar va test turlari, backend tomonida). Ommaviy portal foydalanuvchisi R3 ga kiradi.
5. **Scope (R1).**
   - *Kiradi:* nazoratchi login'i va test turini tanlash; ishtirokchini JShShIR yoki ariza raqami bo'yicha topish; ariza va fanni tanlash; shaxsiy ma'lumotlarga rozilik; test yechish (6 ta savol turi, taymer); testni yakunlash va natija.
   - *Kirmaydi (R1 da):* Face ID va proktoring (R2), desktop agent (R2), ommaviy test portali (R3), admin panel (alohida loyiha — [TO'LDIRILSIN: admin panel kimda va qanday quriladi]).
6. **Cheklovlar.** Bitta kod bazasi bir nechta mijozga alohida build bilan yetkaziladi (`package.json`). Tarjimalar backend'da saqlanadi (`docs/translations.md`).

## B. Ekranlar ro'yxati (R1)

Manba: `docs/test-entry-flow.md`.

| ID | Ekran | Rol | Maket |
| --- | --- | --- | --- |
| E-01 | Nazoratchi login'i va test turini tanlash (`/auth/login`) | Nazoratchi | [TO'LDIRILSIN: Figma havolasi] |
| E-02 | Ishtirokchini topish (`/auth/pinfl`) | Nazoratchi | |
| E-03 | Ariza tafsilotlari, fan tanlash, rozilik (`/auth/application-details`) | Ishtirokchi | |
| E-04 | Test yechish (`/solve-test`) | Ishtirokchi | |
| E-05 | Natijalar (`/auth/participant-results`) | Ishtirokchi | |

## C. User story'lar (parcha)

Qabul mezonlari repodagi hozirgi xulq-atvordan olingan, ya'ni ular amalda ishlayotgani tasdiqlangan talablardir.

**US-03. Ishtirokchi sifatida shaxsiy ma'lumotlarimdan foydalanishga rozilik beraman, testga kirish uchun.** (E-03)
- Agar rozilik belgilanmagan bo'lsa, unda «Kirish» tugmasi o'chiq turadi.
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

## D. Rollar va ruxsatlar (parcha)

| Harakat | Nazoratchi | Ishtirokchi | Admin |
| --- | --- | --- | --- |
| Test turini tanlash | ✅ | — | — |
| Ishtirokchini JShShIR bo'yicha topish | ✅ | — | — |
| Maxfiy kodni kiritish (sozlama yoqilgan bo'lsa) | ✅ | — | — |
| Rozilik berish, test yechish, shikoyat yuborish | — | ✅ | — |
| Kirish va test sozlamalarini o'zgartirish | — | — | ✅ |

Muhim fakt: test yechish so'rovlari ham nazoratchi tokeni bilan yuboriladi (`docs/test-entry-flow.md`). Bu ruxsatlar bo'limida aytilishi kerak bo'lgan qaror, chunki u xavfsizlik va sessiya xulq-atvoriga ta'sir qiladi; [qarorlar jurnaliga](D02-loyiha-rejasi.md) ham yoziladi.

## E. Sozlamalar (parcha)

Manba: `docs/test-entry-flow.md`, "Sozlamalar xulosasi".

| Sozlama | Ta'siri | Qachon kuchga kiradi |
| --- | --- | --- |
| `requiredSecretCode` | «Kirish»dan keyin nazoratchi maxfiy kodini so'raydi | Keyingi ishtirokchidan |
| `checkFaceID` | Testdan oldin Face ID sahifasi (R2) | Keyingi ishtirokchidan |
| `inputTypes` | Ishtirokchini qaysi maydon bo'yicha topish; bo'sh bo'lsa oqim to'xtaydi | Keyingi ishtirokchidan |
| `allowCalculator`, `allowReferenceMaterials` | Test oynasida kalkulyator va ma'lumotnoma | Keyingi testdan |

Standart qiymatlari: [TO'LDIRILSIN: backend].

## F. API kontrakti talablari (parcha)

Endpoint nomlari frontend kodidan olingan (`docs/test-entry-flow.md`); javob formati va xato kodlarini backend tomoni yozishi kerak.

| Endpoint | Maqsad | So'rov | Javob | Xato holatlari |
| --- | --- | --- | --- | --- |
| `supervisor/login` | Nazoratchi kirishi | login, parol | `accessToken` | [TO'LDIRILSIN: backend] |
| `participant/applications` | Ishtirokchi arizalarini topish | `testType`, `computerId`, `pinfl` yoki `applicationNumber` | arizalar ro'yxati | topilmadi: [TO'LDIRILSIN: backend] |
| `testprocess/generate` | Test savollarini yaratish | `applicationId`, `computerId`, `testEventId`, `selections` | [TO'LDIRILSIN: backend] | [TO'LDIRILSIN: backend] |

Kontrakt fayli: [TO'LDIRILSIN: masalan, backend repodagi OpenAPI spetsifikatsiyasi]. Uni yuritish tartibi [D11](../../D11-dasturchilar-qoidalari.md) da yozilgan.

## G. Nofunksional talablar (parcha)

- **Yuklama:** imtihon kunlarida minglab parallel ishtirokchi bo'ladi (`docs/test-entry-flow.md`). Aniq raqam: [TO'LDIRILSIN: bir vaqtdagi maksimal ishtirokchi soni].
- **Ishonchlilik:** internet uzilishi testni buzmasligi kerak (US-04); qolgan vaqt serverga davriy yuboriladi, sahifa yangilansa vaqt yo'qolmaydi (`docs/testing.md`).
- **Tezlik:** [TO'LDIRILSIN: javobni saqlash va savolni ochish uchun maksimal vaqt].
- **Qurilmalar va brauzerlar:** [TO'LDIRILSIN].

## H. Shaxsiy ma'lumotlar (parcha)

| Ma'lumot | Maqsad | Kim ko'radi | Saqlash joyi va muddati |
| --- | --- | --- | --- |
| JShShIR, ariza raqami | Ishtirokchini aniqlash | Nazoratchi, admin | [TO'LDIRILSIN: backend] |
| Yuz tasviri (R2) | Shaxsni tasdiqlash | [TO'LDIRILSIN] | [TO'LDIRILSIN] |

**Standart bo'yicha nima qo'shilardi.** Hozir rozilik faqat ekranda so'raladi: u saqlanmaydi va backendga yuborilmaydi (`docs/test-entry-flow.md`). TZ'da shu savol ochiq yozilishi kerak edi (I bo'limidagi S-01): "Rozilikni kim va qachon berganini qayd etish huquqiy jihatdan talab qilinadimi?" Savolning egasi mijoz yuristi, u bloklovchi (R2 dan oldin yopilishi kerak).

## I. Ochiq savollar (parcha)

| # | Savol | Egasi | Muddat | Bloklovchi |
| --- | --- | --- | --- | --- |
| S-01 | Rozilik qayd etilishi kerakmi (H bo'limi)? | Mijoz | 2-darvozagacha | Ha |
| S-02 | Bir vaqtdagi maksimal ishtirokchi soni qancha? | Mijoz | 2-darvozagacha | Ha (yuklama testi shunga bog'liq) |
| S-03 | Admin panel shu loyihaning scope'idami? | PM | 1-darvozagacha | Ha |

## Og'riqqa bog'liqlik

Bu misol "Bitta narsa qayta-qayta qilinadi" og'rig'iga bog'liq (root doc, "Jamoadagi real og'riqlar"). US-04 kabi talab qabul mezonisiz, faqat "internet uzilsa taymer to'xtasin" deb berilsa, savol yuklanishi va xato holati keyinroq alohida topshiriq sifatida qaytib keladi. Qabul mezonlari esa ularni birinchi topshiriqdayoq ochib beradi.

---

Egasi: biznes analitik · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: standartdagi [D03](../../D03-loyiha-boshlangich-hujjati.md) o'zgarganda
