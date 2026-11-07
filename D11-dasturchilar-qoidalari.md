# D11 — Dasturchilar qoidalari va code review

## 1. Maqsad

Kod bir xil uslubda yozilsin, kamida bitta boshqa odam tomonidan tekshirilsin va asosiy branchga faqat ishlaydigan, xavfsiz holda tushsin. Muhim texnik qarorlar sababi bilan yozilib, "nega unday qilgandik?" savoliga javob kodning yonida tursin.

## 2. Kim uchun va qachon

- **Egasi:** tech lead. Kichik jamoada tech lead alohida bo'lmasa, bu rol D01 da biriktiriladi.
- **Kim ishlatadi:** barcha dasturchilar (frontend, backend, mobile) — har kuni. Reviewer — har merge request'da.
- **Qachon:**
  - 4-bosqichda (Planlash) repozitoriy, branchlar, formatter, linter va MR shabloni sozlanadi.
  - 5-bosqichda (Ishlab chiqish) har task shu qoidalar bo'yicha bajariladi.

**Atamalar.**
- *MR* (merge request; GitHub'da — PR, pull request) — branchdagi o'zgarishni asosiy branchga qo'shish so'rovi; review shu yerda bo'ladi.
- *Code review* — kodni muallifdan boshqa odam o'qib tekshirishi.
- *Linter* — kod xatolari va uslub qoidalarini avtomatik tekshiruvchi vosita.
- *Formatter* — kodni bir xil ko'rinishga avtomatik keltiruvchi vosita.
- *ADR* (architecture decision record) — muhim texnik qarorning qisqa yozuvi: kontekst, qaror, rad etilgan variantlar.
- *Pipeline* — CI'da har push'da ishlaydigan avtomatik qadamlar (build, test).

## 3. Qoidalar

### A. Branchlar

1. **Doimiy branchlar faqat ikkita:**
   - `main` — prod'dagi kod;
   - `dev` — staging'dagi, keyingi release'ga yig'ilayotgan kod.

   Mijozlar yoki versiyalar orasidagi farq branch bilan emas, konfiguratsiya bilan qilinadi. *Nega:* har qo'shimcha doimiy branch tuzatishni bir necha joyga ko'chirishni talab qiladi va ular tez orada ajralib ketadi.
2. **Har task uchun `dev` dan vaqtinchalik branch ochiladi:** `<tur>/<JIRA-KEY>-qisqa-tavsif`, masalan `feat/UZ-123-test-timer-pause`. Turlari: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`. Branch merge qilingach o'chiriladi. *Nega:* branch nomidan task topiladi; o'lik branchlar yig'ilmaydi.
3. **`dev` va `main` himoyalangan (protected).** Ularga to'g'ridan-to'g'ri push qilinmaydi, faqat MR orqali. `dev` → `main` merge faqat release jarayonida ([D14](D14-release-va-deploy.md)). *Nega:* review va testsiz kod asosiy branchga tushadigan yagona yo'l — to'g'ridan-to'g'ri push.

### B. Commitlar

4. **Format — Conventional Commits:** `<tur>(<scope>): <nima qilindi>`. Masalan, `fix(application-details): show EXE error when proctor start fails`. Commit xabarlari tili jamoada bitta bo'ladi. *Nega:* tarixni o'qish va release notes yig'ish oson ([D14](D14-release-va-deploy.md)).
5. **Bitta commit — bitta mantiqiy o'zgarish.** Ilova tuzatishi va test o'zgarishi, refaktoring va yangi funksiya alohida commitda. *Nega:* xato commitni orqaga qaytarish boshqa o'zgarishni buzmaydi; review'da nima nima uchun o'zgargani ko'rinadi.

### C. Merge request

6. **MR kichik bo'ladi:** bitta task, iloji boricha 400 qatordan kam o'zgarish (avtomatik yaratilgan fayllar hisobga olinmaydi). Katta ish bir nechta MR'ga bo'linadi. *Nega:* katta MR yuzaki review qilinadi — xatolar o'tib ketadi.
7. **MR shablon bo'yicha to'ldiriladi** (4.1-bo'lim): task havolasi, nima va nega o'zgardi, qanday tekshirildi. Muallif review so'rashdan oldin o'z diff'ini bir marta o'qib chiqadi. *Nega:* reviewer kontekstni qidirishga vaqt sarflamaydi; aniq xatolarni muallifning o'zi topadi.
8. **Ish tugamagan bo'lsa — Draft MR.** Erta fikr kerak bo'lsa, Draft holatida ochiladi; review faqat Draft olib tashlangach boshlanadi. *Nega:* noto'g'ri yo'nalish 3 kun emas, yarim kun ichida aniqlanadi.

### D. Code review

9. **Har MR'ni muallifdan boshqa kamida 1 kishi tasdiqlaydi.** Yo'nalishda bitta mutaxassis bo'lsa (masalan, bitta frontendchi), review'ni boshqa yo'nalish dasturchisi yoki tech lead qiladi: checklistning mantiq, xavfsizlik va test qismlari uchun bu yetarli. *Nega:* ikkinchi ko'z xatoni topadi; qolaversa kodni ikkinchi odam ham biladi ("bus factor", D07).
10. **Review muddati — 1 ish kuni.** Review navbati yangi taskdan ustun ([D08](D08-kanban-dor-dod.md) WIP limiti). *Nega:* kutayotgan MR — tugamagan ish; muallif boshqa ishga o'tib, kontekstni yo'qotadi.
11. **Reviewer checklist (4.2) bo'yicha tekshiradi va izohga belgi qo'yadi:**
    - `[bloklovchi]` — tuzatilmaguncha merge yo'q;
    - `[taklif]` — muallif qaror qiladi;
    - `[savol]` — tushuntirish kerak.

    *Nega:* muallif nimani albatta tuzatishi kerakligini biladi; uslub bo'yicha bahslar merge'ni to'xtatmaydi.
12. **Muallif har izohga javob beradi** — tuzatadi yoki sababini yozadi. Izohni uni yozgan odam yopadi (resolve). Bahs 2 aylanishdan oshsa, og'zaki hal qilinadi va natija MR'ga yoziladi. *Nega:* yozishmada cho'zilgan bahs — "muhokamalar cho'zilib ketadi" og'rig'ining kod versiyasi.
13. **Uslub haqida izoh yozilmaydi.** Formatter va linter qila oladigan narsani odam tekshirmaydi. *Nega:* review vaqti mantiq va xavfsizlikka ketishi kerak.

### E. Merge sharti

14. **Merge faqat quyidagilar bajarilganda:**
    - [D08](D08-kanban-dor-dod.md) dagi DoD bajarilgan;
    - pipeline yashil;
    - kamida 1 tasdiq bor;
    - ochiq `[bloklovchi]` izoh yo'q.

    Qizil pipeline bilan merge GitLab sozlamasida taqiqlanadi. *Nega:* qoida odamning intizomiga emas, tizimga bog'lanadi.

### F. Kod uslubi va avtomatik tekshiruvlar

15. **Har repozitoriyda formatter, linter va qat'iy tip tekshiruvi bor.** Ular pipeline'da ishlaydi; qo'shimcha ravishda lokal git hook'da ham ishlashi mumkin. Lekin hook tekshiruv emas, faqat qulaylik: hook'ni `--no-verify` bilan chetlab o'tsa bo'ladi. *Nega:* lokal hook'ni chetlab o'tish mumkin, pipeline'ni esa yo'q.
16. **Kod izohlari jamoaning bitta tilida** yoziladi: "nima" emas, "nega" tushuntiriladi. *Nega:* "nima"ni kodning o'zi aytadi; "nega" yo'qolsa, keyingi dasturchi himoya kodini ortiqcha deb o'chiradi.

### G. FE–BE API kontrakti

17. **Kontrakt koddan oldin.** Endpoint, so'rov va javob formati, xato kodlari bitta kontrakt faylida (masalan, OpenAPI) yoziladi. Fayl backend repozitoriysida turadi; egasi — backend. Talablar [D03](D03-loyiha-boshlangich-hujjati.md) da, kelishuv muddati — 3-darvozagacha ([D02](D02-loyiha-hayot-sikli.md)). *Nega:* frontend va backend bir vaqtda ishlay oladi, integratsiya oxirida "kutilmagan" bo'lmaydi.
18. **Frontend mock'lari kontraktdan olinadi.** Backend tayyor bo'lmasa, frontend kontrakt bo'yicha mock bilan ishlaydi va testlaydi. *Nega:* bog'liqlik taskni bloklamaydi ([D08](D08-kanban-dor-dod.md) DoR).
19. **Kontrakt o'zgarishi e'lon qilinadi.** Mavjud maydonni o'chiradigan yoki ma'nosini o'zgartiradigan o'zgarish (breaking change) faqat ikkala tomon kelishgandan keyin merge qilinadi. Bunday o'zgarish kontrakt versiyasida va MR tavsifida belgilanadi. *Nega:* backend'dagi "kichik" o'zgarish prod'da frontend'ni jimgina buzadi.

### H. Maxfiy ma'lumotlar

20. **Kalit, parol, token repozitoriyga tushmaydi** — na kodda, na konfiguratsiyada, na tarixda. Ular CI o'zgaruvchilarida (masked, protected) turadi; repoda faqat namuna fayl bo'ladi (`.env.example`). *Nega:* repoga kirish huquqi bor har kim — va repo nusxasini olgan har kim — kalitni ham oladi.
21. **Kalit sizib chiqsa, u darhol almashtiriladi.** Faqat git tarixidan o'chirish yetarli emas. Holat [D02](D02-loyiha-hayot-sikli.md) qarorlar jurnaliga yoziladi. *Nega:* tarixdan o'chirilgan kalitning nusxalari allaqachon boshqa joyda bo'lishi mumkin.
22. **Shaxsiy ma'lumotlar (JShShIR, yuz tasviri) logga, xato xabariga va test fixture'lariga real holda tushmaydi.** Talablar [D03](D03-loyiha-boshlangich-hujjati.md) da, muhitlar bo'yicha qoidalar [D14](D14-release-va-deploy.md) da. *Nega:* log va fixture'lar himoyalanmagan joylarga ko'chadi.

### I. Texnik qarz va qarorlar

23. **Texnik qarz Jira'da `tech-debt` labeli bilan qayd etiladi.** Kodda `TODO` faqat task kaliti bilan yoziladi (`// TODO(UZ-456): ...`). *Nega:* kalitsiz TODO hech qachon rejaga kirmaydi.
24. **ADR qachon yoziladi:** qaror bir nechta modulga ta'sir qilsa, uni o'zgartirish qimmat bo'lsa yoki jiddiy muqobil variantlar ko'rilgan bo'lsa. Masalan: kutubxona yoki framework tanlash, ma'lumot saqlash usuli, autentifikatsiya, integratsiya usuli. ADR repoda `docs/adr/NNNN-qisqa-nom.md` faylida turadi; [D02](D02-loyiha-hayot-sikli.md) qarorlar jurnaliga unga havola qo'yiladi. *Nega:* bir yildan keyin "nega unday qilgandik?" savoliga javob kod yonida bo'ladi.
25. **Repozitoriy hujjatlari kod bilan birga yangilanadi.** Har repoda: `README` (qanday ishga tushirish), ish qoidalari fayli (`AGENTS.md` yoki `CLAUDE.md`) va murakkab qismlar uchun `docs/`. Oqim yoki arxitektura o'zgarsa, hujjat shu MR'da yangilanadi. *Nega:* alohida "keyin yozamiz" — hech qachon yozilmaydi.

**Kichik loyihada.** Hammasi majburiy (D11 — yadro doc). Faqat review'ni boshqa yo'nalish dasturchisi qilishi mumkin (9-qoida), ADR esa haqiqatan katta qarorlar uchun yoziladi.

## 4. Shablonlar

### 4.1. MR shabloni

GitLab'da `.gitlab/merge_request_templates/Default.md` faylida turadi va har yangi MR'da avtomatik chiqadi.

```markdown
## Task
<Jira havolasi> · Story: US-<NN>

## Nima o'zgardi va nega
- …

## Qanday tekshirildi
- [ ] Unit testlar qo'shildi/yangilandi
- [ ] Qo'lda tekshirilgan holatlar: …
- [ ] Skrinshot yoki video (UI o'zgargan bo'lsa)

## Reviewer uchun
- E'tibor berish kerak bo'lgan joy: …
- Kontrakt o'zgarishi: yo'q / bor (breaking: ha/yo'q)
- Yangi sozlama, migratsiya yoki tarjima kaliti: yo'q / bor
```

### 4.2. Code review checklist

- [ ] **Mantiq:** qabul mezonlari bajariladi; xato va chegaraviy holatlar (bo'sh ro'yxat, tarmoq xatosi, takroriy bosish) ko'rilgan
- [ ] **Nomlash va tuzilma:** nomlar ma'noni aytadi; kod mavjud tuzilma va uslubga mos; takrorlanish yo'q
- [ ] **Xatolar:** xato yutib yuborilmaydi; foydalanuvchiga tushunarli xabar chiqadi; loglarda maxfiy yoki shaxsiy ma'lumot yo'q
- [ ] **Xavfsizlik:** ruxsatlar [D03](D03-loyiha-boshlangich-hujjati.md) matritsasiga mos; kiruvchi ma'lumot tekshiriladi; maxfiy kalit kodda yo'q
- [ ] **Testlar:** biznes logikaga unit test bor va u haqiqatan xatoni ushlaydi ([D13](D13-test-strategiyasi.md))
- [ ] **Performance:** keraksiz so'rovlar, sikl ichida so'rov, katta ro'yxatni to'liq yuklash yo'q
- [ ] **Kontrakt:** API o'zgarishi kontraktda aks etgan
- [ ] **Hujjat:** oqim o'zgargan bo'lsa — `docs/` yangilangan; ADR kerakmi?

### 4.3. ADR shabloni

```markdown
# ADR-<NNNN>: <qaror qisqacha>
Sana: <YYYY-MM-DD> · Holat: taklif / qabul qilingan / almashtirilgan (→ ADR-<NNNN>)
Muallif: <ism> · Tasdiqlagan: <tech lead>

## Kontekst
Qanday muammo yoki talab qaror qabul qilishni talab qildi.

## Qaror
Nima tanlandi.

## Ko'rib chiqilgan variantlar
| Variant | Nega tanlanmadi |
| --- | --- |

## Oqibatlari
Nima osonlashadi, nima qiyinlashadi, nimani kuzatish kerak.
```

## 5. uzedu misoli

Ssenariy: uzedu'ni noldan quryapmiz. Frontend misollari real repozitoriydan (`test-uzedu-user`). Backend: `[TO'LDIRILSIN: backend]` — backend dasturchilari o'z repolari bo'yicha shu bo'limni to'ldiradi.

### 5.1. Real frontend repo standart bilan solishtirganda

| Qoida | Real repoda | Standart bo'yicha nima qo'shilardi |
| --- | --- | --- |
| Doimiy branchlar: `main`, `dev` | `main` → prod, `dev` → staging (`.gitlab-ci.yml`). Lekin boshqa uzoq yashaydigan branchlar ham bor: `master`, `olympiad`, `feat/camera-check` | Ortiqcha doimiy branchlarni yopish; mijozga xos farqlarni konfiguratsiyaga ko'chirish. [TO'LDIRILSIN: `master` va `olympiad` nima uchun turibdi] |
| Himoyalangan branchlar | [TO'LDIRILSIN: GitLab sozlamasi] | `dev` va `main` ga faqat MR orqali |
| Conventional Commits | Ko'p commitlar formatga mos, masalan `feat(auth): refresh entering test settings on pinfl page` | Formatni commit hook bilan tekshirish (ixtiyoriy) |
| Bitta commit — bitta o'zgarish | Ish qoidasi yozilgan: ilova tuzatishi va test o'zgarishi alohida commitda (`CLAUDE.md`). Masalan, `6dabeb6 feat(auth): …` va `046eb51 test: cover entering settings refresh …`. Lekin eski commitlar orasida ikki xil o'zgarish bitta xabarga yozilgani ham bor (`0ad2dcb fix(camera): … fix(logs): …`) | Qoida yozilgan — endi uni review'da tekshirish |
| MR shabloni | Yo'q (`.gitlab/` papkasi yo'q) | `.gitlab/merge_request_templates/Default.md` (4.1) |
| Formatter | Prettier, `printWidth: 100`, `singleQuote` (`package.json`) | Pipeline'da `prettier --check` |
| Linter | Yo'q (`package.json` da ESLint yo'q) | `angular-eslint` qo'shish va pipeline'da ishlatish |
| Qat'iy tiplar | `strict`, `strictTemplates` va boshqalar yoqilgan (`tsconfig.json`) | — (mos) |
| Testlar merge'dan oldin | Faqat lokal `pre-push` hook'da (`.husky/pre-push`); GitLab CI'da test bosqichi yo'q | Pipeline'ga type-check, lint, unit testlar; qizil pipeline bilan merge taqiqi ([D13](D13-test-strategiyasi.md), [D14](D14-release-va-deploy.md)) |
| Maxfiy kalitlar | CI'da o'zgaruvchilar orqali (`$HARBOR_PASSWORD`, `$GITOPS_TOKEN_EDUHR`, `.gitlab-ci.yml`) | — (mos); masked/protected ekanini tekshirish |
| Repo hujjatlari | `README.md`, `CLAUDE.md` ish qoidalari, `docs/` — oqimlar, arxitektura, testlar | — (namuna sifatida) |
| ADR | Alohida ADR yo'q, lekin `docs/test-entry-flow.md` da qaror va "Ko'rib chiqilib, rad etilgan variantlar" jadvali bor — mazmunan ADR | Shunday bo'limlarni `docs/adr/` formatiga keltirish (5.4) |

### 5.2. To'ldirilgan MR (namunaviy)

```markdown
## Task
UZ-123 · Story: US-04

## Nima o'zgardi va nega
- Taymer pauzasi bitta flag emas, sabablar to'plami: offline, savol yuklanmoqda,
  savol xatosi. Bir vaqtda ikki sabab bo'lsa, biri yo'qolganda taymer
  noto'g'ri davom etmasligi uchun.
- Qolgan vaqt serverga faqat taymer yurganda yuboriladi.

## Qanday tekshirildi
- [x] Unit testlar: har bir sabab alohida va ikkitasi bir vaqtda
- [x] Qo'lda: DevTools'da offline; savol fayli so'rovini bloklash
- [x] Video ilova qilindi

## Reviewer uchun
- E'tibor: `pauseReasons` bo'shaganda taymer qayta ishga tushishi
- Kontrakt o'zgarishi: yo'q
- Yangi sozlama, migratsiya yoki tarjima kaliti: xato holati uchun 1 ta tarjima kaliti
```

Yechim real repodagi `TestTimerService` dan olingan (`docs/test-timer-and-question-loader.md`).

### 5.3. Review izohlari (namunaviy)

- `[bloklovchi]` `resume('offline')` dan keyin `question-error` sababi qolgan bo'lsa ham taymer yuradimi? Shu holatga test kerak.
- `[taklif]` Sabab nomlarini string emas, `type PauseReason = 'offline' | …` qilsak, xato yozilgan nom kompilyatsiyada ushlanadi.
- `[savol]` 3 marta urinish soni sozlamadan olinadimi yoki kodda qat'iymi? [D03](D03-loyiha-boshlangich-hujjati.md) da yozilmagan.

Uchinchi izoh [D03](D03-loyiha-boshlangich-hujjati.md) dagi bo'shliqni topdi: javob [D03](D03-loyiha-boshlangich-hujjati.md) ga qo'shiladi, review'da yo'qolib ketmaydi.

### 5.4. ADR (real qarordan)

`docs/test-entry-flow.md` dagi qaror ADR formatida:

```markdown
# ADR-0001: Kirish sozlamalari har ishtirokchi oqimi boshida olinadi
Holat: qabul qilingan

## Kontekst
Admin kirish sozlamalarini (EXE, maxfiy kod, Face ID, kirish maydonlari) backend'da
o'zgartiradi. Nazoratchi kun bo'yi bir login bilan ishlaydi.

## Qaror
Sozlamalar login'da va har safar `/auth/pinfl` ochilganda olinadi — bu har bir
ishtirokchi oqimining boshi. Bitta ishtirokchining butun oqimi bir xil sozlama
bilan o'tadi.

## Ko'rib chiqilgan variantlar
| Variant | Nega tanlanmadi |
| --- | --- |
| Faqat login'da olish | O'zgarish qayta login qilinmaguncha (soatlab) ko'rinmaydi |
| Har nazoratchi sahifasida olish | Ishtirokchi boshiga 3–4 so'rov; oqim o'rtasida sozlama o'zgarib qolishi mumkin |
| Sozlama o'zgarsa tokenni bekor qilish | Test yechayotgan barcha ishtirokchilar test o'rtasida chiqarib yuboriladi |

## Oqibatlari
O'zgarish keyingi ishtirokchidan kuchga kiradi; joriy ishtirokchi eski sozlama bilan tugatadi.
```

### Og'riqqa bog'liqlik

- "Nega unday qilgandik?" → ADR (24-qoida). 5.4 dagi yozuv bo'lmasa, keyingi dasturchi "sozlamani bir marta login'da olsak bo'lardi-ku" deb rad etilgan variantga qaytadi.
- "Muhokamalar cho'zilib ketadi" → izoh belgilari va 2 aylanish chegarasi (11–12-qoidalar).

## 6. Checklist: repozitoriy va jarayon standartga mosmi

Tech lead loyiha boshida va har release oldidan tekshiradi:

- [ ] Doimiy branchlar faqat `main` va `dev`; ikkalasi himoyalangan
- [ ] MR shabloni repoda bor
- [ ] Pipeline'da: formatter tekshiruvi, linter, tip tekshiruvi, unit testlar
- [ ] Qizil pipeline bilan merge GitLab sozlamasida taqiqlangan; kamida 1 tasdiq talab qilinadi
- [ ] Repoda maxfiy kalit yo'q; CI o'zgaruvchilari masked/protected
- [ ] API kontrakti fayli bor va frontend unga havola qiladi
- [ ] `README`, ish qoidalari fayli va `docs/` dolzarb
- [ ] So'nggi 10 ta MR'dan: har biri shablon bo'yicha, 1 ish kunida review qilingan, kamida 1 tasdiqli (o'rtacha review vaqti va MR hajmi D17 retroda ko'riladi)

## 7. Tez-tez uchraydigan xatolar

1. **"Tez bo'lsin" deb review'siz merge.** Ayniqsa release oldidan. Aynan shu MR'lar prod bug'ga aylanadi. To'g'risi: shoshilinch bo'lsa ham kamida 1 tasdiq; review'ni tezlashtirish — MR'ni kichraytirish orqali.
2. **2000 qatorli MR.** Reviewer "LGTM" yozadi, chunki o'qib bo'lmaydi. To'g'risi: task bo'linadi, Draft MR bilan erta fikr olinadi.
3. **Testlar faqat lokal hook'da.** `--no-verify` bilan bir marta chetlab o'tilsa, qizil kod `main` da. To'g'risi: pipeline — asosiy tekshiruv, hook — faqat qulaylik.
4. **Kontrakt og'zaki.** "Javobda `id` keladi" — Telegram'da. To'g'risi: kontrakt faylida, o'zgarishi MR orqali.
5. **Qaror faqat MR izohida.** Muhim qaror review muhokamasida qabul qilinib, MR yopilgach yo'qoladi. To'g'risi: ADR va [D02](D02-loyiha-hayot-sikli.md) jurnaliga havola.

---

Egasi: tech lead · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin (D17)
